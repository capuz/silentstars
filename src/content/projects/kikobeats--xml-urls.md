---
repo: "Kikobeats/xml-urls"
name: "xml-urls"
description: "Get all urls from a Feed/Atom/RSS/Sitemap xml markup."
readmeQualityOk: true
url: "https://github.com/Kikobeats/xml-urls"
homepage: "https://nicedoc.io/kikobeats/xml-urls"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["xml-url", "xml", "xml-markup"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 28
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-01-28T17:21:54Z"
lastCommitAt: "2026-07-06T07:04:05Z"
lastReleaseAt: "2020-02-14T09:38:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 54
maintainers: ["Kikobeats", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/80ad70f7ae46f84b5ad92cdfab3be19c4baa45d60ebe02c9ebf799d8836ff64c/Kikobeats/xml-urls"
---

# xml-urls

> Get all URLs detected inside a Feed/Atom/RSS/Sitemap xml markup.

## Install

```bash
$ npm install xml-urls --save
```

## Usage

```js
const xmlUrls = require('xml-urls')

;(async () => {
  const url = process.argv[2]
  if (!url) throw new TypeError('Need to provide an url as first argument.')
  const urls = await xmlUrls(url)

  urls.forEach(url => console.log(url))

  // => [
  //  'http://www.sitemappro.com/',
  //  'http://www.sitemappro.com/download.html',
  //  'http://www.sitemappro.com/register.html',
  //  'http://www.sitemappro.com/examples.html',
  //  'http://www.sitemappro.com/company.html',
  //  'http://www.sitemappro.com/contact.html',
  //  ...
  // ]
})()
```

See more at [examples](https://github.com/Kikobeats/xml-urls/blob/HEAD/examples).

## API

### xmlUrls(urls, [options])

#### url

*Required*<br>
Type: `string`

#### options

Type: `object`

Use it for providing [html-get#options](https://github.com/Kikobeats/html-get#options).

##### whitelist

Type: `array`<br>
Default: `[]`

A list of links to be excluded from the final output. It supports regex patterns.

See [matcher](https://github.com/sindresorhus/matcher#matcher-= for know more.

##…
