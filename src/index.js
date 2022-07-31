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

client
	.login(process.env.DISCORDJS_BOT_TOKEN)
	.then(() => {
		loadEvents(client);
		loadCommands(client);
	})
	.catch((err) => console.log(err));

// Subscribe Command Handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'subscribe') {
		await interaction.reply('You are now subscribed to BuddyBot, welcome to the club!');
	}

});

// Unsubscribe Command Handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'unsubscribe') {
		await interaction.reply('You are now unsubscribed from BuddyBot, was it something I said?');
	}

});

