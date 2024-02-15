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

client.login('MTIwMTQwMzQ5Njg3NzAxMDk1Nw.GbYc92.kJHU33o9tmZ5yYccOh_zg3RUaDYpEd-2nQyCm8')

const { SlashCommandBuilder } = require('discord.js');
