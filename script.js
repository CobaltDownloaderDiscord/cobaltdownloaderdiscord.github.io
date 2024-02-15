const {Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require('discord.js')
const client = new Client({intents: [GatewayIntentBits.Guilds], allowedMentions: { parse: ["users", "roles", "everyone"] } })

client.on("ready", async () => {
    console.log(`Logged in as ${client.user.tag}`);
    

    const pingCommand = {
        name: "ping",
        description: "Ping everyone anonymously"
    };

    const guild = client.guilds.cache.get("1121903171334328452");
    await guild.commands.create(pingCommand);
})

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping") {
        await interaction.channel.send('<@&1200208080516943892> join vc')
        //await interaction.reply("Pong!");
    }
});

const part0 = "MTIwMTQwMzQ5Njg3NzAxMDk1Nw"
const part1 = ".GqcjTy.oMlPJQHdhi0L04PQ-E0V-5yfNnfIcFwSOyXpS4"
client.login(part0 + part1)

const { SlashCommandBuilder } = require('discord.js');
