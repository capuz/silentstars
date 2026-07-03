---
repo: "counterfact/api-simulator"
name: "api-simulator"
description: "Not just a mock server. Turn an OpenAPI spec into TypeScript-based simulation, with state management, hot reload, and a REPL."
url: "https://github.com/counterfact/api-simulator"
homepage: "http://counterfact.dev/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["front-end-development", "mock-server", "openapi", "openapi3", "swagger", "typescript", "openapi-generator", "openapi31"]
stars: 164
forks: 19
openIssues: 2
closedIssues: 392
watchers: 4
contributors: 14
recentReleases: 0
createdAt: "2022-04-08T19:32:15Z"
lastCommitAt: "2026-07-03T12:35:42Z"
lastReleaseAt: "2022-09-27T21:38:04Z"
status: "thriving"
tags: ["funded"]
healthScore: 99
undervaluedScore: 45
maintainers: ["renovate[bot]", "github-actions[bot]", "pmcelhaney"]
openGraphImageUrl: "https://opengraph.githubassets.com/85b1f85d0ec0a3e5bd9c1db5a7907d7fcb3f326d471c08f1b96f1bf1793532a7/counterfact/api-simulator"
fundingLinks: ["GITHUB:https://github.com/pmcelhaney"]
discussionCount: 15
---

<h1><img src="./counterfact.svg" alt="Counterfact" border=0></h1>

<br>

 [](https://coveralls.io/github/pmcelhaney/counterfact)   [](https://deepwiki.com/pmcelhaney/counterfact)

</div>

<h2>Mock servers work—until you need state, failures, or control mid-run.</h2>
</div

Static responses aren’t enough. There’s no shared state. You can’t inject failures. You can’t test real workflows.<br>
Mock servers make it easy to get started, but hard to keep going.<br>
Counterfact is an API simulator without those limits. 

Point it at an [OpenAPI](https://www.openapis.org) document and get a live, stateful API in seconds. 
Supports Swagger 2.0 and OpenAPI 3.0, 3.1, and 3.2.
- Type-safe TypeScript handlers for every endpoint  
- Hot reloading as you edit  
- Shared state across routes  
- **A built-in REPL to control behavior at runtime**  
- Optional proxying to real backends

Flexbile for humans. Stable for [AI agents](https://github.com/counterfact/api-simulator/blob/main/docs/patterns/ai-assisted-implementation.md).

You’re in control—without restarting.

For a *frontend developer* waiting on a backend,<br>
a *test engineer* who needs clean, reproducible state,<br>
or an *AI agent* that…
