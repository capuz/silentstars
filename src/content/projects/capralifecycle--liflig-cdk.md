---
repo: "capralifecycle/liflig-cdk"
name: "liflig-cdk"
description: "AWS CDK construct library for internal use in Liflig."
readmeQualityOk: true
url: "https://github.com/capralifecycle/liflig-cdk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["cdk", "aws", "typescript"]
stars: 5
forks: 2
openIssues: 1
closedIssues: 2
watchers: 12
contributors: 15
recentReleases: 0
createdAt: "2020-05-11T23:04:56Z"
lastCommitAt: "2026-10-25T22:20:18Z"
lastReleaseAt: "2020-06-12T23:14:06Z"
status: "watched"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 93
undervaluedScore: 67
maintainers: ["renovate[bot]", "joakimen", "sirius"]
openGraphImageUrl: "https://opengraph.githubassets.com/41f5b9483694eecd5ab016087898cbee021c0727a87bb20f787d39799b30360a/capralifecycle/liflig-cdk"
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
$ make verify  # verify project, check types and lint, ensure formatting and snapshots are up-to-date

# Misc commands
$ make lint      # lint code
$ make typecheck # type check all of src/, including tests
$ make fmt       # reformat code
$ make snapshots # regenerate snapshots
```

For a complete list of commands, refer to the `Makefile`.

## Testing library changes before releasing

### Alternative 1: Install…
