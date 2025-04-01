const express = require('express');
const chalk = require('chalk'); // Import chalk

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js on Azure Web App deployed via GitHub by UIH!');
});

app.listen(port, () => {
    console.log(chalk.green.bold(`✅ App is listening on port ${port}`));
});
