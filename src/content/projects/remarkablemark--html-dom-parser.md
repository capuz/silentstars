---
repo: "remarkablemark/html-dom-parser"
name: "html-dom-parser"
description: "📝 HTML to DOM parser."
readmeQualityOk: true
url: "https://github.com/remarkablemark/html-dom-parser"
homepage: "https://b.remarkabl.org/html-dom-parser"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
topics: ["html-dom-parser", "dom-parser", "html", "dom", "parser", "server-parser", "parse", "htmlparser2"]
stars: 107
forks: 25
openIssues: 2
closedIssues: 29
watchers: 1
contributors: 12
recentReleases: 0
createdAt: "2016-10-10T20:11:24Z"
lastCommitAt: "2026-10-01T10:24:15Z"
lastReleaseAt: "2019-11-04T05:13:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 97
undervaluedScore: 50
maintainers: ["dependabot[bot]", "remarkablemark", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53011fce40addbde920f8f0a4f389a106fa37697351c9110aad4848ea9477879/remarkablemark/html-dom-parser"
fundingLinks: ["GITHUB:https://github.com/remarkablemark", "PATREON:https://patreon.com/remarkablemark", "KO_FI:https://ko-fi.com/remarkablemark", "LIBERAPAY:https://liberapay.com/remarkablemark", "BUY_ME_A_COFFEE:https://buymeacoffee.com/remarkablemark", "THANKS_DEV:https://thanks.dev/u/gh/remarkablemark", "CUSTOM:https://b.remarkabl.org/teespring"]
discussionCount: 0
---

# html-dom-parser

HTML to DOM parser that works on both the server (Node.js) and the client (browser):

```
HTMLDOMParser(string[, options])
```

The parser converts an HTML string to a JavaScript object that describes the DOM tree.

For example:

```js
import parse from 'html-dom-parser';

parse('<p>Hello, World!</p>');
```

<details>
<summary>Output</summary>
<p>

```js
[
  Element {
    type: 'tag',
    parent: null,
    prev: null,
    next: null,
    startIndex: null,
    endIndex: null,
    children: [
      Text {
        type: 'text',
        parent: [Circular],
        prev: null,
        next: null,
        startIndex: null,
        endIndex: null,
        data: 'Hello, World!'
      }
    ],
    name: 'p',
    attribs: {}
  }
]
```

</p>
</details>

[StackBlitz](https://stackblitz.com/edit/html-dom-parser) | [JSFiddle](https://jsfiddle.net/remarkablemark/ff9yg1yz/) | [Examples](https://github.com/remarkablemark/html-dom-parser/tree/master/examples)

## Install

[NPM](https://www.npmjs.com/package/html-dom-parser):

```sh
npm install html-dom-parser --save
```

[Yarn](https://yarnpkg.com/package/html-dom-parser):

```sh
yarn add html-dom-parser
```…
