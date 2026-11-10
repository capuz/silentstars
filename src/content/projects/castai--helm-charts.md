---
repo: "castai/helm-charts"
name: "helm-charts"
description: "CAST AI Kubernetes helm charts"
readmeQualityOk: true
url: "https://github.com/castai/helm-charts"
language: "Go Template"
languages: ["Go Template", "Go"]
languagePcts: [39, 33]
stars: 22
forks: 34
openIssues: 13
closedIssues: 13
watchers: 20
contributors: 159
recentReleases: 0
createdAt: "2021-11-12T07:45:28Z"
lastCommitAt: "2026-11-10T11:37:55Z"
lastReleaseAt: "2021-11-29T15:44:36Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 89
undervaluedScore: 61
maintainers: ["octo-sts[bot]", "spawlaczykcast", "alijared"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a915f2b7c78db8baf4c7f32efb6f8f371b6e99defbfc5db6e3990795f68cd39/castai/helm-charts"
---

# CAST AI Kubernetes helm charts

## Usage

[Helm](https://helm.sh) must be installed to use the charts.
Please refer to Helm's [documentation](https://helm.sh/docs/) to get started.

Once Helm is set up properly, add the repo as follows:

```console
helm repo add castai-helm https://castai.github.io/helm-charts
```

You can then run `helm search repo castai-helm` to see the charts.

## Releasing

How charts are built, signed and published, and how to verify one: [.github/RELEASING.md](https://github.com/castai/helm-charts/blob/HEAD/.github/RELEASING.md).

## Contribution

Updates to helm charts should also contain doc updates. 
We use [helm-docs](https://github.com/norwoodj/helm-docs) to generate docs. 

To install helm-docs, run:

```console
brew install norwoodj/tap/helm-docs
```

To generate docs, run:

```console
make docs-{chart-name}
```

Or to generate docs for all charts, run:

```console
make docs-all
```

## License

[Apache 2.0 License](https://github.com/castai/helm-charts/blob/main/LICENSE).
