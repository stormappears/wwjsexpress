const express = require('express')
const app = express()
const qrcode = require('qrcode-terminal');



// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    
    const { Client } = require('whatsapp-web.js');
    const client = new Client();
    client.on('ready', () => {
        console.log('Client is ready!');
    });
    client.initialize();

    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
        res.send(qr)
    });

})


app.listen(3000, () => console.log('Example app listening on port 3000!'));