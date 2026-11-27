---
repo: "agentsmith-tools/maintainer-agent"
name: "maintainer-agent"
description: "An unattended maintainer for one repository. It reviews, files, prunes, and merges only against proof that a guard bites."
readmeQualityOk: true
url: "https://github.com/agentsmith-tools/maintainer-agent"
homepage: "https://agentsmith-tools.github.io/maintainer-agent/"
language: "Rust"
languages: ["Rust", "Shell"]
languagePcts: [48, 36]
topics: ["agent-safety", "ai-agent", "bash", "claude-code", "code-review", "developer-tools", "github-automation", "llm-agents", "open-source-maintenance", "agentic-ai"]
stars: 13
forks: 3
openIssues: 113
closedIssues: 58
watchers: 2
contributors: 6
recentReleases: 10
createdAt: "2026-09-03T16:09:18Z"
lastCommitAt: "2026-11-27T12:54:24Z"
lastReleaseAt: "2026-10-01T15:59:46Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 51
maintainers: ["vladimirrott", "jay23606", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1356172099/568839c0-c11f-43e2-9b7c-51a4f4f3947a"
discussionCount: 0
---

# maintainer-agent

**[Read the documentation](https://agentsmith-tools.github.io/maintainer-agent/)**,
built from `docs/` on every push to `main`.

An unattended maintainer for an open-source repository. It runs Claude Code (or
Codex, Cursor, or opencode) on a timer to review pull requests, file and place
issues, audit the tracker, harden CI, prune merged branches and say when a
release is owed. It posts the results to GitHub for real.

It currently maintains [`lacs-project/sysknife`](https://github.com/lacs-project/sysknife).

## Try it without letting it speak

```sh
git clone <this repo> && cd maintainer-agent
./new-profile.sh myrepo you/yourrepo ~/src/yourrepo your-gh-login "Your Name"
./install.sh
MAINTAINER_PROFILE=myrepo maintainer-doctor      # checks by running things
./lib/run.sh --show-prompt myrepo review | less  # read what it will be told
MAINTAINER_PROFILE=myrepo maintainer run review  # one run, by hand
maintainer status
```
