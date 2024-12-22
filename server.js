const express = require('express');
const { exec } = require("child_process")
const app = express();
const port = 5000;

let serverStartTime = Date.now(); 


app.get('/', (req, res) => {
    const uptime = Math.floor((Date.now() - serverStartTime) / 1000);
    res.send({ uptime, status: "ONLINE" });
});


app.get('/lock_event', (req, res) => {
    if(req.query.eventType === "LOCK") {
        exec("sudo pironman -rw off && sudo pironman -f 75 && sudo pironman -s 5 && sudo pironman -al off")
    }
    else {
        exec("sudo pironman -rw on && sudo pironman -f 60 && sudo pironman -s 999 && sudo pironman -al on")
    }
    res.json({ eventType: req.query.eventType })
});

app.get('/set-fan', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -f ${value}`)
    res.json({ success: true, value })
});

app.get('/set-lcd-onoff', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -al ${value}`)
    res.json({ success: true, value })
});

app.get('/set-lcd-time', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -s ${value}`)
    res.json({ success: true, value })
});

app.get('/set-rgb-onoff', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -rw ${value}`)
    res.json({ success: true, value })
});

app.get('/set-rgb-style', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -rs ${value}`)
    res.json({ success: true, value })
});

app.get('/set-rgb-speed', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -rb ${value}`)
    res.json({ success: true, value })
});

app.get('/set-rgb-color', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -rc ${value}`)
    res.json({ success: true, value })
});

app.get('/set-rgb-frequency', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -pwm ${value}`)
    res.json({ success: true, value })
});

app.get('/set-fan', (req, res) => {
    const value = req.query.value;
    exec(`sudo pironman -f ${value}`)
    res.json({ success: true, value })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
