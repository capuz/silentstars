---
repo: "pulumi/registry"
name: "registry"
description: "The Pulumi Registry contains detailed API docs and guides for Pulumi IaC providers"
readmeQualityOk: true
url: "https://github.com/pulumi/registry"
homepage: "https://www.pulumi.com/registry"
language: "HTML"
languages: ["HTML"]
languagePcts: [42]
topics: ["pulumi", "registry", "packages", "components"]
stars: 41
forks: 148
openIssues: 187
closedIssues: 879
watchers: 16
contributors: 176
recentReleases: 0
createdAt: "2021-08-27T20:57:43Z"
lastCommitAt: "2026-09-28T10:06:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 64
maintainers: ["pulumi-bot", "iwahbe", "joeduffy"]
openGraphImageUrl: "https://opengraph.githubassets.com/c98fd33ea825a698e3659069c38d1c52eb520f66d88ade797dc067d474452c2c/pulumi/registry"
---

# Registry

[Pulumi Registry](https://pulumi.com/registry) is the public index of Pulumi extensions and integrations.

## Adding a Package

Adding a community package is one pull request that adds a single entry to [`community-packages/package-list.json`](https://github.com/pulumi/registry/blob/master/community-packages/package-list.json). Your provider repo supplies a `docs/_index.md` and a `v`-prefixed release; the docs and metadata are generated and published for you after merge, so you never commit generated files here. Automated checks post a fact-sheet on the PR, and a Pulumi maintainer reviews it. You do not need to file an issue first.

**[Adding a new package](https://github.com/pulumi/registry/blob/HEAD/docs/adding-a-new-package.md) has the complete instructions** — what the page must contain, the User-Agent your provider should set, how to re-run the checks, and the checklist a maintainer works through before merging. Read it before opening a PR.

One exception: a **dynamically bridged** Terraform provider, consumed with `pulumi package add terraform-provider <name>` and having no provider repo or committed schema, cannot be added by pull request. Open a ["New…
