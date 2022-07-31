require('dotenv').config();

const { SlashCommandBuilder, Routes } = require('discord.js');
const { REST } = require('@discordjs/rest');

const token = process.env.DISCORDJS_BOT_TOKEN;
const clientId = process.env.APP_CLIENT_ID;
const guildId = process.env.GUILD_ID;

const commands = [
	new SlashCommandBuilder().setName('subscribe').setDescription('Subscribe to BuddyBot, granting access to features.'),
	new SlashCommandBuilder().setName('unsubscribe').setDescription('Unsubscribe to BuddyBot, removing access to features.'),
	new SlashCommandBuilder().setName('create').setDescription('Create a game night for you and your friends!'),
	new SlashCommandBuilder().setName('join').setDescription('Join one of the open game nights!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);