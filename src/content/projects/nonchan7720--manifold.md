---
repo: "nonchan7720/manifold"
name: "manifold"
description: "MCP Gateway(Support for OAS, Swagger and MCP Server)"
readmeQualityOk: true
url: "https://github.com/nonchan7720/manifold"
language: "Go"
languages: ["Go"]
languagePcts: [94]
topics: ["golang", "mcp", "mcp-gateway", "model-context-protocol", "oauth2", "openapi", "swagger"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-10T14:43:03Z"
lastCommitAt: "2026-11-25T13:07:03Z"
lastReleaseAt: "2026-04-12T18:01:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 62
maintainers: ["renovate[bot]", "nonchan7720", "ncs-release-please-apps[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/50ef8ec3a76c4d7b13c42039d947ec70c85344315b630b1218059dbb8c8f9526/nonchan7720/manifold"
---

# Manifold

**One interface. Many connections. Manifold.**

English | [日本語](https://github.com/nonchan7720/manifold/blob/HEAD/README_ja.md)

Manifold is a gateway that acts as an MCP server while connecting to multiple external MCP servers and OpenAPI / Swagger-compliant REST APIs on the backend.

## Why "Manifold"?

The name **Manifold** comes from an engine's **intake manifold**.

An intake manifold is the component that distributes air and fuel evenly and efficiently from a single inlet to multiple cylinders. We named this project **Manifold** because its structure is similar.

| Engine manifold        | This project                         |
| ---------------------- | ------------------------------------ |
| Single inlet           | Requests from MCP clients            |
| Distribution / routing | Protocol conversion / routing        |
| To multiple cylinders  | To multiple external MCP / REST APIs |

## Architecture

```mermaid
flowchart TD
    client["MCP Client"] --> manifold["Manifold<br/>(this server)"]
    manifold --> mcp["External MCP Servers"]
    manifold --> rest["OpenAPI / Swagger<br/>REST API Servers"]
    manifold --> a2a["A2A Agents"]
```
