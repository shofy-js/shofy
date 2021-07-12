import { Command } from 'lib/types';

const command: Command = {
	name: 'echo',
	description: 'Reply with your args',
	commandOptions: [
		{
			type: 3,
			name: 'cmd_args',
			description: 'Whatever you want :)',
			required: true
		}
	],
	async execute(_, interaction) {
		const args = (interaction.options.get('cmd_args')?.value || '').toString();
		interaction.reply(args);
	}
};

export default command;
