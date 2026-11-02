---
repo: "Altinn/altinn-studio"
name: "altinn-studio"
description: "Next generation open source Altinn platform and applications."
readmeQualityOk: true
url: "https://github.com/Altinn/altinn-studio"
homepage: "https://docs.altinn.studio/en"
language: "C#"
languages: ["C#", "TypeScript"]
languagePcts: [49, 37]
topics: ["git", "forms", "containers", "ui-components", "apis", "altinn", "development-platform", "sdg-16", "digital-public-goods", "dpg"]
stars: 169
forks: 107
openIssues: 891
closedIssues: 7942
watchers: 29
contributors: 155
recentReleases: 0
createdAt: "2018-06-11T10:32:39Z"
lastCommitAt: "2026-11-02T11:36:57Z"
lastReleaseAt: "2019-07-08T12:16:57Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 48
maintainers: ["martinothamar", "danielskovli", "bjorntore"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/136911355/858ba98f-0d0e-4951-b573-e4e5cd1bfa04"
discussionCount: 13
---

# Altinn Studio

Altinn Studio is how Norwegian public agencies build, deploy and run digital services on Altinn 3. Service owners
build apps in Designer, from simple forms to processes with signing and payment, and switch to code where they need
to.

To build apps, start with [docs.altinn.studio](https://docs.altinn.studio) and its
[introductory course](https://docs.altinn.studio/altinn-studio/getting-started/app-dev-course/). This repository is
for developing Altinn Studio itself. [CONTRIBUTING.md](https://github.com/Altinn/altinn-studio/blob/HEAD/CONTRIBUTING.md) says how we work, the
[glossary](https://github.com/Altinn/altinn-studio/blob/HEAD/GLOSSARY.md) defines the terms we use, and [docs/](https://github.com/Altinn/altinn-studio/blob/HEAD/docs/README.md) holds the docs that span components.

## How it fits together

Altinn Studio spans Core, Runtime and Platform:

- **Core** is the control plane, which reaches out to Runtime and Platform. Service owners build, configure and
  deploy their apps in [Designer](https://github.com/Altinn/altinn-studio/blob/HEAD/src/Designer), with help from the [Studio Assistant](https://github.com/Altinn/altinn-studio/blob/HEAD/src/AI), and…
