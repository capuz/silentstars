---
repo: "tektoncd/cli"
name: "cli"
description: "A CLI for interacting with Tekton!"
readmeQualityOk: true
url: "https://github.com/tektoncd/cli"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["tekton", "pipeline", "cli", "hacktoberfest", "command-line"]
stars: 461
forks: 278
openIssues: 67
closedIssues: 646
watchers: 14
contributors: 104
recentReleases: 0
createdAt: "2019-04-17T17:33:25Z"
lastCommitAt: "2026-10-21T08:49:25Z"
lastReleaseAt: "2019-11-08T10:31:05Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 39
maintainers: ["dependabot[bot]", "divyansh42", "anwesha-palit-redhat"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4e41996aa7e5cae7b2b4e2721e7e2c2f16e20f7c494f219498e1fcb8138646/tektoncd/cli"
discussionCount: 3
---

# Tekton Pipelines CLI (`tkn`)

The _Tekton Pipelines CLI_ project provides a command-line interface (CLI) for interacting with [Tekton](https://tekton.dev/), an open-source framework for Continuous Integration and Delivery (CI/CD) systems.

## Installing `tkn`

Download the latest binary executable for your operating system.

### Mac OS X

- Use [Homebrew](https://brew.sh)

```shell
  brew install tektoncd-cli
```

- Use [released tarball](https://github.com/tektoncd/cli/releases/download/v0.46.0/tkn_0.46.0_Darwin_all.tar.gz)

  ```shell
  # Get the tar.xz
  curl -LO https://github.com/tektoncd/cli/releases/download/v0.46.0/tkn_0.46.0_Darwin_all.tar.gz
  # Extract tkn to your PATH (e.g. /usr/local/bin)
  sudo tar xvzf tkn_0.46.0_Darwin_all.tar.gz -C /usr/local/bin tkn
  ```

### Windows

- Use [Chocolatey](https://chocolatey.org/packages/tektoncd-cli)

```shell
choco install tektoncd-cli --confirm
```

- Use [Scoop](https://scoop.sh)

```powershell
scoop install tektoncd-cli
```

- Use [Powershell](https://docs.microsoft.com/en-us/powershell) [released zip](https://github.com/tektoncd/cli/releases/download/v0.46.0/tkn_0.46.0_Windows_x86_64.zip)

```powershell
#Create directory…
