module.exports = {
	name: 'ping',
	description: 'Ping pong! Here you can receive the current response time of the bot.',
	commandOptions: null,
	global: true,
	execute(interaction) {
		
		client.api.interactions(interaction.id, interaction.token).callback.post({data: {
			type: 4,
			data: {
					content: `:ping_pong: Pong: ${client.ws.ping}!`
				}
			}
		})
	},
};