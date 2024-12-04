// Importere moduler
const express = require(`express`);
const app = express();
const db = require(`./db`); // Databasetilkobling

// Globale variabler
const PORT = 8000;

// Sette ejs som view engine
app.set(`view engine`, `ejs`);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});