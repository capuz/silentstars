---
repo: "day50-dev/ctools"
name: "ctools"
description: "context tools"
readmeQualityOk: true
url: "https://github.com/day50-dev/ctools"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-12T07:34:05Z"
lastCommitAt: "2026-10-07T10:30:47Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 77
undervaluedScore: 42
maintainers: ["kristopolous"]
openGraphImageUrl: "https://opengraph.githubassets.com/5eb7ba74794f89220868c9a10dd99032cf7a9b5dbf3217971a5cd515a932e678/day50-dev/ctools"
---

------

Grep through your conversation history in Claude Desktop, Claude Code, Codex, Pi, Hermes, Goose, Kilo, Hermes, FreeBuff, Cline, and omp.

Copy your conversation from one to another. Start in one program, continue in another. using the normal resume syntax.

### 1. `cgrep` — find it in your past conversations

You already know the answer is in a session you had months ago. You just don't remember which one. `cgrep` searches **every session you ever had, across every agent you use**, with a plain regex:

```shell
$ cgrep -i "ssl"
claude-code/a351eedf:142:assistant: … the TLS handshake fails with SSL wrong version number …
opencode/ses_000d460f:16:user: ok graflex has an erorr in the check. i see this: … [[SSL: WRONG_VERSION_NUMBER] …
opencode/ses_000d460f:34:assistant: Found it. Root cause: `_check_host` (graflex/__init__.py:128) tries `http`, and …
```

No agent argument? It searches **every installed agent at once** — Claude Code, Opencode, Kilo, Codex, Pi, Goose, Hermes, Cline, omp, and Freebuff, all in one pass. That last line is the root-cause analysis you wrote six months ago and would never have found again.

### 2. `ccopy` — move your project from one tool to another…
