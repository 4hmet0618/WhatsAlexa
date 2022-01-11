let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');
let got = require('got');
let axios = require('axios');

if (Config.LANG == 'EN') {
var NEED_WORD = '*You must enter a movie name!*',
    NOT_FOUND = "*I couldn't find anything! 😣*",
    MOV_INFO = 'MOVIE INFO',
    MOV_DESC = 'Finds informations about the movie with the provided movie name.',
    TITLE = 'Title',
    YEAR = 'Year',
    RATING = 'Rated',
    RELEASED = 'Released',
    DURATION = 'Duration',
    GENRE = 'Genre',
    DIRECTOR = 'Director',
    WRITER = 'Writer',
    ACTORS = 'Actors',
    PLOT = 'Plot',
    LANGUAGE = 'Language',
    COUNTRY = 'Country',
    AWARDS = 'Awards',
    BOXOFFICE = 'BoxOffice',
    PRODUCTION = 'Production',
    IMBD_RATING = 'imdbRating',
    IMBD_VOTES = 'imdbVotes',
    NO = 'No',
    NOT_MSG_FOUND = 'Not Found!'
}
if (Config.LANG == 'ML') {
var NEED_WORD = '*നിങ്ങൾ ഒരു സിനിമയുടെ പേര് നൽകണം!*',
    NOT_FOUND = "*എനിക്ക് ഒന്നും കണ്ടെത്താൻ കഴിഞ്ഞില്ല! 😣*",
    MOV_INFO = 'സിനിമാ വിവരം',
    MOV_DESC = 'നൽകിയിരിക്കുന്ന സിനിമയുടെ പേരിനൊപ്പം സിനിമയെക്കുറിച്ചുള്ള വിവരങ്ങൾ കണ്ടെത്തുന്നു.',
    TITLE = 'തലക്കെട്ട്',
    YEAR = 'വർഷം',
    RATING = 'റേറ്റിംഗ്',
    RELEASED = 'റിലീസ്',
    DURATION = 'ദൈർഘ്യം',
    GENRE = 'തരം',
    DIRECTOR = 'സംവിധായകൻ',
    WRITER = 'എഴുത്തുകാരൻ',
    ACTORS = 'അഭിനേതാക്കൾ',
    PLOT = 'കഥ',
    LANGUAGE = 'ഭാഷ',
    COUNTRY = 'രാജ്യം',
    AWARDS = 'അവാർഡുകൾ',
    BOXOFFICE = 'ബോക്സ് ഓഫീസ്',
    PRODUCTION = 'ഉത്പാദനം',
    IMBD_RATING = 'IMDB റേറ്റിംഗ്',
    IMBD_VOTES = 'IMBD വോട്ടുകൾ',
    NO = 'ഇല്ല',
    NOT_MSG_FOUND = 'കണ്ടെത്തിയില്ല!'
}
if (Config.LANG == 'ID') {
var NEED_WORD = '*Anda harus memasukkan nama film!*',
    NOT_FOUND = "*Saya tidak dapat menemukan apa pun! 😣*",
    MOV_INFO = 'INFORMASI FILM',
    MOV_DESC = 'Menemukan informasi tentang film yang disediakan.',
    TITLE = 'Judul',
    YEAR = 'Tahun',
    RATING = 'Peringkat',
    RELEASED = 'Dilepaskan',
    DURATION = 'Durasi',
    GENRE = 'Aliran',
    DIRECTOR = 'Direktur',
    WRITER = 'Penulis',
    ACTORS = 'Aktor',
    PLOT = 'Merencanakan',
    LANGUAGE = 'Bahasa',
    COUNTRY = 'Negara',
    AWARDS = 'Penghargaan',
    BOXOFFICE = 'Film laris',
    PRODUCTION = 'Produksi',
    IMBD_RATING = 'IMDB Peringkat',
    IMBD_VOTES = 'IMBD Suara',
    NO = 'Tidak',
    NOT_MSG_FOUND = 'Tidak ditemukan!'
}

