const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Help')
            .setTitle(':star: Most youtubers subscribers')
            .setDescription('')
            .setColor('ORANGE')
            .addField(':trophy: T-Series	 »', '209M')
            .addField(':coin: Cocomelon - Nursery Rhymes	 »', '130M')
            .addField(':credit_card: SET India	 »', '128M')
            .addField(':crystal_ball: PewDiePie	 »', '111M')
            .addField(':heart: MrBeast »', '91.1M')
             //To add influencers, please copy paste line 14
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .youtube » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'youtube'
}
