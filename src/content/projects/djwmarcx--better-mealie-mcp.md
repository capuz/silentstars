---
repo: "djwmarcx/better-mealie-mcp"
name: "better-mealie-mcp"
description: "MCP server exposing every Mealie API endpoint (250+ tools) via FastMCP"
readmeQualityOk: true
url: "https://github.com/djwmarcx/better-mealie-mcp"
homepage: "https://djwmarcx.github.io/better-mealie-mcp/"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [70, 25]
stars: 21
forks: 3
openIssues: 2
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 5
createdAt: "2026-07-09T10:10:07Z"
lastCommitAt: "2026-11-03T10:51:53Z"
lastReleaseAt: "2026-09-24T10:04:26Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 46
maintainers: ["djwmarcx", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/733744f39a5221654564eada264c74c42e9b5f520491399dec8b65fe8c2804af/djwmarcx/better-mealie-mcp"
---

# 🍲 Better Mealie MCP

all 250+ operations, none excluded. Manage recipes, meal plans, shopping lists,<br>
households and more from any AI assistant, in natural language.</em>

---

Built with [FastMCP](https://github.com/jlowin/fastmcp) `from_openapi`: tools are
generated straight from Mealie's OpenAPI spec, so the server stays in sync with
Mealie and nothing is hand-maintained. See [TOOLS.md](https://github.com/djwmarcx/better-mealie-mcp/blob/HEAD/TOOLS.md) for the full
tool list.

## 💬 What can you do with it?

| You say | What happens |
|---------|--------------|
| *"Add a chicken tikka masala recipe from this URL"* | Scrapes and imports the recipe |
| *"What can I cook with what's in my pantry?"* | Searches recipes by your ingredients |
| *"Plan my dinners for next week"* | Creates meal-plan entries |
| *"Build a shopping list for those meals"* | Generates a consolidated shopping list |
| *"Tag all my soups as 'winter'"* | Bulk-updates recipe tags |

## 🧙 Setup Wizard

[**→ Open the Setup Wizard**](https://djwmarcx.github.io/better-mealie-mcp/)

Don't hand-write JSON. The wizard walks you through every choice and emits a
ready-to-paste config for **your** combination:

-…
