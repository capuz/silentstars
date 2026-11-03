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
contributors: 33
recentReleases: 0
createdAt: "2024-05-03T12:36:24Z"
lastCommitAt: "2026-11-03T19:05:15Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 83
maintainers: ["fredcamaral", "lerian-studio"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6fccef067190690981b3adc97fe90369eab6f5801a3d1cc7a25aa75588318f1/LerianStudio/helm"
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
| `10.3.1` | 4.5.0-beta.94 | 3.8.4 |
-----------------

### Plugin Access…
