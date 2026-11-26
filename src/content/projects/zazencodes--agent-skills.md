---
repo: "zazencodes/agent-skills"
name: "agent-skills"
description: "A central, version-controlled home for coding agent skills across multiple tools"
readmeQualityOk: true
url: "https://github.com/zazencodes/agent-skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 37
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-04-05T22:09:25Z"
lastCommitAt: "2026-11-26T23:30:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 13
maintainers: ["zazencodes"]
openGraphImageUrl: "https://opengraph.githubassets.com/6cf3c1e387cd596964503f49bb7040bf50ab36e79c4845e4bbe9a7595307295a/zazencodes/agent-skills"
---

# Agent Skills Monorepo

A central, version-controlled home for coding agent skills across multiple tools.

> **Part of [zstack](https://github.com/zazencodes/zstack)**, the agentic system I use to run ZazenCodes.

> With ❤️ from [ZazenCodes](https://zazencodes.com/)

> **Note**
>
> This setup currently supports macOS and Linux only.

## Benefits

- Keep all your agent skills for different tools in one Git repo.
- Your agents use those skills automatically, with no extra configuration.
- Changes stay in sync everywhere and are easy to version control:
    - Edit skills in this repo
    - Or edit them in the system skill folders
    - Either way, you're changing the same files

## How It Works

When you run `setup_symlinks.py` it will:

1. Ask which agents you want to manage. `agents/` and `claude/` are always included.
2. Back up your current system skills directories.
3. Copy them into this repo.
4. Replace each system skills directory with a symlink back to the matching folder in this repo.
