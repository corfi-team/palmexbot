const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const emotki = require(`../../emotki.json`)
const fs = require(`fs`)
const path = require(`path`)
const os = require('os')
const axios = require(`axios`)
const jsonWriter = require(`fs-json-writer`)

module.exports = {
    commands: `ustawemail`,
    callback: async (message, args, text, bot) => {
        var dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        if (dbmembersfiles.includes(message.author.id)) {
            var dbmembers = require(`../../db/members/${message.author.id}.json`)
            const myHumanJson = {
                imie: dbmembers.imie,
                wiek: dbmembers.wiek,
                email: args.join(" ")
            };

            jsonWriter({

                path: path.join(__dirname, `../../db/members/${message.author.id}.json`),

                state: myHumanJson
            });
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Sukces!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`Pomyślnie ustawiono twój \`email\`. Wpisz komendę \`${config.prefix}profil\` aby ujrzeć rezultaty.`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const myHumanJson = {
            };

            jsonWriter({

                path: path.join(__dirname, `../../db/members/${message.author.id}.json`),

                state: myHumanJson
            });
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Sukces!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`> 「${emotki.tak}」 Zostałeś/aś pomyślnie dodany do bazy danych. Wpisz komendę ponownie, aby ujrzeć rezultaty!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}