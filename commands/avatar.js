const Discord= require('discord.js');
const config = require('../config.json');
let Autor = (message.author.username);
let Image = (message.author.avatarURL);
let user = (message.mention.users.first()|| message.author) ;
let azul = config.azul;
module.exports.run = (client , message , args) =>{
   let AvatarEmbed = new Discord.RichEmbed()
    .setAuthor(Autor)
    .setColor(azul)
    .setDescription(`Avatar do ${message.author.username}`)
    .setImage(Image);
    
    return message.channel.send(AvatarEmbed);

/*
    let user = message.mentions.users.first();
    let razaou = args.slice(0).join(' ');

    if (!razaou.length < 1) {

        if (message.mentions.users.size < 1) {

            if(client.guilds.get(message.guild.id).members.get(args[0])){
                  message.channel.sendMessage({
                      "embed": {
                        "description": `:frame_photo: **Avatar de ${client.guilds.get(message.guild.id).members.get(args[0]).user.username}`,
                        "color": 55512,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": message.author.displayAvatarURL,
                          "text": message.author.username
                      },
                      "image": {
                        "url": client.guilds.get(message.guild.id).members.get(args[0]).user.displayAvatarURL
                      }
                    }
                  });
            } else {
                if(client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")})){
                    message.channel.sendMessage({
                        "embed": {
                          "description": `:frame_photo: **Avatar de ${client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")}).user.username}:**`,
                          "color": 55512,
                          "timestamp": new Date(),
                          "footer": {
                            "icon_url": message.author.displayAvatarURL,
                            "text": message.author.username
                          },
                          "image": {
                            "url": client.guilds.get(message.guild.id).members.filter(mem=>{mem.displayName != message.content.replace("p!avatar ", "")}).user.displayAvatarURL
                          }
                        }
                      });
                } else {
                    message.reply("**:x: O usuário não foi encontrado no servidor.**");
                }
            }

        } else {
            message.channel.sendMessage({
                "embed": {
                  "description": `:frame_photo: **Avatar de ${message.mentions.users.first().username}:**`,
                  "color": 55512,
                  "timestamp": new Date(),
                  "footer": {
                    "icon_url": message.author.displayAvatarURL,
                    "text": message.author.username
                  },
                  "image": {
                    "url": message.mentions.users.first().displayAvatarURL
                  }
                }
              });
        }

    } else {
        message.channel.sendMessage({
            "embed": {
              "description": `:frame_photo: **Avatar de ${message.author.username}:**`,
              "color": 55512,
              "timestamp": new Date(),
              "footer": {
                "icon_url": message.author.displayAvatarURL,
                "text": message.author.username
              },
              "image": {
                "url": message.author.displayAvatarURL
              }
            }
          });
    }
*/
} 
//By : Muffy#0942