---
repo: "vothanhdat/react-state-custom"
name: "react-state-custom"
description: "Write a React hook once, use it anywhere: one running instance per params, shared by every component and store that calls it. Compose stores with hooks and render data as it arrives."
readmeQualityOk: true
url: "https://github.com/vothanhdat/react-state-custom"
homepage: "https://vothanhdat.github.io/react-state-custom/docs/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["react", "state-management", "hooks", "react-hooks", "typescript", "derived-state", "global-state", "jotai-alternative", "react-state", "react19"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-06-18T15:50:01Z"
lastCommitAt: "2026-10-03T09:22:50Z"
lastReleaseAt: "2026-02-22T06:11:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 78
maintainers: ["genwolff"]
openGraphImageUrl: "https://opengraph.githubassets.com/747792236613b85d8967bdce978472d5306685a05813c5db39ef57a7615f256c/vothanhdat/react-state-custom"
---

# React State Custom

**Write a hook once, use it anywhere.**

One running instance per params, shared by every component and every store that calls it. Composed with hooks, rendered as soon as each piece arrives.

```bash
npm install react-state-custom
```

📚 **[Documentation →](https://vothanhdat.github.io/react-state-custom/docs/)** · 🎮 **[Live Demo →](https://vothanhdat.github.io/react-state-custom/)**

---

## ⚡ The 30-Second Pitch

A custom hook is reused as code, not as state. Call `useTicker('BTC')` in three components and the hook runs three times: three `useState`s, three socket subscriptions, three values that can drift apart.

Wrap the same hook with `createStore` and those three components share **one** running instance: one state, one subscription.

```tsx
// plain custom hook: every call is its own instance
<Header />     // useTicker('BTC') → own useState, socket subscription #1
<Chart />      // useTicker('BTC') → own useState, socket subscription #2
<OrderForm />  // useTicker('BTC') → own useState, socket subscription #3

// store: every call shares one instance
<Header />     // useTicker({ symbol: 'BTC' }) ┐
<Chart />      // useTicker({ symbol: 'BTC' }) ├─…
