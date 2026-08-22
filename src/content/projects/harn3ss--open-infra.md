---
repo: "harn3ss/open-infra"
name: "open-infra"
description: "A free, self-hostable mini-cloud on your own hardware — an AWS-style platform for containers, VMs, databases, object storage, a data lake, and GPU inference, all driven by GitOps."
readmeQualityOk: true
url: "https://github.com/harn3ss/open-infra"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [53, 34]
topics: ["argocd", "crossplane", "gitops", "homelab", "infrastructure-as-code", "k3s", "knative", "kubernetes", "mini-cloud", "platform-engineering"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 42
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-06-19T12:02:43Z"
lastCommitAt: "2026-08-22T04:05:28Z"
lastReleaseAt: "2026-08-17T04:43:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 56
maintainers: ["harn3ss", "chaos-bot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/907a40ef6a4fec64e6eb59a2cbfb723799a10e316b4d472209911c882e05ca42/harn3ss/open-infra"
discussionCount: 0
---

# open-infra

> A **self-hosted cloud platform** that runs entirely inside your own trust boundary.
> Declare intent in one `infra.yaml`, `git push`, and get an AWS-like managed surface —
> autoscaling HTTPS apps, managed databases, object storage and queues, plus **VMs,
> serverless + GPU inference, an analytics lake, CDC pipelines, and Active Directory** —
> GitOps-reconciled on hardware you control and built to a **NIST 800-53 control
> framework**: secure-by-default, least-privilege, fully audited.

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
infrastructure.**…
