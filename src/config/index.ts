import { Snowflake } from 'discord.js';

type HexColorString = `#${string}`

export interface Config {
	primary_color: HexColorString;
	error_color: HexColorString;
	done_color: HexColorString;
	dev_server: Snowflake;
}

const config: Config = {
	primary_color: '#36e38d',
	error_color: '#e33644',
	done_color: '#00ed04',
	dev_server: (process.env.DEV_SERVER || '863409043783155763') as Snowflake 
};

export default config;
