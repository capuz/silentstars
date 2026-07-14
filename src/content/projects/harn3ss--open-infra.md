---
repo: "harn3ss/open-infra"
name: "open-infra"
description: "A free, self-hostable mini-cloud on your own hardware — an AWS-style platform for containers, VMs, databases, object storage, a data lake, and GPU inference, all driven by GitOps."
readmeQualityOk: true
url: "https://github.com/harn3ss/open-infra"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [72, 23]
topics: ["argocd", "crossplane", "devops", "gitops", "homelab", "infrastructure-as-code", "k3s", "knative", "kubernetes", "mini-cloud"]
stars: 7
forks: 0
openIssues: 5
closedIssues: 25
watchers: 0
contributors: 2
recentReleases: 3
createdAt: "2026-06-19T12:02:43Z"
lastCommitAt: "2026-07-14T05:56:01Z"
lastReleaseAt: "2026-07-02T04:15:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 58
maintainers: ["harn3ss", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cc6b8b030add6621ef55a673bbd271612593b065f0b285b4b5b5f35ea5b2e0e/harn3ss/open-infra"
discussionCount: 0
---

# open-infra

> A **free, self-hostable mini-cloud**. Drop one simple `infra.yaml` into your app
> repo, `git push`, and get an AWS-like managed experience — not just autoscaling
> HTTPS apps, managed databases, object storage and queues, but **VMs, serverless +
> GPU inference, an analytics lake, CDC pipelines, and Active Directory** — running on
> your own commodity Linux boxes at **zero cloud cost**.

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
CNCF projects — not a reinvention of…
