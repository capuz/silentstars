---
repo: "schubergphilis/claude-docker"
name: "claude-docker"
description: "Hardened Docker container for running Claude Code"
readmeQualityOk: true
url: "https://github.com/schubergphilis/claude-docker"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [71, 25]
stars: 9
forks: 8
openIssues: 32
closedIssues: 47
watchers: 0
contributors: 14
recentReleases: 10
createdAt: "2026-07-13T11:55:02Z"
lastCommitAt: "2026-10-29T20:31:17Z"
lastReleaseAt: "2026-10-08T16:53:24Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 66
maintainers: ["OnnoJan-SBP", "sbp-bvanb", "stefanwb"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7b397aa182a046c7ac46c3c04939e9c50f650db5060fbad4f219e0eb47e6356/schubergphilis/claude-docker"
postedAt: "2026-10-12T11:21:10.066Z"
---

# claude-docker

**claude-docker runs [Claude Code](https://code.claude.com/docs) in a container on your machine.** Claude Code works on the repositories you pass in, with your model backend (the Anthropic API, or a gateway such as LiteLLM) and your Git forge. Your Claude Code setup (statusline, skills, agents, slash commands) comes along read-only, and the image ships `gh`, `glab`, `aws`, `az` with the `azure-devops` extension, `openspec`, `uv`, `pnpm`, `tfenv`, `git-lfs`, `task` and a version-pinned `go`; `tfenv` and `uv` fetch your project's Terraform and Python on demand. The container narrows what the agent can reach: it sees only the directories you pass in, gets host credentials (`gh`, `glab`, `aws`, `tfe`, `az`) only with a [flag](https://github.com/schubergphilis/claude-docker/blob/HEAD/docs/auth.md#credential-opt-in), and is removed when the session ends. That makes it a safer place to let the agent work unattended than `claude --yolo` on your host, though not a full sandbox: see the [threat model](https://github.com/schubergphilis/claude-docker/blob/HEAD/docs/security.md#threat-model) and [Vision and…
