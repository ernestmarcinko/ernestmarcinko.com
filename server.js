// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/img", express.static(__dirname + "/img"));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    var att = {
        title: 'Ernest Marcinko Official',
        description: 'I do code and sometimes I create educational style YouTube videos for fun.'
    };
    res.render('pages/index',{
        att: att,
    });
});
app.get('/typewriter', function(req, res) {
    var att = {
        title: 'TypeWriter Effect Script by Ernest Marcinko',
        description: 'Typewriter effect written in javascript. Easy to use, very fast, very small.'
    };
    res.render('pages/typewriter',{
        att: att,
    });
});
/*app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});*/

// about page
/*app.get('/about', function(req, res) {
    res.render('pages/about');
});*/

app.listen(8081);