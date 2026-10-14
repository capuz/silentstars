---
repo: "arc53/DocsGPT-cli"
name: "DocsGPT-cli"
description: "Docsgpt-cli is a command-line interface (CLI) tool that allows you to interact with DocsGPT."
readmeQualityOk: true
url: "https://github.com/arc53/DocsGPT-cli"
homepage: "https://www.docsgpt.cloud/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["ai", "assistant", "brew", "cli", "docsgpt", "go", "llm", "natural-language-processing", "hacktoberfest"]
stars: 11
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 3
createdAt: "2024-09-02T11:34:16Z"
lastCommitAt: "2026-10-14T08:57:21Z"
lastReleaseAt: "2026-09-21T13:59:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 87
maintainers: ["dartpain"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0d4113bb194955fac24a9186d0fe2c221885018c03763acd80fa07e70af1e71/arc53/DocsGPT-cli"
---

# docsgpt-cli

Chat with your [DocsGPT](https://github.com/arc53/DocsGPT) agents from the
terminal, pipe questions through them, and manage agents and sources as code.

## Install

```bash
curl -fsSL https://docs.ac/install-cli | bash
```

The script downloads the release for your platform, checks it against the
published checksums and puts it on your `PATH`. Other ways:

- **Windows** (PowerShell): `irm https://docs.ac/install-cli.ps1 | iex`
- **Homebrew** (macOS): `brew tap arc53/docsgpt-cli && brew install --cask docsgpt-cli`
- **Go**: `go install github.com/arc53/DocsGPT-cli/cmd/docsgpt-cli@latest`
- **Binary**: an archive from [Releases](https://github.com/arc53/DocsGPT-cli/releases), then `./docsgpt-cli install`
- **Source**: `git clone https://github.com/arc53/DocsGPT-cli && cd DocsGPT-cli && make build`

It keeps itself up to date. See [Install and update](https://github.com/arc53/DocsGPT-cli/blob/HEAD/docs/install.md).

## Quickstart

Copy an agent's API key from DocsGPT (**Agent settings → API key**), then:

```bash
docsgpt-cli login                            # paste the key; it is checked and saved
docsgpt-cli                                  # chat
docsgpt-cli "how do…
