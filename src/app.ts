import express from "express";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hola Mundo - Soy David Chaves');
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});