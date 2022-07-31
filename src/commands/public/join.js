const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Join one of the open gaming events.'),
	developer: false,
	async execute(interaction) {
		await interaction.reply({ content: 'Welcome to the party 🎉', ephermal: true });
	},


};