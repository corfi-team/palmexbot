const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)
const axios = require(`axios`)

module.exports = {
    commands: `pies`,
    callback: async (message, args, text, bot) => {

        const url = `https://some-random-api.ml/img/dog`
        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) { }

        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Piesek!`)
            .setColor(config.kolor_embeda)
            .setDescription(`> 「:heart:」 Oto piesek dla ciebie!`)
            .setImage(data.link)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}