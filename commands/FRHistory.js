const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_fr: French wiki')
            .setDescription('')
            .setColor('GREEN')
            .addField(':adult: Population »', '67.40M')
            .addField(':man_detective: President »', 'Emmanuel Macron')
            .addField(':flag_fr: Capital »', 'Paris')
            .addField(':earth_americas: Continent »', 'Europe')
            .addField(':trophy: Area »', '543 940 km²')
            .addField(':mobile_phone: Phone »', '+33')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('')
            .setTimestamp()
            .setURL(''))
    },
    name: 'frwiki'
}
