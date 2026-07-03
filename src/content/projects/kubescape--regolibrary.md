---
repo: "kubescape/regolibrary"
name: "regolibrary"
description: "The regolibrary package contains the controls Kubescape uses for detecting misconfigurations in Kubernetes manifests."
url: "https://github.com/kubescape/regolibrary"
language: "Open Policy Agent"
languages: ["Open Policy Agent"]
languagePcts: [74]
topics: ["kubernetes", "kubescape", "opa", "security", "compliance"]
stars: 131
forks: 69
openIssues: 10
closedIssues: 56
watchers: 3
contributors: 48
recentReleases: 0
createdAt: "2021-09-01T05:54:13Z"
lastCommitAt: "2026-07-03T06:24:13Z"
lastReleaseAt: "2021-09-19T12:51:34Z"
status: "thriving"
tags: ["needs_contributors", "fork_magnet"]
healthScore: 95
undervaluedScore: 47
maintainers: ["matthyx", "Mujib-Ahasan", "GeneCodeSavvy"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f06e93fdd0d56f6ab2683f0db231b7a740f0b725d8e1bce21dd5911163d58ba/kubescape/regolibrary"
---

# Kubescape Regolibrary

This repository contains a library of security controls that codify Kubernetes best practices derived from the most prevalent security frameworks in the industry. [Kubescape](https://github.com/kubescape/kubescape) uses these controls to scan again running clusters or manifest files under development. They’re written in Rego, the purpose-built declarative policy language that supports Open Policy Agent (OPA).

## Terminology

- **Framework** - a group of controls to test against

- **Control** - a potential vulnerability to check, can include multiple rules

- **Rule** - a single specific test

## Contributing

### Add a framework

Add `frameworkName.json` file in the `/frameworks` directory

Example of a framework:
```json
{
    "name": "DevOpsBest",
    "description": "This framework is recommended for use by devops.",
    "attributes": {
    },
    "scanningScope": {
        "matches": [
            "cluster",
            "file"
        ]
    },
    "controlsNames": [
        "Naked pods",
        "Container runtime socket mounted",
        "Image pull policy on latest tag",
        "Label usage for resources",
        "K8s common labels usage",…
