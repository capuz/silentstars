---
repo: "arhancanli/canlicapital"
name: "canlicapital"
description: "canli-mcp: 443 free finance tools for Claude, ChatGPT, Cursor and any MCP client (SEC filings, insider trades, 13F holders, options, the Fed, macro, quant, backtest validation, a Lab of a million strategies). MIT, no API key, runs locally. Plus Canli Capital's open quant research, every number linked to its source."
readmeQualityOk: true
url: "https://github.com/arhancanli/canlicapital"
homepage: "https://canlicapital.com"
language: "HTML"
languages: ["HTML", "JavaScript"]
languagePcts: [69, 26]
topics: ["ai-agents", "algorithmic-trading", "backtest-overfitting", "backtesting", "claude", "deflated-sharpe-ratio", "financial-data", "fintech", "investment-research", "mcp"]
stars: 6
forks: 2
openIssues: 13
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-18T13:17:39Z"
lastCommitAt: "2026-11-09T04:34:42Z"
lastReleaseAt: "2026-10-13T15:19:49Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 78
undervaluedScore: 55
maintainers: ["arhancanli"]
openGraphImageUrl: "https://opengraph.githubassets.com/e05265b528ceb9dca19a212568151529cba3dabd835c61145f1c7f998afe3f6c/arhancanli/canlicapital"
discussionCount: 4
---

# Canli Capital

**Open quant research where every published number comes with the file that produced it, including
the strategies that failed.** Live at **[canlicapital.com](https://canlicapital.com)**.

If a check here stopped you from trusting a backtest that wasn't real, a ⭐ helps other quants find it.

## Try it in a minute

```bash
# Ask your AI assistant whether a backtest is real (Claude Code shown; Cursor, VS Code and
# Claude Desktop setups are in mcp/README.md)
claude mcp add canli -- npx -y canli-validation-mcp

# Or call the free API: get a key, then deflate a Sharpe ratio for the number of trials you ran
curl -X POST https://canlicapital.com/api/v1/keys -H "Content-Type: application/json" -d '{"label":"readme"}'

# Or check the published record yourself (Python 3)
pip install cryptography
curl -sO https://canlicapital.com/glassbox/reproduce.py
for f in capacity_commitment founder_commitment; do curl -sO https://canlicapital.com/glassbox/$f.json; done
python3 reproduce.py --dir .
```

## What is here

- **Backtest validators** (deflated Sharpe, CSCV overfitting probability, minimum track record,
  haircut Sharpe, luck-equivalent trials) as an [MCP…
