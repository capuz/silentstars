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
forks: 50
openIssues: 224
closedIssues: 1280
watchers: 9
contributors: 46
recentReleases: 0
createdAt: "2024-01-16T13:18:55Z"
lastCommitAt: "2026-11-05T11:24:36Z"
lastReleaseAt: "2024-11-28T12:36:38Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 48
maintainers: ["renovate[bot]", "pmalek", "alacuku"]
openGraphImageUrl: "https://opengraph.githubassets.com/85a875fcb545215c238043bf755f5be62c29b992c0be49d7e16347233d4b0ee2/Kong/kong-operator"
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
