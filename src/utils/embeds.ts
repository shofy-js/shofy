import config from '../config';
import { MessageEmbed as Embed, User } from 'discord.js';

export const UsageEmbed = (usage: string, author: User): Embed => {
	return new Embed()
		.setTitle('Wrong usage of command')
		.setDescription('Correct usage: `' + +usage + '`')
		.setFooter(
			'Command requested by ' + author.tag + ' (' + author.id + ')',
			author.displayAvatarURL()
		)
		.setColor(config.error_color);
};
