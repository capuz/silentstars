---
repo: "Andriiklymiuk/corgi"
name: "corgi"
description: "Run your whole local stack from one file — repos, databases, env, every service. Let AI agents plan, build, and review work across it. Then run the same stack in CI, so your e2e finally tests all the repos together."
readmeQualityOk: true
url: "https://github.com/Andriiklymiuk/corgi"
homepage: "https://andriiklymiuk.github.io/corgi/"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["golang", "makefile", "microservices", "docker", "corgi"]
stars: 37
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-20T15:46:34Z"
lastCommitAt: "2026-09-13T08:30:45Z"
lastReleaseAt: "2022-10-02T16:49:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["Andriiklymiuk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/539068667/900d8e4b-6949-4ec8-9ab5-3949dc7c3256"
---

# 🐶 CORGI 🐶

  **One file runs your whole project.** Every repo, database, service, and the env vars between them. `corgi run` starts all of it. That same file is what your AI agents work in, what CI boots, and what your phone connects to.

</div>

A feature is rarely one repo. It's an API change, a web change, a mobile change, and a migration. corgi describes all of that in one `corgi-compose.yml` and runs it, so you can build the whole feature at once:

```text
                          ┌─ you       corgi run            whole stack up, one command
                          │
  corgi-compose.yml ──►   ├─ an agent  /corgi:stories        ticket ─► code ─► draft PR per repo
   (committed, shared)    │
                          ├─ your CI   corgi test --e2e      every repo's branch, one suite
                          │
                          └─ your phone  scan a QR           send work to this laptop from anywhere
```

Video: [2-minute showcase](https://youtu.be/rlMCjs4EoFs?si=o3SQaymM55zxBCUY).

**Install:** `brew install andriiklymiuk/homebrew-tools/corgi` (Homebrew 5 asks you to `brew trust andriiklymiuk/tools` once; [other…
