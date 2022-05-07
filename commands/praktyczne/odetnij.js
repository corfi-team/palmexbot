const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `odetnij`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`-------------------------------------------------------`)
                        .setColor(`${config.kolor_embeda}`)
                    message.channel.send(embed)
    }
}