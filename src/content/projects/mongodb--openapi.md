---
repo: "mongodb/openapi"
name: "openapi"
description: "MongoDB OpenAPI specs"
readmeQualityOk: true
url: "https://github.com/mongodb/openapi"
language: "JavaScript"
languages: ["JavaScript", "Go"]
languagePcts: [58, 40]
stars: 19
forks: 19
openIssues: 0
closedIssues: 203
watchers: 9
contributors: 45
recentReleases: 0
createdAt: "2024-02-20T15:37:09Z"
lastCommitAt: "2026-11-17T09:44:00Z"
lastReleaseAt: "2024-08-09T17:31:18Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 99
undervaluedScore: 73
maintainers: ["github-actions[bot]", "dependabot[bot]", "lovisaberggren"]
openGraphImageUrl: "https://opengraph.githubassets.com/e548cd7857d5b0bf54e366b37ed396287f701b352c1c9b3777ec517ad6c60da5/mongodb/openapi"
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
