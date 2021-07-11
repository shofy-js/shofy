const Discord = require('discord.js')
const
{
    inspect
} = require('util');

module.exports = {
    name: 'args',
    description: 'Example of the use of args in a command.',
    commandOptions: [
    {
        type: 3,
        name: "args1",
        description: "Whatever you want :)",
        required: true
    }],
    global: true,
    async execute(interaction)
    {
        const Args = interaction.data.options[0].value

        try
        {
            client.api.interactions(interaction.id, interaction.token).callback.post(
            {
                data:
                {
                    type: 4,
                    data:
                    {
                        content: `${Args}`
                    }
                }
            })
        }
        catch (error)
        {
            client.api.interactions(interaction.id, interaction.token).callback.post(
            {
                data:
                {
                    type: 4,
                    data:
                    {
                        content: `Ha sucedido un error, disculpe las molestias.`
                    }
                }
            })
        }
    },
};
