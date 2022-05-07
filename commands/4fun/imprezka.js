const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `imprezka`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Imprezka!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「:partying_face:」 Zabaw się ze Zbigniewem Stonogą! Auauauau!`)
                        .setImage(`https://i.imgur.com/XY1vsMF.gif`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}