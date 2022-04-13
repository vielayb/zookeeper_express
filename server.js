const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express(); // instatntiating the server
// this is the main file that our server will run from
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//==========================================================
// This code tells the server to listen for request
//==========================================================
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});