const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unsubscribe')
		.setDescription('BuddyBot will now leave you alone.'),
	developer: false,
	async execute(interaction) {
		await interaction.reply({ content: 'Was it something I said? 😭', ephermal: true });
	},


};