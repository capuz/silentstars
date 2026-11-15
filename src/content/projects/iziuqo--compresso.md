---
repo: "iziuqo/compresso"
name: "compresso"
description: "Tiny, zero-dependency image optimizer that runs entirely in the browser. Compress, resize, and convert images on the client side — no server needed."
readmeQualityOk: true
url: "https://github.com/iziuqo/compresso"
homepage: "https://compresso.izaias.xyz"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["accessibility", "avif", "browser", "canvas", "client-side", "file-upload", "image-compression", "image-optimization", "javascript", "lightweight"]
stars: 8
forks: 1
openIssues: 56
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-06-28T01:20:36Z"
lastCommitAt: "2026-11-15T11:23:35Z"
lastReleaseAt: "2026-11-12T17:56:45Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded"]
healthScore: 78
undervaluedScore: 53
maintainers: ["claude", "ethanhartmann", "iziuqo"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1282592955/189aaeba-1658-488c-8b4f-58ca93bd8eda"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/iziuqo"]
discussionCount: 0
---

A 3.6 KB, zero-dependency image compressor with HEIC input, parallel Web Worker batching, and a never-bigger-output guarantee — no server needed.

---

## Why Compresso

- **Smallest in its class — 3.6 KB gzipped, zero required dependencies.** Roughly **4–5× smaller than browser-image-compression and pica**, and still leaner than compressorjs ([see comparison](#comparison)). The core is pure Canvas API — no WASM, no codecs bundled.
- **iPhone HEIC/HEIF input, everywhere.** Safari/iOS decode natively; other browsers lazy-load a WASM decoder *only* the first time a HEIC file appears, so the tiny core stays codec-free for every other format. No other browser compressor handles HEIC.
- **Never returns a bigger file.** With the default `format: 'auto'`, output is guaranteed to be no larger than the original — if no encode can beat an already-efficient source, the source itself comes back, and the result says so (`kept: true`). An explicit `format` is always honoured, and the result shows when that file grew. No rival makes this guarantee.
- **Real parallel batch compression, off the main thread.** `compresso.js/pool` runs a resilient Web Worker pool — crash and timeout recovery…
