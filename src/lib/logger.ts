import { ILogger } from './types';
import chalk from 'chalk';

export const log: ILogger = (...args: unknown[]): void => {
	const date = new Date();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const hours = date.getHours();

	console.log(
		`[${chalk.blueBright('LOG')}] [${hours}:${minutes}:${seconds}]`,
		...args
	);
};

export const error: ILogger = (...args: unknown[]): void => {
	const date = new Date();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const hours = date.getHours();

	console.log(
		`[${chalk.redBright('ERROR')}] [${hours}:${minutes}:${seconds}]`,
		...args
	);
};
