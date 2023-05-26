import { createGzip } from 'zlib';
import { SitemapStream, streamToPromise } from 'sitemap';
import { config, getDirName } from './server.config.mjs';
import express from 'express';

const __dirname = getDirName(import.meta.url);

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use("/dist", express.static(__dirname + "/dist"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/aicookieclicker", express.static(__dirname + "/aicookieclicker"));

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

let sitemap;
app.get('/sitemap.xml', async function(req, res) {
    res.header('content-type', 'application/xml');
    res.header('content-encoding', 'gzip');
    if (sitemap) {
        res.send(sitemap)
        return
    }
    try {
        const smstream = new SitemapStream({ hostname: config.hostname })
        const pipeline = smstream.pipe(createGzip())

        smstream.write({ url: '/', changefreq: 'monthly', priority: 1});
        smstream.write({ url: '/typewriter', changefreq: 'monthly', priority: 0.6});
        smstream.write({ url: '/aicookieclicker', changefreq: 'monthly', priority: 0.6});

        // cache the response
        streamToPromise(pipeline).then(sm => sitemap = sm)
        smstream.end()

        // show errors and response
        pipeline.pipe(res).on('error', (e) => {throw e});
    } catch (e) {
        res.status(500).end()
        console.log(e);
    }
});

app.get('/robots.txt', function(req, res) {
    res.header('content-type', 'text/plain');
    res.render('pages/robots',{
        att: {hostname: config.hostname},
    });
});

app.listen(8081);