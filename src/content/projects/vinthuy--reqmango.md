---
repo: "vinthuy/reqmango"
name: "reqmango"
description: "Self-hosted project management: triage new requests before they hit the backlog. AI assists Issue / Intake / Cycle — data stays on your machine."
readmeQualityOk: true
url: "https://github.com/vinthuy/reqmango"
homepage: "https://gitcode.com/yongfeng9m-/reqmanpy"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [43, 34]
topics: ["ai", "docker", "golang", "issue-tracker", "project-management", "self-hosted", "typescript", "vue"]
stars: 6
forks: 2
openIssues: 8
closedIssues: 5
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-07-12T16:37:33Z"
lastCommitAt: "2026-10-18T08:17:00Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 87
undervaluedScore: 52
maintainers: ["vinthuy"]
openGraphImageUrl: "https://opengraph.githubassets.com/16fb8e470d2bf351e34e7b721dc44cc325fb8e778cc5f7b787857cfd090e8265/vinthuy/reqmango"
---

# Reqmango

**Self-hosted project management where new requests are triaged first.**  
Type, priority, and likely duplicates are suggested before work lands in the backlog — you only decide the uncertain ones.

[中文文档](https://github.com/vinthuy/reqmango/blob/HEAD/README-zh.md) · [Contributing](https://github.com/vinthuy/reqmango/blob/HEAD/CONTRIBUTING.md) · [国内共建主场 GitCode](https://gitcode.com/yongfeng9m-/reqmanpy) · [GitHub mirror](https://github.com/vinthuy/reqmango)

---

## Try it in one command

```bash
git clone https://github.com/vinthuy/reqmango.git
# China: git clone https://gitcode.com/yongfeng9m-/reqmanpy.git reqmango
cd reqmango
cp .env.example .env
docker compose up --build
```

**First run:** `docker compose up --build` builds the backend and frontend
images locally. This can take several minutes depending on your network and
machine. Wait for the services to finish starting before opening the app; a
temporary blank page during the build does not mean startup failed.

Open **http://localhost** and sign in:

| | |
|---|---|
| Email | `demo@example.com` |
| Password | `demo1234` |

Optional AI (Intake triage / analyze / labels): set `AI_API_KEY` in `.env`, then…
