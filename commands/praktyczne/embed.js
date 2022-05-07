const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)


module.exports = {
    commands: `embed`,
    callback: async (message, args) => {
        const text = args.join(" ").split("|");
        const title = text[0]
        const desc = text[1]

        if (!title) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Podaj tytuł swojego embeda!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)

        }


        else {
            if (!desc) {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Podaj treść swojego embeda!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            } 

            else {
                let ankieta = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setColor(`RANDOM`)
                    .setDescription(desc)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(ankieta)
            }

        }
    }
}

