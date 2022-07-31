module.exports = {
	name: 'interactionCreate',
	execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (!command) return interaction.reply({ content: 'Something is wrong with this command.' });

		command.execute(interaction, client);

	},
};