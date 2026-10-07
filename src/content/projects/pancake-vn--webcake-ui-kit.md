---
repo: "pancake-vn/webcake-ui-kit"
name: "webcake-ui-kit"
description: "Vue UI Kit Component"
readmeQualityOk: true
url: "https://github.com/pancake-vn/webcake-ui-kit"
language: "Vue"
languages: ["Vue", "JavaScript"]
languagePcts: [67, 27]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-05-07T09:55:31Z"
lastCommitAt: "2026-10-07T10:30:54Z"
lastReleaseAt: "2026-05-13T08:05:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["vuluu2k", "dhcongminh", "lbaminhh0211"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e7179afb3e326242edae90cac49eb44a1aa3b143d3ffd423aec8257bd07ba17/pancake-vn/webcake-ui-kit"
---

# <img src="./storybook-vue3/.storybook/logo-icon.svg" alt="" height="36" align="center" /> webcake-ui-kit

### The Vue UI kit that doesn't make you choose.

**One library. Two Vue versions. Zero build step.**
Ship the same components to Vue 2.7 _and_ Vue 3 — from a single source, with one import.

### 📖 **[Live Docs & Storybook → ui.webcake.io](https://ui.webcake.io)**

---

## 👋 Welcome

Migrating from Vue 2 to Vue 3 is painful enough — your UI library shouldn't make it worse.

Most Vue component libraries force you to **pick a side**. Choose Vue 2 → you're stuck. Choose Vue 3 → you have to rewrite the app first. Either way, you carry the cost.

**webcake-ui-kit refuses that tradeoff.** Every component is hand-authored under strict dual-compatibility rules so the _same import_ compiles, renders, and behaves identically on **Vue 2.7** and **Vue 3.4+** — from a codebase you can grep, fork, and theme as if it were your own.

```js
import { WkButton, WkDialog, WkInput } from 'webcake-ui-kit'
// ✅ Vue 2.7 — works
// ✅ Vue 3.x — works
// ✅ Same API. Same styles. Same behavior. One source of truth.
```

No `-vue2` package. No `-vue3` package. No build artifact gymnastics. Just `.vue`…
