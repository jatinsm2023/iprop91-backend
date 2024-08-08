const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/user', require('./Routes/user'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});