const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_us: US Wiki')
            .setDescription('')
            .setColor('PURPLE')
            .addField(':adult: Population »', '329.5')
            .addField(':man_detective: President »', 'Joe Biden')
            .addField(':flag_us: Capital »', 'Washington')
            .addField(':earth_americas: Continent »', 'Amérique du nord')
            .addField(':trophy: Area »', '9,834 millions km²')
            .addField(':mobile_phone: Phone »', '+1')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .uswiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'uswiki'
}