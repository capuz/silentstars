---
repo: "ROCm/spur"
name: "spur"
description: "spur your compute"
readmeQualityOk: true
url: "https://github.com/ROCm/spur"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
stars: 120
forks: 48
openIssues: 86
closedIssues: 175
watchers: 5
contributors: 79
recentReleases: 5
createdAt: "2026-03-17T07:45:02Z"
lastCommitAt: "2026-09-21T09:13:45Z"
lastReleaseAt: "2026-07-27T08:35:23Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 91
undervaluedScore: 36
maintainers: ["yansun1996", "shiv-tyagi", "nikhilsk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a74ba3f016064791ecbee81fa4d025214309d08e6b5a89900d6661751bebb664/ROCm/spur"
discussionCount: 2
---

# Spur

An AI-native job scheduler written in Rust. Drop-in compatible with Slurm's CLI, REST API, and C FFI while providing WireGuard mesh networking, GPU-first scheduling, and modern state management.

## Highlights

- 🔌 **Slurm compatible** — your existing scripts, tools, and muscle memory work unchanged
- 🔲 **GPU-first scheduling** — first-class GPU support for job scheduling
- 💾 **Raft-based state** — all state survives restarts; no external database required
- ⚙️ **Written in Rust** — single static binary per component, fast builds, safe concurrency
- 🔒 **WireGuard mesh networking** — tunnelled cluster communication out of the box

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/ROCm/spur/main/install.sh | bash
export PATH="$HOME/.local/bin:$PATH"
```

Try it locally. Spin up a single-node cluster to see Spur in action:

```bash
spurctld -D --state-dir /tmp/spur-state          # start controller
spurd -D --controller http://localhost:6817      # start agent in a new terminal
spur run -- echo "hello from $(hostname)"        # run a command
spur queue                                       # check the queue
```

For production and multi-node deployments,…
