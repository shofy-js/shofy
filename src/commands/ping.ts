import { Command } from 'lib/types';
import config from '../config';
import { MessageEmbed as Embed } from 'discord.js';

const command: Command = {
	name: 'ping',
	description:
		'Ping pong! Here you can receive the current response time of the bot.',
	execute(client, interaction) {
		const embed = new Embed()
			.setTitle('Ping: ' + client.ws.ping)
			.setFooter(
				'Command requested by ' + interaction.user.tag,
				interaction.user.displayAvatarURL()
			)
			.setColor(config.done_color);

		interaction.reply({ embeds: [embed] });
	}
};

export default command;
