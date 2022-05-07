var config = require(`../../config.json`)
var client = new Discord.Client()
var package = require(`../../package.json`)
var emotki = require(`../../emotki.json`)
var fs = require(`fs`)
var path = require(`path`)
var os = require('os')
var axios = require(`axios`)
var jsonWriter = require(`fs-json-writer`)

module.exports = {
    commands: `zglos`,
    callback: async (message, args, text, bot) => {
            var wzmianka = message.mentions.users.first()
            if (!wzmianka) {
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(config.kolor_embeda_bledu)
                    .setDescription(`Musisz oznaczyć osobę, którą chcesz zgłosić!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                var powod = args.splice(1).join(` `)
                if (!powod) {
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(config.kolor_embeda_bledu)
                        .setDescription(`Musisz podać powód zgłoszenia!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Sukces!`)
                        .setColor(config.kolor_embeda)
                        .setDescription(`Zgłoszenie zostało pomyślnie wysłane na [serwer developerski](https://discord.gg/frDATJVMgU)!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                    var serwerdev = bot.guilds.cache.get(`756576994552053771`)
                    var kanal = serwerdev.channels.cache.get(`825449236837433381`)
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Zgłoszenie!`)
                        .setColor(config.kolor_embeda)
                        .setDescription(`> 「${emotki.wykrzyknik}」Osoba zgłaszająca: **${message.author} [${message.author.tag}]**\n\n> 「${emotki.gun}」Osoba zgłoszona: **${wzmianka} [${wzmianka.tag}]**\n\n> 「${emotki.support}」Powód zgłoszenia: **${powod}**`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    kanal.send(embed)
                }
            }
        }
    }
