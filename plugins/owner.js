const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "👑", 
    desc: "Display Royal Owner Contact",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER;
        const ownerName = config.OWNER_NAME;

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +
                      'END:VCARD';

        // Send vCard Contact
        await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Royal Image + Caption
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/9yic1a.jpg' },
            caption: `╭━━〔 👑 *𝙻𝙾𝚁𝙳 𝚁𝙰𝙷𝙻 𝙱𝙾𝚃* 👑 〕━━⊷
┃🌟 *Royal Guardian Info*
┃🪄 *Name:* ${ownerName}
┃📱 *Contact:* ${ownerNumber}
┃🎯 *Version:* 7.0.1
┃🔱 *Bot:* Rahl Royal Engine
╰━━━━━━━━━━━━━━━⊷
🦁 *All glory to the Royal Code!*`,
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416335506023@newsletter',
                    newsletterName: '👑 𝙻𝙾𝚁𝙳 𝚁𝙰𝙷𝙻 𝙶𝚁𝙸𝙾𝚃 👑',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Royal Audio Greeting
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/gq9uht.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`⚠️ An error occurred in the Royal Chamber:\n${error.message}`);
    }
});
