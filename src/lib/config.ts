import { ClientOptions } from 'discord.js';

export interface Config {
	client: ClientOptions;
}

const config: Config = {
	client: {
		partials: ['MESSAGE', 'CHANNEL'],
		intents: ['GUILDS', 'GUILD_MESSAGES']
	}
};

export default config;
