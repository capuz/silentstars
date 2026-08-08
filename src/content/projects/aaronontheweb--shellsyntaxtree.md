---
repo: "Aaronontheweb/ShellSyntaxTree"
name: "ShellSyntaxTree"
description: "pure C# abstract syntax tree representation for parsing shell commands. Supports bash and PowerShell."
readmeQualityOk: true
url: "https://github.com/Aaronontheweb/ShellSyntaxTree"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 3
closedIssues: 6
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-10T15:10:28Z"
lastCommitAt: "2026-08-08T04:34:44Z"
lastReleaseAt: "2026-07-22T04:19:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["Aaronontheweb", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e513f34592eb57c8b1de4af3bd4f67bc2bcbbc9a96816cbfc537223384ccb82f/Aaronontheweb/ShellSyntaxTree"
---

# ShellSyntaxTree

A focused .NET library that parses **bash and PowerShell** command strings
into a structured AST. Purpose-built for tools that need to **reason about
shell commands without running them** — approval gates for LLM-emitted
commands, CI/CD script auditors, sandbox policy generators, audit-log
analytics.

Hand-rolled, AOT-trim friendly, zero native dependencies. Multi-targets
`netstandard2.0` and `net8.0`.

```bash
dotnet add package ShellSyntaxTree --version 0.2.0
```

The `0.2.0` release adds PowerShell support. The latest stable
`0.2.x` package supports bash and PowerShell together. The public surface
documented below tracks the `dev` branch.

## What you get

For an input like `cd /repo && rm /etc/passwd`, ShellSyntaxTree produces:

```mermaid
flowchart TD
    classDef bad fill:#fee,stroke:#b00,stroke-width:2px
    A[cd /repo<br/>📁 /repo] -- "&&" --> B[rm<br/>📁 /etc/passwd<br/>cwd: /repo]
    class B bad
```

A two-clause AST where the second clause's `Args` includes a synthetic
`/repo` attribution arg (so consumers can see "this `rm` is implicitly
operating in `/repo`") *and* `/etc/passwd` is resolved and marked
`IsPath = true`. Hard-deny rules over `/etc/*`…
