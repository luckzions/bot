//copiar códigos? modificar? deixa os créditos no yt
//base do gutinho (my channel↓
//YouTube:https: @gutoxtazv9
//WhatsApp: +55 51 8992-6591
//telegram: t.me/gutox9
//local: Brasil, Bahia, Candelária,

global.owner = ["5569999568598"]
global.ownername = "luckzinios"
global.location = "Brasil, Bahia, Candelária"
global.botname = 'Destroyer v0.1' 
global.link ='https://www.youtube.com/@luckzinios'
global.prefa = [,'.',] 
global.limitawal = {
    premium: "Infinity",
    free: 20
}

global.mess = {
    prem: `🚫 Apenas usuários premium podem utilizar esta função!`,
    admin: `🚫 você não tem permissão para usar esse comando.`,
    grp: '💬 Este comando só funciona em grupos!',
    botadm: '❌ O bot precisa ser admin.'
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})