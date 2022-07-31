const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subscribe')
		.setDescription('BuddyBot will know who you are, enabling all bot features for you.'),
	developer: false,
	async execute(interaction) {
		await interaction.reply({ content: 'I see you 🤖', ephermal: true });
	},


};