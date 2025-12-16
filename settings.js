//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlyeUM0N2JOZ3ZpclYvTFdlVkFtUy9XSVRzczFPdm16cnY2WlN0cjhGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0RGWE0rdWFRYk1Lb1g2WGM2OTRUVjdPTEdnNnQ2Q1ErSzNvUmtsN05DZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRENQRC9SK3kvUjViVFdKbmdCb3Z4ZzRvdUUxSGZUMGZDeXBzZFdPekZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQU09GTGhJdEwrQXNINlhMSWdhQStyTzRuMDROUFM5MnBBY3FvM3E1d1ZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklPQTVaSjV6cUd6aTUyWDZja2s3aFFmLyt3WXRld1Z1c1o1KzMrR21TMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iko2M1RoSzVoYUgyNkh3cVhmZGU3Y095VUNmU2NpQklQZXJyMFloaFl4bEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0FNUHE2Rm9KQ01zb2ovdUVMY0VEVmhOWDduYVlPcjNIUXhvZSsxWDYzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3lpbW1McURwdzZnek1MRmFEYjFicTREaE55blVRNWhzM1JiZ1pzZXNHbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhIQXNKYzN5UjVJR3VaK2F6YUV4ZHpDY1dLS3ZOWkZmV2FrbDFXRXB4Ykd4TUQ5cUoxcWhwaG9Sajg1bjk2RjZ3MmExdmhDLy9YV29jdWlvVmdNb0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIwLCJhZHZTZWNyZXRLZXkiOiJjaFB0S2hmSk5sOGpaSzZ2eHBiaVZDZDVMQUsxRGVkZmY5SnNSWkZjYUljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzODA5Mjg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiIyQTdDQTUzMzVCQjM5NTgxRjFERSIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1OTAyNTU3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5NDc2MzgwOTI4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6ZmFsc2UsImlkIjoiMkE1QjA1RUM3NjRBNzcyNTdDQ0EiLCJwYXJ0aWNpcGFudCI6IiIsImFkZHJlc3NpbmdNb2RlIjoicG4ifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NTkwMjU1OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjM4MDkyODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOmZhbHNlLCJpZCI6IjJBODhENEEzODA2M0VDQjZGNTYyIiwicGFydGljaXBhbnQiOiIiLCJhZGRyZXNzaW5nTW9kZSI6InBuIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjU5MDI1NTl9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYzODA5Mjg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjpmYWxzZSwiaWQiOiIyQUQwMTkyNjIxNDRDOTNDNzkxQyIsInBhcnRpY2lwYW50IjoiIiwiYWRkcmVzc2luZ01vZGUiOiJwbiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY1OTAyNTYwfV0sIm5leHRQcmVLZXlJZCI6ODE0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODE0LCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjMzNjRNNjRZIiwibWUiOnsiaWQiOiI5NDc2MzgwOTI4OToxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSQyBHSU1BIH4iLCJsaWQiOiIxOTM1NjYwMDU1NTUzMjg6MTFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKdmI3dm9IRU0yUmhzb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKUHFkU3BEbXJuUmNpNU43Sko3d2NrVDBKbGxrSWhuQzIrbTI3T3F6NW40PSIsImFjY291bnRTaWduYXR1cmUiOiJZVkhjSzJiK3RNcmxWZnlqQUswK3IvbFl3dU9HNmtsVi9UQWpJcloreE9LQ0srT002K0tCUUFCdG5RYmN2MUZvaUxXVTFhNXA2K2J2d2J3cG9iVzVBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiY01VZUJlK1Z3WXE2THpIZ09PY0k5YWxYV1o4OUdBZXA1UC9La3gzcitaa1lGZkI2eWM0aTg1bUtyRkxUSmM0VkJkYVo0NUtiUTcyQllncGtGbkdXQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxOTM1NjYwMDU1NTUzMjg6MTFAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNUNm5VcVE1cTUwWEl1VGV5U2U4SEpFOUNaWlpDSVp3dHZwdHV6cXMrWisifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NTkwMjU1NSwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeEcifQ== ' 
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
