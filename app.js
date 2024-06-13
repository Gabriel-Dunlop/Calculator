let express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('root')
});

app.post('/', (req, res) => {
    res.send(200);
    console.log("hello!");
});

app.listen(3000, console.log('Server listening in 3000'));