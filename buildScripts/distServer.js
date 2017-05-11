import express from'express';
import path from'path';
import open from'open';
import compression from 'compression';


const port = 3000;
const app = express();

app.user(compression());
/* eslint-disable no-console*/
app.use(express.static('dist'));

app.get('/users', (req, res) => {
    //Hard Coded for simplicity, pretend this hits a real database
    res.json([
        {"id": 1,"firstName": "perro", "lastName": "loco", "email": "perro@loco.com"},
        {"id": 2,"firstName": "gato", "lastName": "psicopata", "email": "gato@psycho.com"},
        {"id": 3,"firstName": "raton", "lastName": "normal", "email": "raton@average.com"}
    ]);
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(port, function(err) {
    if(err) {
        console.error(err);
    } else {
        open('http://localhost:' + port);
    }
});
