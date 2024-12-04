// Importere mysql modulen
const mysql = require(`mysql2`);

// Innstillinger for tilkobling til databasen
const connection = mysql.createConnection({
    host: 'localhost',      // Adresse til server
    port: 3306,             // Port som brukes på server
    user: 'root',           // Brukernavn på server
    password: '',           // Passord til server
    database: 'utstyr'      // Database som skal brukes

});

// Koble til databasen
connection.connect((err) => {
    if (err) {
        console.error('Feil ved tilkobling til databasen:', err);
        return;
    }
    console.log('Koblet til databasen.');
});

// Eksportere databasekoblingen
module.exports = connection;