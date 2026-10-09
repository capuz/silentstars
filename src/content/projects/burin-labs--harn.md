---
repo: "burin-labs/harn"
name: "harn"
description: "Harn is a programming language and runtime for building AI agents."
readmeQualityOk: true
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [69, 27]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 27
forks: 4
openIssues: 68
closedIssues: 2618
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-10-09T10:02:29Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 48
maintainers: ["burin-labs-agent", "kennethsinder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6a2db138edf213269c12f5a2571a6cedc1df2de0683d6047da04c1b50bd5403/burin-labs/harn"
---

# Harn

Harn is a programming language and runtime for building AI agents.

You define the task, prompts, tools, and rules. Harn runs the conversation between
the model and your tools, enforces permissions, and saves the history of the work.
It handles differences between model providers so your application can use the
same agent code with local or hosted models.

Use Harn when your application needs an agent to take several steps: investigate
a failed job, review a change, or play a game. For example,
[20eq](https://github.com/burin-labs/20eq) is a 20 Questions game written in Harn,
and [Burin Code](https://burincode.com) uses Harn in its coding workbench.

> Harn is pre-1.0. The language, standard library, and CLI can change between
> releases. See the [release notes](https://github.com/burin-labs/harn/releases)
> and [changelog](https://github.com/burin-labs/harn/blob/HEAD/CHANGELOG.md) before upgrading.

## Where Harn fits

```mermaid
flowchart TD
    accTitle: How Harn connects an application to models and tools
    accDescr: Your application supplies a Harn program. The runtime exchanges requests and results with models and tools and saves the run history.
    App["Your…
