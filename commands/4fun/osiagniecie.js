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
    commands: `osiagniecie`,
    callback: async (message, args, text, bot) => {
                if (!args[0]) {
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(config.kolor_embeda_bledu)
                        .setDescription(`${emotki.nie} Musisz podać nazwę osiągnięcia!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    var numer = Math.floor(Math.random() * 38) + 1
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Osiągnięcie!`)
                        .setColor(config.kolor_embeda)
                        .setImage(`https://www.minecraftskinstealer.com/achievement/a.php?i=${numer}&h=Zdobyto+osiagniecie!&t=${args.splice(0).join(`%20`)}`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
            }
        }
    
