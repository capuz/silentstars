---
repo: "jongalloway/dotnet-mcp"
name: "dotnet-mcp"
description: "MCP wrapper for the .NET SDK"
url: "https://github.com/jongalloway/dotnet-mcp"
language: "C#"
languages: ["C#"]
languagePcts: [98]
stars: 28
forks: 2
openIssues: 9
closedIssues: 152
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-10-18T15:53:40Z"
lastCommitAt: "2026-06-28T03:07:35Z"
lastReleaseAt: "2026-01-13T07:25:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 47
maintainers: ["jongalloway", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34f0599ab40c86c9f2b68fcdfb8fd0d5cd653a4eaf4c5d798b32d5e40f3e6800/jongalloway/dotnet-mcp"
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
