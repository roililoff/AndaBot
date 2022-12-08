const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_ru: Russie Wiki')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':adult: Population »', '144.2M')
            .addField(':man_detective: President »', 'Vladimir Poutine')
            .addField(':flag_ca: Capital »', 'Moscou')
            .addField(':earth_americas: Continent »', 'Asie du nord - Europe')
            .addField(':trophy: Area »', '17,13 millions km²')
            .addField(':mobile_phone: Phone »', '+7')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .ruwiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'ruwiki'
}
