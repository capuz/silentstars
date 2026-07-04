---
repo: "capralifecycle/liflig-cdk"
name: "liflig-cdk"
description: "AWS CDK construct library for internal use in Liflig."
readmeQualityOk: true
url: "https://github.com/capralifecycle/liflig-cdk"
homepage: "https://capralifecycle.github.io/liflig-cdk/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["cdk"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 2
watchers: 12
contributors: 35
recentReleases: 0
createdAt: "2020-05-11T23:04:56Z"
lastCommitAt: "2026-07-04T19:09:41Z"
lastReleaseAt: "2020-06-12T23:14:06Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 93
undervaluedScore: 71
maintainers: ["renovate[bot]", "joakimen"]
openGraphImageUrl: "https://opengraph.githubassets.com/8c8d1861a95bd692905aa56c89580b032b9ef78a969605cd756299d7cb8aa1ca/capralifecycle/liflig-cdk"
---

# Liflig CDK

This is a collection of reusable constructs and patterns for
CDK setups, for use within Liflig.

## State of repository and package

We do not expect others to depend on this, and as such will not be following semantic versioning strictly.
There will be breaking changes across both minor and patch releases, as we will be coordinating changes internally.

CDK has some major issues for 3rd party library authors which
are not yet resolved. Some relevant information:

- <https://github.com/aws/aws-cdk-rfcs/blob/master/text/0006-monolothic-packaging.md>

## Development

Project commands are defined using `Make`. Examples:

```sh
# Primary commands
$ make         # runs '$ make build'
$ make build   # build project, apply lint and formatting fixes, update snapshots
$ make verify  # verify project, ensure lint, formatting and snapshots are up-to-date

# Misc commands
$ make lint      # lint code
$ make fmt       # reformat code
$ make snapshots # regenerate snapshots
```

For a complete list of commands, refer to the `Makefile`.

## Testing library changes before releasing

### Alternative 1: Install liflig-cdk from tarball

1. Assemble artifact, which emits a tarball…
