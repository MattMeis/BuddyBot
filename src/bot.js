require('dotenv').config();

const { ActionRowBuilder, Client, GatewayIntentBits, InteractionType, ModalBuilder, TextInputBuilder, TextInputStyle } = require ('discord.js');
const client = new Client({ intents : [GatewayIntentBits.Guilds] });


client.on('ready', () => {
	console.log(`${client.user.tag} has logged in. Ready to go!`);
});

// Subscribe Command Handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'subscribe') {
		await interaction.reply('You are now subscribed to BuddyBot!');
	}

});

// Unsubscribe Command Handling
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'unsubscribe') {
		await interaction.reply('You are now unsubscribed to BuddyBot. Was it something I said?');
	}

});


// Create Command Modal
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction === 'create') {
		const modal = new ModalBuilder().setCustomId('createGameNightModal').setTitle('Game Night Builder');

		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')

			.setLabel('What\'s your favorite color?')

			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel('What\'s some of your favorite hobbies?')
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
	}
});

// Join Command Modal
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;


	if (interaction === 'join') {
		const modal = new ModalBuilder().setCustomId('joinGameNightModal').setTitle('Join Game Night.');


		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
			.setLabel('What\'s your favorite color?')
			.setStyle(TextInputStyle.Short);

		const hobbiesInput = new TextInputBuilder()
			.setCustomId('hobbiesInput')
			.setLabel('What\'s some of your favorite hobbies?')
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);
		const secondActionRow = new ActionRowBuilder().addComponents(hobbiesInput);

		modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
	}
});

// Join/Create Modal Submission message
client.on('interactionCreate', async interaction => {
	if (interaction.type !== InteractionType.ModalSubmit) return;
	if (interaction.customId === 'createGameNightModal' || interaction.customId === 'joinGameNightModal') {
		await interaction.reply({ content: 'Your submission was recieved successfully!' });
	}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);
