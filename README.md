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
<br/> ![image](https://user-images.githubusercontent.com/16143061/131265348-bd81c3c0-31c1-4395-af03-f594b2c65bd0.png)
1. switch to the html tab, paste the contents of [html.html](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/html.html) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131557045-adac58e8-92d4-49f5-b8f7-d5c116ae9a61.png)
1. switch to the css tab, paste the contents of [css.css](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/css.css) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131557134-55731f49-9ede-44a9-b48d-17d947b31e3c.png)
1. switch to the js tab, paste the contents of [js.js](https://github.com/adrianmgg/streamlabs-chat-widget-improvements/raw/main/js.js) into the text area
<br/> ![image](https://user-images.githubusercontent.com/16143061/131557432-09be611f-3020-4afb-9cf5-0acc8d79da7b.png)
1. click 'save settings'
