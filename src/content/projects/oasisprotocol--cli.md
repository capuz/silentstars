---
repo: "oasisprotocol/cli"
name: "cli"
description: "Official CLI for the Oasis Network."
readmeQualityOk: true
url: "https://github.com/oasisprotocol/cli"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["blockchain", "cli", "crypto", "ledger", "non-custodial", "oasis", "official", "rose", "staking", "terminal"]
stars: 80
forks: 23
openIssues: 44
closedIssues: 119
watchers: 14
contributors: 19
recentReleases: 0
createdAt: "2022-09-16T16:05:09Z"
lastCommitAt: "2026-10-15T08:31:45Z"
lastReleaseAt: "2024-03-14T13:59:08Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["matevz", "peternose", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8726fed59495fe4ecefe748fce347bf730ff4355ac019c0ead8e48e42ecd3db1/oasisprotocol/cli"
---

# Oasis CLI

[github-ci-tests-badge]: https://github.com/oasisprotocol/cli/workflows/ci-tests/badge.svg
[github-ci-tests-link]: https://github.com/oasisprotocol/cli/actions?query=workflow:ci-tests+branch:master
[github-ci-lint-badge]: https://github.com/oasisprotocol/cli/workflows/ci-lint/badge.svg
[github-ci-lint-link]: https://github.com/oasisprotocol/cli/actions?query=workflow:ci-lint+branch:master

This is the official command-line interface (CLI) for interacting with the
[Oasis Network], both the consensus layer and ParaTimes built with the
[Oasis Runtime SDK].

[Oasis Network]: https://docs.oasis.io/
[Oasis Runtime SDK]:
  https://github.com/oasisprotocol/oasis-sdk/tree/main/runtime-sdk

## Installation

For multiple Oasis CLI installation methods, please
refer to the [Setup Guide](https://github.com/oasisprotocol/cli/blob/HEAD/docs/setup.mdx).

## Building

To build the CLI, run the following:

```bash
make
```

This will generate a binary called `oasis` which you are free to put somewhere
in your `$PATH`.

*NOTE: The rest of the README assumes the `oasis` binary is somewhere in your
`$PATH`.*

## Quickstart

You can interact with the Oasis CLI by invoking it from the…
