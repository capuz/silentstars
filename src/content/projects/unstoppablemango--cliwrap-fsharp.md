---
repo: "UnstoppableMango/CliWrap.FSharp"
name: "CliWrap.FSharp"
description: "Idiomatic F# support for CliWrap"
readmeQualityOk: true
url: "https://github.com/UnstoppableMango/CliWrap.FSharp"
language: "F#"
languages: ["F#"]
languagePcts: [91]
topics: ["cli", "dotnet", "fsharp", "process", "shell"]
stars: 14
forks: 1
openIssues: 3
closedIssues: 2
watchers: 3
contributors: 3
recentReleases: 0
createdAt: "2024-01-12T23:24:50Z"
lastCommitAt: "2026-11-22T02:12:26Z"
lastReleaseAt: "2025-10-05T02:44:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 59
maintainers: ["thecluster-bot[bot]", "UnstoppableMango", "thecluster-claude[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1c3006d77fd8ad173a04618f97e398dae980e0490b40a43519f72401155d474/UnstoppableMango/CliWrap.FSharp"
---

# CliWrap.FSharp

Idiomatic F# support for [CliWrap](https://github.com/Tyrrrz/CliWrap).

## Install

- [NuGet](https://nuget.org/packages/UnMango.CliWrap.FSharp): `dotnet add package UnMango.CliWrap.FSharp`
- [GitHub Packages](https://github.com/UnstoppableMango/CliWrap.FSharp/pkgs/nuget/UnMango.CliWrap.FSharp): `dotnet add package UnMango.CliWrap.FSharp -s github`
  - [Authenticating to GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#authenticating-to-github-packages)
  - [Installing from GitHub Packages](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-nuget-registry#installing-a-package)

## Usage

Bindings for normal CliWrap commands are available in the `Cli` module.

```fsharp
let main args = async {
  let! result =
    Cli.wrap "dotnet"
    |> Cli.args [ "build" ]
    |> Cli.workDir "~/src/CliWrap.FSharp"
    |> Cli.exec

  return result.ExitCode
}
```

Cancellation token overloads are available in `Cli.Tasks`.
