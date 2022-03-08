const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('y title')
            .setTitle(':video_game: The most popular games')
            .setDescription('')
            .setColor('GREEN')
            .addField(':game_die: Minecraft »', '239M')
            .addField(':drum: GTA 5', '161M')
            .addField(':ship: Tetris', '101M')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .topgames » .help')
            .setTimestamp()
            .setURL(''))
    },
        name: 'topgames'
}