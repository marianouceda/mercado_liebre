const express = require('express');
const path = require ('path');
const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../', 'public');
const app = express();

app.use(express.static(publicPath));

app.listen(PORT, () => console.log(`Servidor en línea en puerto ${port}`));

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './views/home.html')));
app.get('/register', (req, res) => res.sendFile(path.resolve(__dirname, './views/register.html')));
app.get('/login', (req, res) => res.sendFile(path.resolve(__dirname, './views/login.html')));