---
repo: "MarcoPorcellato/logseq-matryca-parser"
name: "logseq-matryca-parser"
description: "Stop feeding broken Markdown to your AI. A deterministic Logseq parser that preserves parent-child context for RAG, plus a 60FPS visualizer 👓 , plus writer ✍️ append only "
readmeQualityOk: true
url: "https://github.com/MarcoPorcellato/logseq-matryca-parser"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ast", "local-first", "logseq", "logseq-export", "python", "rag", "ai", "knowledge-graph", "parser"]
stars: 29
forks: 16
openIssues: 32
closedIssues: 74
watchers: 1
contributors: 11
recentReleases: 0
createdAt: "2026-04-23T04:56:08Z"
lastCommitAt: "2026-11-07T09:29:55Z"
lastReleaseAt: "2026-05-29T02:47:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 45
maintainers: ["actions-user", "MarcoPorcellato", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a251c852f2067d40d2b55c95346331d7bce2a50cecfd55c09950969582cc4f79/MarcoPorcellato/logseq-matryca-parser"
fundingLinks: ["GITHUB:https://github.com/MarcoPorcellato"]
---

# 🔱 Logseq Matryca Parser (The Logos Protocol)

**Stop feeding broken Markdown to your AI.**

> *Turning a forest of local plain-text files into a unified semantic powerhouse.*

[👉 **TRY THE LIVE INTERACTIVE DEMO**](https://MarcoPorcellato.github.io/logseq-matryca-parser/)

[Quickstart](#quickstart) · [Compatibility](#verified-logseq-markdown-compatibility) · [Documentation](https://github.com/MarcoPorcellato/logseq-matryca-parser/blob/HEAD/docs/README.md) · [Roadmap](https://github.com/MarcoPorcellato/logseq-matryca-parser/blob/HEAD/docs/ROADMAP_2026-2027.md) · [Cookbook](https://github.com/MarcoPorcellato/logseq-matryca-parser/blob/HEAD/docs/COOKBOOK.md) · [Release highlights](https://github.com/MarcoPorcellato/logseq-matryca-parser/blob/HEAD/RELEASE_HIGHLIGHTS.md) · [AI / LLM index](https://github.com/MarcoPorcellato/logseq-matryca-parser/blob/HEAD/llms.txt)

---

## Quickstart

Install the package and scan a Logseq graph:

```bash
uv pip install logseq-matryca-parser
matryca-parse scan /path/to/logseq/graph
```

The scan reports pages, blocks, references, and graph diagnostics without
changing the vault. Continue with the [CLI and Python examples](#usage), or use
the…
