const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)
const axios = require(`axios`)


module.exports = {
    commands: `meme`,
    callback: async (message, args, text, bot) => {  
                var embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Mem!`)
                    .setColor(config.kolor_embeda)
                    .setDescription(`> 「:joy:」 Oto mem dla ciebie!`)
                    .setImage(`https://braslerl-api.herokuapp.com/meme`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
        }
