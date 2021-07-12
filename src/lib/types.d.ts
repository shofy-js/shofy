import {
	ApplicationCommandOptionData,
	Client,
	CommandInteraction
} from 'discord.js';

export interface CommandOptions {
	type: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
	name: string;
	description: string;
	required?: boolean;
	options?: CommandOptions;
	choices?: Array<{
		name: string;
		value: string | number;
	}>;
}

export interface Command {
	name: string;
	description: string;
	execute: (
		client: Client,
		interaction: CommandInteraction
	) => Promise<unknown> | unknown;
	commandOptions?: ApplicationCommandOptionData[];
}

export interface Event {
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	execute: (client: Client, ...args: any[]) => Promise<void> | void;
}

export interface ILogger {
	(...args: unknown[]): void;
}

interface Default<T> {
	default: T;
}
