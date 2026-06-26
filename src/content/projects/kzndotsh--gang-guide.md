---
repo: "kzndotsh/gang.guide"
name: "gang.guide"
description: "Evidence backed mapping of criminal organizations across the US — alliances, rivalries, history, and culture."
url: "https://github.com/kzndotsh/gang.guide"
homepage: "https://gang.guide"
language: "Svelte"
languages: ["Svelte"]
languagePcts: [69]
topics: ["ai", "crime", "data-analysis", "data-science", "data-visualization", "dataset", "gangs", "konva", "konvajs", "llm"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-26T01:15:45Z"
lastCommitAt: "2026-06-26T06:47:52Z"
lastReleaseAt: "2026-06-26T01:37:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["kzndotsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1280823402/9e09169a-796a-449a-b89d-60f254e4a2e3"
---

<p>
    </p>
</div>

    <h1>gang.guide</h1>
    <p><strong>Evidence backed mapping of criminal organizations across the US — alliances, rivalries, history, and culture.</strong></p>
    <p>
    </p>
</div>

---

## Quick Start

```bash
# Clone and setup
git clone https://github.com/kzndotsh/gang.guide.git
cd gang.guide
just setup

# Or manually:
npm install
cd apps/web && npm install
python3 build.py

# Run the dev server
just dev
```

## How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│                          DATA PIPELINE                              │
│  SOURCES e.g:                                                       │
│  Wikipedia ─┐                                                       │
│  StreetGangs ─┼─→ scrape → clean HTML → LLM extract ×3              │
│  DOJ/FBI ───┘                    │                                  │
│                                  ▼                                  │
│                         consensus filter (2/3 agree)                │
│                                  │                                  │
│                                  ▼                                  │
│…
