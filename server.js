const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const replicaName = process.env.APP_NAME

// Serve static files (CSS, images, etc.) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'elephants.html'));
    console.log(`Request served by ${replicaName}`);
});

// Start server
app.listen(PORT, () => {
    console.log(`${replicaName} running at http://localhost:${PORT}`);
});
