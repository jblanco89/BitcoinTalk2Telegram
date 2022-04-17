# BitcoinTalk2Telegram
NodeJS script that gets new post from BitcoinTalk forum and send it to Telegram Channel, group or megagroup.  

## Getting started
First, make sure get `API TOKEN` from `core.telegram.com`. <br></br>
Altenativley, you could setting new bot in `@BotFather` and then you will be provided wit a TOKEN such as: <br></br>
`500000000:TTTXDtEyy__ANNNNN1NNNNN3-lNNNNNNNNNN`.<br></br> 
Second, creat new Telegram Channel or group and get its ID. Learn more by checking this link
https://stackoverflow.com/questions/33858927/how-to-obtain-the-chat-id-of-a-private-telegram-channel
<br></br>
Third, set `API TOKEN` and channel or group's `ID` in `bot.js` in the following lines
<br></br>
finally, run `node bot.js`. 

## DEMO
if you want to see how this bot works, join `@bitcoinTalkChannel`. This is a unofficial forum channel where all new post are recieved.

## API LINK
BitcoinTalk has not official API REST where you may get posts from, Therefore, I have set Unofficial API where last 760 threads have been posted but it is not public yet. I hope set free access to it soon. 


