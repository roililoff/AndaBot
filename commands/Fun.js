const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Fun games')
            .setTitle('Fun Games')
            .setDescription('The famous commands')
            .setColor('GREEN')
            .addField(':earth_americas: Earth »', '.earth')
            .addField(':video_game: The most popular games »', '.topgames')
            .addField(':tada: Quiz »', '.Quiz')
            .addField(':trophy: Best YouTubers »', '.youtube')
            .addField(':musical_note: Music »', '.music')
            .addField(':bar_chart: Covid »', '.Covid')
            .addField(':medal: Your discord »', '.yourdiscord')
            .addField(':pencil: Publicity »', '.pub')
            .addField(':video_game: Top games »', '.Game')
            .addField(':blue_book: Documentation of the day »', '.Doc')
            .addField(':bowling: Top team esport »', '.topesport')
            .addField(':confetti_ball: Funny information »', '.Funinfo')
            .addField(':envelope: Reddit of the day »', '.Reddit')
            .addField(':boy: Earth Stats »', '.searth')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .fun » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'fun'
}
