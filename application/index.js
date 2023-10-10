const express = require('express');
const app = express();
const port = 3001;

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/css', express.static('css'));

app.get('/', (req, res) => {
    res.send("Test");
});

app.listen(port, () => {
    console.log(`Prototype app listening on port ${port}`);
});