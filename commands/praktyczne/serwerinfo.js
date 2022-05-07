const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `serwerinfo`,
    callback: async (message, args, text, guild, bot) => {
        const user = message.mentions.users.first();
    const embed = new Discord.MessageEmbed()
    embed
        .setTitle(`Informacje o serwerze \`${message.guild.name}\`!`)
        .setColor(`${config.kolor_embeda}`)
        .setDescription(`> 「${emotki.korona}」 Właścicielem tego serwera jest ${message.guild.owner}.\n\n> 「${emotki.klodka}」ID tego serwera to \`${message.guild.id}\`.\n\n> 「${emotki.globus}」Ten serwer przebywa na regionie \`${message.guild.region}\`.\n\n> 「:file_folder:」Ten serwer posiada łącznie \`${message.guild.channels.cache.size}\` kanałów. \n\n> 「:microphone2:」\`${message.guild.channels.cache.filter((c) => c.type == "voice").size}\` kanałów głosowych \n> 「:speech_balloon:」\`${message.guild.channels.cache.filter((c) => c.type == "text").size}\` kanałów tekstowych \n> 「:gear:」\`${message.guild.channels.cache.filter((c) => c.type == "category").size}\` kategorii. \n\n> 「${emotki.ludzie}」 Na tym serwerze przebywa \`${message.guild.members.cache.size}\` osób. \n\n> 「${emotki.nitro}」 Serwer został utworzony dnia \`${message.guild.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}\`.`)
        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
// user.toString() (lub samo user) - wzmianka
// user.id - id
// user.tag - tag
// user.username - nick
    }
}