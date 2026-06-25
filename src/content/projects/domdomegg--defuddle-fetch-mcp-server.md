---
repo: "domdomegg/defuddle-fetch-mcp-server"
name: "defuddle-fetch-mcp-server"
description: "🌐✨ Fetch content from the web, cleaned up nicely for LLMs (using Defuddle)"
url: "https://github.com/domdomegg/defuddle-fetch-mcp-server"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [75]
topics: ["mcp-server", "model-context-protocol"]
stars: 6
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-06-13T11:51:10Z"
lastCommitAt: "2026-06-25T01:32:52Z"
lastReleaseAt: "2025-12-05T18:19:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 56
maintainers: ["dependabot[bot]", "domdomegg"]
openGraphImageUrl: "https://opengraph.githubassets.com/8fc63685cf7db8d28a768295c881aa751b0b80790496214d77a905c7e26a6578/domdomegg/defuddle-fetch-mcp-server"
fundingLinks: ["CUSTOM:https://adamjones.me/sponsor/"]
---

# defuddle-fetch-mcp-server

A Model Context Protocol server that provides web content fetching capabilities using the [Defuddle](https://github.com/kepano/defuddle) library. This server enables LLMs to retrieve and process content from web pages, automatically cleaning up the HTML and converting it to clean, readable markdown.

This is a drop-in replacement for the [default fetch MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) that uses [Readability](https://github.com/mozilla/readability). This generally provides better results for most modern webpages.

## Comparison

(using [this issue](https://github.com/kepano/defuddle/issues/61))

| Default Fetch MCP | Defuddle Fetch MCP |
| --- | --- |
| Contents of https://github.com/kepano/defuddle/issues/61:<br><br>The [MCP protocol](https://modelcontextprotocol.io/introduction) is a standard for giving AI models access to tools.<br><br>There's [a default fetch MCP server](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch), which enables AI models to fetch content from websites. This uses Readability.js which is a bit meh, particularly at navigating GitHub (which I try to use it for a…
