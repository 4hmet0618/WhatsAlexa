var _0x4215=["\x2E\x2E\x2F\x63\x6F\x6E\x66\x69\x67","\x73\x65\x71\x75\x65\x6C\x69\x7A\x65","\x66\x69\x6C\x74\x65\x72","\x53\x54\x52\x49\x4E\x47","\x54\x45\x58\x54","\x42\x4F\x4F\x4C\x45\x41\x4E","\x64\x65\x66\x69\x6E\x65","\x44\x41\x54\x41\x42\x41\x53\x45","\x70\x75\x73\x68","\x66\x69\x6E\x64\x41\x6C\x6C","\x6C\x65\x6E\x67\x74\x68","\x63\x72\x65\x61\x74\x65","\x75\x70\x64\x61\x74\x65","\x64\x65\x73\x74\x72\x6F\x79","\x65\x78\x70\x6F\x72\x74\x73"];const config=require(_0x4215[0]);const {DataTypes}=require(_0x4215[1]);const FiltersDB=config[_0x4215[7]][_0x4215[6]](_0x4215[2],{chat:{type:DataTypes[_0x4215[3]],allowNull:false},pattern:{type:DataTypes[_0x4215[4]],allowNull:false},text:{type:DataTypes[_0x4215[4]],allowNull:false},regex:{type:DataTypes[_0x4215[5]],allowNull:false,defaultValue:false}});async function getFilter(_0x9600x4= null,_0x9600x5= null){var _0x9600x6={chat:_0x9600x4};if(_0x9600x5!== null){_0x9600x6[_0x4215[8]]({pattern:_0x9600x5})};var _0x9600x7= await FiltersDB[_0x4215[9]]({where:_0x9600x6});if(_0x9600x7[_0x4215[10]]< 1){return false}else {return _0x9600x7}}async function setFilter(_0x9600x4= null,_0x9600x5= null,_0x9600x9= null,_0x9600xa= false){var _0x9600x7= await FiltersDB[_0x4215[9]]({where:{chat:_0x9600x4,pattern:_0x9600x5}});if(_0x9600x7[_0x4215[10]]< 1){return  await FiltersDB[_0x4215[11]]({chat:_0x9600x4,pattern:_0x9600x5,text:_0x9600x9,regex:_0x9600xa})}else {return  await _0x9600x7[0][_0x4215[12]]({chat:_0x9600x4,pattern:_0x9600x5,text:_0x9600x9,regex:_0x9600xa})}}async function deleteFilter(_0x9600x4= null,_0x9600x5){var _0x9600x7= await FiltersDB[_0x4215[9]]({where:{chat:_0x9600x4,pattern:_0x9600x5}});if(_0x9600x7[_0x4215[10]]< 1){return false}else {return  await _0x9600x7[0][_0x4215[13]]()}}module[_0x4215[14]]= {FiltersDB:FiltersDB,getFilter:getFilter,setFilter:setFilter,deleteFilter:deleteFilter}
