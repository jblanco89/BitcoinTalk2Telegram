# BitcoinTalk2Telegram
NodeJS script that reads new BitcoinTalk forum posts and sends them to a Telegram channel, group, or megagroup.  

## Getting started
First, make sure you get `API TOKEN` from `core.telegram.com`. Alternatively, you could set up a new bot in `@BotFather`and then you will be provided with a TOKEN such as:<br></br> 
`500000000:TTTXDtEyy__ANNNNN1NNNNN3-lNNNNNNNNNN` <br></br> 
Second, create a new Telegram Channel or group and get its ID. Check out this [link](https://stackoverflow.com/questions/33858927/how-to-obtain-the-chat-id-of-a-private-telegram-channel) to learn more.
<br></br>
Third, set `API TOKEN` and channel or group's `ID` in `bot.js` editing following lines:
```javascript
const api = new TG({
    token: 'YOUR TOKEN',
    updates: {
        enabled: true
}
})

const channel = -1000000000 // your channel, group or megagroup
const bitcointalk_URL = 'https://BitcoinTalk.xxxxxxxx.io';

```
Finally, run `node bot.js`. 

## Dependencies
To perform this bot, the following dependencies are required:
```javascript
  "fs": "^0.0.1-security",
  "request": "^2.88.2",
  "telegram-bot-api": "^2.0.1"
```
## DEMO
If you want to see how this bot works, join `@bitcoinTalkChannel`. This is an unofficial forum channel where all new posts are received.

## API LINK
BitcoinTalk does not have an official REST API from which to retrieve posts. As a result, I have set up an Unofficial API where the last 760 threads have been posted, but it is not public yet. I hope to set up free access to it soon. 


