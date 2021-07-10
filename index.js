const Discord = require('discord.js');
const fs = require('fs');
const colors = require('colors');
const { Player } = require('discord-player');

var currentdate = new Date();
var datetime =
	'[' +
	currentdate.getDate() +
	'/' +
	(currentdate.getMonth() + 1) +
	'/' +
	currentdate.getFullYear() +
	' @ ' +
	currentdate.getHours() +
	':' +
	currentdate.getMinutes() +
	':' +
	currentdate.getSeconds() +
	'] ';

colors.setTheme({
	input: 'grey',
	debug: 'blue',
	error: 'red',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
});

const client = new Discord.Client();
client.commands = new Discord.Collection();

global.client = client;

const player = new Player(client);
client.player = player;

process.on('unhandledRejection', (error) => {
	console.log(datetime + `UnhandledPromiseRejection : ${error}\n`.error);
});

client.player.on('trackStart', (track) => {
	console.log(datetime + `${track}`);
});

client.on('ready', async () => {
	var currentdate = new Date();
	var datetime =
		'[' +
		currentdate.getDate() +
		'/' +
		(currentdate.getMonth() + 1) +
		'/' +
		currentdate.getFullYear() +
		' @ ' +
		currentdate.getHours() +
		':' +
		currentdate.getMinutes() +
		':' +
		currentdate.getSeconds() +
		'] ';

	console.log(
		datetime +
			`Connected to the discord Gateway succesfully, as: ${client.user.tag}`
				.info
	);
	client.user
		.setActivity(`Chiqui's Tests`, {
			type: 'PLAYING',
		})
		.then((presense) =>
			console.log(datetime + `Set presense : ${presense.activities[0]}`.info)
		)
		.catch(console.error);

	const commandFiles = fs
		.readdirSync('./src/cmds/')
		.filter((file) => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./src/cmds/${file}`);

		client.api
			.applications(client.user.id)
			.guilds('746386883679879348')
			.commands.post({
				data: {
					name: command.name,
					description: command.description,
					options: command.commandOptions,
				},
			});

		if (command.global == true) {
			client.api.applications(client.user.id).commands.post({
				data: {
					name: command.name,
					description: command.description,
					options: command.commandOptions,
				},
			});
		}

		client.commands.set(command.name, command);
		console.log(
			datetime +
				`Command POST : ${command.name} from ${file} (${
					command.global ? 'global' : 'guild'
				})`.input
		);
	}

	let cmdArrGlobal = await client.api
		.applications(client.user.id)
		.commands.get();
	let cmdArrGuild = await client.api
		.applications(client.user.id)
		.guilds('746386883679879348')
		.commands.get();
	cmdArrGlobal.forEach((element) => {
		console.log(
			datetime +
				'Global command loaded : ' +
				element.name +
				' (' +
				element.id +
				')'.input
		);
	});
	cmdArrGuild.forEach((element) => {
		console.log(
			datetime +
				'Guild command loaded : ' +
				element.name +
				' (' +
				element.id +
				')'.input
		);
	});
});

client.ws.on('INTERACTION_CREATE', async (interaction) => {
	var currentdate = new Date();
	var datetime =
		'[' +
		currentdate.getDate() +
		'/' +
		(currentdate.getMonth() + 1) +
		'/' +
		currentdate.getFullYear() +
		' @ ' +
		currentdate.getHours() +
		':' +
		currentdate.getMinutes() +
		':' +
		currentdate.getSeconds() +
		'] ';

	if (!client.commands.has(interaction.data.name)) return;

	try {
		client.commands.get(interaction.data.name).execute(interaction);
		console.log(
			datetime + `The command ${interaction.data.name} has been used.`.debug
		);
	} catch (error) {
		console.log(datetime + `Error from command ${interaction.data.name}`.error);
		console.log(`${error.stack}\n`);
		client.api.interactions(interaction.id, interaction.token).callback.post({
			data: {
				type: 4,
				data: {
					content: `Sorry, there was an error executing that command!`,
				},
			},
		});
	}
});

client.on('debug', (debug) => {
	var currentdate = new Date();
	var datetime =
		'[' +
		currentdate.getDate() +
		'/' +
		(currentdate.getMonth() + 1) +
		'/' +
		currentdate.getFullYear() +
		' @ ' +
		currentdate.getHours() +
		':' +
		currentdate.getMinutes() +
		':' +
		currentdate.getSeconds() +
		'] ';

	console.log(datetime + debug.help);
});

client.login('TEST_TOKEN');
