---
repo: "numikel/law-scrapper-mcp"
name: "law-scrapper-mcp"
description: "A comprehensive Model Context Protocol (MCP) server for accessing and analyzing Polish legal acts from the Sejm API, enabling AI-powered legal research and document analysis."
readmeQualityOk: true
url: "https://github.com/numikel/law-scrapper-mcp"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 20
forks: 5
openIssues: 10
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 3
createdAt: "2025-10-17T09:05:01Z"
lastCommitAt: "2026-08-24T04:22:54Z"
lastReleaseAt: "2026-08-22T10:05:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["numikel", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/299da7b21cd1e2a3957ac2be659bb4a10696c199f116ee6668c549753294e0b0/numikel/law-scrapper-mcp"
---

# Law Scrapper MCP

A comprehensive Model Context Protocol (MCP) server for accessing and analyzing Polish legal acts from the Sejm API, enabling AI-powered legal research and document analysis.

</a>

## Features

- **Comprehensive legal act access** - Full access to Polish legal acts from Dziennik Ustaw (DU) and Monitor Polski (MP)
- **Advanced search and filtering** - Multi-criteria search by date, type, keywords, publisher, and status
- **Result Store with chained filtering** - Store search results and filter with regex, type/status/year match, date ranges, sorting
- **Document Store pattern** - Load acts into memory for efficient section-level navigation and search
- **Detailed document analysis** - Metadata, structure, references, and content retrieval
- **Content processing** - Automatic PDF-to-text and HTML-to-Markdown conversion
- **Date calculations** - Specialized date utilities for legal document analysis
- **System metadata** - Keywords, statuses, document types, and institution data
- **Official MCP SDK** - Built with `mcp[cli]==2.0.0` and `MCPServer`; STDIO and stateless Streamable HTTP transports
- **Async HTTP client** - Efficient httpx client with retry logic and…
