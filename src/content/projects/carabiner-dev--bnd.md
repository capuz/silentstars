---
repo: "carabiner-dev/bnd"
name: "bnd"
description: "Sign and package attestations in sigstore bundles"
readmeQualityOk: true
url: "https://github.com/carabiner-dev/bnd"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["attestation", "attestations", "intoto", "signature-verification", "signatures", "sigstore", "slsa", "slsa-provenance"]
stars: 10
forks: 3
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-31T04:07:01Z"
lastCommitAt: "2026-07-20T06:34:16Z"
lastReleaseAt: "2025-08-28T13:24:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 71
maintainers: ["puerco", "dependabot[bot]", "miniprow[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a0bc06dfb620198211cb3f9ad2792bd8ac23abea43057603223a7d9106a33ccf/carabiner-dev/bnd"
---

# 🥨 bnd

### A Utility to Work with Sigstore Bundles and Attestations

bnd is a utility that makes it easy to work with attestations and sigstore bundles.
It can create new bundles by "binding" an attestation and signing it. It can verify
existing bundles, extract data from them, inspect their contents and much more.

## Features

If you work with in-toto attestations, bnd is the perfect multitool for your daily
chores allowing you to:

- Sign in-toto statements or create them from bare predicates.
- Verify attestations wrapped in signed sigstore bundles.
- Pack and unpack attestations into/from linear json (jsonl) files.
- Push attestations to storage backends.
- Read, export and query attestation storage backends.
- List attestations with a compact summary of predicate types, signer identities and subjects.
- Inspect .jsonl files to view their contents.
- Attest data from files in git commits.
- Extract statements and predicates from sigstore bundles.
- Configure per-repository defaults via `.supplychain.yaml` (keys, collector repositories).

More information about each function can be found on each subcommand help screen.

## Installation

### Homebrew

`bnd` is available…
