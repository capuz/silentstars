---
repo: "plasmate-labs/plasmate"
name: "plasmate"
description: "Browser engine for agents. HTML in, structured Semantic Object Model out. Native MCP and AWP with a supported CDP subset. Apache-2.0."
readmeQualityOk: true
url: "https://github.com/plasmate-labs/plasmate"
homepage: "https://docs.plasmate.app"
language: "Rust"
languages: ["Rust", "HTML"]
languagePcts: [49, 38]
topics: ["ai-agents", "browser-engine", "cdp", "headless-browser", "llm", "puppeteer", "rust", "semantic-web", "web-scraping", "agent-web-protocol"]
stars: 36
forks: 5
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-16T17:38:22Z"
lastCommitAt: "2026-09-08T08:17:40Z"
lastReleaseAt: "2026-04-05T21:53:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 44
maintainers: ["dbhurley"]
openGraphImageUrl: "https://opengraph.githubassets.com/845474ca44a72ae06deaa8c09d7f1ac1be7004c536ebc94e6ec3b0470fb7d221/plasmate-labs/plasmate"
fundingLinks: ["CUSTOM:https://plasmate.app"]
discussionCount: 5
---

</p>

<h1 align="center">Plasmate</h1>

  The browser engine for agents.<br/>
  HTML in. Semantic Object Model out.
</p>

</p>

</p>

---

Dependency and CI trust policy, local audit commands, and scorecard promotion
rules are documented in [Supply-chain policy](https://github.com/plasmate-labs/plasmate/blob/HEAD/docs/SUPPLY-CHAIN.md).

Plasmate compiles HTML into a **Semantic Object Model (SOM)**, a structured
representation that LLMs can reason about directly. It runs JavaScript via V8
and implements a documented CDP subset for supported Puppeteer workflows. SOM
output removes presentation and runtime markup; output size and tokenization are
page-, configuration-, serialization-, and tokenizer-dependent.

| | Plasmate | Lightpanda | Chrome |
|---|---|---|---|
| **Primary output** | **Structured SOM JSON** | Raw HTML / DOM | Raw HTML / DOM |
| **JavaScript** | **Embedded V8 pipeline** | Browser runtime | Browser runtime |
| **Agent protocol** | **Native MCP and AWP** | CDP | CDP |
| **Benchmark policy** | **Retained, denominator-complete reports** | Project-specific | Project-specific |
| **License** | **Apache-2.0** | AGPL-3.0 | Chromium |

## Install

```bash
curl -fsSL…
