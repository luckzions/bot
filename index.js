const { default: makeWASocket, DisconnectReason, makeInMemoryStore, jidDecode, Browsers, proto, getContentType, useMultiFileAuthState, downloadContentFromMessage } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const readline = require("readline");
const _ = require('lodash')
const FileType = require('file-type')
const path = require('path')
const yargs = require('yargs/yargs')
const PhoneNumber = require('awesome-phonenumber')
const simple = require('./gutoxtaz/lib/oke.js')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, await, sleep, reSize } = require('./gutoxtaz/lib/myfunc')
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./gutoxtaz/lib/lowdb')}
const { Low, JSONFile } = low
const mongoDB = require('./gutoxtaz/lib/mongoDB')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./gutoxtaz/src/database.json`)
)
global.DATABASE = global.db // Compatibilidade com versões anteriores
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
users: {},
chats: {},
game: {},
database: {},
settings: {},
setting: {},
others: {},
sticker: {},
...(global.db.data || {})}
  global.db.chain = _.chain(global.db.data)}
loadDatabase()

const appenTextMessage = async (m, uwu, text, chatUpdate) => {
    let messages = await generateWAMessage(
      m.key.remoteJid,
      {
        text: text
      },
      {
        quoted: m.quoted,
      },
    );
    messages.key.fromMe = areJidsSameUser(m.sender, uwu.user.id);
    messages.key.id = m.key.id;
    messages.pushName = m.pushName;
    if (m.isGroup) messages.participant = m.sender;
    let msg = {
      ...chatUpdate,
      messages: [proto.WebMessageInfo.fromObject(messages)],
      type: "append",
    };
    return uwu.ev.emit("messages.upsert", msg);
}

const question = (text) => { const rl = readline.createInterface({ input: process.stdin, output: process.stdout }); return new Promise((resolve) => { rl.question(text, resolve) }) };

async function uwuStart() {

const { state, saveCreds } = await useMultiFileAuthState("./gutoxtaz/QR code")
const uwu = simple({
    logger: pino({ level: "silent" }),
       printQRInTerminal: false,
        auth: state,
         version: [2, 3000, 1017531287],
           browser: Browsers.ubuntu("Edge"),
            getMessage: async key => {
            const jid = jidNormalizedUser(key.remoteJid);
            const msg = await store.loadMessage(jid, key.id);
            return msg?.message || '';
           },
        shouldSyncHistoryMessage: msg => {
            console.log(`\x1b[32mLoading Chat [${msg.progress}%]\x1b[39m`);
            return !!msg.syncType;
        },
}, store);

if (!uwu.authState.creds.registered) {
const phoneNumber = await question('COLOCA O NÚMERO:\n');
let code = await uwu.requestPairingCode(phoneNumber.replace(/[^\d]/g, ''));
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`Code :`, code);
}
store.bind(uwu.ev);

uwu.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!uwu.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(uwu, mek, store)
require("./uwu.js")(uwu, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})

// Contexto
uwu.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

uwu.getName = (jid, withoutContact= false) => {
id = uwu.decodeJid(jid)
withoutContact = uwu.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = uwu.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === uwu.decodeJid(uwu.user.id) ?
uwu.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

uwu.public = true

uwu.serializeM = (m) => smsg(uwu, m, store);
uwu.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        switch (reason) {
            case DisconnectReason.badSession: 
                console.error('ARQUIVO DE SESSÃO INVÁLIDO EXCLUINDO SESSÃO');
                fs.rmSync('./gutoxtaz/QR code', { recursive: true, force: true }); // Excluir pasta de sessão
                uwuStart();
                break;

            case DisconnectReason.connectionClosed: // Conexão fechada, reconecte
            case DisconnectReason.connectionLost:
            case DisconnectReason.timedOut:
                console.warn('CONEXÃO FECHADA RECONECTANDO!');
                uwuStart();
                break;

            case DisconnectReason.loggedOut: // Desconectado, requer novo login
                console.error('USUÁRIO DESCONECTOU!');
                fs.rmSync('./gutoxtaz/QR code', { recursive: true, force: true });
                break;

            case DisconnectReason.restartRequired: // Restart required
                console.log('REINICIAÇÃO NECESSÁRIA RECONECTANDO...');
                uwuStart();
                break;

            default:
                console.error(`motivo de desconexão desconhecido:${reason}`);
                uwuStart();
                break;
        }
    } else if (connection === 'open') {
        console.log('USUÁRIO CONECTADO COM SUCESSO ✔️');
        
        await uwu.sendPresenceUpdate('unavailable');
    }
});


uwu.ev.on('creds.update', saveCreds)

async function getMessage(key) {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg
        }
        return {
            conversation: "uwuBot"
        }
    }
uwu.ev.on('messages.update', 
    async(chatUpdate) => {
        for (const { key, update } of chatUpdate) {
      	if (update.pollUpdates && key.fromMe) {
	     const pollCreation = await getMessage(key);	
	   	if (pollCreation) {
             let pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation?.message,
							pollUpdates: update.pollUpdates,
						});
	          let toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
              console.log(toCmd);
	          await appenTextMessage(m, uwu, toCmd, pollCreation);
	          await uwu.sendMessage(m.cht, { delete: key });
	         	} else return false
	          return 
   	    	}
   	      }
        });    

uwu.sendText = (jid, text, quoted = '', options) => uwu.sendMessage(jid, { text: text, ...options }, { quoted })
//=========================================\\
uwu.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
let trueFileName = attachExtension ? ('./gutoxtaz/sticker/' + filename + '.' + type.ext) : './gutoxtaz/sticker/' + filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
//=========================================\\
uwu.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, './gutoxtaz/src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }
    
    uwu.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await uwu.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await uwu.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await uwu.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

uwu.sendTextWithMentions = async (jid, text, quoted, options = {}) => uwu.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })
//=========================================\\
uwu.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

uwu.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || !msg.key.remoteJid.endsWith('@g.us')) return;

  const grupoId = msg.key.remoteJid;
  const sender = msg.key.participant || msg.key.remoteJid;

  const caminho = `./DADOS/rankmensagens/${grupoId}.json`;
  let rankData = {};

  if(sender.endsWith('@g.us')) return

  if (fs.existsSync(caminho)) {
    rankData = JSON.parse(fs.readFileSync(caminho));
  }

  if (!rankData[sender]) rankData[sender] = 0;
  rankData[sender]++;

  fs.writeFileSync(caminho, JSON.stringify(rankData, null, 2));
});

const path = (groupId) => `./DADOS/grupos/${groupId}.json`

// Lê a configuração do grupo
function getGroupConfig(groupId) {
  try {
    const data = fs.readFileSync(path(groupId), 'utf-8')
    return JSON.parse(data)
  } catch (e) {
    console.error('Erro ao carregar config do grupo:', e)
    return null
  }
}

// Evento de novos participantes no grupo
uwu.ev.on('group-participants.update', async (update) => {
  try {

    if (update.action === 'add') {
      const grupoId = update.id
      const participantesNovos = update.participants

      const config = getGroupConfig(grupoId)
      if (!config) return console.log('Nenhuma configuração de grupo encontrada.')

      const welcomeData = config?.[0]?.wellcome?.[0]
      const bemVindoAtivado = welcomeData?.bemvindo1 === true
      const mensagemBase = (welcomeData?.legendabv || '').trim()

      if (!bemVindoAtivado || !mensagemBase) {
        return
      }

      const metadata = await uwu.groupMetadata(grupoId)

      for (const participante of participantesNovos) {
        const numero = participante.split('@')[0]

        // Busca o nome (pushName) do participante no metadata
        const membroInfo = metadata.participants.find(p => p.id === participante)
        const nome = membroInfo?.name || `@${numero}`

        // Substitui as tags personalizadas
        const mensagemFinal = mensagemBase
          .replace(/@usuario/gi, `@${numero}`)
          .replace(/#nome/gi, nome)

        await new Promise(r => setTimeout(r, 1000))

        await uwu.sendMessage(grupoId, {
          text: mensagemFinal,
          mentions: [participante]
        })
      }
    }
  } catch (e) {
    console.error('❌ Erro ao enviar mensagem de boas-vindas:', e)
  }
})

return uwu
}

uwuStart()

function smsg(uwu, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = uwu.decodeJid(m.fromMe && uwu.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = uwu.decodeJid(m.key.participant) || ''
}
if (m.message) {
m.mtype = getContentType(m.message)
m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
if (m.quoted) {
let type = getContentType(quoted)
m.quoted = m.quoted[type]
if (['productMessage'].includes(type)) {
type = getContentType(m.quoted)
m.quoted = m.quoted[type]
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
if (typeof m.quoted === 'string') m.quoted = {
text: m.quoted
}
m.quoted.mtype = type
m.quoted.id = m.msg.contextInfo.stanzaId
m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
m.quoted.sender = uwu.decodeJid(m.msg.contextInfo.participant)
m.quoted.fromMe = m.quoted.sender === uwu.decodeJid(uwu.user.id)
m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
m.getQuotedObj = m.getQuotedMessage = async () => {
if (!m.quoted.id) return false
let q = await store.loadMessage(m.chat, m.quoted.id, uwu)
 return exports.smsg(uwu, q, store)
}
let vM = m.quoted.fakeObj = M.fromObject({
key: {
remoteJid: m.quoted.chat,
fromMe: m.quoted.fromMe,
id: m.quoted.id
},
message: quoted,
...(m.isGroup ? { participant: m.quoted.sender } : {})
})
m.quoted.delete = () => uwu.sendMessage(m.quoted.chat, { delete: vM.key })
m.quoted.copyNForward = (jid, forceForward = false, options = {}) => uwu.copyNForward(jid, vM, forceForward, options)
m.quoted.download = () => uwu.downloadMediaMessage(m.quoted)
}
}
if (m.msg.url) m.download = () => uwu.downloadMediaMessage(m.msg)
m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? uwu.sendMedia(chatId, text, 'file', '', m, { ...options }) : uwu.sendText(chatId, text, m, { ...options })
m.copy = () => exports.smsg(uwu, M.fromObject(M.toObject(m)))
m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => uwu.copyNForward(jid, m, forceForward, options)

return m
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