WhatsAlexa.addCommand({pattern: 'movie ?(.*)', fromMe: td, desc: MOV_DESC}, (async (message, match) => {

var _0x3bbe=["","\x73\x65\x6E\x64\x52\x65\x70\x6C\x79","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x6F\x6D\x64\x62\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x3F\x61\x70\x69\x6B\x65\x79\x3D\x37\x34\x32\x62\x32\x64\x30\x39\x26\x74\x3D","\x26\x70\x6C\x6F\x74\x3D\x66\x75\x6C\x6C","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x52\x65\x73\x70\x6F\x6E\x73\x65","\x54\x72\x75\x65","\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65\x72","\x67\x65\x74","\x2A\u300E\x20","\x20\u300F\x2A\x5C\x6E\x5C\x6E\x5F\u27A5\x20","\x5F\x20\x3A\x20\x2A","\x54\x69\x74\x6C\x65","\x4E\x2F\x41","\x2A\x5C\x6E\x5F\u27A5\x20","\x59\x65\x61\x72","\x52\x61\x74\x65\x64","\x52\x65\x6C\x65\x61\x73\x65\x64","\x52\x75\x6E\x74\x69\x6D\x65","\x47\x65\x6E\x72\x65","\x44\x69\x72\x65\x63\x74\x6F\x72","\x57\x72\x69\x74\x65\x72","\x41\x63\x74\x6F\x72\x73","\x2A\x5C\x6E\x5C\x6E\x5F\u27A5\x20","\x50\x6C\x6F\x74","\x4C\x61\x6E\x67\x75\x61\x67\x65","\x43\x6F\x75\x6E\x74\x72\x79","\x41\x77\x61\x72\x64\x73","\x42\x6F\x78\x4F\x66\x66\x69\x63\x65","\x50\x72\x6F\x64\x75\x63\x74\x69\x6F\x6E","\x69\x6D\x64\x62\x52\x61\x74\x69\x6E\x67","\x69\x6D\x64\x62\x56\x6F\x74\x65\x73","\x2A","\x64\x61\x74\x61","\x66\x72\x6F\x6D","\x73\x65\x6E\x64\x49\x6D\x61\x67\x65"];if(match[1]=== _0x3bbe[0]){return  await message[_0x3bbe[1]](NEED_WORD)};let url=`${_0x3bbe[2]}${match[1]}${_0x3bbe[3]}`;let response= await got(url);let json=JSON[_0x3bbe[5]](response[_0x3bbe[4]]);if(json[_0x3bbe[6]]!= _0x3bbe[7]){return  await message[_0x3bbe[1]](NOT_FOUND)};let poster= await axios[_0x3bbe[9]](json.Poster,{responseType:_0x3bbe[8]});let movieInfo=`${_0x3bbe[10]}${MOV_INFO}${_0x3bbe[11]}${TITLE}${_0x3bbe[12]}${json[_0x3bbe[13]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[13]]}${_0x3bbe[15]}${YEAR}${_0x3bbe[12]}${json[_0x3bbe[16]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[16]]}${_0x3bbe[15]}${RATING}${_0x3bbe[12]}${json[_0x3bbe[17]]== _0x3bbe[14]?NO:json[_0x3bbe[17]]}${_0x3bbe[15]}${RELEASED}${_0x3bbe[12]}${json[_0x3bbe[18]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[18]]}${_0x3bbe[15]}${DURATION}${_0x3bbe[12]}${json[_0x3bbe[19]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[19]]}${_0x3bbe[15]}${GENRE}${_0x3bbe[12]}${json[_0x3bbe[20]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[20]]}${_0x3bbe[15]}${DIRECTOR}${_0x3bbe[12]}${json[_0x3bbe[21]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[21]]}${_0x3bbe[15]}${WRITER}${_0x3bbe[12]}${json[_0x3bbe[22]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[22]]}${_0x3bbe[15]}${ACTORS}${_0x3bbe[12]}${json[_0x3bbe[23]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[23]]}${_0x3bbe[24]}${PLOT}${_0x3bbe[12]}${json[_0x3bbe[25]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[25]]}${_0x3bbe[24]}${LANGUAGE}${_0x3bbe[12]}${json[_0x3bbe[26]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[26]]}${_0x3bbe[15]}${COUNTRY}${_0x3bbe[12]}${json[_0x3bbe[27]]== _0x3bbe[14]?NOT_MSG_FOUND:json[_0x3bbe[27]]}${_0x3bbe[15]}${AWARDS}${_0x3bbe[12]}${json[_0x3bbe[28]]== _0x3bbe[14]?NO:json[_0x3bbe[28]]}${_0x3bbe[15]}${BOXOFFICE}${_0x3bbe[12]}${json[_0x3bbe[29]]== _0x3bbe[14]?NO:json[_0x3bbe[29]]}${_0x3bbe[15]}${PRODUCTION}${_0x3bbe[12]}${json[_0x3bbe[30]]== _0x3bbe[14]?NO:json[_0x3bbe[30]]}${_0x3bbe[15]}${IMBD_RATING}${_0x3bbe[12]}${json[_0x3bbe[31]]== _0x3bbe[14]?NO:json[_0x3bbe[31]]}${_0x3bbe[15]}${IMBD_VOTES}${_0x3bbe[12]}${json[_0x3bbe[32]]== _0x3bbe[14]?NO:json[_0x3bbe[32]]}${_0x3bbe[33]}`; await message[_0x3bbe[36]](Buffer[_0x3bbe[35]](poster[_0x3bbe[34]]),movieInfo)
}));
