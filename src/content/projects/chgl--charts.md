---
repo: "chgl/charts"
name: "charts"
description: "A collection of Helm charts"
readmeQualityOk: true
url: "https://github.com/chgl/charts"
homepage: "https://chgl.github.io/charts"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["chart", "helm-charts", "helm", "kubernetes"]
stars: 10
forks: 5
openIssues: 2
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2020-12-15T19:42:53Z"
lastCommitAt: "2026-09-29T08:11:00Z"
lastReleaseAt: "2020-12-20T00:28:17Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 82
maintainers: ["chgl-renovate[bot]", "chgl"]
openGraphImageUrl: "https://opengraph.githubassets.com/20d39d413089eb18250754269116897d83a46677377ec8e166910208986903a9/chgl/charts"
discussionCount: 1
---

# Charts

> A collection of Helm charts

```sh
helm repo add chgl https://chgl.github.io/charts
helm repo update
```

> [!NOTE]
> Also available as OCI artifacts: <https://github.com/chgl?tab=packages&repo_name=charts>.

## Compliance Reports

Each update to the charts is scanned using [Kubescape](https://kubescape.io/) against the [AllControls security frameworks](https://kubescape.io/docs/frameworks-and-controls/).
The report is published online at: <https://chgl.github.io/charts/kubescape-reports/allcontrols.html>

## Development

1. (Optional) Install the [pre-commit](https://pre-commit.com/) hooks

   ```sh
   pip install pre-commit
   pre-commit install
   ```

1. (Optional) Setup a KinD cluster with Nginx ingress

   ```sh
   # configures kind to listen on port 80 and 443 and make nodes ingress-ready
   kind create cluster --config=hack/kind-config.yaml
   # setup NGINX Ingress controller
   kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml
   # (optional) install metrics-server to test VPA & HPA
   helm repo add metrics-server -n kube-system https://kubernetes-sigs.github.io/metrics-server/
   helm…
