---
repo: "salt-extensions/salt-extension-copier"
name: "salt-extension-copier"
description: "Create and maintain Salt extensions using Copier"
readmeQualityOk: true
url: "https://github.com/salt-extensions/salt-extension-copier"
homepage: "https://salt-extensions.github.io/salt-extension-copier/"
language: "Jinja"
languages: ["Jinja", "Python"]
languagePcts: [67, 32]
topics: ["copier-template", "saltstack", "saltstack-extension", "salt-extension"]
stars: 18
forks: 6
openIssues: 1
closedIssues: 20
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2023-11-13T12:46:18Z"
lastCommitAt: "2026-08-08T04:35:30Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 72
maintainers: ["salt-extensions-renovatebot[bot]", "lkubb", "dwoz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b44f985865851e3b9be3e8f6d788c1de70808fc716f7ba1986b33de64f03960d/salt-extensions/salt-extension-copier"
---

# Create & Maintain Salt Extensions

A [Copier](https://github.com/copier-org/copier) template that initializes a project structure for developing [Salt](https://github.com/saltstack/salt) [extension modules][saltext-def].

## Why
For individual extension creators, this template allows to [quickly get started with developing][saltext-creation], [testing][saltext-testing] and [releasing][saltext-release] new Salt functionality.

For extension maintainers and the [`salt-extensions` organization][gh-org-ref], it ensures that there is a frictionless way of keeping the necessary boilerplate [up to date][saltext-update].

## How

For comprehensive instructions on all aspects of Salt extension development with this template, please refer to the [user documentation][docs].

### Migration from the [deprecated tool][create-salt-extension]
Existing projects can be migrated to this template by simply running the [creation commands][saltext-creation] on top of a repo clone. Ensure you additionally pass `--vcs-ref=0.0.2` to Copier since this template diverges from the last official release (`0.24.0`) after that.

```bash
git clone https://github.com/salt-extensions/saltext-example
copier copy…
