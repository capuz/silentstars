---
repo: "capell-app/capell"
name: "capell"
description: "Extensible Laravel CMS built on Filament, with multi-site and multilingual content management."
readmeQualityOk: true
url: "https://github.com/capell-app/capell"
homepage: "https://capell.app"
language: "PHP"
languages: ["PHP"]
languagePcts: [92]
topics: ["capell", "capell-cms", "cms", "filament", "laravel", "livewire", "multi-site", "multilingual", "php", "multisite"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-07-11T11:11:40Z"
lastCommitAt: "2026-11-19T04:48:47Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 58
maintainers: ["howdu"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1297372652/4ced472a-f37d-4d13-a58b-57fea2bd44ef"
fundingLinks: ["GITHUB:https://github.com/howdu"]
discussionCount: 0
---

# Capell CMS

**A Laravel CMS you extend, never fork.**

Capell is an open-source Laravel CMS, built from the ground up on Filament. It covers what you expect from a CMS, and adds the structure that keeps a long-lived site maintainable:

- **Separate layers, each with one job.** Core holds the content model. Admin is the Filament workspace for editors. Frontend handles public routing, themes and delivery. Editing state never reaches public pages, and you render them with Blade, Livewire, Inertia or your own stack.
- **Extension points instead of patches.** Packages add fields, widgets, themes, workflows and integrations through typed registries and stable contracts. You never edit Core to add a feature.
- **Verified extensions you can trust.** Each verified extension shows its migrations, data access and removal path before you install it.
- **A planned upgrade process.** Upgrades run through Capell's own commands, with logged steps, health checks and declared rollback rules. Public API baselines are tracked between releases, and you can rehearse an upgrade on a copy of your site before you apply it.
