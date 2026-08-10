---
repo: "canonical/hydra-operator"
name: "hydra-operator"
description: "A Charmed Operator for running Ory Hydra on Kubernetes"
readmeQualityOk: true
url: "https://github.com/canonical/hydra-operator"
homepage: "https://github.com/canonical/hydra-operator"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["identity-platform", "charm", "hydra", "python"]
stars: 8
forks: 9
openIssues: 12
closedIssues: 41
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2022-10-05T08:12:00Z"
lastCommitAt: "2026-08-10T05:07:01Z"
lastReleaseAt: "2023-03-27T14:53:20Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 86
maintainers: ["canonical-iam", "renovate[bot]", "natalian98"]
openGraphImageUrl: "https://opengraph.githubassets.com/d38b8343f7ad62b450cdf2349b23fb2f3243a66b71062d1ba0fbf9b8df4fd23a/canonical/hydra-operator"
---

# Charmed Ory Hydra

## Description

Python Operator for Ory Hydra - a scalable, security first OAuth 2.0 and
OpenID Connect server. For more details and documentation,
visit <https://www.ory.sh/docs/hydra/>.

## Usage

```shell
juju deploy postgresql-k8s --channel 14/stable --trust
juju deploy self-signed-certificates --channel latest/stable --trust
juju deploy identity-platform-login-ui-operator --channel latest/edge --trust
juju deploy traefik-k8s --channel latest/stable --trust

juju deploy hydra --trust

juju integrate postgresql-k8s hydra
juju integrate identity-platform-login-ui-operator hydra
juju integrate traefik-k8s:certificates self-signed-certificates:certificates
juju integrate traefik-k8s hydra:public-ingress
```

You can follow the deployment status with `watch -c juju status --color`.

## Integrations

### PostgreSQL

This charm requires an integration
with [postgresql-k8s-operator](https://github.com/canonical/postgresql-k8s-operator).

### Ingress

The Hydra Operator offers integration with
the [traefik-k8s-operator](https://github.com/canonical/traefik-k8s-operator)
for ingress. Hydra has two APIs which can be exposed through ingress, the public
API and the…
