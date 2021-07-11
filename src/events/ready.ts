import { Client } from 'discord.js';
import { Event } from '../lib/types';
import { log } from '../lib/logger';
import chalk from 'chalk';

const event: Event = {
	name: 'ready',
	execute: (client: Client) => {
		log('-----------------');
		log(` ${client.user?.username} ${chalk.green('ready')}!`);
		log('-----------------');
	}
};

export default event;
