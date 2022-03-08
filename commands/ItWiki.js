const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_it: Italie Wiki')
            .setDescription('')
            .setColor('Red')
            .addField(':adult: Population »', '69.56M')
            .addField(':man_detective: President »', 'Sergio Mattarella')
            .addField(':flag_it: Capital »', 'Rome')
            .addField(':earth_americas: Continent »', 'Europe')
            .addField(':trophy: Area »', '301 340 km²')
            .addField(':mobile_phone: Phone »', '+39')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .itwiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'itwiki'
}