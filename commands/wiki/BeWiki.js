const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_be: Be Wiki')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':adult: Population »', '11.57M')
            .addField(':man_detective: King »', 'Philippe de Belgique')
            .addField(':flag_be: Capital »', 'Bruxelles')
            .addField(':earth_americas: Continent »', 'Europe')
            .addField(':trophy: Area »', '30 689 km²')
            .addField(':mobile_phone: Phone »', '+32')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .bewiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'bewiki'
}
