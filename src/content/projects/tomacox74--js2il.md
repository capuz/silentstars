---
repo: "tomacox74/js2il"
name: "js2il"
description: "JavaScript dotnet compiler"
readmeQualityOk: true
url: "https://github.com/tomacox74/js2il"
language: "JavaScript"
languages: ["JavaScript", "C#"]
languagePcts: [71, 27]
stars: 7
forks: 0
openIssues: 85
closedIssues: 692
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-06-08T03:15:14Z"
lastCommitAt: "2026-11-12T11:39:41Z"
lastReleaseAt: "2025-11-25T02:20:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 97
undervaluedScore: 75
maintainers: ["tomacox74", "tomacox74-test262-porting[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ba3e3b171b40c219c60b9195e93223e620e53c5789c9e39d8b5fbf37ce7eade/tomacox74/js2il"
discussionCount: 1
---

# JROC

JROC is a JavaScript-to-.NET compiler. It compiles JavaScript source directly
to .NET IL and produces ordinary .NET assemblies that run with the `dotnet`
host.

Unlike an embedded JavaScript interpreter, JROC performs ahead-of-time
compilation: JavaScript is parsed, analyzed, lowered, and emitted as a .NET
assembly before the program runs. JROC includes a JavaScript runtime and
support for a growing set of Node.js APIs, making it possible to bring
JavaScript applications and libraries into the .NET ecosystem.

JROC supports Windows, Linux, and macOS.

JROC currently targets ECMAScript 2025 and .NET 10. The command-line tool runs
on .NET 10 and rolls forward to .NET 11 when only .NET 11 is installed. The
generated `.runtimeconfig.json` defaults to the runtime version that
runs JROC. The project is under active development; compatibility is broad but
not yet complete.

## Install JROC

Install the [.NET 10 SDK or later](https://dotnet.microsoft.com/download/dotnet),
then install JROC from NuGet as a global .NET tool:

```shell
dotnet tool install --global jroc
```

Confirm that the command is available:

```shell
jroc --version
```

To update an existing installation:…
