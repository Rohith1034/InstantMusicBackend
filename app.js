const express = require('express');
const app = express();

const VERIFY_TOKEN = 'DSp';

app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log('Webhook verified successfully!');
        res.status(200).send(challenge); // Respond with the challenge
    } else {
        console.error('Webhook verification failed.');
        res.sendStatus(403); // Forbidden
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
