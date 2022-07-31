require('dotenv').config();

const { Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const token = process.env.DISCORDJS_BOT_TOKEN;
const clientId = process.env.APP_CLIENT_ID;
const guildId = process.env.DEVELOPER_GUILD_ID;

const rest = new REST({ version: '10' }).setToken(token);


rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);