---
repo: "Djarvur/cc-websearch"
name: "cc-websearch"
description: "websearch tool for Claude Code to replace the standard one"
readmeQualityOk: true
url: "https://github.com/Djarvur/cc-websearch"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 12
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-05-19T20:14:19Z"
lastCommitAt: "2026-07-04T22:52:11Z"
lastReleaseAt: "2026-05-25T19:28:23Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 52
maintainers: ["onokonem", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/484f9b9d297b36e49eadcee3248adccea5a6f74fd8928fd215bb04ebd121dcbe/Djarvur/cc-websearch"
---

# cc-websearch

A Claude Code plugin providing WebSearch and WebFetch skills as a drop-in replacement for Claude Code's built-in tools. Powered by DuckDuckGo (no API keys required). Zero configuration for basic use.

- **WebSearch** -- Search the web using DuckDuckGo, returning structured XML results
- **WebFetch** -- Fetch a web page, extract its main content, and convert to markdown

No API keys, no accounts, no subscriptions. Install the plugin and start searching.

## Quick Install

```bash
# Local development:
claude --plugin-dir /path/to/cc-websearch

# From GitHub release (requires packaged .zip):
claude --plugin-url https://github.com/your-org/cc-websearch/releases/download/v1.0/plugin.zip
```

Compiled scripts are shipped in git (built via esbuild), so the plugin works immediately after install -- no build step is needed.

## Usage

Both skills accept JSON input on stdin and write results to stdout. Errors and diagnostic messages are written to stderr.

### WebSearch

Pipe a JSON object with a `query` field:

```bash
echo '{"query":"latest ECMAScript specification"}' | node "${CLAUDE_PLUGIN_ROOT}/skills/websearch/scripts/websearch.cjs"
```

The script produces…
