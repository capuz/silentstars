---
repo: "oh-my-omp/omp-config"
name: "omp-config"
description: "Versioned Oh My Pi configuration and plugin manifests"
readmeQualityOk: true
url: "https://github.com/oh-my-omp/omp-config"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-harness", "coding-agent", "llm", "oh-my-pi", "omp", "omp-config"]
stars: 11
forks: 3
openIssues: 5
closedIssues: 123
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-06T16:14:29Z"
lastCommitAt: "2026-11-07T22:50:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 53
maintainers: ["RiriAgent", "Mouriya-Emma"]
openGraphImageUrl: "https://opengraph.githubassets.com/17fb1fa8972784d8de7cace76dc4a4be84bf58e748d20590c8aa2a6bbbe31b1f/oh-my-omp/omp-config"
---

# omp-config

English | [简体中文](https://github.com/oh-my-omp/omp-config/blob/HEAD/README.zh-CN.md)

## Installation

Use `/onboard-omp` as the installation entry point for omomp. With [Oh My Pi (`omp`)](https://github.com/can1357/oh-my-pi) already installed, clone this repository and start `omp` at its root:

```bash
git clone https://github.com/oh-my-omp/omp-config.git
cd omp-config
omp
```

Inside the `omp` session, run:

```text
/onboard-omp
```

The agent starts with a read-only walkthrough of your existing rules and skills, explains what omomp can replace or add, and helps you choose customizations in your language. When you explicitly ask it to install omomp, it adapts the setup and applies it through the `/update-omp` workflow. Running `/onboard-omp` alone does not install the configuration. See [Setup, Sync and Maintenance](https://github.com/oh-my-omp/omp-config/blob/HEAD/docs/operations.md#maintenance-workflows) for diagnosis, updates and sync.

## Design

The full omomp setup is designed for a high-capability main agent: orchestration and supervision strengthen its execution and help maintain task quality, while the same demands are a heavy burden for a lower-capability…
