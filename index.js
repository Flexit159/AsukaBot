const discord = require ('discord.js');

var client = new discord.Client();

const token = "NjE2NTkyOTAxNTM0NjQ2MzAy.XWupYA.TbCYQENqAP_mJ3zPrzw47wpbAgo"
    
client.on ("ready", () => {
    console.log ("ready!");

    client.user.setGame ("with depression");
});
    
const prefix = "!";
client.on ("message", (message) => {

    //Messages
    message.content.toLowerCase;
    
    if (message.author.bot) return;

    msg = message.content.toLowerCase();
    
    if (msg.startsWith ("yo")) {
        message.reply ("Please crawl back into your hole");
    }
    
    if (msg.startsWith ("donut")) {
        message.channel.send ("Donut? Tasty");
    }

    if (msg.startsWith ("huh")) {
        message.channel.send ("Nothing baaaka");
    }

    if (msg.startsWith ("wat")) {
        message.channel.send ("Nothing baaaka");
    }

    if (msg.startsWith ("oof")) {
        message.channel.send ("Mega oof");
    }

    //Version Command
    if (msg.startsWith (prefix + "version")) {
        message.channel.send ("My current version is 1.3.9. Why do you care anyway? Are you stalking me? Hontoni baaaka desu ga.");

    }

    //Hentai Command
    if (msg.startsWith (prefix + "hentai")) {
        number = 18;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./hentai/" + imageNumber + ".png"]} )
    }

    //Mood - Hello Command
    if (msg.startsWith (prefix + "hello")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./hello/" + imageNumber + ".gif"]} )
    }

    //Mood - Smug Command 
    if (msg.startsWith (prefix + "smug")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./smug/" + imageNumber + ".gif"]} )
    }
     
    //Mood - Lewd Command 
    if (msg.startsWith (prefix + "lewd")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./lewd/" + imageNumber + ".gif"]} )
    }

    //Mood - Hug Command 
    if (msg.startsWith (prefix + "hug")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./hug/" + imageNumber + ".gif"]} )
    }

    //Mood - Stare Command  
    if (msg.startsWith (prefix + "stare")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./stare/" + imageNumber + ".gif"]} )
    }


    //Mood - Slap Command 
    if (msg.startsWith (prefix + "slap")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./slap/" + imageNumber + ".gif"]} )
    }

    //Mood - sorry Command 
    if (msg.startsWith (prefix + "sorry")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./sorry/" + imageNumber + ".gif"]} )
    }
    
    //Mood - dance Command 
    if (msg.startsWith (prefix + "dance")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./dance/" + imageNumber + ".gif"]} )
    }
    
    //Mood - dodge Command 
    if (msg.startsWith (prefix + "dodge")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./dodge/" + imageNumber + ".gif"]} )
    }
    
    //Mood - smartass Command
    if (msg.startsWith (prefix + "smartass")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./smartass/" + imageNumber + ".gif"]} )
    }

    //Mood - punch Command 
    if (msg.startsWith (prefix + "punch")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./punch/" + imageNumber + ".gif"]} )
    }

    //Mood - notinterested Command 
    if (msg.startsWith (prefix + "notinterested")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./notinterested/" + imageNumber + ".gif"]} )
    }

    //Mood - bitchfight Command 
    if (msg.startsWith (prefix + "bitchfight")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./bitchfight/" + imageNumber + ".gif"]} )
    }
    
    //Mood - Itadakimasu Command
    if (msg.startsWith (prefix + "itadakimasu")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./itadakimasu/" + imageNumber + ".gif"]} )
    }
    
    //Mood - kill Command
    if (msg.startsWith (prefix + "kill")) {
        number = 3;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./kill/" + imageNumber + ".gif"]} )
    }

    //Help Command Through Embed
    if (msg.startsWith (prefix + "help")) {
        embed = new discord.RichEmbed ()
            .setAuthor ("Help")
            .setDescription ("This is the list of commands...baka")
            .setFooter ("Why do I have to do this? it´s not my fault you are an idiot.")
            .addField ("Moods", "hello, smug, lewd, hug, stare, slap, sorry, dance, dodge, smartass, punch, notinterested, bitchfight, itadakimasu, kill")
            .addField ("Nsfw", "hentai")
            .addField ("Utility", "help, version")
            .setThumbnail ("https://pbs.twimg.com/media/CSuQ0drWcAAfdqG.png");


        message.channel.send (embed);
    }












});

client.login (token);
