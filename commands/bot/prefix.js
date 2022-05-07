const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `prefix`,
    callback: async (message, args, text, bot) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Prefix!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「${emotki.support}」Mój obecny prefix to **${config.prefix}**.`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}