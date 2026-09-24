---
repo: "moonbit-community/proton"
name: "proton"
description: "A MoonBit framework for building native desktop applications with a web frontend"
readmeQualityOk: true
url: "https://github.com/moonbit-community/proton"
language: "MoonBit"
languages: ["MoonBit", "C"]
languagePcts: [73, 23]
stars: 30
forks: 2
openIssues: 5
closedIssues: 56
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-05-19T09:10:05Z"
lastCommitAt: "2026-09-24T08:41:14Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 40
maintainers: ["Milky2018", "justjavac", "tonyfettes"]
openGraphImageUrl: "https://opengraph.githubassets.com/2864f0f886d56c1b408918cc32ab3570ac10e44662dca28f091f9094ee06d7c4/moonbit-community/proton"
---

# Proton

Proton is a MoonBit framework for building native desktop applications with a
web frontend.

Supported source-built native backends:

- Windows x64
- macOS Apple Silicon
- Linux x64

[English guides](https://github.com/moonbit-community/proton/blob/HEAD/website/content/en/introduction/index.md) · [中文指南](https://github.com/moonbit-community/proton/blob/HEAD/website/content/zh/introduction/index.md)

## Quick start

Install the CLI and create a project:

```sh
moon install moonbit-community/proton_cli
proton_cli new my-app --yes
cd my-app
moon update
moon install moonbit-community/warren@0.3.3
proton_cli cef setup
proton_cli dev
```

The default `isomorphic` template contains a shared command contract, a Rabbita
frontend, and a Proton backend. Use `--template minimal` for a single MoonBit
module with inline HTML:

```sh
proton_cli new my-app --template minimal --yes
```

`cef setup` installs the CEF runtime and subprocess helper required by the
current Proton release. Installations are immutable and shared by all projects
under `~/.proton/store` and `~/.proton/helpers`. Set `PROTON_RUNTIME_STORE` to
an absolute path to relocate the runtime store.

All published Proton…
