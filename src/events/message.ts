import { Message } from 'discord.js';
import { writeFileSync } from 'fs';
import { Event } from '../lib/types.d';
import { join } from 'path';

const event: Event = {
	name: 'messageCreate',
	execute(client, message: Message) {
		const prod: boolean = typeof process.env.IS_PROD !== 'undefined';
		if (
			message.content === 'd?rmcmds' &&
			message.author.id === '594767454765449227'
		) {
			client.guilds.cache.get('863409043783155763')?.commands.set([]);
			client.application?.commands.set([]);
			writeFileSync(
				join(
					__dirname,
					'..',
					'.cache',
					!prod ? 'loaded-local-cmds.json' : 'loaded-cmds.json'
				),
				'[]'
			);
		}
	}
};

export default event;
