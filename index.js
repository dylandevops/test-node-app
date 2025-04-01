const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js on Azure Web App deployed via GitHub by UIH!');
});

app.listen(port, () => {
    console.log(App is listening on port ${port});
});
