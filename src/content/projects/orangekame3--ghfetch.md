---
repo: "orangekame3/ghfetch"
name: "ghfetch"
description: ":octocat: ghfetch is a CLI tool to fetch GitHub user information and show like neofetch."
url: "https://github.com/orangekame3/ghfetch"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["cli", "github", "readme", "github-profile"]
stars: 66
forks: 1
openIssues: 3
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-10-08T03:05:44Z"
lastCommitAt: "2026-06-24T00:24:36Z"
lastReleaseAt: "2023-10-10T10:20:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 40
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb292459d5e44ee98d05885e8fcdcea2a966038e9cefb1aa66ec7a246f77577c/orangekame3/ghfetch"
---

# ghfetch

:octocat: ghfetch is a CLI tool to fetch GitHub user information and show like neofetch
  
</a>
</a>
</a>
</div>

## Demo

</p>

## Install

### Go

```shell
go install github.com/orangekame3/ghfetch@latest
```

### Homebrew

```shell
brew install orangekame3/tap/ghfetch
```

### Manual Download

Download the latest compiled binaries and put it anywhere in your executable path.

[Download here](https://github.com/orangekame3/ghfetch/releases)

## Quick Start

```shell
ghfetch -u <your_github_account_name> --access-token=<YOUR_GITHUB_PERSONAL_ACCESS_TOKEN>
```

## Usage

```shell
❯ ghfetch -h
Fetch GitHub user's profile, just like neofetch

Usage:
  ghfetch [flags]

Flags:
      --access-token string   Your GitHub access token
  -c, --color string          Highlight color red, green, yellow, blue, magenta, cyan (default "blue")
  -h, --help                  help for ghfetch
  -u, --user string           GitHub username
  -v, --version               version for ghfetch
```

## Obtaining a GitHub Personal Access Token

ghfetch requires a GitHub personal access token to fetch user information. You can create a personal access token by following the instructions on the…
