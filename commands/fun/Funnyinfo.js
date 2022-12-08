const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Funny information')
            .setTitle(':tada: Funny Information')
            .setDescription('Funny Information of the day')
            .setColor('PURPLE')
            .addField(':bird: Walmart »', 'Walmart has a lower acceptance rate than Harvard')
            .addField(':football: FootBall »', 'A football fan once dedicated his obit to insulting an NFL team')
            .addField(':unicorn: Licorne »', 'Hunting unicorns is legal in Michigan.')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .funinfo » .help')
            .setTimestamp()
            .setURL(''))
    },
    name: 'funinfo' 
}
