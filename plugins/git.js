const Dude_v2 = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Dude_v2.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/nRqrzc2/20211205-102026.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `❤️Dude_v2💙

*bot making video* : https://youtu.be/jF8wF1KdyOw


*owner number Devil* :https://wa.me/918848477621.
            

*github* : https://github.com/Killady/Dude_v2.


*audio commands* :https://github.com/Killady/uploads/tree/main/bgm.

*sticker commands* :https://github.com/Killady/uploads/tree/main/stickers.
■□■□■□■□■□■□■□■□■□■□
❤️Dude_v2💙
▣▣ ~Devil~ AND ~Maalutty~ ▣▣

`}) 

}));
