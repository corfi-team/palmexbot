const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `kick`,
    callback: async (message, args, text, bot) => {

        if (!message.member.permissions.has(`KICK_MEMBERS`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Nie posiadasz uprawnień!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(message.mentions.members.first())) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Musisz oznaczyć osobę!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (!(args[1])) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(`${config.kolor_embeda_bledu}`)
                        .setDescription(`Musisz podać powód!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    message.mentions.members.first().kick({ reason: `Administrator: ${message.author.tag}` }).then((member) => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Wyrzucono użytkownika!`)
                            .setColor(config.kolor_embeda)
                            .setDescription(`> 「${emotki.wykrzyknik}」 Administrator: **${message.author}**\n\n> 「${emotki.ludzie}」 Osoba: **${message.mentions.members.first()}**\n\n> 「${emotki.support}」 Powód: **${args.splice(1).join(` `)}**\n\n> 「${emotki.klodka}」 Serwer: **${message.guild.name}**`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        message.mentions.users.first().send(embed).catch(() => { return })
                    }).catch(() => {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(`${config.kolor_embeda_bledu}`)
                            .setDescription(`Bot nie posiada uprawnień!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    });
                }
            }
        }
    }
}