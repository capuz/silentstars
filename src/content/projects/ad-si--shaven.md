---
repo: "ad-si/shaven"
name: "shaven"
description: "DOM building utility & Template engine based on JsonML + syntax sugar"
readmeQualityOk: true
url: "https://github.com/ad-si/shaven"
homepage: "https://shaven.ad-si.com"
language: "TypeScript"
languages: ["TypeScript", "Mustache"]
languagePcts: [67, 21]
topics: ["jsonml", "dom", "template-engine", "template", "svg", "html", "html2shaven"]
stars: 75
forks: 6
openIssues: 4
closedIssues: 27
watchers: 3
contributors: 4
recentReleases: 1
createdAt: "2014-03-02T16:02:00Z"
lastCommitAt: "2026-11-03T12:32:00Z"
lastReleaseAt: "2026-11-03T12:48:15Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 31
maintainers: ["ad-si"]
openGraphImageUrl: "https://opengraph.githubassets.com/530eaae78fe44c04264110cdbdc1d254f27c2fc23a66a6dfa8fe49ad65d6c5da/ad-si/shaven"
fundingLinks: ["GITHUB:https://github.com/ad-si"]
---

# Shaven

A **DOM building utility** and **Template engine**
based on **JsonML** with syntax sugar.

Checkout [shaven.ad-si.com] for extensive documentation.

[build-status]: https://travis-ci.org/ad-si/shaven.svg
[shaven.ad-si.com]: https://shaven.ad-si.com

## Example

```javascript
shaven(
  [document.body,
    ['h1#logo', 'Static Example'],
    ['p','Some example text'],
    ['ul#list.bullets',
      ['li', 'item1'],
      ['li.active', 'item2'],
      ['li',
        ['a', 'item3', {href: '#'}]
      ]
    ],
    ['em', 'Important', {
      style: {
        color: 'red',
        'font-size': '2em',
      },
    }]
  ]
)
```

compiles to

```html
<body>
  <h1 id="logo">Static Example</h1>
  <p>Some example text</p>
  <ul id="list" class="bullets">
    <li>item1</li>
    <li class="active">item2</li>
    <li><a href="#">item3</a></li>
  </ul>
  <em style="color:red;font-size:2em">Important</em>
</body>
```

In order to convert HTML fragments to shaven arrays, the included
[`html2shaven`](https://www.npmjs.com/package/html2shaven) CLI tool can be used.

## Features

- Syntax Sugar for ids, classes and variable caching
- Support for namespaces. (Lets you build SVGs and other XML…
