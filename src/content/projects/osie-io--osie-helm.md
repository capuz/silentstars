---
repo: "osie-io/osie-helm"
name: "osie-helm"
description: "Kubernetes Helm charts for running Osie services"
readmeQualityOk: true
url: "https://github.com/osie-io/osie-helm"
language: "Go Template"
languages: ["Go Template"]
languagePcts: [100]
stars: 11
forks: 3
openIssues: 5
closedIssues: 2
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2022-10-02T13:35:24Z"
lastCommitAt: "2026-09-30T09:57:16Z"
lastReleaseAt: "2023-07-25T11:17:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["github-actions[bot]", "mariusleu", "osie-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/635a57c926b7f54060c6573f4a219fd7cdcf8eea4e2ca06aa64bf4bcfa2b1290/osie-io/osie-helm"
---

## Helm chart for deploying [osie.io](https://osie.io) - the OpenStack dashboard and billing system
By default this chart also installs [Keycloak](https://www.keycloak.org) which is the default Identity provider that's recommended with osie. It's being deployed by the subchart  [bitnami/keycloak](https://github.com/bitnami/charts/tree/main/bitnami/keycloak/) 

### Full documentation

[Osie installation documentation](https://osie.io/docs/operators-manual/kubernetes-install/)

### Add the Helm repository
```
helm repo add osie https://helm.osie.io
helm repo update
```

### Install the chart
The following values expect these prerequisites (else adapt [values.yaml](https://github.com/osie-io/osie-helm/blob/HEAD/charts/osie/values.yaml))
- [cert-manager](https://cert-manager.io/docs/installation/) with a [ClusterIssuer](https://cert-manager.io/docs/configuration/acme/) called `letsencrypt`
- [ingress-nginx](https://kubernetes.github.io/ingress-nginx/deploy/#quick-start) controller
- a default `StorageClass`
- `<your-domain>` and `auth.<your-domain>` configured in your DNS pointing to your ingress IP

**values.yaml**
```yaml
global:
  ingress:
    enabled: true
    # Keycloak will be…
