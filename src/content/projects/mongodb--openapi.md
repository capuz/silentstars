---
repo: "mongodb/openapi"
name: "openapi"
description: "MongoDB OpenAPI specs"
readmeQualityOk: true
url: "https://github.com/mongodb/openapi"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [53, 45]
stars: 17
forks: 18
openIssues: 0
closedIssues: 175
watchers: 9
contributors: 62
recentReleases: 0
createdAt: "2024-02-20T15:37:09Z"
lastCommitAt: "2026-07-28T14:54:32Z"
lastReleaseAt: "2024-08-09T17:31:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 100
undervaluedScore: 74
maintainers: ["github-actions[bot]", "dependabot[bot]", "mongodb-sage-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/be41b71d3ab0923571ebbd5cad4e7f41b14383c38010e485a385bae4e0b5f782/mongodb/openapi"
---

# MongoDB Atlas Administration API OpenAPI Specification 3.0

This repository hosts the OpenAPI specification for the [Atlas Administration API (v2.0)](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/v2/).

## Tools
This repository also contains tools for validating, generating, and distributing OpenAPI specifications.
### FOASCLI
The [tools/cli](https://github.com/mongodb/openapi/blob/HEAD/tools/cli) directory hosts a Go-based CLI tool used to merge multiple OpenAPI specifications into a single federated specification, which is used for the Admin APIs. 

For more details, please refer to the [CLI’s README.md](https://github.com/mongodb/openapi/blob/HEAD/tools/cli/README.md).

### Spectral
The [tools/spectral](https://github.com/mongodb/openapi/blob/HEAD/tools/spectral) directory contains [Spectral](https://github.com/stoplightio/spectral) rule definitions.
These rules are used to validate that the generated OpenAPI specifications comply with MongoDB's [Improvement Proposal for APIs](https://mongodb.github.io/ipa/) (IPA).

For more details, please refer to the [Spectral’s README.md](https://github.com/mongodb/openapi/blob/HEAD/tools/spectral/README.md).

###…
