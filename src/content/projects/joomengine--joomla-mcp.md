---
repo: "joomengine/joomla-mcp"
name: "joomla-mcp"
description: "A Model Context Protocol (MCP) server that enables AI assistants to securely manage and automate Joomla sites through Joomla APIs and CLI tools."
readmeQualityOk: true
url: "https://github.com/joomengine/joomla-mcp"
language: "TypeScript"
languages: ["TypeScript", "PHP"]
languagePcts: [72, 20]
topics: ["joomla", "joomla-mcp", "mcp", "mcp-server", "joomengine"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-23T14:35:20Z"
lastCommitAt: "2026-11-24T14:07:19Z"
lastReleaseAt: "2026-10-12T20:18:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["Llewellynvdm", "dependabot[bot]", "lemuelvdm"]
openGraphImageUrl: "https://opengraph.githubassets.com/832a17d498119fe224db3590d3bf8f44ef839be3557aec9aa2dd61ba115a13f5/joomengine/joomla-mcp"
---

# JoomEngine MCP for Joomla

Connect an MCP client to Joomla and Joomla Component Builder (JCB). Read site
content, edit component definitions through JCB Web Services, or compile a
component on the Joomla host. Writes and command jobs require operator approval. The
`@joomengine/joomla-mcp` npm package provides the Node.js server and an
embeddable TypeScript library. One server can address several sites by alias,
each with its own credentials and enabled tools.

| I want to… | Where to start |
| --- | --- |
| Connect a desktop or terminal client to a Joomla site | Follow the read-only setup below, then the [client guide](https://github.com/joomengine/joomla-mcp/blob/HEAD/docs/CLIENTS.md). |
| Connect a hosted MCP client such as ChatGPT | Deploy the [Streamable HTTP server](https://github.com/joomengine/joomla-mcp/blob/HEAD/docs/REMOTE_HTTP.md) with HTTPS and OAuth. [Docker Compose and systemd instructions](https://github.com/joomengine/joomla-mcp/blob/HEAD/docs/DEPLOYMENT.md) |
