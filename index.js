let express = require('express');
let app = express();

app.listen(5737);

app.get('/', function (req, res) {
    res.send('Hello. GreenAtom!');
})