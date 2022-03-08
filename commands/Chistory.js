const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':lock: Earth')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':flag_fr: French wiki »', '.frwiki')
            .addField(':flag_us: Us wiki »', '.uswiki')
            .addField(':flag_ca: Canada wiki »', '.cawiki')
            .addField(':flag_ru: Russie wiki »', '.ruwiki')
            .addField(':flag_it: Italie wiki »', '.itwiki')
            .addField(':flag_be: Bruxelle wiki »', '.bewiki')
            .addField(':flag_ch: Chine wiki »', '.chwiki')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .Earth » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'countries'
}
