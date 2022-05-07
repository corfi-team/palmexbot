const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `peperoni`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Peperoni!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「:pizza:」 Zakręć pizze razem z Pepe'm!`)
                        .setImage(`https://i.imgur.com/XWUmDKn.gif`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}