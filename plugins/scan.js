let WhatsAlexa = require('../main/events');
let {MessageType} = require('@adiwajshing/baileys');
let Config = require('../main/config');
let fs = require('fs');
let Language = require('../language');
let Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
  
    WhatsAlexa.addCommand({ pattern: 'scan ?(.*)', fromMe: true, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.sendReply(Lang.NO);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.sendReply('```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid);
        }
        else {
            await message.sendReply('```' + match[1] + '``` \n' + Lang.UNSUC);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
  
    WhatsAlexa.addCommand({ pattern: 'scan ?(.*)', fromMe: false, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.sendReply(Lang.NO);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.sendReply('```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid);
        }
        else {
            await message.sendReply('```' + match[1] + '``` \n' + Lang.UNSUC);
        }
    }));
}
