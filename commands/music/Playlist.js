const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':musical_note: Playlist')
            .setDescription('The best PlayList')
            .setColor('ORANGE')
            .addField(':first_place: TikTok Playlist »', 'https://www.youtube.com/watch?v=ZPRRNG1PFu8&list=PLTo6svdhIL1cxS4ffGueFpVCF756ip-ab')
            .addField(':second_place: Chill Playlist', 'https://www.youtube.com/watch?v=S--2wdVFy_E')
            .addField(':third_place: Rap Playlist', 'https://www.youtube.com/watch?v=9YZiXdNnVgw&list=PL-FVH5VWgRPHNz24zZ5_FLHQWoidN6O1d')
            .addField(':medal: HipHop »', 'https://www.youtube.com/watch?v=XCyIcifbOWE&list=PLetgZKHHaF-Zq1Abh-ZGC4liPd_CV3Uo4')
            .addField(':medal: Rock »', 'https://www.youtube.com/watch?v=8SbUC-UaAxE&list=PL3485902CC4FB6C67')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .music » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'playlist'
}
