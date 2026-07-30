---
repo: "JustinBeckwith/yes-https"
name: "yes-https"
description: "Say yes to https with express and connect.  "
readmeQualityOk: true
url: "https://github.com/JustinBeckwith/yes-https"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["https", "express", "nodejs"]
stars: 30
forks: 2
openIssues: 0
closedIssues: 7
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2016-12-06T06:20:37Z"
lastCommitAt: "2026-07-30T06:07:22Z"
lastReleaseAt: "2026-04-12T05:24:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 34
maintainers: ["JustinBeckwith", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0338b5df3067f0cbcd026b8eae2164b56dde22417f63ffbe0f73dd23a910dbf/JustinBeckwith/yes-https"
---

# YES HTTPS!

`yes-https` is a happy little npm module that makes it easy to require `https` for your connect based application.

It does this two ways:
- Setting the `Strict-Transport-Security` HTTP header.  Learn more at [OWASP](https://www.owasp.org/index.php/HTTP_Strict_Transport_Security_Cheat_Sheet).
- Automatically sending an HTTP 301 for the first request.  This is often overlooked, as HSTS only works after the browser hits the https endpoint the first time.

## Installation

`npm install yes-https`

## Usage

```js
import yes from 'yes-https';
import express from 'express';

let app = express();

// Use the yes-https connect middleware.  Note - this will only work if NODE_ENV is set to production.
app.use(yes());

app.get('/', (req, res) => {
  res.end('Thanks for checking it out!');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('App listening on port %s', server.address().port);
  console.log('Press Ctrl+C to quit.');
});
```

You can also set a few settings with the middleware to control the header:

```js
app.use(yes({
  maxAge: 86400,            // defaults `86400`
  includeSubDomains: true,  // defaults `true`
  preload: true…
