import { Command } from 'lib/types';
import config from '../config';
import { MessageEmbed as Embed } from 'discord.js';

const command: Command = {
	name: 'ping',
	description: 'Here you can receive the current latency of the bot.',
	execute(client, interaction) {
		const embed = new Embed()
			.setTitle('Ping: ' + client.ws.ping)
			.setFooter(`Command requested by ${interaction.user.tag}`,
				interaction.user.displayAvatarURL()
			)
			.setColor(config.done_color);

		interaction.reply({ embeds: [embed] });
	}
};

export default command;
