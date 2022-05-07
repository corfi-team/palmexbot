const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `ping`,
    callback: async (message, args, text, bot) => {
        let ping = bot.ws.ping
        if ((ping) < 250) var statuspingu = `niski`
        if ((ping) < 150) var statuspingu = `bardzo niski`
        if ((ping) > 250) var statuspingu = `średni`
        if ((ping) > 500) var statuspingu = `wysoki`
        if ((ping) > 750) var statuspingu = `bardzo wysoki`
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Ping bota!`)
            .setColor(`${config.kolor_embeda}`)
            .setDescription(`> 「${emotki.support}」 Ping bota wynosi: **${bot.ws.ping}ms**! \n\n> 「${emotki.okej}」 Świadczy to o tym, że ping bota jest **__${statuspingu}__**`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}