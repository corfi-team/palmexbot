const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `usun`,
    callback: async (message, args, text, bot) => {

        if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Nie posiadasz uprawnień!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            if (!(args[0])) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Musisz podać ilość!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                if (Number.isNaN(+args[0])) {
                    const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(`${config.kolor_embeda_bledu}`)
                        .setDescription(`Podana ilość jest nieprawidłowa!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    if ((args[0]) > 100) {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(`${config.kolor_embeda_bledu}`)
                            .setDescription(`Ilość nie może przekraczać 100!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                    }
                    else {
                        const embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Sukces!`)
                            .setColor(config.kolor_embeda)
                            .setDescription(`Administrator ${message.author} usunął ${args[0]} wiadomości!`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.bulkDelete(args[0]).then(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(config.kolor_embeda)
                                .setDescription(`> 「${emotki.wykrzyknik}」Administrator ${message.author} usunął ${args[0]} wiadomości!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                            return
                        }).catch(() => {
                            const embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(`${config.kolor_embeda_bledu}`)
                                .setDescription(`Bot nie może usuwać wiadomości starszych niż 14 dni!`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        });
                    }
                }
            }
        }
    }
}