---
repo: "lofcz/pptxgenjs-plus"
name: "pptxgenjs-plus"
description: "Build PowerPoint presentations with JavaScript. Works with Node, Browser, and more."
readmeQualityOk: true
url: "https://github.com/lofcz/pptxgenjs-plus"
homepage: "https://lofcz.github.io/pptxgenjs-plus/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
stars: 20
forks: 4
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-06-28T13:30:00Z"
lastCommitAt: "2026-10-31T02:00:24Z"
lastReleaseAt: "2026-08-10T00:47:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 57
maintainers: ["lofcz", "actions-user", "mbrizion"]
openGraphImageUrl: "https://opengraph.githubassets.com/a896109b009f3b181a103f742cc13c043bfa4309dff0702f598d335def8d7650/lofcz/pptxgenjs-plus"
discussionCount: 1
---

# pptxgenjs-plus

```bash
                    _/|                                   \|\||
                   / | `_         generate pptx          -- |||/
                  /     =\   using typescript on node   /=   |||/
               _-'        \      or in the browser     /    |||||/
_____________-'        _`-/                            \-' |||||||/`-_____________
  \                   / --                              -|||||||||             /
   \                  \                                  |/||||              /
    |_____       _\    \_______                   _______/    /_       _____|
_________.\___,-'  \__________/                  \___________/  `-.___/,_________
```

## Getting started

```bash
npm install pptxgenjs-plus
```

```ts
import pptxgen from 'pptxgenjs-plus'

const pres = new pptxgen()
const slide = pres.addSlide()
slide.addText('Hello', { x: 0.5, y: 0.5, fontSize: 24 })
await pres.writeFile({ fileName: 'hello.pptx' })
```

Declarative JSX lives in the workspace package `pptxgenjs-plus-jsx` (`packages/pptxgenjs-jsx`):

```tsx
/** @jsxImportSource pptxgenjs-plus-jsx */
import { Deck, Slide, Text } from 'pptxgenjs-plus-jsx'
import { renderPptx } from…
