---
repo: "snapp-incubator/s3-panel"
name: "s3-panel"
description: "Self-service web panel for S3-compatible object storage (Ceph RGW) — a Go API and React UI to manage buckets, objects, shares and quotas."
readmeQualityOk: true
url: "https://github.com/snapp-incubator/s3-panel"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [59, 40]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 19
recentReleases: 0
createdAt: "2026-06-23T17:35:24Z"
lastCommitAt: "2026-10-20T08:49:38Z"
lastReleaseAt: "2026-06-23T23:02:51Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["1995parham", "dependabot[bot]", "sinamna"]
openGraphImageUrl: "https://opengraph.githubassets.com/c18dbf7ccbb4cb70582819f1cdd718172b1b4e609232221bc7ff47a9e5fae484/snapp-incubator/s3-panel"
---

S3 Panel is a self-service web panel for S3-compatible object storage (Ceph RGW):
authenticate and manage buckets and objects — list, upload, download, delete and
share — and view quotas.

## Authentication modes

`server.auth_mode` selects how a caller is identified.

**`s3` (default)** — the user supplies their own S3 access key and secret key.
The gateway is the only authorization layer, so a user sees exactly the buckets
their own account owns. This is the historical behaviour and is unchanged.

**`iam`** — the user signs in with OIDC, and an S3-compatible *control endpoint*
answers which buckets they may use and with what permission. The panel speaks
only standard protocols — OIDC, S3 and STS — so any service implementing them can
back it.

```
browser ──OIDC──▶ panel ──S3 (ListBuckets, ?policy, ?stats)──▶ control endpoint
                    │  ──STS GetSessionToken─────────────────▶
                    ▼
              short-lived credential
                    │
browser/panel ──────┴──S3 objects──▶ gateway   (the control endpoint is not in this path)
```

What this adds over `s3` mode:

- **Buckets from every region in one list**, including buckets the user does not
  own…
