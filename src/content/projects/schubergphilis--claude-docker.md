---
repo: "schubergphilis/claude-docker"
name: "claude-docker"
description: "Hardened Docker container for running Claude Code"
readmeQualityOk: true
url: "https://github.com/schubergphilis/claude-docker"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [56, 35]
stars: 9
forks: 7
openIssues: 32
closedIssues: 33
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-07-13T11:55:02Z"
lastCommitAt: "2026-10-22T12:51:43Z"
lastReleaseAt: "2026-10-08T16:53:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 87
undervaluedScore: 63
maintainers: ["sbp-bvanb", "OnnoJan-SBP", "stefanwb"]
openGraphImageUrl: "https://opengraph.githubassets.com/b608dd27f69f8c265ead95b4e70f31566cf286aae877a588bcca9efae89b47b7/schubergphilis/claude-docker"
postedAt: "2026-10-12T11:21:10.066Z"
---

# claude-docker

Run Claude Code in a container that inherits your setup but not your filesystem. Workspace access is scoped to the directories you pass in; your statusline, skills, agents, and slash commands ride along as read-only bind-mounts. CLI tools are preinstalled (`gh`, `glab`, `aws`, `az` with the `azure-devops` extension, `openspec`, `uv`, `pnpm`, `tfenv`, `git-lfs`, `task`) plus a version-pinned Go toolchain (`go`) — other language runtimes are not: `tfenv` and `uv` fetch your project-pinned Terraform / Python on demand. Host credentials (`gh`, `glab`, `aws`, `tfe`, `az`) are opt-in per flag; nothing leaks in by default.

The VCS and cloud CLIs (`gh`, `glab`, `aws`, `az`) need a flag to see host credentials — see [Credential opt-in](#credential-opt-in). The rest work out of the box.

## Install

```bash
# Build the image from your checkout (one-time; rerun after Dockerfile or tool pins change)
docker build -t claude-code:local .

# Put on your PATH (create ~/bin if it doesn't exist)
mkdir -p ~/bin
ln -s "$(pwd)/run.sh" ~/bin/claude-docker
```

The build needs BuildKit (the Dockerfile uses `COPY --chmod`). Docker Desktop ships it by default. A Homebrew `docker` CLI with…
