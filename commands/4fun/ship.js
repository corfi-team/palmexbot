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
    commands: `ship`,
    callback: async (message, args, text, bot) => {
            var [pierwszy, drugi] = message.mentions.users.keyArray();
            if (!pierwszy || !drugi) {
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Błąd!`)
                    .setColor(config.kolor_embeda_bledu)
                    .setDescription(` Musisz oznaczyć dwie różne osoby!`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
            else {
                var liczba = Math.floor(Math.random() * 100) + 1
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Ship!`)
                    .setColor(config.kolor_embeda)
                    .setDescription(`> 「:heart:」 <@${pierwszy}> + <@${drugi}> = **${liczba}%**`)
                    .setImage(`https://braslerl-api.herokuapp.com/progressbar?number=${liczba}&back_color=000000&front_color=FFFFFF`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
    }
