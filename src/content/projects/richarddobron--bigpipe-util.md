---
repo: "richardDobron/bigpipe-util"
name: "bigpipe-util"
description: "This library currently implements small part of Facebook BigPipe concept so far, but the advantage is to efficiently insert/replace content and work with the DOM. It is also possible to easily call JavaScript modules from PHP."
readmeQualityOk: true
url: "https://github.com/richardDobron/bigpipe-util"
homepage: "https://richarddobron.github.io/bigpipe-php/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [98]
topics: ["bigpipe", "xhr", "html", "dom", "async", "javascript", "microframework"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-03-27T20:50:16Z"
lastCommitAt: "2026-10-10T10:05:00Z"
lastReleaseAt: "2023-03-07T16:51:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 70
maintainers: ["richardDobron"]
openGraphImageUrl: "https://opengraph.githubassets.com/02e4816247e613e69e80fa72945eef7890f503f68c101cd8ceddccb6659b0d15/richardDobron/bigpipe-util"
---

The JavaScript runtime of BigPipe, a microframework for PHP and JavaScript. It sends requests, applies the DOM operations a server responds with, shows the pagelets of a page as they arrive and calls JavaScript modules the server asks for. The server side is [richarddobron/bigpipe](https://github.com/richardDobron/bigpipe-php) for PHP, but any backend that speaks the [response format](https://github.com/richardDobron/bigpipe-util/blob/HEAD/docs/how_it_works.md) works.

## 👀 Demo App
Try the app with [live demo](http://bigpipe.xf.cz).

## 📕 Full documentation
https://richarddobron.github.io/bigpipe-php/

## ℹ️ Requirements
* A bundler: [webpack](https://webpack.js.org/), [Vite](https://vite.dev/) or similar
* A backend that answers with BigPipe responses, e.g. `richarddobron/bigpipe` for PHP 8.0 or higher

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

### 3. Add the following to /path/to/resources/js/app.js:
```javascript
import Primer from 'bigpipe-util/dist/Primer';
import { setModuleLoader } from…
