# Source code of ernestmarcinko.com

This is the full source code of my [personal website](https://ernestmarcinko.com). It is super simple, mobile friendly, multi page static website and scores great on google pagespeed insights too - if that's what you are into.

It's great for very simple presentation style pages, you only need ``nodejs`` and ``npm``.

## Features
  - Very simple flex layout
  - SVG social icons
  - Simple parallax effect on the background image
  - Block highlighting on mobile devices when scrolling
  - sitemap.xml and robots.txt
  - [express](https://expressjs.com/) framework and [ejs](https://ejs.co/) templates for multiple pages

## Usage
Get the repository:

 ```
 git clone https://github.com/anag0/ernestmarcinko.com.git
 ```

Install the packages:

```
npm install
```

## Development

I usually use two separate terminals, in one I do:

```
npm run build:dev
```

  ..and in the scond:

```
npm run start:dev
```

The first will watch any file changes and recompile on the fly to the ``./dist`` directory, and the second will run ``nodemon`` to rebuild the server on server file changes.

## Production
Just run the build script:

```
npm run build
```

Then start node:

```
// Regular start
npm start

// Alternatively if you are using pm2 manager, you can do
npm run start:prod
```


## Developer Notes
- Don't forget to remove/replace the Google Tag Manager tracking code from **views/parts/head.ejs**
- There is a workflow in **.github/workflows/main.yml** to upload the code via SFTP to the production server on push/PR, you may want to remove that too.

## Requirements
[Node.js](https://nodejs.org/en) server & [npm](https://www.npmjs.com/) package manager.