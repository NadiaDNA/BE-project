const express = require('express');
const app = express();
const allRoutes = require('./routes');

const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.get('/', (req, res) =>{
    res.json('Hello World');
} );

app.use(allRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})