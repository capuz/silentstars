---
repo: "paketo-buildpacks/npm-install"
name: "npm-install"
description: "A Cloud Native Buildpack for npm"
readmeQualityOk: true
url: "https://github.com/paketo-buildpacks/npm-install"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["cnb"]
stars: 11
forks: 22
openIssues: 9
closedIssues: 56
watchers: 12
contributors: 35
recentReleases: 0
createdAt: "2018-09-28T22:09:10Z"
lastCommitAt: "2026-07-09T20:44:30Z"
lastReleaseAt: "2019-07-09T16:01:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 96
undervaluedScore: 74
maintainers: ["dependabot[bot]", "paketo-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a3e2832c0efec2ceba96767cceaaa8c4c0b79d9ca9e587f72e22f01fa967f08/paketo-buildpacks/npm-install"
---

# Paketo Buildpack for NPM Install

The NPM Install CNB makes use of the [`npm`](https://www.npmjs.com/) tooling
installed within the [Node Engine CNB](https://github.com/paketo-buildpacks/node-engine)
to manage application dependencies.

## Integration

The NPM Install CNB provides `node_modules` as a dependency. Downstream
buildpacks can require the `node_modules` dependency by generating a [Build
Plan TOML](https://github.com/buildpacks/spec/blob/master/buildpack.md#build-plan-toml)
file that looks like the following:

```toml
[[requires]]

  # The name of the NPM Install dependency is "node_modules". This value is
  # considered part of the public API for the buildpack and will not change
  # without a plan for deprecation.
  name = "node_modules"

  # Note: The version field is unsupported as there is no version for a set of
  # npm.

  # The NPM Install buildpack supports some non-required metadata options.
  [requires.metadata]

    # Setting the build flag to true will ensure that the node modules are
    # available for subsequent buildpacks during their build phase.
    # If you are writing a buildpack that needs to run a node module during its build
    # process, this…
