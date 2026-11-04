---
repo: "andredelgado/continente-mcp"
name: "continente-mcp"
description: "Unofficial MCP server for Continente.pt: search products, check sale rules, read favorites and orders, and make verified cart changes from Claude and other AI assistants."
readmeQualityOk: true
url: "https://github.com/andredelgado/continente-mcp"
homepage: "https://www.npmjs.com/package/continentept-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["claude", "continente", "groceries", "mcp", "mcp-server", "mcpb", "model-context-protocol", "playwright", "portugal", "shopping"]
stars: 27
forks: 7
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-15T10:48:48Z"
lastCommitAt: "2026-11-04T11:27:43Z"
lastReleaseAt: "2026-10-16T10:47:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 47
maintainers: ["andredelgado", "dependabot[bot]", "Lozano-Miguel"]
openGraphImageUrl: "https://opengraph.githubassets.com/482a3b65fc7565e2e6c86a058de329326941b96f1c56ccb93bf87e97f8ebeea3/andredelgado/continente-mcp"
---

# Continente MCP

An [MCP](https://modelcontextprotocol.io) server that lets AI assistants shop at
[Continente.pt](https://www.continente.pt): search products, check prices and sale rules,
read your favorites and past orders, and fill your cart. Checkout and payment always stay
on the website.

> **Unofficial.** This project is not affiliated with, endorsed by or supported by
> Continente or MC Sonae. It automates the public website with a headless browser, may break
> when the site changes, and should be used in line with the website's terms. You are
> responsible for anything placed in your cart.

## Features

- **Catalogue search and product details**, with exact prices, unit prices, availability and
  sale rules for weighted and bulk products.
- **Safe cart changes.** Every change is confirmed by reading the cart back. If a change
  cannot be confirmed, the result says so and tells the assistant to check the cart instead
  of retrying.
- **Your account**: favorites, order history and a ranking of the products you buy most.
- **Runs locally** over stdio. Your credentials and session are stored on your computer and
  sent only to Continente.pt.
- **Built-in guidance.** The…
