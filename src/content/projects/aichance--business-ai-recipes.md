---
repo: "aichance/business-ai-recipes"
name: "business-ai-recipes"
description: "State Lens adds selected localStorage/IndexedDB changes, screenshots and per-step diffs to your existing Playwright tests. One local HTML report. Experimental, MIT; no account or API key."
readmeQualityOk: true
url: "https://github.com/aichance/business-ai-recipes"
homepage: "https://aichance.github.io/business-ai-recipes/state-lens.html"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [70, 24]
topics: ["demo-video", "developer-tools", "gif", "local-first", "playwright", "screen-recording", "codex", "codex-skills", "end-to-end-testing", "regression-testing"]
stars: 5
forks: 1
openIssues: 20
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-06T12:10:36Z"
lastCommitAt: "2026-10-30T09:42:18Z"
lastReleaseAt: "2026-10-10T06:28:19Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 80
undervaluedScore: 54
maintainers: ["aichance"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1407239185/796433cc-bab5-472b-a6b8-03386a14475e"
promoted: true
postedAt: "2026-10-29T21:31:28.009Z"
---

# aichance's developer tools

## State Lens — which save step changed your draft?

Put selected **localStorage / sessionStorage / IndexedDB values, field changes and screenshots**
beside the actions in your existing Playwright test. Open one local HTML report
when a save/reload flow fails. Experimental, MIT, no account or API key.

[**Replay the recorded example**](https://aichance.github.io/business-ai-recipes/state-lens.html) · [**Copy one file into your Playwright test**](https://github.com/aichance/business-ai-recipes/blob/HEAD/docs/state-lens-install.md) · [**26-second replay (original0.1 recording)**](https://aichance.github.io/business-ai-recipes/state-lens-demo.mp4)

Download the [versioned library](https://aichance.github.io/business-ai-recipes/state-lens-v0.4.1-experimental.1.mjs) ([SHA256](https://aichance.github.io/business-ai-recipes/state-lens-v0.4.1-experimental.1.mjs.sha256)) next to your existing test, then:

```js
import { createStateLens } from './state-lens-v0.4.1-experimental.1.mjs';
```

**TypeScript:** 0.4.1 fixes the inferred `probes` option. Projects that need declarations can also copy the matching [`.d.mts`…
