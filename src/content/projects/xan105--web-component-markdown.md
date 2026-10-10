---
repo: "xan105/web-component-markdown"
name: "web-component-markdown"
description: "Web-component to render markdown into html with syntax highlighting"
readmeQualityOk: true
url: "https://github.com/xan105/web-component-markdown"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [51, 44]
topics: ["browser", "markdown", "web-component", "esbuild", "esm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-19T08:53:08Z"
lastCommitAt: "2026-10-10T10:04:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 74
undervaluedScore: 38
maintainers: ["xan105"]
openGraphImageUrl: "https://opengraph.githubassets.com/b41d8cf1e0783f0eaa608ca02502fac67a93223372c05f48d3a7b083191cdf34/xan105/web-component-markdown"
fundingLinks: ["GITHUB:https://github.com/xan105", "CUSTOM:https://www.paypal.me/xan105"]
---

About
=====

Web-component to load an external markdown file (.md) and render it into sanitized HTML.

- GFM (GitHub Flavored Markdown spec)
- Light DOM CSS styling
- Optional JavaScript API
- Code syntax highlighting
- Table of contents
- Copy code to clipboard
- Media embedding (image, audio, video)

🛠 Under the hood it's powered by [Marked](https://github.com/markedjs/marked) and [Highlight.js](https://github.com/highlightjs/highlight.js).

📦 Scoped `@xan105` packages are for my own personal use but feel free to use them.

🤔 Curious to see it in real use? This package powers [my personal blog](https://xan105.com/).

Example
=======

Import and define the Web-component:

```js
import { Markdown } from "/path/to/markdown.js"
customElements.define("mark-down", Markdown);
```

HTML:

```html
  <mark-down src="/path/to/md"></mark-down>
```

Optional JavaScript API:

```js
  const el = document.querySelector("mark-down");
  // or
  const el = document.appendChild(new Markdown);
  
  el.addEventListener("load", ()=>{
    console.log("loading...");
  });
  el.addEventListener("success", ()=>{
    console.log("ok");
  });
  el.addEventListener("failure", ({detail})=>{…
