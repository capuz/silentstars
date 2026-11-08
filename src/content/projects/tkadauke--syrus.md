---
repo: "tkadauke/syrus"
name: "syrus"
description: "Open-source, self-hosted orchestrator that lets teams run fleets of AI coding agents. File an issue, agents build in parallel, humans review, and approved work lands through a deterministic queue — no merge conflicts, no stepping on each other's toes."
readmeQualityOk: true
url: "https://github.com/tkadauke/syrus"
language: "Ruby"
languages: ["Ruby", "TypeScript"]
languagePcts: [65, 32]
topics: ["ai-agents", "code-review", "merge-queue", "orchestration", "self-hosted"]
stars: 9
forks: 1
openIssues: 78
closedIssues: 616
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-01T22:05:16Z"
lastCommitAt: "2026-11-08T10:40:34Z"
lastReleaseAt: "2026-07-08T06:46:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["tkadauke", "tkadauke-syrus[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78b74ddf00b210c82f9729b7e0122b069334cd48565d304466b48be83ed8766c/tkadauke/syrus"
---

# Syrus

**95% of Syrus's merged pull requests were written by Syrus itself.**
[Read the methodology](https://syrus-ai.dev/docs/dogfooding) behind the
merged-PR claim.

> *Bis dat qui cito dat.*
> He gives twice who gives quickly. — Publilius Syrus

Syrus is an open-source, self-hosted automation harness for developers: turn
issues, chats, and video walkthroughs into tracked pull requests while keeping
your repositories, credentials, checks, transcripts, review policy, and merge
queue under your control. It runs coding agents in isolated workspaces,
rebases dependent work, opens reviewed PRs, and records the full workflow so a
team can run many agent-authored changes against the same codebase without
turning the process into a black box.

---

## Quickstart

The fastest developer/self-hoster path is Docker Compose. On a fresh machine,
start with the [Docker Compose guide](https://syrus-ai.dev/docs/deployment/docker-compose)
to install a container runtime and verify Compose is available. Once Docker
Compose is ready, clone the repo and let the installer start the web app and
worker:

```bash
git clone https://github.com/tkadauke/syrus.git
cd syrus
./install.sh --docker
```

Open…
