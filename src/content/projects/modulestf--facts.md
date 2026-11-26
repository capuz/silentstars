---
repo: "modulestf/facts"
name: "facts"
description: "Offline facts engine for Terraform module review and authoring"
readmeQualityOk: true
url: "https://github.com/modulestf/facts"
homepage: "https://modules.tf/rules/"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["terraform", "cli", "code-quality", "code-review", "golang", "infrastructure-as-code", "linter", "static-analysis", "terraform-aws-modules", "terraform-modules"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2021-09-25T15:59:39Z"
lastCommitAt: "2026-11-26T22:31:09Z"
lastReleaseAt: "2026-11-04T13:58:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 64
maintainers: ["antonbabenko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/410315958/98dc8972-88b1-4760-8414-334364287dda"
fundingLinks: ["GITHUB:https://github.com/antonbabenko", "PATREON:https://patreon.com/antonbabenko", "CUSTOM:https://paypal.me/antonbabenko", "CUSTOM:https://www.buymeacoffee.com/antonbabenko"]
---

# Terraform Modules Facts

`mtf-facts` is an offline Go CLI that parses Terraform module trees and reports deterministic facts: rule results, candidate findings with evidence, interface and schema diffs.

It serves two uses:

- Module authoring: `lint`, a provider coverage `ledger` check, and `schema-diff` for provider upgrades.
- Module review: a facts bundle that lets a model reviewer skip the rules a parser can decide, `fixture-build`, which builds the scratch trees of a verification ladder level from trusted templates, and `fixture-check`, the allowlist such a tree passes before Terraform runs on it.

It reads files only. It makes no network call and runs no Terraform or other program.

## Quick start

Install `mtf-facts`, then lint what a branch of your Terraform module changed. On macOS or Linux, install with Homebrew:

```sh
brew install modulestf/tap/mtf-facts
```
