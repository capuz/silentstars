---
repo: "singularityhub/shpc-registry"
name: "shpc-registry"
description: "A remote registry for Singularity Registry HPC 🖊️"
url: "https://github.com/singularityhub/shpc-registry"
homepage: "https://singularityhub.github.io/shpc-registry/"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["container-recipes", "environment-modules", "lmod", "singularity", "singularity-hpc", "shpc"]
stars: 15
forks: 21
openIssues: 10
closedIssues: 13
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2022-07-31T22:03:38Z"
lastCommitAt: "2026-06-27T00:36:33Z"
lastReleaseAt: "2023-04-02T01:09:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "funded", "fork_magnet"]
healthScore: 90
undervaluedScore: 79
maintainers: ["Copilot", "vsoch"]
openGraphImageUrl: "https://opengraph.githubassets.com/babfb6d4f3dcee95985e3ea3fcb00eac27dc406845d8958e7177054afc438394/singularityhub/shpc-registry"
fundingLinks: ["GITHUB:https://github.com/vsoch"]
---

# Singularity HPC Registry

This is the main remote registry for [Singularity HPC](https://github.com/singularityhub/singularity-hpc).

📖️ Read the [documentation](https://singularity-hpc.readthedocs.io/en/latest/) 📖️
⭐️ Browse the [container module collection](https://singularityhub.github.io/shpc-registry/) ⭐️

## Contribution

This registry showcases Singularity HPC (shpc), and provides the default set of containers for its default registry.
Contributions are very much welcome, so please do submit a pull-request if you'd like more software to be added, or open an issue to request a new addition!

The documentation has an [introduction](https://singularity-hpc.readthedocs.io/en/latest/getting_started/developer-guide.html#writing-registry-entries) about registries, and explains how to organize the required files for a container entry.

### Automated generation

First of all, there is an automated way of getting most of the `container.yaml` written via GitHub magic 🎩 automation.

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of this repository.
2. Go to the Actions tab.
3. Select "Generate New Container" in the left-hand side menu.
4. Click the "Run…
