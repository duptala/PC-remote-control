const express = require('express')
const cors = require('cors');
const robot = require('robotjs')
require('dotenv').config();
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(cors());

const serverIP = process.env.SERVER_IP || 'localhost';

app.get('/config', (req, res) => {
    res.json({ serverIP: serverIP });
});

app.get('/play-pause', (req, res) => {
    robot.keyTap('space');
    res.send('Play command received!')
})

app.get('/rewind', (req, res) => {
    robot.keyTap('left');
    res.send('Rewind command received!')
})

app.get('/forward', (req, res) => {
    robot.keyTap('right');
    res.send('Forward command received!')
})

app.get('/volumeup', (req, res) => {
    robot.keyTap('audio_vol_up');
    res.send('Volume Up command received!')
})

app.get('/volumedown', (req, res) => {
    robot.keyTap('audio_vol_down');
    res.send('Volume Down command received!')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

