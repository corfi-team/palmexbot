const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)

module.exports = {
    commands: `pingpong`,
    callback: async (message, args, text) => {
        const liczba = Math.floor(Math.random() * 2) + 1
        if ((liczba) === 1) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Ping Pong!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`> 「:ping_pong:」** ${message.author}!** \n \nEhhhh, wygrałeś. Zagramy później jeszcze raz?`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Ping Pong!`)
                .setColor(`${config.kolor_embeda}`)
                .setDescription(`> 「:ping_pong:」** ${message.author}!** \n \nNo cóż, niestety przegrałeś. Zagramy później jeszcze raz?`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
    }
}