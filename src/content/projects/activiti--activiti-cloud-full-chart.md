---
repo: "Activiti/activiti-cloud-full-chart"
name: "activiti-cloud-full-chart"
description: "Umbrella Helm chart for Activiti Cloud"
readmeQualityOk: true
url: "https://github.com/Activiti/activiti-cloud-full-chart"
language: "Makefile"
languages: ["Makefile", "Go Template"]
languagePcts: [79, 21]
topics: ["chart", "docker-desktop", "kubernetes", "activiti", "activiti-cloud", "hxps"]
stars: 13
forks: 27
openIssues: 8
closedIssues: 3
watchers: 5
contributors: 25
recentReleases: 0
createdAt: "2019-05-03T06:43:33Z"
lastCommitAt: "2026-09-17T08:51:59Z"
lastReleaseAt: "2022-03-31T08:06:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 69
maintainers: ["alfresco-build", "dependabot[bot]", "dsibilio"]
openGraphImageUrl: "https://opengraph.githubassets.com/a5ecc24740da9544bce2215e76d0c87a7d91dc5519c3abcbd91eb9badac8c7eb/Activiti/activiti-cloud-full-chart"
---

# activiti-cloud-full-chart

[Getting Started Guide](https://activiti.gitbook.io/activiti-7-developers-guide/getting-started/getting-started-activiti-cloud)

More information:

- all chart archives, located at: https://github.com/Activiti/activiti-cloud-helm-charts
- full chart, located at: https://github.com/Activiti/activiti-cloud-full-chart (this repo)
- a common chart as a base chart for all charts, located at: https://github.com/Activiti/activiti-cloud-common-chart
- charts for components, as sub folders located at: https://github.com/Activiti/activiti-cloud-application

## Running on Docker Desktop

Install [Docker Desktop](https://www.docker.com/products/docker-desktop) and make sure the included single node Kubernetes cluster is started.

Install the latest version of [Helm](https://helm.sh).

Add the magic `host.docker.internal` hostname to your hosts file:

```shell
sudo echo "127.0.0.1        host.docker.internal" > /etc/hosts
```

Install a recent version of [ingress-nginx](https://kubernetes.github.io/ingress-nginx):

```shell
helm install --repo https://kubernetes.github.io/ingress-nginx ingress-nginx ingress-nginx
```

Update all dependencies:

```shell
helm…
