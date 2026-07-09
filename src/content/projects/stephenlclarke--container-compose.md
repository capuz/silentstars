---
repo: "stephenlclarke/container-compose"
name: "container-compose"
description: "Docker Compose plugin for Apple's container CLI with Homebrew tap."
readmeQualityOk: true
url: "https://github.com/stephenlclarke/container-compose"
language: "Swift"
languages: ["Swift"]
languagePcts: [79]
topics: ["apple-container", "compose", "containers", "docker-compose", "swift", "compose-go"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-15T21:32:17Z"
lastCommitAt: "2026-07-09T20:45:16Z"
lastReleaseAt: "2026-07-08T17:37:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 47
maintainers: ["stephenlclarke"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6d68a0e3f5efafbafa8e3b11058d4e38d4b0314f955530d5191aec9598db28c/stephenlclarke/container-compose"
discussionCount: 2
---

# container-compose

`container-compose` is a standalone plugin that provides Docker Compose style
workflows for Apple's [`container`](https://github.com/apple/container) CLI
where the supported Compose surface maps to available runtime primitives.

The first implementation target is local-development Compose v2 compatibility
where [`container`](https://github.com/apple/container) has matching runtime
primitives. Compose file normalization uses `compose-go`, with Swift handling
runtime orchestration.

The CLI accepts the Docker Compose 5.2.0 command and option surface, including
help output. Help color-codes command, subcommand, and option support status:
green for supported, orange for partially supported, and red for not supported;
use `--ansi never` for plain output. Commands or option modes that do not yet
have backing `apple/container` functionality fail with an explicit
`unsupported compose feature` message.

The top-level help output is the quickest support overview. Run
`container compose COMMAND --help` for command-specific option support.

The root `--all-resources` option is supported for normalized `config` and `convert` output: selected-service renderings keep the…
