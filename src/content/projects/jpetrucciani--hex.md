---
repo: "jpetrucciani/hex"
name: "hex"
description: "🪄 an opinionated abstraction layer that brings the magic of Nix to Kubernetes"
url: "https://github.com/jpetrucciani/hex"
homepage: "https://hex.gemologic.dev"
language: "Nix"
languages: ["Nix", "JavaScript"]
languagePcts: [79, 21]
topics: ["helm", "k8s", "nix", "yaml"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-05-17T21:20:26Z"
lastCommitAt: "2026-06-24T00:20:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["jpetrucciani", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/83eee98c9f9303ad257b47479825a85c9c38df145aa8098e90f268c2670d33ac/jpetrucciani/hex"
---

# 🪄 hex

`hex` is an opinionated abstraction layer that brings the magic of [Nix](https://nixos.org/) to [Kubernetes](https://kubernetes.io/) configuration management. It allows you to write declarative, composable "spells" that generate Kubernetes resources with all the benefits of the Nix ecosystem. Get your YAML nightmare under control, and keep things [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)!

## ✨ Features

- **Declarative Configuration**: Write your Kubernetes configs using Nix's powerful expression language
- **Composable Building Blocks**: Write functions to orchestrate other functions! Easy to snap things together
- **Pre-built modules**: Modules/functions for popular tools like ArgoCD, Prometheus, Grafana, and many more
- **Smart Diffing**: See exactly what will change before applying updates to your cluster
- **Built-in Safety**: Server-side diffs by default, with proper validation of resources
- **Helm Integration**: Seamlessly incorporate Helm charts into your configurations
- **Custom Resource Support**: First-class support for CRDs and custom resources
- **Development Friendly**: Built-in support for dry runs and partial deployments
- **[beta]…
