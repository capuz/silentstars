---
repo: "quran-ws/quran-engine"
name: "quran-engine"
description: "A fast native rendering engine for interactive Mushaf pages in mobile and desktop Quran applications."
readmeQualityOk: true
url: "https://github.com/quran-ws/quran-engine"
language: "Rust"
languages: ["Rust"]
languagePcts: [38]
stars: 12
forks: 2
openIssues: 10
closedIssues: 18
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-09-04T15:57:27Z"
lastCommitAt: "2026-11-04T13:04:45Z"
lastReleaseAt: "2026-10-07T17:39:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["AbdullahObaid", "iTarek", "mustafa0x"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b465894275cbcf940a1fecbcbc9f7cd587f72d8435e029d4fe7253f07e5e74b/quran-ws/quran-engine"
---

**A rendering engine for interactive Mushaf pages that uses each platform's native graphics APIs.**

Use it when building Quran applications for mobile or desktop and you need fast, lightweight page rendering with interactive access to page elements.

> محرّك لعرض صفحات المصحف التفاعلية بكفاءة باستخدام الرسم الأصلي لكل منصة.
>
> استخدمه عند بناء تطبيقات القرآن على الجوال أو سطح المكتب عندما تحتاج عرضًا سريعًا وخفيفًا لصفحات المصحف مع إمكانية التفاعل مع عناصرها.

| | |
|---|---|
| **Package** | `@quran.ws/engine` · `0.7.0` |
| **Whole mushaf** | 26 MB as one bundle · 41.8 MB page by page · 92.6 MB raw |
| **Wasm engine** | 530 KB in the 0.7.0 release |
| **Licence** | MIT (the code) · source bundle terms (the data) |

```sh
npm install @quran.ws/engine
```

For a small Canvas-only reader that needs page drawing and word bands, import
the dependency-free QVP decoder. It loads the original page files directly and
does not load Wasm:

```js
import { loadPage } from '@quran.ws/engine/lite'

const page = await loadPage('/pages/042.qvp')
const canvas = document.querySelector('canvas')
page.draw(canvas.getContext('2d'), page.fit(canvas, 24))
```

### Canvas resolution

Canvas2D rasterises…
