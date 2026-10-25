---
repo: "ciresnave/json-mcp-server"
name: "json-mcp-server"
description: "Give your LLM the interface to JSON files they wish they had!"
readmeQualityOk: true
url: "https://github.com/ciresnave/json-mcp-server"
language: "Rust"
languages: ["Rust", "PowerShell", "Python"]
languagePcts: [35, 26, 23]
stars: 6
forks: 2
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2025-06-29T18:08:57Z"
lastCommitAt: "2026-10-25T22:11:09Z"
lastReleaseAt: "2026-10-25T21:57:20Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 43
maintainers: ["ciresnave-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd1fd7feb7460534c84cedd9a917a1ac568460b9924f27c7221c89bbf24fabca/ciresnave/json-mcp-server"
---

# JSON MCP Server

A high-performance Rust-based Model Context Protocol (MCP) server that provides comprehensive JSON file operations optimized for LLM interactions. This server enables LLMs to efficiently read, write, query, and manipulate JSON files with support for extremely large datasets and advanced querying capabilities.

## 🚀 Features

### Core JSON Tools

- **📖 json-read**: Read JSON files with optional JSONPath filtering and pagination
- **✏️ json-write**: Write or update JSON files with multiple merge strategies  
- **🔍 json-query**: Execute complex JSONPath queries with various output formats
- **✅ json-validate**: Validate JSON structure and syntax with detailed diagnostics
- **❓ json-help**: Interactive help system with comprehensive examples and troubleshooting

### Key Capabilities

- **Large File Support**: Pagination for any JSON file; line-by-line streaming for line-delimited JSON (a single large JSON document is parsed whole)
- **JSONPath Querying**: Full JSONPath support for complex data extraction and filtering
- **Flexible Writing**: Three modes (replace, merge, append)
- **LLM-Optimized**: Detailed error messages and usage examples for optimal LLM…
