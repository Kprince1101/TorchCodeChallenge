var express = require('express'),
    request = require('request'),    
    bodyParser = require('body-parser'),
    url = 'https://www.google.com/search?q=',
    app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/google_search', function (req, res) {
    var key = req.body.q;
    console.log(key);
    url = 'https://www.google.com/search?q=' + key + '&oq=' + key;
    res.redirect(url);

    request(url, function (err, res, html) {
        if (!err && res.statusCode == 200) {
            console.log(html);
        }
    })
})

app.listen(3001, function () {
    console.log('Listening on port 3001')
})