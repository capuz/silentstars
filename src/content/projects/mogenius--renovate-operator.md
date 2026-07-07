---
repo: "mogenius/renovate-operator"
name: "renovate-operator"
description: "Operator to streamline renovate executions in Kubernetes"
readmeQualityOk: true
url: "https://github.com/mogenius/renovate-operator"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["cloud-native", "golang", "kubernetes", "kubernetes-operator", "renovate", "helm-chart", "self-hosted"]
stars: 488
forks: 46
openIssues: 16
closedIssues: 93
watchers: 3
contributors: 42
recentReleases: 0
createdAt: "2025-09-10T10:34:47Z"
lastCommitAt: "2026-07-07T06:38:45Z"
lastReleaseAt: "2025-09-15T09:36:38Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 96
undervaluedScore: 30
maintainers: ["lukashankeln", "mogenius-renovate-bot[bot]", "mogenius-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5f8ac97d7a2d316d1dd1d0c177bc48004ccd7654afbf87a689df2572629ca74/mogenius/renovate-operator"
discussionCount: 2
---

</div>

<br>

---

# Renovate: The Kubernetes-Native Way

Run [Renovate][1] on your own infrastructure with CRD-based scheduling, parallel execution, auto-discovery, and a built-in UI. If you self-host Renovate and already run Kubernetes, this operator gives you the control and observability that plain self-hosted setups lack.

**Supports all Renovate platforms:** GitHub, GitLab, Bitbucket, Azure DevOps, Gitea, and more. The operator works with any [platform supported by Renovate][4] - simply configure your credentials and platform settings via environment variables or secrets. Note that some platforms have additional operator-specific features like native webhook integrations for GitHub and GitLab.

### Comparison with Mend Renovate CE

| Feature | [Mend Renovate CLI][3]| [Mend Renovate Community Self-Hosted (aka "CE")][2] | Renovate Operator |
|:---|:---:|:---:|:---:|
| Fully open source, no signup or license key | ✅ | ❌ | ✅ |
| Automated dependency updates | ✅ | ✅ | ✅ |
| Runs on your own infrastructure | ✅ | ✅ | ✅ |
| Auto-discovery | ✅ | ✅ | ✅ |
| Webhook API for on-demand runs | ❌ | ✅ | ✅ |
| Web UI | ❌ | ❌ | ✅ |
| Declarative cron scheduling via CRD | ❌ | ❌ | ✅ |
|…
