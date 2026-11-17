---
repo: "Vashkatsi/deply"
name: "deply"
description: "Keep your python architecture clean."
readmeQualityOk: true
url: "https://github.com/Vashkatsi/deply"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["architecture", "clean-architecture", "python"]
stars: 173
forks: 5
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 3
createdAt: "2024-10-29T09:46:03Z"
lastCommitAt: "2026-11-17T12:17:50Z"
lastReleaseAt: "2026-10-23T09:38:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 38
maintainers: ["Vashkatsi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/880195829/272c925d-d312-4dcd-bfc4-b5fc5082ab39"
---

# Deply

Deply is a static code analysis tool for Python that helps you communicate, visualize and enforce architectural decisions in your projects. You can freely define your architectural layers over classes and which rules should apply to them.

For example, you can use Deply to ensure that modules/packages in your project are truly independent of each other to make them easier to reuse.

Deply can be used in a CI pipeline to make sure a pull request does not violate any of the architectural rules you defined. With the optional Mermaid formatter you can visualize your layers, rules and violations.

## Documentation
You can find the documentation in the /doc directory or visit the doc page: https://vashkatsi.github.io/deply

## Getting Started
You can install Deply via pip:

```bash
pip install deply
```

Once you have installed Deply, you will need to create a configuration file, where you define your layers and communication ruleset. This configuration file is written in YAML and, by default, is stored with the name deply.yaml in your project's root directory.

When you have this file, you can analyse your code by running the analyze command:

```bash
deply analyze

# which is…
