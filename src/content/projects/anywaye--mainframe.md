---
repo: "anywaye/mainframe"
name: "mainframe"
description: "A secure, reproducible VPS bootstrap for developers"
readmeQualityOk: true
url: "https://github.com/anywaye/mainframe"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [68, 32]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-10-30T19:54:37Z"
lastCommitAt: "2026-11-27T12:54:33Z"
lastReleaseAt: "2026-10-31T14:19:57Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 61
maintainers: ["kaka-ruto"]
openGraphImageUrl: "https://opengraph.githubassets.com/c916a6c1960651f8f43adf01e3e2167a8f7b34615dfd2e2167ebd646f8e75901/anywaye/mainframe"
---

# Mainframe

**Secure, reproducible VPS bootstrap and machine configuration for developers.**

Take a fresh machine to a fully configured dev box in one command.
Supports both **dev** and **prod** modes.

```sh
# Install the mf CLI
curl -fsSL https://raw.githubusercontent.com/anywaye/mainframe/master/install.sh | bash

# Create a new config repo
mf new my-mainframe
cd my-mainframe

# Apply config to this machine
mf apply

# Or clone an existing config repo
mf init https://github.com/your-org/mainframe.git
mf apply
```

## Philosophy

**Mainframe is a framework, not a configuration.**

Like Rails provides the structure for web apps, Mainframe provides the structure for machine configurations. You don't write the framework — you write your config. The framework handles the how; you provide the what.

- `mf new my-mainframe` scaffolds the structure
- You fill in `packages.conf`, `shell/`, `editor/`, `mcp/`, etc.
- `mf setup --dev` sets up a dev machine (provision + apply)
- `mf setup --prod` sets up a production server (provision only)
- `mf capture` scans a machine and generates config

**The framework provides the structure and logic. The user provides the content.**
