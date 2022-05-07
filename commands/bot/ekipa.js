const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `ekipa`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Ekipa PalmexBOT'a`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`**Jesteśmy aktywni 24/7, więc, gdy masz problem nasz support przyjdzie do Ciebie z pomocą!** \n\n> 「${emotki.korona}」Właściciel: \n\n> <@!419105141153857538> **[Miloszkzy#7152]** \n\n\n\n> 「${emotki.klodka}」 Opiekun: \n\n> __Aktualnie brak__\n\n\n\n> 「${emotki.wykrzyknik}」 Administracja: \n\n> __Aktualnie brak__\n\n\n\n> 「${emotki.support}」 Support: \n\n> <@!824346218653548545> **[Majusia <3#6614]**`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}