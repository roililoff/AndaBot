const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Covid Stats')
            .setTitle(':microbe: Covid Stats')
            .setDescription('Here are the stats 02/03/22')
            .setColor('PURPLE')
            .addField(':thermometer: Number of cases »', '438 517 285')
            .addField(':drop_of_blood: Data rate »', '10 778 326 266')
            .addField(':pushpin: Dead »', '5 964 630')
            .addField(':page_facing_up: Top pay »', 'USA')
            .addField(':mailbox_closed:Fewer cases »', 'Sahara occidental')
            .addField(':balloon: Link »', 'https://news.google.com/covid19/map?hl=fr-CA&gl=CA&ceid=CA%3Afr')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .covid » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'covid'
}
