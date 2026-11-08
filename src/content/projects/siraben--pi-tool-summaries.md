---
repo: "siraben/pi-tool-summaries"
name: "pi-tool-summaries"
description: "Plain-language summaries of tool calls."
readmeQualityOk: true
url: "https://github.com/siraben/pi-tool-summaries"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-03T02:33:34Z"
lastCommitAt: "2026-11-08T14:14:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 36
maintainers: ["siraben"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a7705a9ce61e329e973b2ef218d7c9e13870f90c0374fd332d00620186bf72/siraben/pi-tool-summaries"
---

# Pi Tool Summaries

Plain-language summaries of Bash, PowerShell and codemode tool calls.

## Install

Requires **Pi >=0.84.4 <2** and **Node >=22.19**. PowerShell and codemode summaries require Pi >=1.0.1. See [compatibility](https://github.com/siraben/pi-tool-summaries/blob/HEAD/docs/compatibility.md) for supported environments and tests.

```sh
pi install git:github.com/siraben/pi-tool-summaries
```

Restart Pi or run `/reload`. Summaries use your current Pi model and its authentication. `/tool-summaries` shows the model, usage and status.

**Privacy:** full tool arguments go to the summary provider, including any inline credentials or private code. Requests can incur provider charges or consume subscription quota. Use `/tool-summaries off` to pause requests or set `"toolSummaries": { "enabled": false }` to disable them in settings.

## Before and after

Press **Ctrl+O** to expand the original command. Tool results remain unchanged. Summaries describe intended actions, not verified execution or safety.

### Compare compiler binaries

```sh
cat > /tmp/blynn-structural/compare-tinycc.py <<'PY'
"""Compare artifacts; normalize only the exact expected installation prefix."""
from…
