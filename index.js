const { Client, Events, ActivityType, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// define french users of bob tuah cord
const french = ['224191281205739520'];

// log into the client blah blah
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

// run logging once after client is ready
client.once(Events.ClientReady, readyClient => {
    console.log(`ready. logged in as: ${readyClient.user.tag}`);
    client.user.setActivity({
        name: 'hating on french',
        type: ActivityType.Competing
    });
});

client.on('messageCreate', async message => {
    if(french.includes(message.author.id) && message.author.id != client.user.id){
        await message.reply('france sucks. <:CatFuckYou:1280928034601308231>');
        console.log('harassed to the french');
    }
});

// actually log into discord lol
client.login(token);