const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('create')
		.setDescription('Create a new game event for you and your buddies'),
	developer: false,
	async execute(interaction) {
		await interaction.reply({ content: 'Party time 😎', ephermal: true });

		const client = interaction.client;
		const creator = client.users.cache.get(interaction.member.user.id);

		creator.send('Let\'s get this party started.....');

		client.on;

	},


};