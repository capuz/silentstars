---
repo: "bhjsdev/bwin"
name: "bwin"
description: "Tiling window library for web browsers"
readmeQualityOk: true
url: "https://github.com/bhjsdev/bwin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [83]
stars: 6
forks: 1
openIssues: 17
closedIssues: 15
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-10-27T05:33:56Z"
lastCommitAt: "2026-07-08T05:42:25Z"
lastReleaseAt: "2024-12-13T06:36:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 70
maintainers: ["ohxyz", "github-actions[bot]", "bhjsdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e365264110bde845e5c967743e00247d0354717f04324215bc5037c1d64bc45b/bhjsdev/bwin"
---

# Binary Window

A lightweight window-tiling JavaScript library for the browser, featuring resizable panes, drag-and-drop, and more. Works with any framework or none.

## Quick start

Drop this into an `.html` file and open it in your browser — no build step required:

```html
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bwin@latest/dist/bwin.css" />
    <script type="importmap">
      { "imports": { "bwin": "https://cdn.jsdelivr.net/npm/bwin@latest/dist/bwin.min.js" } }
    </script>
    <script type="module">
      import { BinaryWindow } from 'bwin';

      const element = document.createElement('em');
      element.innerHTML = 'Hello World';

      const bwin = new BinaryWindow({
        width: 400,
        height: 300,
        children: [
          { position: 'left', size: 200, content: element },
          {
            position: 'right',
            children: [
              { position: 'top', size: '40%' },
              { position: 'bottom', size: '60%' },
            ],
          },
        ],
      });

      bwin.mount(document.getElementById('container'));
    </script>
  </head>
  <body>
  </body>
</html>
```

To install from npm…
