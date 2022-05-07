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
    commands: `eval`,
    callback: async (message, args, text, bot) => {
        if (!message.author.id.includes(`419105141153857538`)) {
            const embed = new Discord.MessageEmbed()
            embed
                .setTitle(`Błąd!`)
                .setColor(`${config.kolor_embeda_bledu}`)
                .setDescription(`Nie posiadasz uprawnień!`)
                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
        }
        else {
                if (!args[0]) {
                    var embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Błąd!`)
                        .setColor(config.kolor_embeda_bledu)
                        .setDescription(`Musisz podać kod, który mam wykonać!`)
                        .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                    message.channel.send(embed)
                }
                else {
                    var code = args.join(` `);
                    if (!(code.includes(`token`) || code.includes(`TOKEN`) || code.includes(`config`) || code.includes(`CONFIG`))) {
                        try {
                            var evaled = await eval(code)
                            var embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Sukces!`)
                                .setColor(config.kolor_embeda)
                                .setDescription(`${emotki.tak} Pomyślnie wykonano kod!\n:inbox_tray: Kod wejściowy: **${code}**\n:outbox_tray: Kod wyjściowy: **${evaled}**`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        } catch (e) {
                            var embed = new Discord.MessageEmbed()
                            embed
                                .setTitle(`Błąd!`)
                                .setColor(config.kolor_embeda_bledu)
                                .setDescription(`${emotki.nie} Wystąpił błąd podczas wykonywania kodu!\n:inbox_tray: Kod wejściowy: **${code}**\n:outbox_tray: Kod wyjściowy: **${e}**`)
                                .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                            message.channel.send(embed)
                        }
                    }
                    else {
                        var embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`Błąd!`)
                            .setColor(config.kolor_embeda_bledu)
                            .setDescription(`:shield: Wykryto próbę naruszenia bezpieczeństwa bota!\nOperacja: **Próba wyświetlenia tokenu bota**\nWynik: **Zablokowanie operacji oraz wysłanie zgłoszenia na [serwer developerski](linlink)!**`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        message.channel.send(embed)
                        var serwerdev = bot.guilds.cache.get(`756576994552053771`)
                        var kanal = serwerdev.channels.cache.get(`825449236837433381`)
                        var embed = new Discord.MessageEmbed()
                        embed
                            .setTitle(`${emotki.swiatelko} Nowe zgłoszenie! ${emotki.swiatelko}`)
                            .setColor(config.kolor_embeda)
                            .setDescription(`Osoba zgłaszająca: **${bot.user} (${bot.user.tag})**\nOsoba zgłoszona: **${message.author} (${message.author.tag})**\nPowód zgłoszenia: **Próba wyświetlenia tokenu bota**`)
                            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
                        kanal.send(embed)
                    }
                }
            }
        }
}
