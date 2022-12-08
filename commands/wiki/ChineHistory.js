const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':flag_ch: Chine Wiki')
            .setDescription('')
            .setColor('RED')
            .addField(':adult: Population »', '1.403B')
            .addField(':man_detective: President »', 'Xi Jinping')
            .addField(':flag_ch: Capital »', 'Pekin')
            .addField(':earth_americas: Continent »', 'Asie')
            .addField(':trophy: Area »', '9,597 millions km²')
            .addField(':mobile_phone: Phone »', '+?')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .chwiki » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'chwiki'
}
