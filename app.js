const express = require('express');
const app = express();
const allRoutes = require('./routes');
const connectToDb = require('./config/db');

const PORT = 3000 || process.env.PORT;

connectToDb();

app.use(express.json());
app.get('/', (req, res) =>{
    res.json('Hello World');
} );

app.use(allRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})