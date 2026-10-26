---
repo: "yazeed/proc-cli"
name: "proc-cli"
description: "Semantic CLI tool for process management. Target by port, PID, name or path."
readmeQualityOk: true
url: "https://github.com/yazeed/proc-cli"
homepage: "https://proc-cli.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "command-line", "developer-tools", "devtools", "linux", "macos", "port", "process-management", "rust", "terminal"]
stars: 15
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-01-08T15:26:40Z"
lastCommitAt: "2026-10-26T03:02:32Z"
lastReleaseAt: "2026-01-29T06:57:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 55
undervaluedScore: 41
maintainers: ["yazeed"]
openGraphImageUrl: "https://opengraph.githubassets.com/041f37e92cc691acc8f9f08b56b93a37d1347cd897cb67590f8fe68eed9ea197/yazeed/proc-cli"
fundingLinks: ["GITHUB:https://github.com/yazeed"]
discussionCount: 0
---

# proc

Semantic CLI tool for process management. Target by port, process id (PID), name or path.

```bash
proc on :3000                   # what's on port 3000?
proc for ./script.py            # what's running this file?
proc by node --in . --min-cpu 5 # node in cwd using >5% CPU
proc kill :3000,:8080,node      # kill mixed targets at once
proc info :3000,1234            # info for port + PID
```

### Why proc?

| Task | proc | Without proc |
|------|------|-------------|
| What's on port 3000? | `proc on :3000` | `lsof -i :3000 -P -n` |
| Kill it | `proc kill :3000` | `lsof -i :3000 -t \| xargs kill -9` |
| Free port 3000 | `proc free :3000` | `lsof -i :3000 -t \| xargs kill && sleep 1 && lsof -i :3000` |
| Why is port busy? | `proc why :3000` | `lsof -i :3000` + `ps -o ppid=` chain |
| Pause a process | `proc freeze node` | `kill -STOP $(pgrep node)` |
| Find orphans | `proc orphans --in .` | No standard tool |
| Wait for process | `proc wait node` | `while ps aux \| grep node \| grep -v grep; do sleep 5; done` |
| Ports used by node | `proc on node` | `lsof -i -P -n \| grep node` |
| Node processes in cwd | `proc by node --in .` | `ps aux \| grep node` + manual check |
| Kill…
