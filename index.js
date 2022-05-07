global.Discord = require(`discord.js`)
require(`discord-reply`)
const chalk = require(`chalk`)
const config = require(`./config.json`)
const client = new Discord.Client
require('events').EventEmitter.defaultMaxListeners = Infinity;
const package = require(`./package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`./emotki.json`)

client.on(`ready`, async () => {
    console.log(chalk.blue(`\n Bot ${client.user.tag} poprawnie wystartował! \n`))
    client.user.setActivity(`/pomoc`, { type: `LISTENING` })

    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
            const stat = fs.lstatSync(path.join(__dirname, dir, file))
            if (stat.isDirectory()) {
                readCommands(path.join(dir, file))
            } else if (file !== baseFile) {
                const option = require(path.join(__dirname, dir, file))
                commandBase(client, option)
            }
        }
    }

    readCommands('commands')
})

client.on(`message`, message => {
    if (message.content.startsWith(`<@!824219968669351936>`)) {
        var totalSeconds = (client.uptime / 1000);
        var days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        var hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = Math.floor(totalSeconds % 60);
        var botuptime = (days > 0 ? days + "d, " : "") + (hours > 0 ? hours + "h, " : "") + (minutes > 0 ? minutes + "m, " : "") + (seconds > 0 ? seconds + "s" : "")
        const embed = new Discord.MessageEmbed()
        embed
            .setTitle(`Oho! Czy ktoś mnie pingował? O_o`)
            .setColor(`${config.kolor_embeda}`)
            .setDescription(`**Nazywam się __PalmexBOT__, jestem wielofunkcyjnym botem, który zawsze dopasuje się do twoich potrzeb! Moje wiadomości są ładnie i przemyślanie zaprojektowane. Ze mną możesz jednocześnie bawić się z załogą serwera, jak i jednocześnie nim moderować!** \n\n\n> 「${emotki.korona}」 Moim właścicielem jest: <@!419105141153857538> **[Miloszkzy#7152]** \n\n> 「${emotki.uptime}」 Jestem uruchomiony od: **${botuptime}** \n\n> 「:diamond_shape_with_a_dot_inside:」 Aktualnie posiadam: **[1/1] shard** \n\n> 「${emotki.support}」 Moje opóźnienie wynosi: **${client.ws.ping}ms** \n\n> 「${emotki.wykrzyknik}」 Mój prefix to: **${config.prefix}** \n\n> 「${emotki.swiatelko}」Po więcej informacji wpisz **${config.prefix}pomoc, ${config.prefix}botinfo lub ${config.prefix}ekipa** \n\n> 「:link:」 Przydatne linki: \n> \n> ㅤ[**DODAJ MNIE**](https://discord.com/api/oauth2/authorize?client_id=824219968669351936&permissions=8&scope=bot) **|** [**WEJDŹ NA SERWER DEVELOPERSKI**](https://discord.gg/frDATJVMgU)`)
            .setFooter(`${message.author.tag} (${message.author.id})`, message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
    }
})

//jak ktos wejdzie na serwer
client.on(`guildMemberAdd`, async member => {
    if (!(member.guild.id === `756576994552053771`)) return
    else {
        const channel = member.guild.channels.cache.find(ch => ch.id === `825395471606218882`)
        if (!channel) return
        const embed = new Discord.MessageEmbed()
        embed
        .setTitle(`Witamy!`)
        .setColor(`${config.kolor_embeda}`)
        .setDescription(`Witaj ${member} na serwerze **__${member.guild.name}__**! Jesteś naszym **${member.guild.memberCount}** użytkownikiem. Zapoznaj się z **regulaminem** oraz **przestrzegaj** wprowadzonych restrykcji. Dobrej zabawy!`)
        .setImage(`https://www.tablety.pl/wp-content/uploads/2018/03/huawei-20-tapeta.jpg`)
        .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}`)
        channel.send(embed)
    }
})

client.on(`guildMemberRemove`, async member => {
    if (!(member.guild.id === `756576994552053771`)) return
    else {
        const channel = member.guild.channels.cache.find(ch => ch.id === `825395471606218882`)
        if (!channel) return
        const embed = new Discord.MessageEmbed()
        embed
        .setTitle(`Witamy!`)
        .setColor(`${config.kolor_embeda_bledu}`)
        .setDescription(`Żegnaj **__${member.user.username}__**! Mamy nadzieję, że kiedyś do nas wrócisz...`)
        .setImage(`https://www.tablety.pl/wp-content/uploads/2018/03/huawei-20-tapeta.jpg`)
        .setThumbnail(`${member.user.displayAvatarURL({ dynamic: true })}`)
        channel.send(embed)
    }
})
  
client.on("guildCreate", guild => {
    const embed = new Discord.MessageEmbed()
    embed
    .setTitle(`Dodano mnie na serwer!`)
    .setColor(`${config.kolor_embeda}`)
    .setDescription(`**Serwer:** \`${guild.name}\` \n**ID:** \`${guild.id}\` \n**Osoby:** \`${guild.members.cache.size}\``)
    client.channels.cache.get("825671807788122122").send(embed)
  })

client.on("guildDelete", guild => {
    const embed = new Discord.MessageEmbed()
    embed
    .setTitle(`Usunięto mnie z serwera!`)
    .setColor(`${config.kolor_embeda}`)
    .setDescription(`**Serwer:** \`${guild.name}\` \n**ID:** \`${guild.id}\` \n**Osoby:** \`${guild.members.cache.size}\``)
    client.channels.cache.get("825671807788122122").send(embed)
  })

client.login(config.token)