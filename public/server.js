(function() {
    'use strict';

    var express = require('express');
    var path = require('path');
    var app = express();

    app.use(express.static('public'));

    app.get('/', function(req, res) {
        res.sendFile(express.static(path.join(__dirname, 'index.html')));
    });

    app.listen(4000, function() {
        console.log("You are on http://localhost:4000");
    });
})();
