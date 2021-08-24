function pronounAPI(endpoint) {
  return fetch(`https://pronouns.alejo.io/api/${endpoint}`).then(response=>response.json());
}

const getUserPronouns = (function(){
  const pronounCache = {};
	const maxCacheAge = 300000; // same as used in the pronoun extension ffz addon version
  const pronounsData = pronounAPI('pronouns').then(function(pronouns) {
      // convert the result from [{name:foo,display:bar}] to {foo:bar}
      let pronounNameDisplayMap = {};
      for(let p of pronouns) {
        pronounNameDisplayMap[p.name] = p.display;
      };
      return pronounNameDisplayMap;
    });
  async function getPronounIdUncached(user) {
    const pronounInfo = await pronounAPI(`users/${user}`);
    if(pronounInfo != null && pronounInfo.length > 0) {
      return pronounInfo[0].pronoun_id;
    }
    return null;
  }
  return async function(user){
    const now = Date.now();
    let foo = 'cached ';
    if(!(user in pronounCache) || (now - pronounCache[user].time >= maxCacheAge)) {
      pronounCache[user] = {
        time: now,
        val: await getPronounIdUncached(user)
      };
      foo = 'not cached ';
    }
    return (await pronounsData)[pronounCache[user].val];
	}
})();

async function doMessagePronouns(detail, messageElem) {
  const pronouns = await getUserPronouns(detail.from);
  for(let pronounElem of messageElem.querySelectorAll('.pronouns')) {
    if(pronouns == null) pronounElem.style.display = 'none';
    else pronounElem.textContent = pronouns;
  }
}

function doMessageTwemoji(detail, messageElem) {
  twemoji.parse(messageElem, {className: 'twemoji'});
  for(let twemojiImg of messageElem.getElementsByClassName('twemoji')) {
    let wrapperElem = document.createElement('span');
    wrapperElem.classList.add('emote');
    wrapperElem.style.backgroundImage = `url("${twemojiImg.src}")`;
    twemojiImg.parentElement.replaceChild(wrapperElem, twemojiImg);
    wrapperElem.appendChild(twemojiImg);
  }
}

function doMessageMecommandFlags(detail, messageElem) {
  if(detail.body.startsWith('\u0001ACTION')) {
    messageElem.classList.add('me_command');
  }
}

function doClearChat(detail) {
  if(detail.messageId === undefined && detail.body === undefined) { // global chat clear
    const chatElem = document.getElementById('log'); // TODO refactor config application code so we can use the chatLogElem we grab there for this too
  	// https://stackoverflow.com/a/3955238/8762161
  	// clear all child elements while preserving text nodes and comments
  	while(chatElem.lastElementChild != null) chatElem.removeChild(chatElem.lastElementChild);
  }
}

function doMessageUnlocalizedName(detail, messageElem){
  if(detail.tags['display-name'] !== detail.from) {
    // messageElem.style.backgroundColor = 'red';
    const nameElem = messageElem.querySelector('.name');
    const unlocalizedNameElem = document.createElement('span');
    unlocalizedNameElem.classList.add('name_unlocalized');
    nameElem.parentElement.insertBefore(unlocalizedNameElem, nameElem.nextSibling);
    unlocalizedNameElem.textContent = detail.from;
  }
}

document.addEventListener('onEventReceived', function(e){
  console.log(e);
  if(e.detail.command === 'PRIVMSG') {
    const messageElem = document.querySelector(`[data-id="${e.detail.messageId}"]`);
    console.log(messageElem.outerHTML);
    doMessageMecommandFlags(e.detail, messageElem); // controlled via style
    if({use_twemojis}) doMessageTwemoji(e.detail, messageElem);
    if({use_chat_pronouns}) doMessagePronouns(e.detail, messageElem);
    if({use_unlocalized_names}) doMessageUnlocalizedName(e.detail, messageElem);
  }
  else if(e.detail.command === 'CLEARCHAT') {
    // should this even be an option? might as well be i guess
    // should probably split it up into multiple options (global/per user/per msg) if it is configurable tho
    /*if({use_clearchat})*/ doClearChat(e.detail);
  }
});

{ // pass option flags onto css as data attrs on root log element
  const chatLogElem = document.getElementById('log');
  if({use_mecommand_italic}) chatLogElem.setAttribute('data-mecommand-italic', '');
  if({use_mecommand_colored}) chatLogElem.setAttribute('data-mecommand-colored', '');
  if({use_names_outline}) chatLogElem.setAttribute('data-names-outline', '');
}
