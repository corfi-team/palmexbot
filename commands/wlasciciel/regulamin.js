const config = require(`../../config.json`)
const client = new Discord.Client()
const package = require(`../../package.json`)
const fs = require(`fs`)
const path = require(`path`)
const emotki = require(`../../emotki.json`)

module.exports = {
    commands: `regulamin`,
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
        const embed = new Discord.MessageEmbed()
                    embed
                        .setTitle(`Regulamin serwera \`PalmexBOT Dev.\``)
                        .setColor(`${config.kolor_embeda}`)
                        .setDescription(`> **1. Postanowienia Ogólne** \n\n§1.1 Nieprzestrzeganie poniższego regulaminu wiąże się z otrzymaniem kary. \n§1.2 Nieznajomość regulaminu nie zwalnia z jego przestrzegania. \n§1.3 Tylko <@!419105141153857538> ma pełne prawa do zmieniania treści regulaminu bez wcześniejszego powiadomienia użytkowników o zmianie.\n\n> **2. Zasady kanałów tekstowych**\n\n§2.1 Zakazane jest spamowanie na nieodpowiednim kanale.\n§2.2 Zabrania się nadmiernego używania CAPS LOCK'a.\n§2.3 Zakazane jest kopiowanie osadzonych treści w bocie, jak i na serwerze.\n§2.4 Zakaz używania wulgaryzmów na kanałach tekstowych a także głosowych.\n§2.5 Zakazane jest prowokowanie kłótni, dyskusji które mają negatywny wpływ na serwer.\n§2.6 Zakaz obrażania graczy, administracji i serwera oraz działania na ich szkody.\n§2.7 Zakaz wykorzystywania możliwych błędów na serwerze. Należy je natychmiast bezzwłocznie zgłosić administracji z zachowaniem poufności wobec osób trzecich.\n§2.8 Zakazane jest poruszanie tematów wulgarnych/erotycznych/religijnych/rasistowskich itp.\n§2.9 Podszywanie się pod administrację będzie skutkowało natychmiastowym banem.\n§2.10 Komend można używać tylko na kanale do tego stworzonym.\n§2.11 Zabronione jest wysyłanie linków lub plików zawierających jakiekolwiek treści wulgarne/rasistowskie/pornograficzne/religijne itp. oraz plików szkodliwych (wirusy).\n§2.12 Przeszkadzanie administracji jest surowo karane.\n\n> **3.Zasady kanałów głosowych**\n\n§3.1 Wszystkie zasady kanałów tekstowych obowiązują także w głosowych.\n§3.2 Zakaz krzyczenia i mocnego podnoszenia głosu.\n§3.3 Zakazane jest puszczanie do mikrofonu muzyki itp.\n§3.4 Zabrania się puszczania różnych bliżej nieokreślonych dźwięków, przesterów itp.`)
                    message.channel.send(embed)
    }
}}