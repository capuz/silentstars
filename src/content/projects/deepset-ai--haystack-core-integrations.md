---
repo: "deepset-ai/haystack-core-integrations"
name: "haystack-core-integrations"
description: "Additional packages (components, document stores and the likes) to extend the capabilities of Haystack"
readmeQualityOk: true
url: "https://github.com/deepset-ai/haystack-core-integrations"
homepage: "https://haystack.deepset.ai"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["ai", "haystack", "llm", "mlops", "nlp"]
stars: 200
forks: 303
openIssues: 69
closedIssues: 877
watchers: 8
contributors: 209
recentReleases: 0
createdAt: "2022-08-19T08:17:34Z"
lastCommitAt: "2026-07-24T06:09:52Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["HaystackBot", "anakin87", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0a10cd23b5b579118e86f989a1d958c44db95c7cbc251cfc6ee5457accb8159/deepset-ai/haystack-core-integrations"
discussionCount: 0
---

# Haystack Core Integrations

This repository contains integrations to extend the capabilities of [Haystack](https://github.com/deepset-ai/haystack). The code in this repo is maintained by [deepset](https://www.deepset.ai), see each integration's `README` file for details around installation, usage and support.

## Quick start

You will need `hatch` to work on or create new integrations, open [this link](https://hatch.pypa.io/latest/install/#installation)
and follow the install instructions for your operating system and platform.

All the integrations are self contained, so the first step before working on one is to `cd` into the proper folder.
For example, to run the tests suite for the Chroma document store, from the root of the repo:

```sh
$ cd integrations/chroma
$ hatch run test:all
```

Hatch will take care of setting up an isolated Python environment and run the tests.

Please check out our [Contribution Guidelines](https://github.com/deepset-ai/haystack-core-integrations/blob/HEAD/CONTRIBUTING.md) for all the details.

## Inventory

| Package                                                                 | Type                                    | PyPi Package…
