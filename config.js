const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="cbnbrass@gmail.com"
global.location="Hackertown."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347040387034" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347040387034";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2347040387034";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_45_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDgwLFxuICAgICAgICA3NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ3LFxuICAgICAgICA1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMjAyLFxuICAgICAgICAzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDEzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxLFxuICAgICAgICA4OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NixcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNTksXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA2MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUyLFxuICAgICAgICA0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA3MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDksXG4gICAgICAgIDk3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSFc1enNuSE1uVUdOQjVHTUZ2YTFONHc1ZXVZZnVJcUo5QU1RaVZBZ2czTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY0pLMnFscnFSS094QVV3aks3ZF9HZ1wiLFxuICBcInBob25lSWRcIjogXCIwZTliOGY0ZS1jZGI0LTQ3ZWQtYjU4YS1hODFhZTNjODRiMGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI5LFxuICAgICAgNDYsXG4gICAgICAxNTMsXG4gICAgICAyMCxcbiAgICAgIDEyOSxcbiAgICAgIDIwNCxcbiAgICAgIDg1LFxuICAgICAgMjA3LFxuICAgICAgMyxcbiAgICAgIDE1LFxuICAgICAgMjQxLFxuICAgICAgNzIsXG4gICAgICAyNTAsXG4gICAgICAxNTMsXG4gICAgICAxMjMsXG4gICAgICAxOTYsXG4gICAgICA4NSxcbiAgICAgIDIxOCxcbiAgICAgIDE0OCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyNCxcbiAgICAgIDMyLFxuICAgICAgOCxcbiAgICAgIDExMixcbiAgICAgIDIxNSxcbiAgICAgIDE4MixcbiAgICAgIDE0NixcbiAgICAgIDk2LFxuICAgICAgOTUsXG4gICAgICAxNTUsXG4gICAgICAxNyxcbiAgICAgIDIxNyxcbiAgICAgIDgsXG4gICAgICAxNjQsXG4gICAgICAxNDUsXG4gICAgICAzNSxcbiAgICAgIDE3NSxcbiAgICAgIDY4LFxuICAgICAgMTUxLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk5HMkdSTDhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDQwMzg3MDM0OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTQwNTYzMTYxODI1ODI6MjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVBKelAwR0VJcWZ4ck1HR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHUEU2NDlYbUI4c2JQd1FJckxJV1FGbVlyNU05cWFWbm1xS1hpNktSTTA0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImFDakt5T2NPM1NBL01iZVRrMWFkc0xQb3F6bGRBSkFyWGhFSnQ4bVhrcG9KU3hCZEVLOWpmN1RKamVkMDA0S3VhSU96MVliSlVrMW1wRzVmeDFHaEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImVLV2N6SFZ2RlhXM2ppSVozZktPc240UTdKUkJURXIvUjc0NXB0NlBmM1RlclNscDBtZmpkM3FDUVpsMWZYZ3JXTVdmcXJCaFNzQlhGaVJ5VTV5M0F3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDAzODcwMzQ6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODcxODM1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "/",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "CBNBOT",
  ownername:procesuhail.OWNER_NAME|| "CBN",


  errorss.env.ERROR_CHAT || "",
  KOYEB_API : s.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
