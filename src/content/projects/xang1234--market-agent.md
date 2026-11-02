---
repo: "xang1234/market-agent"
name: "market-agent"
description: "Evidence-backed finance research terminal: screen markets, dig into companies, and run an AI analyst where every number traces back to its source."
readmeQualityOk: true
url: "https://github.com/xang1234/market-agent"
homepage: "https://xang1234.github.io/market-agent/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai-agent", "ai-analyst", "equity-research", "finance", "financial-data", "fintech", "hallucination", "investment-research", "llm", "rag"]
stars: 5
forks: 2
openIssues: 87
closedIssues: 147
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-22T01:19:53Z"
lastCommitAt: "2026-11-02T11:36:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 62
maintainers: ["xang1234"]
openGraphImageUrl: "https://opengraph.githubassets.com/933d279de69eecd0d93146ce4c5ef4069e4a1440a6842f11ae24ebcf9030e530/xang1234/market-agent"
---

Ask about any US company. Get charts, tables, and analysis built from SEC filings and market data, and open a linked figure to see where it came from.

Ask a general-purpose chatbot for a company's gross margin and you get a confident number with no way to check it. market-agent answers only from facts it has stored: SEC company facts, filing extracts, and Polygon prices. Code, not the model, builds the charts and tables. The model writes the narrative, but its figures come from the evidence the app gathered, and linked figures open to their source. A second model checks each inference before you see it.

## Quickstart

**[Try the demo in your browser](https://xang1234.github.io/market-agent/)**, with nothing to install. It replays one recorded conversation, so ask its three questions in order and open any linked figure to see its source.

To run it yourself, try the analyst offline first. This needs Node 22.19 or later and npm. No Docker, no API keys.

```bash
git clone https://github.com/xang1234/market-agent.git
cd market-agent
cp .env.dev.example .env.dev
DEV_PROFILE=chat DEV_MODE=ui ./scripts/dev-shell.sh up
```

Open <http://localhost:5173>. Dev mode signs you in as a mock…
