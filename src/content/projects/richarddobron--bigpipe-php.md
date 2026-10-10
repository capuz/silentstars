---
repo: "richardDobron/bigpipe-php"
name: "bigpipe-php"
description: "BigPipe: Pipelining web pages for high performance built in PHP."
readmeQualityOk: true
url: "https://github.com/richardDobron/bigpipe-php"
homepage: "https://richarddobron.github.io/bigpipe-php/"
language: "PHP"
languages: ["PHP"]
languagePcts: [70]
topics: ["bigpipe", "xhr", "html", "dom", "async", "javascript", "laravel", "microframework", "php"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-03-27T21:12:49Z"
lastCommitAt: "2026-10-10T10:04:14Z"
lastReleaseAt: "2024-11-15T20:38:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 72
undervaluedScore: 59
maintainers: ["richardDobron"]
openGraphImageUrl: "https://opengraph.githubassets.com/36028ff5cc71fff71781403095551782b70b3685043b6f762579e8ac2c87603c/richardDobron/bigpipe-php"
---

A microframework for PHP and JavaScript. Send a page in independent parts (pagelets) that reach the browser as soon as they are ready, update the page with DOM operations, open dialogs and call JavaScript modules, all from PHP. The browser part is the npm package [bigpipe-util](https://github.com/richardDobron/bigpipe-util).

## 👀 Demo App
Try the app with [live demo](http://bigpipe.xf.cz) or check how to [install](https://github.com/richardDobron/bigpipe-php/blob/HEAD/demo-app/README.md).

## 📕 Full documentation
https://richarddobron.github.io/bigpipe-php/

## ℹ️ Requirements
* PHP 8.0 or higher
* A bundler: [webpack](https://webpack.js.org/), [Vite](https://vite.dev/) or similar

## 📦 Installation
Follow these steps to install and set up:

### 1. Install composer package:
```shell
$ composer require richarddobron/bigpipe
```

### 2. Install npm package:
```shell
$ npm install bigpipe-util
```

### 3. Add the following to `/path/to/resources/js/app.js`:
```javascript
import Primer from 'bigpipe-util/dist/Primer';
import { setModuleLoader } from 'bigpipe-util/dist/ModuleRegistry';

Primer();
```

Then tell BigPipe how to load your modules by name (PHP calls e.g.…
