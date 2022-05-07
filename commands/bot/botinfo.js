const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `botinfo`,
    callback: async (message, args, text, bot) => {
        var totalSeconds = (bot.uptime / 1000);
        var days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);
        var botuptime = (days > 0 ? days + "d, " : "") + (hours > 0 ? hours + "h, " : "") + (minutes > 0 ? minutes + "m, " : "") + (seconds > 0 ? seconds + "s" : "")
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Informacje!`)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> 「${emotki.korona}」 Właściciel bota: <@!419105141153857538> **[\`Miloszkzy#7152\`]** \n\n> 「${emotki.uptime}」 Uptime: **${botuptime}**\n\n> 「${emotki.pamiecram}」 Zużycie ramu: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB** \n\n> 「:file_cabinet:」 Serwery: **${bot.guilds.cache.size}** \n\n> 「${emotki.ludzie}」 Liczba użytkowników: **${bot.users.cache.size}** \n\n> 「${emotki.discordjs}」 Posiadana wersja discord.js: **^12.15.1** \n\n> 「${emotki.nodejs}」 Posiadana wersja node.js: **15.12.0** \n\n> 「:diamond_shape_with_a_dot_inside:」 Dostępne shardy: **1** \n\n> 「${emotki.krysztalki}」 System operacyjny maszyny: **Windows 10/Linux**`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
    }
}