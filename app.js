// Importere moduler
const express = require(`express`);
const app = express();
const db = require(`./db`); // Databasetilkobling

// Globale variabler
const PORT = 8000;

// Sette ejs som view engine
app.set(`view engine`, `ejs`);


// Ruter til ulike sider
app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`/nybruker`, (req, res) => {
    res.render(`nybruker`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
