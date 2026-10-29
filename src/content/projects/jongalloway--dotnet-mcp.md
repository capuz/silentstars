---
repo: "jongalloway/dotnet-mcp"
name: "dotnet-mcp"
description: "MCP wrapper for the .NET SDK"
readmeQualityOk: true
url: "https://github.com/jongalloway/dotnet-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 37
forks: 4
openIssues: 21
closedIssues: 153
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-10-18T15:53:40Z"
lastCommitAt: "2026-10-29T21:24:39Z"
lastReleaseAt: "2026-01-13T07:25:16Z"
status: "thriving"
tags: ["hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 31
maintainers: ["jongalloway", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a89a02007a732d8ef072caafa99ba3f36e389b23ba2cea7c08275777c5cb4bf0/jongalloway/dotnet-mcp"
---

# .NET MCP Server

Give your AI assistant superpowers for .NET development! This MCP server connects GitHub Copilot, Claude, and other AI assistants directly to the .NET SDK, enabling them to create projects, manage packages, run builds, and more—all through natural language.

## Quick Install

Click to install in your preferred environment:

> **Note**: Quick install requires .NET 10 SDK.

## What is This?

The .NET MCP Server is a **Model Context Protocol (MCP) server** that connects AI assistants to the .NET SDK using the [Model Context Protocol](https://modelcontextprotocol.io/). Think of it as giving your AI assistant a direct line to `dotnet` commands, but with intelligence and context.

> **Important**: This package is designed exclusively as an **MCP server** for AI assistants. It is not intended for use as a library or for programmatic consumption in other .NET applications. The only supported use case is running it as an MCP server via `dnx` or `dotnet run`.

```mermaid
graph LR
    A[AI Assistant<br/>Copilot/Claude] -->|Natural Language| B[.NET MCP Server]
    B -->|dotnet commands| C[.NET SDK]
    C -->|Results| B
    B -->|Structured Response| A
    
    style A…
