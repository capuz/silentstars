---
repo: "vinthuy/reqmango"
name: "reqmango"
description: "Self-hosted project management: triage new requests before they hit the backlog. AI assists Issue / Intake / Cycle — data stays on your machine."
readmeQualityOk: true
url: "https://github.com/vinthuy/reqmango"
homepage: "https://vinthuy.github.io/reqmango/"
language: "Go"
languages: ["Go", "Vue"]
languagePcts: [44, 33]
topics: ["ai", "docker", "golang", "issue-tracker", "project-management", "self-hosted", "typescript", "vue"]
stars: 10
forks: 3
openIssues: 5
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-07-12T16:37:33Z"
lastCommitAt: "2026-11-07T13:54:46Z"
lastReleaseAt: "2026-10-24T11:02:16Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 77
undervaluedScore: 54
maintainers: ["vinthuy"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d7b49364fb1f1885927672b7ed90b8df4182c42da1dc41bd08869176d5649e/vinthuy/reqmango"
discussionCount: 0
---

# Reqmango

**Self-hosted project management where new requests are triaged first.**  
Type, priority, and likely duplicates are suggested before work lands in the backlog — you only decide the uncertain ones.

[中文文档](https://github.com/vinthuy/reqmango/blob/HEAD/README-zh.md) · [Docs site](https://vinthuy.github.io/reqmango/) · [Contributing](https://github.com/vinthuy/reqmango/blob/HEAD/CONTRIBUTING.md) · [国内共建主场 GitCode](https://gitcode.com/yongfeng9m-/reqmanpy) · [GitHub mirror](https://github.com/vinthuy/reqmango)

---

## Try it

Prebuilt multi-arch images (`linux/amd64`, `linux/arm64`) — fastest:

```bash
git clone https://github.com/vinthuy/reqmango.git
# China: git clone https://gitcode.com/yongfeng9m-/reqmanpy.git reqmango
cd reqmango
cp .env.example .env
docker compose pull
docker compose up -d
```

Or build both images locally (several minutes on a cold cache):

```bash
docker compose up --build
```

**First run:** wait for both services to be healthy before opening the app; a
temporary blank page while the frontend image is still starting does not mean
startup failed. `curl localhost/version` answers which build is running.

Open **http://localhost** and sign in:

| |…
