---
repo: "Kong/kong-operator"
name: "kong-operator"
description: "Kubernetes Operator for Kong Gateways"
readmeQualityOk: true
url: "https://github.com/Kong/kong-operator"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["team-k8s"]
stars: 109
forks: 49
openIssues: 194
closedIssues: 1206
watchers: 9
contributors: 46
recentReleases: 0
createdAt: "2024-01-16T13:18:55Z"
lastCommitAt: "2026-10-08T10:24:09Z"
lastReleaseAt: "2024-11-28T12:36:38Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 48
maintainers: ["alacuku", "renovate[bot]", "pmalek"]
openGraphImageUrl: "https://opengraph.githubassets.com/7a9ad2c14d009c48bf3f9049b3e71339bad46e8ddff080d15eb06b33036b35bf/Kong/kong-operator"
discussionCount: 9
---

# [Kong Operator][docs]

Kong Operator is a [Kubernetes Operator][operator-concept] that can manage
your Kong Ingress Controller, Kong Gateway Data Planes, or both together when running
on Kubernetes.

With Kong Operator, users can:

* Deploy and configure Kong Gateway services.
* Customise deployments using `PodTemplateSpec` to:
  * [Deploy sidecars][docs_sidecar],
  * [Set image][docs_dataplane_image],
  * [And much more][docs_podtemplatespec].
* Upgrade Data Planes using a [rolling restart][docs_upgrade_rolling] or [blue/green deployments][docs_upgrade_bg].
* Configure [auto scaling on Data Planes][docs_autoscaling].

[docs_sidecar]: https://developer.konghq.com/operator/dataplanes/how-to/deploy-sidecars/
[docs_dataplane_image]: https://developer.konghq.com/operator/dataplanes/how-to/set-dataplane-image/
[docs_podtemplatespec]: https://developer.konghq.com/operator/dataplanes/reference/podtemplatespec/
[docs_upgrade_rolling]: https://developer.konghq.com/operator/dataplanes/upgrade/gateway/rolling/
[docs_upgrade_bg]: https://developer.konghq.com/operator/dataplanes/upgrade/gateway/blue-green/
[docs_autoscaling]:…
