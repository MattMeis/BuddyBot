function loadCommands(client) {
	const asciiTable = require('ascii-table');
	const fs = require('fs');
	const table = new asciiTable().setHeading('Commands', 'Status');

	const commandsArray = [];
	const developerArray = [];

	const commandsFolder = fs.readdirSync('./src/commands');

	for (const folder of commandsFolder) {
		const commandFiles = fs.readdirSync(`./src/commands/${folder}`)
			.filter((file) => file.endsWith('.js'));

		for (const file of commandFiles) {
			const commandFile = require(`../commands/${folder}/${file}`);

			client.commands.set(commandFile.data.name, commandFile);

			if (commandFile.developer) developerArray.push(commandFile.data.toJSON());
			else commandsArray.push(commandFile.data.toJSON());

			table.addRow(file, '🟢');
			continue;
		}
	}

	client.application.commands.set(commandsArray);

	const developerGuild = client.guilds.cache.get(process.env.DEVELOPER_GUILD_ID);

	developerGuild.commands.set(developerArray);

	return console.log(table.toString(), '\n Loaded Commands');
}

module.exports = { loadCommands };