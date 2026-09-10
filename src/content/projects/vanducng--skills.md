---
repo: "vanducng/skills"
name: "skills"
description: "A daily-driver collection of skills for agentic coding - a portable, agent-agnostic catalog managed with the vd CLI."
readmeQualityOk: true
url: "https://github.com/vanducng/skills"
homepage: "https://skills.vanducng.dev"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [44, 34]
topics: ["agentic-coding", "ai-agents", "claude-code", "claude-skills", "codex", "developer-tools", "llm"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T20:50:55Z"
lastCommitAt: "2026-09-10T08:20:02Z"
lastReleaseAt: "2026-06-07T13:41:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["vanducng", "munmiu[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/392a990e8db6e991b5f87cb10a8b0e2d5ea334b39e8a068f073b4d9b698ab18a/vanducng/skills"
---

**A daily-driver collection of skills for agentic coding** - portable across agents, managed with the **`vd`** CLI.

[**Skill catalog**](https://skills.vanducng.dev/skills/) · [**Install guide**](https://skills.vanducng.dev/install/)

</div>

---

## Install

### Claude Code plugin

```text
/plugin marketplace add vanducng/skills
/plugin install vd@vd-skills
```

Update with `/plugin marketplace update vd-skills && /plugin install vd@vd-skills` · uninstall with `/plugin uninstall vd@vd-skills`.

### vd CLI

```sh
brew install vanducng/tap/vd                                   # macOS
go install github.com/vanducng/vd-cli/v2/cmd/vd@latest         # any platform
```

### Codex

```sh
vd install codex                # user scope
vd install codex --scope repo   # repo scope
```

For Claude Code development symlinks instead of the marketplace plugin: `vd install claude --dev`.

> **Don't mix the two for the same skill.** A marketplace plugin copy and a `--dev` symlink of the same skill shadow each other unpredictably (edits to one won't "land"). Pick one. Diagnose duplicates with `bash scripts/check-install-conflicts.sh`.

> Full install matrix, prerequisites, and troubleshooting →…
