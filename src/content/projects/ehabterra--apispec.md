---
repo: "ehabterra/apispec"
name: "apispec"
description: "APISpec - Generate OpenAPI 3.1 specs from Go code with intelligent framework detection and call graph analysis. Supports Gin, Echo, Chi, Fiber, and net/http."
readmeQualityOk: true
url: "https://github.com/ehabterra/apispec"
homepage: "https://apispec.ehabterra.com"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["api-documentation", "chi", "echo", "fiber", "gin", "go", "openapi", "openapi-generator", "static-analysis", "swagger"]
stars: 82
forks: 2
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-06-25T02:45:31Z"
lastCommitAt: "2026-07-12T06:19:31Z"
lastReleaseAt: "2025-10-19T04:44:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 50
maintainers: ["ehabterra", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f3a1a82e08799c0322528e2a51357478f15ad95b5c5ad1d08feea01038fcab9/ehabterra/apispec"
discussionCount: 3
---

# APISpec: Generate OpenAPI from Go code

</div>

**APISpec** analyzes your Go source and generates an OpenAPI 3.1 spec (YAML or JSON). It detects routes for popular frameworks (Gin, Echo, Chi, Fiber, Gorilla Mux, `net/http`), follows the call graph to the real handlers, and infers request/response types from actual code — struct tags, literals, generics, and more.

**TL;DR**: Point APISpec at your module. Get an OpenAPI spec — plus, optionally, an interactive call-graph diagram and a browser-based config UI.

## Table of Contents

- [Demo](#demo)
- [Why APISpec](#why-apispec)
- [Quick Start](#quick-start)
- [The Tools](#the-tools)
  - [`apispec` — CLI generator](#apispec--cli-generator)
  - [`apispecui` — Browser-based config & preview](#apispecui--browser-based-config--preview)
  - [`apidiag` — Interactive call-graph server (standalone)](#apidiag--interactive-call-graph-server-standalone)
- [Framework Support](#framework-support)
- [Go Language Support](#go-language-support)
- [How It Works](#how-it-works)
  - [The pipeline, step by step](#the-pipeline-step-by-step)
- [Configuration](#configuration)
- [Programmatic Usage](#programmatic-usage)
- [Performance &…
