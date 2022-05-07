const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `pomoc`,
    callback: async (message, args, text) => {
        const praktyczne_ilosc = fs.readdirSync("commands/praktyczne").length
        const praktyczne_lista = fs.readdirSync("commands/praktyczne").join(`, `).replace(/\.js/gi, "")
        const bot_ilosc = fs.readdirSync("commands/bot").length
        const bot_lista = fs.readdirSync("commands/bot").join(`, `).replace(/\.js/gi, "")
        const fun_ilosc = fs.readdirSync("commands/4fun").length
        const fun_lista = fs.readdirSync("commands/4fun").join(`, `).replace(/\.js/gi, "")
        const adm_ilosc = fs.readdirSync("commands/administracyjne").length
        const adm_lista = fs.readdirSync("commands/administracyjne").join(`, `).replace(/\.js/gi, "")
        const owner_ilosc = fs.readdirSync("commands/wlasciciel").length
        const owner_lista = fs.readdirSync("commands/wlasciciel").join(`, `).replace(/\.js/gi, "")
        const gun_ilosc = fs.readdirSync("commands/gry").length
        const gun_lista = fs.readdirSync("commands/gry").join(`, `).replace(/\.js/gi, "")
        const prof_ilosc = fs.readdirSync("commands/profil").length
        const prof_lista = fs.readdirSync("commands/profil").join(`, `).replace(/\.js/gi, "")
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Oto moje funkcje! \n`)
            .setColor(`${config.kolor_embeda}`)
            .setDescription(`**Hejka! Jestem wielofunkcyjnym botem, który ciągle się rozwija. Poniżej znajdziesz moje wszystkie komendy! Jeśli będziesz miał jakiś problem to pisz na [serwerze developerskim](https://discord.gg/frDATJVMgU)!** \n\n> 「${emotki.korona}」 **Dla właściciela** **(${owner_ilosc})** ** ** \n${owner_lista} \n\n> 「${emotki.wykrzyknik}」 **Administracyjne** ** (${adm_ilosc}) ** ** ** \n${adm_lista} \n\n> 「${emotki.discord}」 **Praktyczne** ** (${praktyczne_ilosc}) ** ** ** \n${praktyczne_lista} \n \n> 「:robot:」 **Bot** **(${bot_ilosc})** ** ** \n${bot_lista} \n \n> 「${emotki.gun}」 **Gry** **(${gun_ilosc})** ** **\n${gun_lista}\n\n> 「:joy:」 **4Fun** **(${fun_ilosc})** ** ** \n${fun_lista}\n\n> 「${emotki.ludzie}」 **Profil** **(${prof_ilosc})** ** ** \n${prof_lista}`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}