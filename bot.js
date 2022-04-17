const TG = require('telegram-bot-api')
const fs = require('fs')
const request = require("request");	
const api = new TG({
    token: 'YOUR TOKEN',
    updates: {
        enabled: true
}
})

const channel = -1000000000 // your channel, group or megagroup
const bitcointalk_URL = 'https://BitcoinTalk.xxxxxxxx.io';


function getIds(url){
    request.get(url, async (error, response, body) => {
        if (!error){
            let json = await JSON.parse(body);
            let ids = [];
            for (i = 4; i < json.length; i++){
                //console.log(json[i].ID)
                ids.push(json[i].ID) 
            }
            fs.writeFile('ids.json', JSON.stringify(ids), (error)=>{
                //console.log('File successfully written! - Check your project directory for the output.json file');
            })
            
        }
        
    });

}

async function sendToTelegram(json){
    const text = ('NEW FORUM POST' +'\n'+ 
    json[4].Subject + '\n' +
    ''+'\n'+
    'Be the first to leave your comment' +'\n'+
    json[4].Link + '\n'+
    ''+'\n'+
    '#BitcoinTalkForum #BitcoinDiscussion' +'\n'+ 
    'By: ' + json[4].Started_by)  
    await api.sendPhoto({
    chat_id: channel,
    photo: fs.createReadStream('./bitcoinTalk.png'),
    caption: text
    })
}


function readLastPost(url){
        request.get(url, async (error, response, body) => {
            if (!error){
                let json = await JSON.parse(body);
                let id = await json[4].ID;
                let ids = fs.readFileSync('./ids.json');
                // check id in ids
                const checkID = ids.includes(id)
                if (checkID == false){
                    await sendToTelegram(json)
                    //console.log('New post sent, check Telegram')
                    getIds(url)
                    
                }
                /*else {
                    console.log(`ID: ${id} is in the list of IDs`);
                    console.log('Non-new Post to send');
                    console.log('----------------------------------------')
                }*/
    
            }
        });
    
    }


function main(){
    readLastPost(bitcointalk_URL)    

}
main()
setInterval(main, 2*60*1000) // every 2 minutes
