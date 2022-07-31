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

// Driver function
client
	.login(process.env.DISCORDJS_BOT_TOKEN)
	.then(() => {
		loadEvents(client);
		loadCommands(client);
	})
	.catch((err) => console.log(err));

// Loads interactions from commands

client.commands	= new Collection();

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});