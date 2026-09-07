---
repo: "scrapfly/scrapfly-cli"
name: "scrapfly-cli"
description: "Agentic CLI for the Scrapfly platform: scrape, extract, crawl, and drive a cloud browser over CDP. Built-in LLM agent with Anthropic, OpenAI, Gemini, and Ollama. JSON-first, pipe-friendly, one static binary."
readmeQualityOk: true
url: "https://github.com/scrapfly/scrapfly-cli"
language: "Go"
languages: ["Go"]
languagePcts: [96]
topics: ["agentic", "ai-agent", "anthropic", "anti-bot", "browser-automation", "cdp", "cli", "golang", "llm-agent", "openai"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-15T08:51:01Z"
lastCommitAt: "2026-09-07T07:39:44Z"
lastReleaseAt: "2026-04-22T17:03:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 28
maintainers: ["jjsaunier"]
openGraphImageUrl: "https://opengraph.githubassets.com/4752e54cf9fa13d8924bed5f27b2ace3f10e068ddb912c7d4d2f7ebd5ae31566/scrapfly/scrapfly-cli"
---

</p>

<h1 align="center">scrapfly-cli</h1>

  <b>The agentic CLI for web data and browser automation.</b><br/>
  Scrape, extract, and drive a cloud browser over CDP from any LLM
  tool-use loop. JSON-first, pipe-friendly, one static binary.
</p>

</p>

---

`scrapfly` is the official CLI for the [Scrapfly](https://scrapfly.io)
platform. It is built **agent-first**: every verb returns a stable JSON
envelope, every product is a tool an LLM can call, and an autonomous
agent is baked in.

- **Agentic by design**: `scrapfly agent "<task>"` runs a Playwright-MCP
  style loop against a cloud browser. Providers ship out of the box for
  Anthropic, OpenAI, Gemini, and any OpenAI-compatible endpoint (Ollama,
  vLLM). For any other tool-use loop, install the [`scrapfly-cli` agent
  skill](https://github.com/scrapfly/skills/tree/main/scrapfly-cli) — see
  [For LLM agents](#for-llm-agents) below.
- **Full product surface**: Web Scraping, Screenshot, Extraction, Crawler,
  and the CDP-driven Browser, each with complete SDK-parity flags.
- **Pipe-friendly**: stable envelope (`{success, product, data|error}`),
  `--content-only`/`--data-only` for single-line piping, ndjson for
  batch runs,…
