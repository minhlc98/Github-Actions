const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => res.json({ build_success: true }));

app.get('/enviroment', (req, res) => res.json({ enviroment: process.env.NODE_ENV || '' }));

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));