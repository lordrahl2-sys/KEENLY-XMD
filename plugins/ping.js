const config = require('../config');
const { cmd, commands } = require('../command');

// 🕯️ Enchanted Command of the Sovereign Lord Rahl
cmd({
    pattern: "ping2",
    alias: "speed",
    desc: "Summon forth the sacred response time in the Court of the High Lord.",
    category: "main",
    react: "👑",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();

        // A divine pause, as willed by the Crowned One
        await new Promise(resolve => setTimeout(resolve, 100)); // 100ms delay

        const endTime = Date.now();
        const ping = endTime - startTime;

        // Scroll dispatched by the Herald of the Realm
        await conn.sendMessage(from, { 
            text: `📜 *𝐃𝐄𝐂𝐑𝐄𝐄 𝐅𝐑𝐎𝐌 𝐓𝐇𝐄 𝐓𝐇𝐑𝐎𝐍𝐄 𝐎𝐅 𝐋𝐎𝐑𝐃 𝐑𝐀𝐇𝐋*\n\n🕰️ *By the will of His Eminence, High Sovereign of the Realm, the sacred latency hath been revealed:*\n\n⚡ *𝙍𝙤𝙮𝙖𝙡 𝙍𝙚𝙨𝙥𝙤𝙣𝙨𝙚:* ${ping}ms\n\n🔱 *So it is spoken. So it is sealed.*`, 
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416335506023@newsletter',
                    newsletterName: '📯 𝐓𝐇𝐄 𝐑𝐀𝐇𝐋𝐈𝐀𝐍 𝐁𝐔𝐋𝐋𝐄𝐓𝐈𝐍 𝐎𝐅 𝐃𝐄𝐂𝐑𝐄𝐄𝐒',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
    } catch (e) {
        console.error(e);
        reply(`⚠️ A tremor in the kingdom: ${e.message}`);
    }
});
