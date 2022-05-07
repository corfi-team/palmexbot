const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `userinfo`,
    callback: async (message, args, text, guild, bot) => {
        var wzmianka = message.mentions.users.first()
        var wzmiankaa = message.mentions.members.first()
        var autor = message.author
            if (!wzmianka) {
                const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Informacje o użytkowniku \`${message.author.username}\`!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「:key:」 Tag: **${autor.discriminator}**\n\n> 「${emotki.papuzka}」 Nickname: **${autor.username}**\n\n> 「:id:」 ID: **${autor.id}**\n\n> 「${emotki.misiaczek}」 Avatar: **[Kliknij](${autor.displayAvatarURL({ dynamic: true })})**\n\n> 「:date:」 Data założenia konta: **${autor.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**\n\n> 「:date:」 Data dołączenia na serwer: **${message.member.joinedAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
                        .setThumbnail(`${autor.displayAvatarURL({ dynamic: true })}`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
            }
            else {
                const embed = new Discord.MessageEmbed()
                embed
                    .setTitle(`Informacje o użytkowniku \`${wzmianka.username}!\``)
                    .setColor(`${config.kolor_embeda}`)
                    .setDescription(`> 「:key:」 Tag: **${wzmianka.discriminator}**\n\n> 「${emotki.papuzka}」 Nickname: **${wzmianka.username}**\n\n> 「:id:」 ID: **${wzmianka.id}**\n\n> 「${emotki.misiaczek}」 Avatar: **[Kliknij](${wzmianka.displayAvatarURL({ dynamic: true })})**\n\n> 「:date:」 Data założenia konta: **${wzmianka.createdAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**\n\n> 「:date:」 Data dołączenia na serwer: **${wzmiankaa.joinedAt.toLocaleString('pl-PL', { dateStyle: 'short' })}**`)
                    .setThumbnail(`${wzmianka.displayAvatarURL({ dynamic: true })}`)
                    .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
            }
    }
}