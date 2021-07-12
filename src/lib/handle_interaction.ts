import { join } from 'path';
import { error, log } from './logger';
import { Default, Command } from './types';
import config from '../config';
import {
	Client,
	Collection,
	CommandInteraction,
	MessageEmbed as Embed
} from 'discord.js';
import load_cache from './cache';
import fs from 'fs';

export default async (
	client: Client,
	command_files: string[],
	path: string
): Promise<Array<Command>> => {
	const commands = new Collection<string, Command>();
	const command_arr: Array<Command> = [];
	const prod: boolean = typeof process.env.IS_PROD !== 'undefined';
	const loaded_cmds: string[] =
		load_cache<string[]>(!prod ? 'loaded-local-cmds' : 'loaded-cmds', {
			val: true,
			contents: '[]'
		}) || [];

	for (let i = 0; i < command_files.length; i++) {
		const cmd_path: string = join(path, command_files[i]);
		const cmd: Default<Command> = (await import(cmd_path)) as Default<Command>;
		if (cmd.default) {
			commands.set(cmd.default.name, cmd.default);
			command_arr.push({
				...cmd.default,
				name: cmd.default.name?.toLowerCase()
			});

			if (!loaded_cmds.includes(cmd.default.name)) {
				log('New command added: ' + cmd.default.name);
				loaded_cmds.push(cmd.default.name);
			}

			fs.writeFileSync(
				join(
					__dirname,
					'..',
					'.cache',
					(!prod ? 'loaded-local-cmds' : 'loaded-cmds') + '.json'
				),
				JSON.stringify(loaded_cmds)
			);
		}
	}

	client.on('interactionCreate', async (pre_interaction) => {
		if (!pre_interaction.isCommand()) return;
		const interaction: CommandInteraction = pre_interaction as CommandInteraction;
		if (!commands.has(interaction.commandName)) return;
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const cmd: Command = commands.get(interaction.commandName)!;

		log(`Requested command '${cmd.name}'`);

		try {
			await cmd.execute(client, interaction);
		} catch (e) {
			const error_embed = new Embed()
				.setTitle(
					'There was an error while running the requested command ' + cmd.name
				)
				.setDescription(
					`\`${e}\`\n\nPlease open an issue in https://github.com/shofy-js/shofy/issues`
				)
				.setFooter(
					'Command requested by ' +
						interaction.user.tag +
						' (' +
						interaction.user.id +
						')',
					interaction.user.displayAvatarURL()
				)
				.setColor(config.error_color);

			error(`Error while running '${cmd.name}': ${e}`);

			interaction.reply({ embeds: [error_embed] });
		}
	});

	log('Loaded commands');

	return command_arr;
};
