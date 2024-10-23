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

/*
    make the bot post a specific emote at a random interval of 15-30 minutes
*/
client.on('ready', () => {
    function sendEmote() {
        const channel = client.channels.cache.get('1298432458710061129');
        var min = 900,
            max = 1800;
        var rand = Math.floor(Math.random() * (max - min + 1) + min);
        channel.send('<:boohoo:1132043427115171933>')
        console.log('Waiting for ' + rand + ' seconds to send emote again.');
        setTimeout(sendEmote, rand * 1000);
    }

    sendEmote()
});

// actually log into discord lol
client.login(token);