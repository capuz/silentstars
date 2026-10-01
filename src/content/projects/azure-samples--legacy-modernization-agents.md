---
repo: "Azure-Samples/Legacy-Modernization-Agents"
name: "Legacy-Modernization-Agents"
description: "AI-powered COBOL to Java Quarkus modernization agents using Microsoft Agent Framework. Automates legacy mainframe code modernization with intelligent agents for analysis, conversion, and dependency mapping."
readmeQualityOk: true
url: "https://github.com/Azure-Samples/Legacy-Modernization-Agents"
language: "C#"
languages: ["C#"]
languagePcts: [72]
topics: ["gbb-ip-atlas", "agents", "ai", "appmod", "dotnet"]
stars: 221
forks: 95
openIssues: 17
closedIssues: 57
watchers: 8
contributors: 5
recentReleases: 0
createdAt: "2025-06-04T19:24:27Z"
lastCommitAt: "2026-10-01T10:23:19Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 42
maintainers: ["gkaleta"]
openGraphImageUrl: "https://opengraph.githubassets.com/54c95ac5ebbc58a7ddcb65258702ba504ef445463bf55d916b3c54120faee52e/Azure-Samples/Legacy-Modernization-Agents"
---

# Legacy Modernization Agents - COBOL to Java/C# Migration

This open source migration framework was developed to demonstrate AI Agents capabilities for converting legacy code like COBOL to Java or C# .NET. Each Agent has a persona that can be edited depending on the desired outcome.
The migration uses Microsoft Agent Framework with a multi-provider architecture supporting **Azure OpenAI** (Responses API + Chat Completions), **GitHub Copilot** (PAT or CLI-based SDK), and **direct OpenAI** to analyze COBOL code and its dependencies, then convert to either Java Quarkus or C# .NET (user's choice).

## 🎬 Portal Demo

*The web portal provides real-time visualization of migration progress, dependency graphs, and AI-powered Q&A.*

---

> [!TIP]
> **Start here.** Run these in order from the repository root:
>
> | Step | Command | What it does |
> |---|---|---|
> | 1 | `./doctor.sh setup` | **Configure the framework**: AI provider, credentials, models and local services |
> | 2 | *(copy files)* | **Put your sources in `source/`**: COBOL programs (`.cbl`), copybooks (`.cpy`), and JCL jobs (`.jcl`) with their procedures and INCLUDE members (`.proc`, `.prc`, `.inc`) |
> | 3 | `./doctor.sh…
