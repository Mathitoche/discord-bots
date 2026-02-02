const { Client, GatewayIntentBits } = require("discord.js");

// Création du client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Quand le bot est prêt
client.once("ready", () => {
  console.log(`✅ Connecté en tant que ${client.user.tag}`);
});

// Quand un message est envoyé
client.on("messageCreate", (message) => {
  // Ignorer les messages du bot
  if (message.author.bot) return;

  // Commande !start
  if (message.content === "!start") {
    message.reply("🟢 Le bot est démarré !");
  }

  // Commande !end
  if (message.content === "!end") {
    message.reply("🔴 Le bot est arrêté !");
  }
});

// Connexion du bot (TOKEN à remplacer plus tard)
client.login("TON_TOKEN_ICI");
             
