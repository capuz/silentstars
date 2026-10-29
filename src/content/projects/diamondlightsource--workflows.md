---
repo: "DiamondLightSource/workflows"
name: "workflows"
description: "The data analysis workflows platform deployment"
readmeQualityOk: true
url: "https://github.com/DiamondLightSource/workflows"
language: "Rust"
languages: ["Rust", "TypeScript", "YAML"]
languagePcts: [40, 31, 27]
stars: 8
forks: 8
openIssues: 16
closedIssues: 3
watchers: 3
contributors: 18
recentReleases: 0
createdAt: "2024-03-01T11:33:38Z"
lastCommitAt: "2026-10-29T10:20:26Z"
lastReleaseAt: "2024-07-08T14:04:11Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 83
undervaluedScore: 74
maintainers: ["davehadley", "hazdl", "Oli-Jones475"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ff67d8fde1bc662e41158a9aec6cc51787cadcbc340bf0b6364e528d70198b9/DiamondLightSource/workflows"
---

# Workflows

The data analysis workflows platform deployment. The deployment consists of a Kubernetes virtual cluster (vcluster), in which Argo Workflows is deployed

Refer to <https://diamondlightsource.github.io/workflows/docs> for more explanations and tutorials for the workflows.

## Deployment

The workflow engine can be deployed using Helm. Load the correct module to access the production / staging cluster and run the correct command based off which environment you are installing to.

### Deployment to Prodcution Environment

```sh
helm install --upgrade workflows-cluster charts/workflows-cluster -n workflows
```

This will install a virtual cluster together with [Argo CD](https://argo-cd.workflows.diamond.ac.uk), which then installs all other services
inside the vcluster including the workflow engine itself.

### Deployment to Staging Environment

```sh
helm install --upgrade workflows-cluster charts/workflows-cluster -n workflows -f charts/workflows-cluster/staging-values.yaml
```

### Deployment in Developer Mode

```sh
helm install workflows-cluster charts/workflows-cluster -f charts/workflows-cluster/dev-values.yaml
```

If you wish to run workflows, you should override…
