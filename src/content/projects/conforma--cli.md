---
repo: "conforma/cli"
name: "cli"
description: "Conforma verifies that software supply chain policies are met."
readmeQualityOk: true
url: "https://github.com/conforma/cli"
homepage: "https://conforma.dev/docs/cli"
language: "Go"
languages: ["Go"]
languagePcts: [87]
topics: ["hacktoberfest"]
stars: 43
forks: 61
openIssues: 30
closedIssues: 89
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2022-05-31T09:01:15Z"
lastCommitAt: "2026-07-28T14:53:47Z"
lastReleaseAt: "2024-05-10T21:22:21Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 94
undervaluedScore: 65
maintainers: ["simonbaird", "joejstuart", "jsmid1"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a36220c3fbc4c599dd1eecf94da74cba273b167977c6d01d8868b91e42e1714/conforma/cli"
discussionCount: 0
---

# `ec` a command line client for verifying artifacts and evaluating policies

The `ec` tool is used to evaluate Conforma policies for Software
Supply Chain. Various sub-commands can be used to assert facts about an artifact
such as:
  * Validating container image signature
  * Validating container image provenance
  * Evaluating [policies][pol] over the container image provenance
  * Fetching artifact authorization

Consult the [documentation][docs] for available sub-commands, descriptions and
examples of use.

## Installation

Install a pre-built binary from the [latest release](https://github.com/conforma/cli/releases),
or build from source:

```bash
make build        # builds dist/ec for your platform
```

See the [documentation][docs] for usage examples.

## Building

Run `make build` from the root directory and use the `dist/ec` executable, or
run `make dist` to build for all supported architectures.

## Testing

Run `make test` to run the unit tests, and `E2E_INSTRUMENTATION=true make acceptance` to run the
acceptance tests.

The purpose of the `E2E_INSTRUMENTATION=true` environment variable is to pass
extra flags to the build command. This instruments the resulting binary,…
