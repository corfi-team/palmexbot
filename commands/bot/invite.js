const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `invite`,
    callback: async (message, args, text) => {
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Invite linki!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> **[DODAJ BOTA](https://discord.com/api/oauth2/authorize?client_id=824219968669351936&permissions=8&scope=bot) \n> [DOŁĄCZ NA SERWER DEV](https://discord.gg/frDATJVMgU)**`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}