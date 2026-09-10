---
repo: "bpmn-io/dmn-js"
name: "dmn-js"
description: "View and edit DMN diagrams in the browser."
readmeQualityOk: true
url: "https://github.com/bpmn-io/dmn-js"
homepage: "https://bpmn.io/toolkit/dmn-js/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["javascript", "dmn", "hacktoberfest"]
stars: 365
forks: 157
openIssues: 61
closedIssues: 495
watchers: 21
contributors: 42
recentReleases: 0
createdAt: "2015-06-05T08:30:47Z"
lastCommitAt: "2026-09-10T08:19:38Z"
lastReleaseAt: "2026-02-18T17:55:16Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 93
undervaluedScore: 41
maintainers: ["nikku", "barmac", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbd9457856b16e8e5acef07797f64c127033d0989a2ce5db16526978670b01ed/bpmn-io/dmn-js"
---

> __Starting with `dmn-js@8` the library displays and saves DMN 1.3 diagrams only.__ To open older DMN files, [migrate them](https://github.com/bpmn-io/dmn-migrate) before loading them with `dmn-js`.

# dmn-js - DMN for the web

View and edit DMN 1.3 diagrams in the browser.

## Installation

Use the library [pre-packaged](https://github.com/bpmn-io/dmn-js-examples/tree/main/pre-packaged)
or include it [via npm](https://github.com/bpmn-io/dmn-js-examples/tree/main/bundling)
into your node-style web-application.

## Usage

To get started, create a [dmn-js](https://github.com/bpmn-io/dmn-js) instance
and render [DMN 1.3 diagrams](http://www.omg.org/spec/DMN/About-DMN/) in the browser:

```javascript
const xml; // my DMN 1.3 xml
const viewer = new DmnJS({
  container: 'body'
});

try {
  const { warnings } = await viewer.importXML(xml);

  console.log('rendered');
} catch (err) {
  console.log('error rendering', err)
}
```

Checkout our [examples](https://github.com/bpmn-io/dmn-js-examples) for
more supported usage scenarios.

### Dynamic Attach/Detach

You may attach or detach the viewer dynamically to any element on the page, too:

```javascript
const viewer = new DmnJS();

//…
