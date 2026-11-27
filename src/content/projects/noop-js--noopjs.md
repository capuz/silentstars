---
repo: "noop-js/noopjs"
name: "noopjs"
description: "Zero-runtime & resumable by default. Signals, SSR, atomic CSS — no JS on static pages."
readmeQualityOk: true
url: "https://github.com/noop-js/noopjs"
homepage: "https://noopjs.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-19T15:38:50Z"
lastCommitAt: "2026-11-27T16:26:17Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 64
undervaluedScore: 17
maintainers: ["boukaba"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1274515320/d4159197-1aaf-4db7-a46f-c949e3f51aa2"
---

Not by sanitizing strings. By making data structurally unable to become executable markup.

```
    ╔══════════════════════════════════════════════════════════════════╗
    ║  .noop.tsx  ──►  Compiler  ──►  Vanilla JS                       ║
    ║                    │                                             ║
    ║                    ├── SSR:  HTML + Provenance Tree       ║
    ║                    │         │                                   ║
    ║                    │         ▼                                   ║
    ║                    │    Client Runtime  ◄── 0–5.7 KB             ║
    ║                    │    (No hydration — just resume)             ║
    ║                    │                                             ║
    ║                    ├── Security Kernel: validated sinks          ║
    ║                    │   + per-render provenance tokens             ║
    ║                    │                                             ║
    ║                    └── Atomic CSS  +  Tailwind v4                ║
    ║                        (Zero runtime CSS-in-JS)                  ║
    ╚══════════════════════════════════════════════════════════════════╝
```

---
