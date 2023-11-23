const express = require('express');
const app = express();
const mssql = require('mssql');
const config = {
    user: 'sa', 
    password: 'itjkt2014', 
    server: '192.168.0.11',
    database: 'JAK',
    options: {
        encrypt: false,
        trustServerCertificate: true,
      } 
};

mssql.connect(config, (err) => {
    if (err) {
        console.error('Error connecting to MSSQL Server:', err);
        return;
    }
    console.log('Connected to MSSQL Server successfully');
    const request = new mssql.Request();
    const query = `SELECT * FROM Profiles`;

    request.query(query, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return;
        }

        console.log('Profiles:', result.recordsets);
    });
});


// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });