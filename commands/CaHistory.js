const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_ca: Canada Wiki')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':adult: Population »', '38.02')
            .addField(':man_detective: President »', 'Justin Trudeau')
            .addField(':flag_ca: Capital »', 'Ottawa')
            .addField(':earth_americas: Continent »', 'Amérique du nord')
            .addField(':trophy: Area »', '9,985 millions km²')
            .addField(':mobile_phone: Phone »', '+1')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .cawiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'cawiki'
}