const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `nowosc`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Nowości!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(` > **Data aktualizacji: 24.03.2021** \n \nZa dużo nowości aby je wymieniać...`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}