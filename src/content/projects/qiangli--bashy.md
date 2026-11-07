---
repo: "qiangli/bashy"
name: "bashy"
description: "A pure-Go Bash 5.3 for Linux, macOS and Windows that also speaks Bash# — typed Go in shell text, fenced-language islands, and agentic blocks with contracts. Passes Bash's own 5.3 suite (86/86)."
readmeQualityOk: true
url: "https://github.com/qiangli/bashy"
homepage: "https://github.com/qiangli/bashsharp-tour"
language: "Go"
languages: ["Go"]
languagePcts: [68]
topics: ["agents", "bash", "bashsharp", "coding-agents", "golang", "posix", "shell", "windows"]
stars: 8
forks: 1
openIssues: 4
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-14T22:53:05Z"
lastCommitAt: "2026-11-07T09:30:06Z"
lastReleaseAt: "2026-07-04T01:19:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 51
maintainers: ["qiangli"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee30354fbb5f9fd59ecebe76039169e1f44e786652375be9ecded413180f0a22/qiangli/bashy"
---

# bashy — a Go Bash 5.3 that speaks Bash#

> **Bash is for humans; bashy is for agents.**
>
> bashy looks like a shell, and it is one. It was also designed from the
> ground up as a clean slate for agents: the whole infrastructure an agent
> needs, shipped as a single tool:
> - the userland it works in;
> - the workspaces it shares with other agents;
> - the sandboxes it runs untrusted code in;
> - the local models it thinks with;
> - the peers, clusters and clouds it reaches.
>
> One download, every machine, every agent. **bashy is all you need.**

**Demo (3.5 min): bashy unifies all systems, Bash# unifies all languages.**
Every terminal step in it really ran, on our own machines.

- **bash + coreutils in pure Go**: one executable per platform, no system bash,
  no GNU-vs-BSD drift.
- **GNU Bash 5.3 compatible**: Bash's own 5.3 suite, 86/86.
- **Built to POSIX.1-2016 (IEEE Std 1003.1-2016)**: 493/493 on the licensed
  shell-isolation arm; the full Shell and Utilities run retains 67 non-passes.
  [Measured status and certification follow-up](https://github.com/qiangli/bashy/blob/HEAD/docs/vsc-pcts-run-status.md).
- **Bash#, "Go with bash"**: the bash you know, typed Go where you…
