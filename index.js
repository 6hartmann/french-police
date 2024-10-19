const { Client, Events, ActivityType, GatewayIntentBits } = require('discord.js');
const { token, french } = require('./config.json');

// log into the client blah blah
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

// run logging once after client is ready and set presence
client.once(Events.ClientReady, readyClient => {
    console.log(`ready. logged in as: ${readyClient.user.tag}`);
    client.user.setActivity({
        name: 'hating on french',
        type: ActivityType.Competing
    });
});

/*
    check for messages from the french and respond to them
    of course, that emote in this repo is from bobnetwork's discord server
    adjust the message however you want it :)
*/
client.on('messageCreate', async message => {
    if(french.includes(message.author.id) && message.author.id != client.user.id){
        await message.reply('france sucks. <:CatFuckYou:1280928034601308231>');
        console.log('harassed the french');
    }
});

// actually log into discord lol
client.login(token);