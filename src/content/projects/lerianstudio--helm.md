---
repo: "LerianStudio/helm"
name: "helm"
description: "Official Helm charts for deploying Midaz, Reporter, Tracer and the full ecosystem of plugins and services from Lerian Studio on Kubernetes."
readmeQualityOk: true
url: "https://github.com/LerianStudio/helm"
homepage: "https://docs.lerian.studio"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [90]
topics: ["financial-infrastructure", "fintech", "helm", "helm-charts", "kubernetes", "ledger", "microservices", "mongodb", "open-source", "opentelemetry"]
stars: 7
forks: 3
openIssues: 15
closedIssues: 104
watchers: 2
contributors: 31
recentReleases: 0
createdAt: "2024-05-03T12:36:24Z"
lastCommitAt: "2026-10-29T21:25:14Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 83
maintainers: ["lerian-studio", "guimoreirar", "fredcamaral"]
openGraphImageUrl: "https://opengraph.githubassets.com/13eee65827a1c3879c1e7119e57575bf758b9ce581b2c0a24d4067b4783f5984/LerianStudio/helm"
---

# Lerian Studio Helm Charts

## Chart Maintenance

- Chart contract: [`docs/helm-chart-standard.md`](https://github.com/LerianStudio/helm/blob/HEAD/docs/helm-chart-standard.md)
- Render inventory (on demand): `cd .github/scripts && go run ./validate-helm-charts --root ../.. --render-inventory --output /tmp/helm-render-inventory.md`
- Static validation: `cd .github/scripts && go run ./validate-helm-charts --root ../.. --strict`
- Render validation: `cd .github/scripts && go run ./validate-helm-charts --root ../.. --render-gate --all`

CI enforces the static contract and render gate. Required production secrets are represented by dummy sample values under `.github/configs/helm-render-values/` only so charts can render in CI without publishing credentials.

### Midaz Helm Chart

See the [official documentation](https://docs.lerian.studio/en/midaz/deploy-midaz-using-helm) for deployment guides.

For implementation and configuration details, see the [README](https://charts.lerian.studio/charts/midaz).

#### Application Version Mapping

| Chart Version | Ledger Version | CRM Version |
| :---: | :---: | :---: |
| `9.0.0` | 3.8.3 | 3.8.2 |
-----------------

### Plugin Access Manager Helm…
