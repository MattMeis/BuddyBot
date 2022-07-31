require('dotenv').config();


const { Client, GatewayIntentBits, Partials, Collection } = require ('discord.js');
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;


const { loadEvents } = require('./handlers/eventHandler');
const { loadCommands } = require('./handlers/commandHandler');


const client = new Client(
	{
		intents:[Guilds, GuildMembers, GuildMessages],
		partials:[User, Message, GuildMember, ThreadMember],
	});

client.commands	= new Collection();

// Driver function
client
	.login(process.env.DISCORDJS_BOT_TOKEN)
	.then(() => {
		loadEvents(client);
		loadCommands(client);
	})
	.catch((err) => console.log(err));