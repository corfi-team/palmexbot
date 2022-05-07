const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `cicho`,
    callback: async (message, args, text) => {
        const wzmianka = message.mentions.users.first()
        if (!wzmianka) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`Oznacz osobę, którą chcesz uciszyć!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Bądź cicho ${wzmianka.username}!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`> 「:face_with_symbols_over_mouth:」 **__${wzmianka.username}__** czy możesz w końcu się zamknąć?!`)
                .setImage(`https://i.imgur.com/87Joika.gif`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}