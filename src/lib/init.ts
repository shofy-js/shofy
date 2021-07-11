import { Client } from 'discord.js';
import { start } from './bot';
import { log } from './logger';
import client_options from './config';

export default async (env: NodeJS.ProcessEnv): Promise<void> => {
	log('Starting bot...');
	const started_time = new Date().getTime();
	const client = new Client(client_options.client);
	log('Bot created');

	await start(
		client,
		(events, commands) => {
			const done_time = new Date().getTime() - started_time;

			log(`Loaded ${events.length} event(s) and ${commands.length} command(s)`);
			log(`Bot started in ${done_time}ms`);
		},
		env.TOKEN
	);
};
