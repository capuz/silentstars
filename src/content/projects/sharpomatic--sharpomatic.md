---
repo: "sharpomatic/SharpOMatic"
name: "SharpOMatic"
description: "Build AI workflows with deep .NET integration."
readmeQualityOk: true
url: "https://github.com/sharpomatic/SharpOMatic"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [65, 20]
stars: 8
forks: 3
openIssues: 3
closedIssues: 38
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2025-11-29T10:14:40Z"
lastCommitAt: "2026-08-24T04:23:15Z"
lastReleaseAt: "2026-08-24T04:04:19Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 73
maintainers: ["PhilWrightBuildxact", "ComponentFactory", "sharpomatic"]
openGraphImageUrl: "https://opengraph.githubassets.com/1701be33a955135111640c143bc3da9f102bddc470d419b7af9e74220eb030c0/sharpomatic/SharpOMatic"
discussionCount: 1
---

%20|%20TypeScript-512BD4?logo=dotnet)

# SharpOMatic

SharpOMatic is an open-source workflow builder for AI-heavy .NET applications.
It combines a browser-based editor with a host-it-yourself execution engine so you can design workflows visually, run them inside your own backend, and keep complete control over data, storage, and integrations.

## What SharpOMatic Does

- Build AI workflows with nodes for models, code, branching, batching, gosub calls, and suspend/resume control.
- Run workflows either as one-shot executions or as multi-turn conversations.
- Persist runs, traces, assets, and conversation history for debugging and auditing.
- Call directly into your backend from C# code nodes and expose backend types and methods for structured output and tool calling.
- Configure and run evaluations against datasets with grader workflows.
- Embed the editor into your own ASP.NET Core host instead of relying on a managed SaaS.

## Why Use It

### Configuration over code

AI systems usually need rapid iteration across prompts, models, tools, and orchestration.
SharpOMatic keeps most of that experimentation in workflow configuration instead of forcing a full code-edit-build-run cycle…
