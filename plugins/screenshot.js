let WhatsAlexa = require('../main/events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../main/config');
let Language = require('../language');
let Lang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    WhatsAlexa.addCommand({pattern: 'ss ?(.*)', fromMe: true, desc: Lang.SS_DESC}, (async (message, match) => {
        
    var _0x2477eb=_0x2ca8;(function(_0x567cf4,_0x915a68){var _0x2a3b86=_0x2ca8,_0x2a1a7d=_0x567cf4();while(!![]){try{var _0x1ae199=parseInt(_0x2a3b86(0x1af))/0x1+parseInt(_0x2a3b86(0x1c3))/0x2*(-parseInt(_0x2a3b86(0x1aa))/0x3)+parseInt(_0x2a3b86(0x1ad))/0x4+parseInt(_0x2a3b86(0x1ba))/0x5*(parseInt(_0x2a3b86(0x1b7))/0x6)+parseInt(_0x2a3b86(0x1bc))/0x7+-parseInt(_0x2a3b86(0x1b5))/0x8+-parseInt(_0x2a3b86(0x1a9))/0x9;if(_0x1ae199===_0x915a68)break;else _0x2a1a7d['push'](_0x2a1a7d['shift']());}catch(_0x2c24f0){_0x2a1a7d['push'](_0x2a1a7d['shift']());}}}(_0x3672,0x5bc26));if(match[0x1]==='')return await message[_0x2477eb(0x1bf)](message[_0x2477eb(0x1b9)],Lang['LİNK'],MessageType[_0x2477eb(0x1bb)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x2477eb(0x1a8),...message['jid']?{'remoteJid':_0x2477eb(0x1ae)}:{}},'message':{'imageMessage':{'url':_0x2477eb(0x1a6),'mimetype':_0x2477eb(0x1a5),'caption':_0x2477eb(0x1c0),'fileSha256':_0x2477eb(0x1b3),'fileLength':_0x2477eb(0x1a7),'height':0x438,'width':0x437,'mediaKey':_0x2477eb(0x1bd),'fileEncSha256':_0x2477eb(0x1b8),'directPath':_0x2477eb(0x1b6),'mediaKeyTimestamp':_0x2477eb(0x1b1),'jpegThumbnail':fs[_0x2477eb(0x1b0)](_0x2477eb(0x1c4))}}}});function _0x3672(){var _0x3f78b0=['1804884mZYckq','status@broadcast','342395GLAytV','readFileSync','1610993486','image','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','&output=image&full_page=true','4726856IeECLK','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','6Wtqdwf','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','jid','2344995wMbgaq','text','4191012qKCUBu','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','get','sendMessage','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','*Made\x20By\x20WhatsAlexa*','https://screenshotapi.net/api/v1/screenshot?url=','1238zngvGy','./src/image/WhatsAlexa.png','data','image/jpeg','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','28777','0@s.whatsapp.net','4948605pwRVPj','1671yJwAxJ','from','arraybuffer'];_0x3672=function(){return _0x3f78b0;};return _0x3672();}function _0x2ca8(_0x325c53,_0x4f83b3){var _0x36726e=_0x3672();return _0x2ca8=function(_0x2ca817,_0x3d3e4d){_0x2ca817=_0x2ca817-0x1a4;var _0x21409e=_0x36726e[_0x2ca817];return _0x21409e;},_0x2ca8(_0x325c53,_0x4f83b3);}var webimage=await axios[_0x2477eb(0x1be)](_0x2477eb(0x1c2)+match[0x1]+_0x2477eb(0x1b4),{'responseType':_0x2477eb(0x1ac)});await message[_0x2477eb(0x1bf)](Buffer[_0x2477eb(0x1ab)](webimage[_0x2477eb(0x1a4)]),MessageType[_0x2477eb(0x1b2)],{'mimetype':Mimetype['png'],'capion':_0x2477eb(0x1c1),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x2477eb(0x1a8),...message['jid']?{'remoteJid':_0x2477eb(0x1ae)}:{}},'message':{'imageMessage':{'url':_0x2477eb(0x1a6),'mimetype':'image/jpeg','caption':_0x2477eb(0x1c0),'fileSha256':'+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','fileLength':'28777','height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','fileEncSha256':'sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','directPath':_0x2477eb(0x1b6),'mediaKeyTimestamp':_0x2477eb(0x1b1),'jpegThumbnail':fs[_0x2477eb(0x1b0)]('./src/image/WhatsAlexa.png')}}}});

    }));
}
else if (Config.WORKTYPE == 'public') {

    WhatsAlexa.addCommand({pattern: 'ss ?(.*)', fromMe: false, desc: Lang.SS_DESC}, (async (message, match) => {

    function _0x18af(_0x249d28,_0x49a518){var _0x22de37=_0x22de();return _0x18af=function(_0x18af41,_0x61b9af){_0x18af41=_0x18af41-0xa8;var _0x33366e=_0x22de37[_0x18af41];return _0x33366e;},_0x18af(_0x249d28,_0x49a518);}var _0x1b39f8=_0x18af;(function(_0x24d0fd,_0x53e18f){var _0x3f67b8=_0x18af,_0x1ab8dc=_0x24d0fd();while(!![]){try{var _0x24a914=parseInt(_0x3f67b8(0xaa))/0x1*(parseInt(_0x3f67b8(0xbd))/0x2)+parseInt(_0x3f67b8(0xb1))/0x3*(parseInt(_0x3f67b8(0xb8))/0x4)+parseInt(_0x3f67b8(0xc4))/0x5+parseInt(_0x3f67b8(0xae))/0x6+-parseInt(_0x3f67b8(0xaf))/0x7+-parseInt(_0x3f67b8(0xb0))/0x8*(parseInt(_0x3f67b8(0xc3))/0x9)+-parseInt(_0x3f67b8(0xc0))/0xa;if(_0x24a914===_0x53e18f)break;else _0x1ab8dc['push'](_0x1ab8dc['shift']());}catch(_0x3d5209){_0x1ab8dc['push'](_0x1ab8dc['shift']());}}}(_0x22de,0x6ab85));if(match[0x1]==='')return await message[_0x1b39f8(0xbb)](message[_0x1b39f8(0xc6)],Lang['LİNK'],MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x1b39f8(0xc5),...message[_0x1b39f8(0xc6)]?{'remoteJid':_0x1b39f8(0xac)}:{}},'message':{'imageMessage':{'url':_0x1b39f8(0xb4),'mimetype':_0x1b39f8(0xc1),'caption':'▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','fileSha256':'+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','fileLength':_0x1b39f8(0xbc),'height':0x438,'width':0x437,'mediaKey':_0x1b39f8(0xb5),'fileEncSha256':_0x1b39f8(0xa9),'directPath':_0x1b39f8(0xb2),'mediaKeyTimestamp':'1610993486','jpegThumbnail':fs['readFileSync'](_0x1b39f8(0xb9))}}}});var webimage=await axios[_0x1b39f8(0xad)]('https://screenshotapi.net/api/v1/screenshot?url='+match[0x1]+_0x1b39f8(0xb6),{'responseType':'arraybuffer'});function _0x22de(){var _0x5b3111=['0@s.whatsapp.net','jid','▣\x20𝗣𝗼𝘄𝗲𝗿𝗲𝗱\x20𝗯𝘆\x20𝗪𝗵𝗮𝘁𝘀𝗔𝗹𝗲𝘅𝗮\x20▣','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','1xpJpnt','image','status@broadcast','get','728130qBntOz','4096414UEXqVY','4589976uTJarc','655377utSoen','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','1610993486','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','&output=image&full_page=true','readFileSync','16HbRQuf','./src/image/WhatsAlexa.png','*Made\x20By\x20WhatsAlexa*','sendMessage','28777','1323092GbJHNO','png','from','5306140EcegVs','image/jpeg','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','9sKMZew','2349755NpDjSP'];_0x22de=function(){return _0x5b3111;};return _0x22de();}await message[_0x1b39f8(0xbb)](Buffer[_0x1b39f8(0xbf)](webimage['data']),MessageType[_0x1b39f8(0xab)],{'mimetype':Mimetype[_0x1b39f8(0xbe)],'capion':_0x1b39f8(0xba),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':{'key':{'fromMe':![],'participant':_0x1b39f8(0xc5),...message['jid']?{'remoteJid':_0x1b39f8(0xac)}:{}},'message':{'imageMessage':{'url':'https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','mimetype':_0x1b39f8(0xc1),'caption':_0x1b39f8(0xa8),'fileSha256':_0x1b39f8(0xc2),'fileLength':_0x1b39f8(0xbc),'height':0x438,'width':0x437,'mediaKey':_0x1b39f8(0xb5),'fileEncSha256':_0x1b39f8(0xa9),'directPath':_0x1b39f8(0xb2),'mediaKeyTimestamp':_0x1b39f8(0xb3),'jpegThumbnail':fs[_0x1b39f8(0xb7)](_0x1b39f8(0xb9))}}}});

    }));
}
