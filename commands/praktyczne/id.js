const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `id`,
    callback: async (message, args, text) => {
        const user = message.mentions.users.first();
if (!user) {
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`Błąd!`)
        .setColor(`${config.kolor_embeda_bledu}`)
        .setDescription(`Oznacz osobę, której ID chcesz sprawdzić!`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
}

else {
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`ID!`)
        .setColor(`${config.kolor_embeda}`)
        .setDescription(`> 「${emotki.tak}」ID użtykownika ${user} to: \`${user.id}\``)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
}
// user.toString() (lub samo user) - wzmianka
// user.id - id
// user.tag - tag
// user.username - nick
    }
}