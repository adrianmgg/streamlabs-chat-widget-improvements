# features
- [twitch chat pronouns](https://pronouns.alejo.io/) integration
<br/> ![image](https://user-images.githubusercontent.com/16143061/131559845-7d1e20af-8e9c-4488-8982-49a1fe9e2ebb.png)
- colorize and/or italicize /me commands
<br/> ![image](https://user-images.githubusercontent.com/16143061/131559766-eeceb0c6-f8ef-4921-96c4-bac499fdaa93.png)
- use twitter's [twemoji](https://twemoji.twitter.com/) for emojis, scaled up to be the same size as twitch emotes
<br/> before: ![image](https://user-images.githubusercontent.com/16143061/131560637-392f6646-b1aa-4224-a23d-a61bf63a0756.png)
<br/> after: ![image](https://user-images.githubusercontent.com/16143061/131560323-e069216c-71a2-4975-b59a-1021817315f6.png)
- display unlocalized names alongside localized names
- ...and more

# setup instructions
1. go to the streamlabs chat widget settings at [https://streamlabs.com/dashboard#/chatbox](https://streamlabs.com/dashboard#/chatbox)
1. enable custom HTML/CSS
<br/> ![image](https://user-images.githubusercontent.com/16143061/131264447-3fb182f1-8727-40df-8002-f9fefe8ce144.png)
1. click 'add custom fields'
<br/> ![image](https://user-images.githubusercontent.com/16143061/131265299-81b7e746-ad63-4fd7-9192-6ffdd2cf0204.png)
1. click 'edit custom fields'
<br/> ![image](https://user-images.githubusercontent.com/16143061/131265279-2d415bb8-f833-4512-8311-c0314e690142.png)
1. paste the contents of [custom_fields.json](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/custom_fields.json) into the text area, then click update 
<br/> ![image](https://user-images.githubusercontent.com/16143061/131566960-d1ce6c53-33ae-4bc5-9f05-eea0e3b040a2.png)
1. switch to the html tab, paste the contents of [html.html](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/html.html) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131566972-bea4d2b9-3348-41f8-8fbb-19b764a1e5b3.png)
1. switch to the css tab, paste the contents of [css.css](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/css.css) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131566985-437e8fc1-96ca-4f6c-868c-2be4e456d58a.png)
1. switch to the js tab, paste the contents of [js.js](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/js.js) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131566995-dca7c724-7918-4cb5-94be-0632308b971a.png)
1. click 'save settings'

# legal/attribution stuff
- [twemoji](https://twemoji.twitter.com/) is Copyright 2020 Twitter, Inc and other contributors
  - graphics are licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) 
  - code is licensed under the [MIT License](http://opensource.org/licenses/MIT)
