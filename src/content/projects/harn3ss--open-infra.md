---
repo: "harn3ss/open-infra"
name: "open-infra"
description: "A free, self-hostable mini-cloud: write one infra.yaml, git push, get an AWS-like deploy on your own hardware."
url: "https://github.com/harn3ss/open-infra"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [82]
topics: ["argocd", "crossplane", "devops", "gitops", "homelab", "infrastructure-as-code", "k3s", "knative", "kubernetes", "mini-cloud"]
stars: 6
forks: 0
openIssues: 5
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-19T12:02:43Z"
lastCommitAt: "2026-06-24T00:21:28Z"
lastReleaseAt: "2026-06-20T03:59:12Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 54
maintainers: ["harn3ss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ed799d84fc14ff50757e192eb38a04aeb8f6ec66b31fa948af34b751a47d0cbd/harn3ss/open-infra"
discussionCount: 0
---

# open-infra

> A **free, self-hostable mini-cloud**. Drop one simple `infra.yaml` into your app
> repo, `git push`, and get an AWS-like managed experience — autoscaling HTTPS
> services, a Postgres database, object storage, queues — running on your own
> commodity Linux boxes at **zero cloud cost**.

```yaml
# infra.yaml — you write intent, the platform produces infrastructure
apiVersion: openinfra.dev/v1
kind: Application
metadata:
  name: my-api
spec:
  image: ghcr.io/me/my-api
  port: 8080
  scaling: { min: 1, max: 10, targetCPUPercent: 70 }
  domain: my-api.example
  database: { engine: postgres, name: myapidb }
  storage:  { buckets: [uploads] }
  queues:   [jobs]
```

`git push` → GitHub Action builds the image → GitOps controller reconciles the
whole desired state (hosting, DB, storage, queues, DNS, TLS, autoscaling).
The experience feels like AWS; the bill is $0.

---

## Why

The guiding principle: **the user writes intent, the platform produces
infrastructure.** open-infra is *glue + developer experience* on top of proven
CNCF projects — not a reinvention of databases or storage.

| AWS | open-infra | Tool |
|---|---|---|
| EC2 / ECS | container orchestration | k3s |
|…
