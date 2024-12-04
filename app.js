// Importere moduler
const express = require(`express`);
const app = express();

// Globale variabler
const PORT = 8000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})