const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)
const axios = require(`axios`)

module.exports = {
    commands: `kot`,
    callback: async (message, args, text, bot) => {

        const url = `https://some-random-api.ml/img/cat`
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) { }

        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Kociak!`)
            .setColor(config.kolor_embeda)
            .setDescription(`> 「:heart:」 Oto kociak dla ciebie!`)
            .setImage(data.link)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}