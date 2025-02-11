require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

bot.once("ready", () => {
    console.log(`✅ Bot está online como ${bot.user.tag}`);
});

// Debug para verificar se o bot está recebendo mensagens
bot.on("messageCreate", (message) => {
    console.log(`Mensagem recebida: ${message.content}`); // Log para verificar o conteúdo da mensagem

    if (message.author.bot) return; // Ignorar mensagens de outros bots

    // Comando simples de debug
    if (message.content.trim() === "tocar") {
        message.reply("m!play");
    }
    // Testando outro comando para ver se responde
    else if (message.content.trim() === "ping") {
        message.reply("Pong!");
    }
});

bot.login(process.env.TOKEN);

