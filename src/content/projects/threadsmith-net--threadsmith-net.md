---
repo: "Threadsmith-NET/Threadsmith.NET"
name: "Threadsmith.NET"
description: " A .NET-native AI coding harness where the host validates plans, tools, mutations, builds, and tests while models remain pluggable reasoning engines. Threadsmith.NET aims to be more efficient with tool and token use my using the semantic capabilities of Roslyn and MSBuild to treat the .NET solution as more than just a nuch of text."
readmeQualityOk: true
url: "https://github.com/Threadsmith-NET/Threadsmith.NET"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["ai", "cli", "coding-agent", "mcp-tools", "tui", "csharp", "dotnet"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-08-19T22:19:28Z"
lastCommitAt: "2026-10-30T11:03:32Z"
lastReleaseAt: "2026-10-22T23:30:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 53
maintainers: ["mmike87"]
openGraphImageUrl: "https://opengraph.githubassets.com/8eb9a7e6e65c12d581859f6842e76f43b514d50ee394cadcc2d275c111ecacc9/Threadsmith-NET/Threadsmith.NET"
discussionCount: 6
---

# Threadsmith.NET

A .NET-native, terminal-first coding harness that treats C# code as code, not just text.

Threadsmith.NET opens real .NET repositories with Roslyn and MSBuild and runs an ordinary model conversation with governed tools backed by compiler semantics. The model reads source, chooses related edits, and calls `edit_source`; the host authorizes exact diffs, applies changes transactionally, and returns advisory compiler feedback. Builds and tests require explicit tool calls. Interactive use defaults to a full-screen TUIKit interface; the same application workflows are available headlessly for scripts and CI.

Threadsmith.NET is currently in beta and under active testing and refinement. For current implementation status, see the [milestone plan](https://github.com/Threadsmith-NET/Threadsmith.NET/blob/main/docs/implementation-plans/milestones.md).

## Why Threadsmith?

Many coding agents treat a repository primarily as text and depend on repeated edit/build/test cycles to discover whether a change was valid. Threadsmith combines model reasoning with host-owned discovery, governed mutation, and targeted validation. When a repository is trusted for build execution,…
