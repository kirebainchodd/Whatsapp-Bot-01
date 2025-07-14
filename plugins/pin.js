const fs = require('fs');
const PINNED_FILE = './pinned.json';

let pinnedMessages = {};
if (fs.existsSync(PINNED_FILE)) {
    pinnedMessages = JSON.parse(fs.readFileSync(PINNED_FILE));
}

module.exports = {
    name: 'pin',
    description: 'Reply করে .pin দিলে সেই মেসেজটি পিন হয়ে যাবে।',

    async execute(msg, client) {
        const text = msg.body.trim().toLowerCase();

        if (text === '.pin' && msg.hasQuotedMsg) {
            const quotedMsg = await msg.getQuotedMessage();
            const chat = await msg.getChat();
            const chatId = chat.id._serialized;

            if (!pinnedMessages[chatId]) {
                pinnedMessages[chatId] = [];
            }

            pinnedMessages[chatId].push({
                id: quotedMsg.id._serialized,
                body: quotedMsg.body
            });

            fs.writeFileSync(PINNED_FILE, JSON.stringify(pinnedMessages, null, 2));
            return msg.reply(`📌 Message pinned:\n${quotedMsg.body}`);
        }

        if (text === '.pinned') {
            const chat = await msg.getChat();
            const chatId = chat.id._serialized;
            const pins = pinnedMessages[chatId] || [];

            if (pins.length === 0) {
                return msg.reply("📌 No messages pinned yet.");
            }

            const list = pins.map((m, i) => `${i + 1}. ${m.body}`).join('\n');
            return msg.reply(`📌 Pinned messages:\n${list}`);
        }
    }
};
