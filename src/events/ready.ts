import { Event } from '../lib/types';
import { log } from '../lib/logger';

const event: Event = {
	name: 'ready',
	execute: () => {
		log('Bot connected to discord');
	}
};

export default event;
