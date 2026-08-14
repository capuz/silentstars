---
repo: "soenneker/soenneker.blazor.drawflow"
name: "soenneker.blazor.drawflow"
description: "A Blazor interop library for drawflow.js"
readmeQualityOk: true
url: "https://github.com/soenneker/soenneker.blazor.drawflow"
homepage: "https://soenneker.com"
language: "CSS"
languages: ["CSS", "C#", "HTML"]
languagePcts: [54, 23, 21]
topics: ["blazor", "blazorlibrary", "canvas", "csharp", "diagram", "dotnet", "drawflow", "drawflowinterop"]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-06-30T22:51:22Z"
lastCommitAt: "2026-08-14T05:13:48Z"
lastReleaseAt: "2025-07-09T16:31:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 81
maintainers: ["renovate[bot]", "soenneker"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ef83667ced046a7c3ef7c3f452c0558ea1d36c65e0af531050baab612b2e52b/soenneker/soenneker.blazor.drawflow"
fundingLinks: ["GITHUB:https://github.com/soenneker"]
discussionCount: 0
---

#  Soenneker.Blazor.Drawflow

**Soenneker.Blazor.Drawflow** is a lightweight, modern Blazor wrapper for [drawflow.js](https://github.com/jerosoler/Drawflow), enabling interactive node-based diagrams in your Blazor applications. It supports advanced features like modules, zoom, import/export, and full event handling.

## Features

- **Node and Connection Management**: Add, remove, and update nodes and connections programmatically.
- **Modules**: Organize nodes into modules and switch between them.
- **Zoom & Pan**: Built-in zoom controls and canvas panning.
- **Import/Export**: Serialize and restore flows as JSON.
- **Event Handling**: Subscribe to all major events (node created, removed, selected, data changed, etc).
- **Customizable**: Pass options to control rerouting, curvature, zoom limits, and more.
- **CDN or Local Assets**: Load drawflow.js and CSS from CDN or local files.

---

## Installation

```bash
dotnet add package Soenneker.Blazor.Drawflow
```

---

## Quick Start

1. **Register Services** (in `Program.cs`):

```csharp
builder.Services.AddDrawflowInteropAsScoped();
```

2. **Add the Component** (in your `.razor` file):

```razor
<Drawflow @ref="Flow"…
