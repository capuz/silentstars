---
repo: "burin-labs/harn"
name: "harn"
description: "Harn is a programming language and runtime for building AI agents."
readmeQualityOk: true
url: "https://github.com/burin-labs/harn"
homepage: "https://harnlang.com"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [68, 28]
topics: ["acp", "agents", "ai-agents", "language", "mcp-client", "programming-language", "rust", "rust-crate"]
stars: 25
forks: 4
openIssues: 97
closedIssues: 2382
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T13:36:25Z"
lastCommitAt: "2026-09-27T08:59:25Z"
lastReleaseAt: "2026-03-28T16:54:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 47
maintainers: ["kennethsinder", "harn-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a580e84d891e76cbaa1b7b1d2a58ea14b8b9681f2e519c51e1eb2b1284f94393/burin-labs/harn"
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
and [Burin](https://github.com/burin-labs/burin-code) uses Harn in its coding
workbench.

> Harn is pre-1.0. The language, standard library, and CLI can change between
> releases. See the [release notes](https://github.com/burin-labs/harn/releases)
> and [changelog](https://github.com/burin-labs/harn/blob/HEAD/CHANGELOG.md) before upgrading.

## Where Harn fits

```mermaid
flowchart TD
    accTitle: How Harn connects an application to models and tools
    accDescr: Your application supplies a Harn program. The runtime exchanges requests and results with models and tools and saves the run history.…
