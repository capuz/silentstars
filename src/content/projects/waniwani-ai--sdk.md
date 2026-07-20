---
repo: "WaniWani-AI/sdk"
name: "sdk"
description: "Build distribution MCPs: multi-step conversational funnels (lead gen, booking, quotes) that run as a single MCP tool in ChatGPT, Claude, and Cursor. A typed state graph compiles to one MCP tool."
readmeQualityOk: true
url: "https://github.com/WaniWani-AI/sdk"
homepage: "https://docs.waniwani.ai/sdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["chatgpt", "claude", "conversational-ai", "lead-generation", "mcp", "model-context-protocol", "state-machine", "typescript", "distribution-mcp", "mcp-funnel"]
stars: 16
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-02-02T05:21:01Z"
lastCommitAt: "2026-07-20T06:33:28Z"
lastReleaseAt: "2026-04-10T12:31:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 50
maintainers: ["maximeantoine1997", "kopancek", "pancakeInDev"]
openGraphImageUrl: "https://opengraph.githubassets.com/2669d6a76b3bd2b58b764c656528c5729cbd73fe4c6f3c53bfe6d46bb5d84e65/WaniWani-AI/sdk"
---

# @waniwani/sdk

**The open-source TypeScript SDK for MCP funnels** — multi-step conversational flows (sales, lead generation, booking, quotes) that run as a single MCP tool inside ChatGPT, Claude, Cursor, and any MCP-capable client.

[**Docs**](https://docs.waniwani.ai) · [**Website**](https://waniwani.ai) · [**Dashboard**](https://app.waniwani.ai) · [**CLI**](https://www.npmjs.com/package/@waniwani/cli) · [**Issues**](https://github.com/WaniWani-AI/sdk/issues)

</div>

One typed state graph compiles to one MCP tool. MIT, bring your own store, optional hosted Platform via one env var.

Forked from production MCPs we shipped for paying customers (insurance quoting, pet care, lead capture, booking), and open-sourced once the shape stabilized.

## Install

```bash
bun add @waniwani/sdk @modelcontextprotocol/sdk zod
```

## 30-second example

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createFlow, END, MemoryKvStore, START } from "@waniwani/sdk/mcp";
import { z } from "zod";

const flow = createFlow({
  id: "hello",
  title: "Hello World",
  description: "Say…
