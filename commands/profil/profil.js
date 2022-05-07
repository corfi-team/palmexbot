const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const os = require('os')
const axios = require(`axios`)
const jsonWriter = require(`fs-json-writer`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `profil`,
    callback: async (message, args, text, bot) => {
        var dbmembersfiles = fs.readdirSync(`db/members`).join(`, `).replace(/\.json/gi, ``)
        var wzmianka = message.mentions.users.first()
        if (!wzmianka) {
            if (dbmembersfiles.includes(message.author.id)) {
                var dbmembers = require(`../../db/members/${message.author.id}.json`)
                var imie = dbmembers.imie || `---`
                var wiek = dbmembers.wiek || `---`
                var email = dbmembers.email || `---`
                var permisja = dbmembers.permisja || `---`
                var odznaki = dbmembers.odznaki || `---`
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Profil użytkownika ${message.author.username}!`)
                    .setColor(`${config.kolor_embeda}`)
                    .setDescription(`> 「${emotki.wprawo}」 Informacje o użytkowniku: \n\n> 「${emotki.misiaczek}」 Imię: **${imie}**.\n> 「${emotki.klodka}」 Wiek: **${wiek}**. \n> 「${emotki.globus}」 E-mail: **${email}**.\n\n> 「${emotki.wprawo}」 Informacje o koncie discord: \n\n> 「${emotki.pepenotes}」 Nick oraz tag: **${message.author.tag}**.\n> 「${emotki.support}」 Discord ID: **${message.author.id}**.\n> 「:calendar:」 Data utworzenia konta: **${message.author.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**.\n\n> 「${emotki.wprawo}」 Informacje globalne: \n\n> 「${emotki.swiatelko}」 Permisje globalne: **${permisja}**.\n> 「${emotki.support}」 Odznaki globalne: **${odznaki}**.`)
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
        else {
            if (dbmembersfiles.includes(wzmianka.id)) {
                var dbmembers = require(`../../db/members/${wzmianka.id}.json`)
                var imie = dbmembers.imie || `---`
                var wiek = dbmembers.wiek || `---`
                var email = dbmembers.email || `---`
                var permisja = dbmembers.permisja || `---`
                var odznaki = dbmembers.odznaki || `---`
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Profil użytkownika ${wzmianka.username}!`)
                    .setColor(`${config.kolor_embeda}`)
                    .setDescription(`> 「${emotki.wprawo}」 Informacje o użytkowniku: \n\n> 「${emotki.misiaczek}」 Imię: **${imie}**.\n> 「${emotki.klodka}」 Wiek: **${wiek}**. \n> 「${emotki.globus}」 E-mail: **${email}**.\n\n> 「${emotki.wprawo}」 Informacje o koncie discord: \n\n> 「${emotki.pepenotes}」 Nick oraz tag: **${wzmianka.tag}**.\n> 「${emotki.support}」 Discord ID: **${wzmianka.id}**.\n> 「:calendar:」 Data utworzenia konta: **${wzmianka.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**.\n\n> 「${emotki.wprawo}」 Informacje globalne: \n\n> 「${emotki.swiatelko}」 Permisje globalne: **${permisja}**.\n> 「${emotki.support}」 Odznaki globalne: **${odznaki}**.`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(`${config.kolor_embeda_bledu}`)
                    .setDescription(`Niestety użytkownika ${wzmianka} nie ma w naszej bazie danych. Jeśli jest to twój znajomy/a to zachęć go do wpisania komendy \`${config.prefix}profil\``)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
}