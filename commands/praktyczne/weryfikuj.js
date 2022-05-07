const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `weryfikuj`,
    callback: async (message, args, text) => {
        if (message.guild.id === "756576994552053771") {
            if (!(message.channel.id === `824960740317200435`)) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Komenda działa tylko na kanale <#824960740317200435>`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                message.member.roles.add([`824959455657066526`])
                .then(() => {message.delete()})

                const embed = new Discord.MessageEmbed()
                embed
                    .setColor(`${config.kolor_embeda}`)
                    .setDescription(`> **「${emotki.tak}」 Zostałeś/aś pomyślnie zweryfikowany/a!**`)
                message.author.send(embed).then(x => {setTimeout, (() => {x.delete()}); 5000})
            }
        } else {
            const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Komenda obecnie działa tylko na [serwerze developerskim](https://discord.gg/uwD2WJsTzy)!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
        }
    }
}