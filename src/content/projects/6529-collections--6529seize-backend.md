---
repo: "6529-Collections/6529seize-backend"
name: "6529seize-backend"
description: "Seize Platform - Backend"
readmeQualityOk: true
url: "https://github.com/6529-Collections/6529seize-backend"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 6
forks: 5
openIssues: 2
closedIssues: 102
watchers: 0
contributors: 11
recentReleases: 0
createdAt: "2022-12-16T12:19:28Z"
lastCommitAt: "2026-08-03T10:02:22Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 92
maintainers: ["GelatoGenesis", "prxt6529", "punk6529"]
openGraphImageUrl: "https://opengraph.githubassets.com/b84f3c7ab5bd480725bd5c7a180af44cba0103995f9c42949e36cb02549475d0/6529-Collections/6529seize-backend"
postedAt: "2026-07-23T06:23:21.217Z"
---

# 6529SEIZE-BACKEND

This is a 2-part repository for

1. [6529 Backend](#user-content-1-backend)

2. [6529 API](#user-content-2-api)

## 0. Repo Helpers

This repo includes a `.envrc` for `direnv`.

It is only used for repo-local shell helpers. Right now it adds the repo `bin/` directory to your `PATH`, which makes commands like `ghruns` and `ghdeploy` available anywhere inside this repository.

It does not load `.env.local` and it does not set `NODE_ENV`.

### 0.1 Setup direnv

1. Install `direnv` on your machine.
2. Enable the `direnv` shell hook.

For `zsh`, add this to `~/.zshrc`:

```bash
eval "$(direnv hook zsh)"
```

For `bash`, add this to `~/.bashrc`:

```bash
eval "$(direnv hook bash)"
```

Then reload your shell config, for example:

```bash
source ~/.zshrc
```

### 0.2 Allow this repo

From the repo root, run:

```bash
direnv allow
```

If `.envrc` changes later, run:

```bash
direnv allow
```

again to approve the updated file.

### 0.3 Verify

From the repo root, you should be able to run:

```bash
which ghruns
ghruns
```

`ghruns` is a shortcut for:

```bash
gh run list -R "6529-Collections/6529seize-backend"
```

In an interactive terminal, `ghruns` opens a live…
