---
repo: "hotosm/ui"
name: "ui"
description: "Shared UI components with HOT theming"
readmeQualityOk: true
url: "https://github.com/hotosm/ui"
homepage: "https://ui.hotosm.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
stars: 9
forks: 3
openIssues: 4
closedIssues: 55
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2023-09-20T06:22:42Z"
lastCommitAt: "2026-08-27T14:25:27Z"
lastReleaseAt: "2025-06-26T13:38:15Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 74
maintainers: ["spwoodcock", "pre-commit-ci[bot]", "warmijusti"]
openGraphImageUrl: "https://opengraph.githubassets.com/f957c299b9c2910ed32f92278cfcf07d30ea497ce92b75f4877ef402751eead7/hotosm/ui"
---

# HOT Shared UI

</p>
  <em>Shared Web Components with theming for use across HOTOSM tools.</em>
</p>
  </a>
  </a>
  </a>
  </a>
      alt="Package version">
  </a>
      alt="Downloads">
  </a>
  </a>
</p>

  📖 <strong>Documentation</strong>: 
</p>

  🖥️ <strong>Source Code</strong>: 
</p>

  🎯 <strong>Roadmap / Tasks</strong>: 
</p>

---

## Overview

Shared [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
built with [Lit](https://lit.dev) and themed for HOTOSM tools using
[WebAwesome](https://webawesome.com) primitives.

**Goals:**

- Reduce code duplication across HOT tools.
- Provide a consistent HOT look-and-feel out of the box.
- Keep the component set small and focused (header, sidebar, footer, etc.).

**WebAwesome version:** `3.11.0`

---

## Installation

```bash
pnpm install @hotosm/ui @awesome.me/webawesome@3.11.0
```

> [!NOTE]
> `@awesome.me/webawesome` is a **peer dependency**. Always pin it to the
> version shown above to avoid conflicts between HOT components and
> WebAwesome internals.

---

## Loading Styles

Use the single self-contained stylesheet (WebAwesome base styles + HOT
theme inlined):

```js
import…
