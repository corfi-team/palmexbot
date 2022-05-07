const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `pepe`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Pepe!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「:frog:」Wskakuj na kuraka koleszko!`)
                        .setImage(`https://i.imgur.com/kMyWtM0.gif`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}