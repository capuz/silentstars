---
repo: "kzndotsh/gang.guide"
name: "gang.guide"
description: "Evidence backed mapping of criminal organizations across the US — alliances, rivalries, history, and culture."
readmeQualityOk: true
url: "https://github.com/kzndotsh/gang.guide"
homepage: "https://gang.guide"
language: "Python"
languages: ["Python", "Svelte"]
languagePcts: [45, 43]
topics: ["ai", "crime", "data-analysis", "data-science", "data-visualization", "dataset", "gangs", "konva", "konvajs", "llm"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-06-26T01:15:45Z"
lastCommitAt: "2026-08-21T04:10:34Z"
lastReleaseAt: "2026-06-26T01:37:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 53
maintainers: ["kzndotsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1280823402/9e09169a-796a-449a-b89d-60f254e4a2e3"
---

<p>
    </p>
</div>

    <h1>gang.guide</h1>
    <p><strong>Map of US criminal organizations: alliances, rivalries, history, sources.</strong></p>
    <p>
    </p>
</div>

---

## Quick start

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

## How it works
Scrape → Extract (sonnet 4.6 × 3 temps) → Adjudicate → Merge → Apply → Build → Serve

1. **Scrape** raw text into `data/raw/{source}/{slug}/content.txt`
2. **Extract** structured JSON via sonnet 4.6 at 3 temperatures: edges need verbatim evidence quotes
3. **Adjudicate** with sonnet 4.6: validates evidence, rejects co-mentions, resolves conflicts
4. **Merge** uses `adjudicated.json` when present, otherwise 2/3 consensus
5. **Apply** conservative upgrade to `data/orgs/*.json` + `data/edges.json`: lint gates the result
6. **Build** compiles flat files into `graph.json` + `details.json`
7. **Serve** on Cloudflare Workers via SvelteKit + Konva.js canvas

`just pipeline <source>` runs extract → adjudicate → merge → apply dry-run. **Verify** (`just verify`) is a separate…
