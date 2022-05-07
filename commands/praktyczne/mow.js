const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `mow`,
    callback: async (message, args, text) => {
        let wiad = args.join(" ")
        if (!wiad) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Podaj treść swojej wypowiedzi!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }

        else {
            let ankieta = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} mówi:`)
                .setColor(`RANDOM`)
                .setDescription(`\`${wiad}\``)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))

            message.channel.send(ankieta)
            }
        }
    }
