const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEs0ekFUSDZtZnVnNzJZZ3NTR0dXZ3g4azZXOXU2dVZmL09aNTlxNnpWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTlCRUovbWNndUZYYmI4YjBCV0MrWXVMTmIrREZsaHVOeFRDamk2aHgzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRUJaRE10NGJ2c1FWb3dOZ1UxZEYxOFh5N0lDdTV2M1dtYW5sU2xNZ1U0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZTRCekoxK3V1MTlJa2srUnZVSkFaemxZYmZkK1dkZDRJekhnbHZvWVhBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLOE5lcWdDS2pzdlB3RlQ0VFFMSXBOOFdKR0sxQ1ZxamdJdEFNdUhLbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlrNklVNlFwV2I3dit1YTZQTzZXSFN1VkF6MURWR3RJNllkUmNRVnVSVEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0ZadnQ4QTRFc2pEVFVWRDlGLzcrVDhkb0RQeVZ6YTFQRDRrZllPZGtuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTZJVHNscmp5VUVvM09pNUliWmphZC9IenI5YTdIcy92eVBWMXhwN1Ezaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1SVjFla2piUC8xc0lVelNXTXNEYXJZaUt6ZUM0dHhEVHZVVGdZKzRHZW9VbkN5a0ZnUlBRdys5Z3oweXNIUXdrUzBudi9BTVZtUnlIcnJCcDZLWmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiJTOHpsY3NhdTV6Qms0dktaejVnajBxR3Zjek5SRTRqc1BiT1FqcldKVFRBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE5MzU5NzExOTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRkNGRTg2MDI0NDc2RTAxMjI3QkQxM0E2MUI5OTFBQjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1Mjk4NzMxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTkzNTk3MTE5NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNThGRjYyQzc3RjFEMEEzQzYzMDY0ODhGNjNENTY3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyOTg3MzE5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI4ODAxOTM1OTcxMTk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjU3MzhBMDNBMDAxMTJBNTFGODkwNUUxRjU1NEFDOTIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTI5ODczMzJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjlaTTlKU1MyIiwibWUiOnsiaWQiOiI4ODAxOTM1OTcxMTk2OjIxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjE2NDc5NjA1NzQzNjUwOjIxQGxpZCIsIm5hbWUiOiJVbmtub3duIFBlcnNvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSStraG9FSEVLYnQ4Y01HR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOStsZnBQVHp4aG1RdmJLcGU2aktYd0RUWVJHeWV6Z3dtR25WSmE4dXRudz0iLCJhY2NvdW50U2lnbmF0dXJlIjoielFlWldGY3FPaFVsVElUWStvTzU2NVdTNnYwTGQvNEpySE93Q3VqOXJ4a25ETmFQenNEZGROT09kT2p1ZUErcWJRLzZRdDhoNTFZZTFVb0l2anIzQXc9PSIsImRldmljZVNpZ25hdHVyZSI6InZnVWI5aVd6YkMyc1M0b3VUeG9uNmg0OWp4RDhCNXpBcWEwT1J2a0dCR082Nm1HV1FBUXZ2SjZITG9FRCtRZU1JMC9ZbDZ3b21IOHJSK0tabTZUTGpRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiODgwMTkzNTk3MTE5NjoyMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmZnBYNlQwODhZWmtMMnlxWHVveWw4QTAyRVJzbnM0TUpocDFTV3ZMclo4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTI5ODczMTUsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTS9KIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/Hx9Rx94F/IMG-20250714-015950.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "TANVIR BOTLA V6",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "TAMVIR Vai",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "8801315908601",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "TANVIR",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ TANVIR vai*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/wjsLm6P5/IMG-20250715-WA0044.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zida hu, Banda hu *TANVIR*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "8801747735262",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
