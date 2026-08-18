---
repo: "konippi/servo-fetch"
name: "servo-fetch"
description: "A self-contained browser engine that fetches, renders, and extracts web content as Markdown, JSON, or screenshots — no Chromium, no API key, no setup."
readmeQualityOk: true
url: "https://github.com/konippi/servo-fetch"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["cli", "fetch", "mcp", "rust", "servo", "web-scraping", "agent-skills"]
stars: 137
forks: 15
openIssues: 6
closedIssues: 19
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-25T00:07:28Z"
lastCommitAt: "2026-08-18T04:09:54Z"
lastReleaseAt: "2026-05-04T02:27:42Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 93
undervaluedScore: 29
maintainers: ["dependabot[bot]", "konippi", "servo-fetch-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d3286f9ff04379df07999d34c03814c3d3f8953da1907a176ce1278881e82c0/konippi/servo-fetch"
discussionCount: 0
---

<h1 align="center">servo-fetch</h1>
  <p>
  </p>
</div>

servo-fetch embeds the [Servo](https://servo.org/) browser engine. It executes JavaScript, computes CSS layout,
captures screenshots with a software renderer, and extracts clean content — available as a CLI, a Rust library,
a Python SDK, and a Node.js SDK.

```bash
# CLI
servo-fetch "https://example.com"                          # clean Markdown
servo-fetch "https://example.com" --format png -o page.png # PNG screenshot
```

```rust
// Rust
let md = servo_fetch::markdown("https://example.com").await?;
```

```python
# Python
page = servo_fetch.fetch("https://example.com")
print(page.markdown)
```

```ts
// Node.js
import { fetch } from "servo-fetch";
const md = await fetch("https://example.com");
```

## Why servo-fetch

- **Zero dependencies** — single binary, no Chromium, no API key
- **Real JS execution** — SpiderMonkey runs JavaScript, parallel CSS engine computes layout
- **Layout- and visibility-aware extraction** — strips navbars, sidebars, footers by rendered position, plus cookie banners, modals, and CSS-hidden content (`opacity:0`, `aria-hidden`, sr-only)
- **Schema-driven JSON** — declarative CSS-selector schema…
