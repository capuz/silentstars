---
repo: "aogz/webmcpinspector"
name: "webmcpinspector"
description: "WebMCP Inspector discovers both declarative (HTML form-based) and imperative (JavaScript API) tools exposed via the WebMCP specification. It lets you view schemas, edit attributes, execute tools, and test with Chrome's on-device Gemini Nano model, all through a live sandboxed browser session powered by Webfuse."
readmeQualityOk: true
url: "https://github.com/aogz/webmcpinspector"
homepage: "https://webmcpinspector.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
topics: ["mcp", "mcp-client", "mcp-server", "mcp-tool", "webmcp"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-03T16:10:58Z"
lastCommitAt: "2026-11-25T13:21:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 36
maintainers: ["aogz"]
openGraphImageUrl: "https://opengraph.githubassets.com/802ffbee3756c286f1a1d42fe7910acde9cbe27ba4ba4a6c293022f09b05f946/aogz/webmcpinspector"
---

# WebMCP Inspector

Inspect, test and improve the [WebMCP](https://webmachinelearning.github.io/webmcp/) tools of any web page: run them, let models use them in a prompt debugger, check with evals that a model picks the right tool, and hand the live page to your own agent.

The page opens in a [Webfuse](https://www.webfuse.com) session next to the inspector, so there is nothing to install. In browsers without built-in WebMCP, Webfuse gives the page `document.modelContext` through its polyfill.

Live: [webmcpinspector.com](https://webmcpinspector.com) · Test page that uses every WebMCP feature: [`kitchen-sink.html`](https://webmcpinspector.com/inspect/fixtures/kitchen-sink.html)

## Status

Version 2.0.0, rebuilt in November 2026 for the current WebMCP spec (`document.modelContext`, `getTools()` / `executeTool()`, `AbortSignal` removal, `outputSchema`, the four tool annotations).

### What works where

| Browser | Form tools | Script tools |
| :- | :- | :- |
| Without built-in WebMCP (Firefox, Safari, Chrome without WebMCP) | Yes | Yes, through the Webfuse polyfill |
| Chrome with built-in WebMCP (for example Chrome 151) | Yes | **Not yet.** See below |
