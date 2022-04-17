# BitcoinTalk2Telegram
NodeJS script that reads new BitcoinTalk forum posts and sends them to a Telegram channel, group, or megagroup.  

## Getting started
First, make sure you get `API TOKEN` from `core.telegram.com`. Alternatively, you could set up a new bot in `@BotFather`and then you will be provided with a TOKEN such as:<br></br> 
`500000000:TTTXDtEyy__ANNNNN1NNNNN3-lNNNNNNNNNN` <br></br> 
Second, create a new Telegram Channel or group and get its ID. Check out this [link](https://stackoverflow.com/questions/33858927/how-to-obtain-the-chat-id-of-a-private-telegram-channel) to learn more.
<br></br>
Third, set `API TOKEN` and channel or group's `ID` in `bot.js` in the following lines:
<br></br>
Finally, run `node bot.js`. 

## DEMO
if you want to see how this bot works, join `@bitcoinTalkChannel`. This is a unofficial forum channel where all new post are recieved.

## API LINK
BitcoinTalk has not official API REST where you may get posts from, Therefore, I have set Unofficial API where last 760 threads have been posted but it is not public yet. I hope set free access to it soon. 


