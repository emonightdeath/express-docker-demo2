const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/', (req, res) => {
    res.send('Hello World!');
    return {test: "test2"}
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
