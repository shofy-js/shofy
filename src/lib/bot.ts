import fs from 'fs';
import { join } from 'path';
import { Command, Default, Event } from './types';
import { error, log } from './logger';
import handle_interaction from './handle_interaction';
import { Client } from 'discord.js';

export async function start(
	client: Client,
	callback: (
		events: Event[],
		commands: Command[],
		client: Client
	) => void | Promise<void>,
	token: string | undefined
): Promise<void> {
	const commands: Command[] = await handle_interaction(
		client,
		fs.readdirSync(join(__dirname, '..', 'commands')),
		join(__dirname, '..', 'commands')
	);

	const events: Event[] = await load_events(
		client,
		join(__dirname, '..', 'events')
	);

	client.on('ready', async () => {
		for (let i = 0; i < commands.length; i++) {
			const cmd = commands[i];

			await client.application?.fetch();

			await client.application?.commands
				.create({
					name: cmd.name,
					description: cmd.description,
					options: cmd.commandOptions
				})
				.catch(error);
		}

		await callback(events, commands, client);
	});

	await client.login(token);
}

export async function load_events(
	client: Client,
	p: string
): Promise<Array<Event>> {
	const dir: string[] = fs
		.readdirSync(p)
		.filter((file) => file.endsWith('.ts') || file.endsWith('.js'));
	const events: Array<Event> = [];

	dir.forEach(
		async (file: string): Promise<void> => {
			type DefaultEvent = Default<Event>;
			const cmd: DefaultEvent = (await import(join(p, file))) as DefaultEvent;
			const event = cmd.default;

			events.push(cmd.default);
			client.on(
				event.name,
				async (...args: unknown[]): Promise<void> => {
					log('Called event ' + event.name);
					await event.execute(client, args);
				}
			);
		}
	);

	log('Loaded events');

	return events;
}
