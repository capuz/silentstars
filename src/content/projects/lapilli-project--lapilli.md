---
repo: "lapilli-project/lapilli"
name: "lapilli"
description: "Which of your alerts are worth their page? Lapilli replays alert rules against what actually went wrong: a weekly verdict, or every hour in a ledger with a dashboard."
readmeQualityOk: true
url: "https://github.com/lapilli-project/lapilli"
homepage: "https://lapilli.dev"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["alert-fatigue", "alerting", "go", "grafana", "helm-chart", "kubernetes", "monitoring", "observability", "on-call", "prometheus"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-11-02T06:22:25Z"
lastCommitAt: "2026-11-17T14:48:50Z"
lastReleaseAt: "2026-11-03T10:48:37Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 58
maintainers: ["JMcunst"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa6470c0fac1c39986eec83d46a5d4056baf55b4ed077eec3a11f34d1c2aec71/lapilli-project/lapilli"
---

**Which of your alerts are worth their page?** `lapilli verdict` judges every
firing against what actually went wrong: a white stone when the alert caught an
incident, a black stone when nothing was wrong. Count a rule's stones over a
week and you know whether it earns its place; an incident with no stone is one
your alerts missed. `lapilli serve` keeps judging, every hour, in a ledger with
a dashboard, where teams follow the noisy rules and missed incidents up
([below](#keep-judging)). It reads by default; turned on, it also makes the
changes it proposes, each once a person has approved it, as a pull request
to where the rule is kept ([below](#changing-rules)).

```
$ lapilli verdict --rules alert-rules.yaml --prometheus http://prometheus:9090 \
    --incidents incidents.yaml --impact 'sum(rate(http_5xx[5m])) / sum(rate(http_total[5m])) > 0.01'
Lapilli  2026-10-26 00:00 → 2026-11-02 00:00 Asia/Seoul (+09:00)
148 firings, 3 incidents written down, 1 more found by --impact

RULE                SEVERITY  FIRED  ○ CAUGHT  ● NOTHING  PRECISION  REFIRED
ExportJob5xx        critical  118    0         118        0%         41
CheckoutLatencyP99  warning   14     2         12         14%…
