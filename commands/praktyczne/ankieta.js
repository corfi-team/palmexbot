const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `ankieta`,
    callback: async (message, args, text) => {
        let tresc = args.join(" ")
        if (!tresc) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Podaj treść swojej ankiety!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
        }

        else {
            let ankieta = new Discord.MessageEmbed()
                .setTitle("ANKIETA")
                .setColor(`${config.kolor_embeda}`)
                .setDescription(tresc)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(ankieta).then(async embedMessage => {
                await embedMessage.react(`${emotki.tak}`)
                await embedMessage.react(`${emotki.nie}`)
            })
        }
    }
}