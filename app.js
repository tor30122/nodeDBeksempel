// Importere moduler
const express = require(`express`);
const app = express();
const db = require(`./db`); // Databasetilkobling

// Bruke express til å håndtere data
app.use(express.urlencoded({ extended: true })); // For å lese og bruke data fra skjema
app.use(express.json()); // Håndterer JSON data

// Globale variabler
const PORT = 8000;

// Sette ejs som view engine
app.set(`view engine`, `ejs`);

// Ruter til ulike sider
app.get(`/`, (req, res) => {
  res.render(`index`);
});

app.get(`/nybruker`, (req, res) => {
  res.render(`nybruker`, {
    melding: null,
    type: null,
  });
});

app.post(`/nybruker`, (req, res) => {
  const navn = req.body.navn;
  const epost = req.body.epost;
  const telefon = req.body.telefon;

  const query = "INSERT INTO personer (navn, epost, telefon) VALUES (?, ?, ?)";
  db.query(query, [navn, epost, telefon], (err, result) => {
    if (err) {
      console.error("Feil ved registrering av person:", err);
      return res.status(500).send("Kunne ikke registrere personen.");
    }
    res.render("nybruker", {
      melding: "Ny bruker registrert!",
      type: "success",
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
