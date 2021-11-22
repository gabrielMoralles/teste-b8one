const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/teste-b8one'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/teste-b8one/'}),
);

app.listen(process.env.PORT || 8080);