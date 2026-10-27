---
repo: "neoleaf-science/neoleaf"
name: "neoleaf"
description: "Free collaborative LaTeX editor that compiles in your browser (WebAssembly), with Git on GitHub or Codeberg"
readmeQualityOk: true
url: "https://github.com/neoleaf-science/neoleaf"
homepage: "https://neoleaf.science"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [68]
topics: ["collaborative-editing", "latex", "rust", "webassembly", "latex-editor"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-10-19T22:13:15Z"
lastCommitAt: "2026-10-27T12:39:21Z"
lastReleaseAt: "2026-10-24T19:12:14Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 79
undervaluedScore: 41
maintainers: ["tassiovirginio"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1426234892/23469608-5ba6-483b-b803-c36370a41d59"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/neoleafscience", "KO_FI:https://ko-fi.com/tassiovirginio"]
discussionCount: 0
---

# NeoLeaf 🍃

A modern, collaborative web platform for **LaTeX**, built in **Rust** with the **Topcoat** framework. NeoLeaf brings native versioning and storage through **GitHub**, **100% WebAssembly compilation in the browser** (or through the **Local Agent**), real-time collaboration (CRDT/Yjs) and zero server cost for compilation.

🌐 **Try the production version:** [neoleaf.science](https://neoleaf.science)

---

## 🌟 Main Features

### 🐙 Native Storage and Git via GitHub
- **Your data belongs to you:** every project is a Git repository hosted directly on your GitHub account, marked with the `neoleaf` topic.
- **Browser-First Git:** smart synchronization with `isomorphic-git` and `lightning-fs` in the browser, backed by the Rust server.
- **Full Git Integration:** automatic commits, push, manual pull with <kbd>Ctrl</kbd> + <kbd>S</kbd>, change status (uncommitted, ahead, behind), visual conflict resolution and line-by-line history (**Git Blame**) in the editor margin.
- **Invitations and Collaboration through GitHub:** accept or decline collaboration invitations to LaTeX projects directly from the NeoLeaf dashboard.

### ⚡ Flexible Compilation: WebAssembly, Local Agent or…
