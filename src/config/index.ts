import { HexColorString } from 'discord.js';

export interface Config {
	primary_color: HexColorString;
	error_color: HexColorString;
	done_color: HexColorString;
}

const config: Config = {
	primary_color: '#36e38d',
	error_color: '#e33644',
	done_color: '#00ed04'
};

export default config;
