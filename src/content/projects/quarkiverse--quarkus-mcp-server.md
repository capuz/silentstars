---
repo: "quarkiverse/quarkus-mcp-server"
name: "quarkus-mcp-server"
description: "This extension enables developers to implement the MCP server features easily."
readmeQualityOk: true
url: "https://github.com/quarkiverse/quarkus-mcp-server"
homepage: "https://docs.quarkiverse.io/quarkus-mcp-server/dev/"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["quarkus-extension"]
stars: 196
forks: 62
openIssues: 10
closedIssues: 239
watchers: 5
contributors: 51
recentReleases: 0
createdAt: "2024-12-11T12:40:16Z"
lastCommitAt: "2026-08-05T06:06:23Z"
lastReleaseAt: "2025-02-28T13:56:18Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 45
maintainers: ["mkouba", "quarkiverse-ci[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c82d0234873ad7437b540929da7e1706ecf7dd42cb60fafa502a617c82808cb6/quarkiverse/quarkus-mcp-server"
---

# Quarkus MCP Server

This Quarkus extension provides both declarative and programmatic APIs that enable developers to easily implement [MCP](https://modelcontextprotocol.io/)[^1] server features.

[^1]: _"[Model Context Protocol](https://modelcontextprotocol.io/) (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools."_ 

> [!NOTE]  
> The [LangChain4j](https://github.com/langchain4j/langchain4j) project provides the MCP client functionality, either as a low-level programmatic API or as a full-fledged integration into AI-infused applications.

## Get Started

### Step #1

Add the following dependency to your POM file:

```xml
<dependency>
    <groupId>io.quarkiverse.mcp</groupId>
    <artifactId>quarkus-mcp-server-http</artifactId>
    <version>${quarkus-mcp-server-version}</version>
</dependency>
```

> [!NOTE]  
> This dependency includes both the legacy "HTTP/SSE" and the "Streamable HTTP" transport. Use the `quarkus-mcp-server-stdio` artifactId if you want to use the STDIO transport instead. See also the [Transports](https://docs.quarkiverse.io/quarkus-mcp-server/dev/concepts-transports.html) section in the…
