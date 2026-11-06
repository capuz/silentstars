---
repo: "tada5hi/validup"
name: "validup"
description: "TypeScript validation library, compose validators and nested containers onto object paths, with integrations for Zod, Standard Schema, validator.js, and Vue 3."
readmeQualityOk: true
url: "https://github.com/tada5hi/validup"
homepage: "http://validup.tada5hi.net/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["esm", "form-validation", "monorepo", "nodejs", "schema-validation", "standard-schema", "typescript", "validation", "validator", "vue"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-07-10T11:55:16Z"
lastCommitAt: "2026-11-06T12:17:06Z"
lastReleaseAt: "2024-07-25T22:12:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 76
maintainers: ["tada5hi", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b31dc77172bb5d1133a276f56f9e6fc2f9aa05ce324b19ca2f7289afe9bbad7/tada5hi/validup"
---

Mount validators and nested containers onto object paths, run them in groups, collect structured issues, and bridge to your favorite validator (zod, validator.js) or framework (Vue), all without decorators or schema DSLs.

## Core Philosophy

Most validation libraries make you choose between two extremes: a schema DSL that bakes in every rule, or a hand-rolled function that tangles parsing, validation, and transformation. Validup picks a different point: **mount any validator function onto any path of any input, compose containers, and let the runtime handle path expansion, error aggregation, and group filtering.** You bring the validators (or wrap an existing library via an integration package); validup orchestrates them.

**Table of Contents**

- [Packages](#packages)
- [Installation](#installation)
- [At a Glance](#at-a-glance)
- [Vue Forms](#vue-forms)
- [Why Validup](#why-validup)
- [Repository Layout](#repository-layout)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Packages

This monorepo publishes one core library and four integration packages:

| Package                                                      | Version…
