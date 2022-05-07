const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `iq`,
    callback: async (message, args, text) => {
        const liczba = Math.floor(Math.random() * 350) + 1
        if (!(message.mentions.users.first())) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Miernik IQ!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`> 「${emotki.okej}」 ${message.author} posiada **${liczba}** IQ!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Miernik IQ!`)
                    .setColor(`${config.kolor_embeda}`)
                    .setDescription(`> 「${emotki.okej}」 ${message.mentions.users.first()} posiada **${liczba}** IQ!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
    }
}
