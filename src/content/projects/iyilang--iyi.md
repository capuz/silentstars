---
repo: "iyilang/iyi"
name: "iyi"
description: "A friendly, fast language for people and their agents."
readmeQualityOk: true
url: "https://github.com/iyilang/iyi"
homepage: "https://iyi.dev"
language: "Crystal"
languages: ["Crystal"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 520
recentReleases: 10
createdAt: "2026-08-03T12:01:33Z"
lastCommitAt: "2026-09-18T14:03:38Z"
lastReleaseAt: "2026-09-01T18:44:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 61
maintainers: ["sdogruyol"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a9ac49091c0954e1d7584adf52519f34811c775dea8d6c0b3c46cf44fa938c1/iyilang/iyi"
---

# iyi

**A language built for Developer & Agentic Experience, Portability, Performance,
and Efficiency.** (*iyi* is Turkish for "good".)

The easiest way to get it is one command, which installs the latest release
into `~/.local`:

```sh
curl -fsSL https://raw.githubusercontent.com/iyilang/iyi/master/install.sh | sh
~/.local/bin/iyi run ~/.local/share/iyi/samples/hello.iyi
```

Linux x86-64 and macOS arm64. On Windows, PowerShell installs the same
release from the zip:

```powershell
irm https://raw.githubusercontent.com/iyilang/iyi/master/install.ps1 | iex
& "$env:LOCALAPPDATA\Programs\iyi\bin\iyi.exe" run "$env:LOCALAPPDATA\Programs\iyi\share\iyi\samples\hello.iyi"
```

That needs the Visual C++ build tools on the machine, for the reason under
[Getting it](#getting-it), which is also where the tarball by hand and
building from source are.

Those four are one design decision seen from four sides. A module is the unit of
compilation and it is compiled against its dependencies' **declarations**, never
their bodies — so a build reads less, a program carries less, a tool can read an
interface without a repository, and a person waits less. Everything below is
that rule and what it…
