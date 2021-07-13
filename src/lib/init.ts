import { Client } from 'discord.js';
import { start } from './bot';
import { log } from './logger';
import client_options from './config';
import load_cache from './cache';
import chalk from 'chalk';

export default async (env: NodeJS.ProcessEnv): Promise<void> => {
	log('Starting bot...');
	const started_time = new Date().getTime();
	const client = new Client(client_options.client);
	log('Bot created');

	await start(
		client,
		(events) => {
			const prod: boolean = typeof process.env.IS_PROD !== 'undefined';
			const done_time = new Date().getTime() - started_time;

			log('-----------------');
			log(` ${client.user?.username} ${chalk.green('ready')}!`);
			log('-----------------');

			log(
				`${events.length} event(s), ${
					(client.application?.commands.cache.size || 0) +
					(
						load_cache<string[]>(!prod ? 'loaded-local-cmds' : 'loaded-cmds', {
							val: true,
							contents: '[]'
						}) || []
					).length
				} command(s)`
			);
			log(`Bot started in ${done_time}ms`);
		},
		env.TOKEN
	);
};
