---
repo: "CustomResourceDefinition/catalog"
name: "catalog"
description: "Repository with Custom Resource Definition files for validation purposes"
readmeQualityOk: true
url: "https://github.com/CustomResourceDefinition/catalog"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 17
forks: 5
openIssues: 1
closedIssues: 10
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2024-05-27T07:52:14Z"
lastCommitAt: "2026-10-29T21:24:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 68
maintainers: ["github-actions[bot]", "dependabot[bot]", "CodeReaper"]
openGraphImageUrl: "https://opengraph.githubassets.com/28156165c48c0615c88b2ce1ffc812cd72749ae1cca2a002d85d862cefbafd8d/CustomResourceDefinition/catalog"
---

# CRD Catalog

This repository aggregates hundreds of popular Kubernetes CRDs (`CustomResourceDefinition`) including their JSON schema format.

The intended purpose with this repository is aid with validation, language servers and code generation.

The catalog are checked for updates every 8 hours, but the catalog is also tagged with kubernetes release versions to make the catalog available as it were when a specific version was released.

## Known use cases

### Validation using Kubeconform

The schema files can be used by various tools such as [Kubeconform](https://github.com/yannh/kubeconform) as an alternative to `kubectl --dry-run` to perform validation on custom (and native) Kubernetes resources.

Running Kubernetes schema validation checks helps apply the **"shift-left approach"** on machines **without** giving them access to your cluster (e.g. locally or on CI).

Example:

```sh
kubeconform -schema-location default -schema-location 'https://raw.githubusercontent.com/CustomResourceDefinition/catalog/main/schema/{{.Group}}/{{.ResourceKind}}_{{.ResourceAPIVersion}}.json' [MANIFEST]
```

Example using the catalog as it were when version 1.33.6 was released:

```sh
kubeconform…
