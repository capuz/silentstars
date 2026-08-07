---
repo: "s4k10503/velvet"
name: "velvet"
description: "A React-style declarative UI framework for Unity UI Toolkit — virtual DOM, reconciliation, hooks, and utility-first styling."
readmeQualityOk: true
url: "https://github.com/s4k10503/velvet"
homepage: "https://s4k10503.github.io/velvet/"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 14
forks: 0
openIssues: 72
closedIssues: 178
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-07-04T12:48:34Z"
lastCommitAt: "2026-08-07T05:16:33Z"
lastReleaseAt: "2026-08-02T05:45:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 54
maintainers: ["s4k10503", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/26d38061ba5e9f1beb850ba0c7d2f1ed852dd26c5eeb2b4a93f9ffc4ad30e37c/s4k10503/velvet"
---

# Velvet

**A React-style declarative UI framework for Unity UI Toolkit.**

Velvet brings React's authoring model to Unity UI Toolkit. You describe UI as the pure-function
output of state; a Virtual DOM and reconciler diff that description and apply only the changes to
the underlying `VisualElement` tree. Hooks, a Zustand-style store, utility-first styling, and
compile-time memoization round out the experience — all from C#, with no UXML or USS
authoring required.

Velvet's guiding principle is **"reproduce React's semantics as faithfully as possible,"**
deviating only where a C# / Unity constraint makes a deviation a clear improvement.

### Why Velvet — who it's for

If building Unity UI by imperatively wiring up `VisualElement`s feels like fighting state/UI
desync bugs, Velvet is for you:

- **Web / React developers**: write Unity UI with near-zero learning cost — your React mental model
  (components, hooks, props, context, a Zustand-style store) transfers directly.
- **Anyone tired of state/UI desync**: "UI is a pure function of state" structurally removes a whole
  *class* of bugs — you describe the target UI for a given state and the reconciler makes the tree
  match,…
