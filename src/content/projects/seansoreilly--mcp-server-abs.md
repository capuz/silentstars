---
repo: "seansoreilly/mcp-server-abs"
name: "mcp-server-abs"
description: "MCP server for Australian Bureau of Statistics"
readmeQualityOk: true
url: "https://github.com/seansoreilly/mcp-server-abs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 9
forks: 10
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-12-25T12:48:34Z"
lastCommitAt: "2026-09-18T08:26:21Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 70
undervaluedScore: 42
maintainers: ["seansoreilly"]
openGraphImageUrl: "https://opengraph.githubassets.com/dbe0e586e7ae7ac6e70e6ab0eee9cead00063ea294000c8d34a839f3d2027051/seansoreilly/mcp-server-abs"
---

# ABS MCP Server

An MCP (Model Context Protocol) server that provides access to the Australian Bureau of Statistics (ABS) Data API. This server allows AI assistants to query and analyze ABS statistical data through the SDMX-ML API.

## Features

- Dynamic discovery of all available ABS datasets via SDMX-ML API
- Query ABS datasets with optional filters
- Support for multiple data formats (JSON, CSV, XML)
- Built on the MCP protocol for seamless integration with AI assistants
- Caching system for improved performance
- Comprehensive logging and error handling

## Installation

```bash
npm install
```

## Development

### Prerequisites

- Node.js 18 or higher
- npm 8 or higher

### Building

```bash
npm run build
```

### Running

```bash
npm start
```

### Development Tools

- `npm run build`: Build the TypeScript code
- `npm start`: Run the server
- `npm run inspector`: Run the MCP inspector for testing

## Project Structure

```
src/
├── index.ts                # Main server implementation
├── services/
│   └── abs/
│       ├── ABSApiClient.ts # ABS API communication
│       └── DataFlowService.ts # Data flow management and caching
├── types/
│   └── abs.ts             #…
