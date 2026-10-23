---
repo: "paketo-buildpacks/go-dist"
name: "go-dist"
description: "A Cloud Native Buildpack for Go"
readmeQualityOk: true
url: "https://github.com/paketo-buildpacks/go-dist"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [77, 23]
topics: ["cnb"]
stars: 27
forks: 17
openIssues: 2
closedIssues: 24
watchers: 5
contributors: 33
recentReleases: 0
createdAt: "2019-07-16T17:56:04Z"
lastCommitAt: "2026-10-23T09:32:21Z"
lastReleaseAt: "2019-08-07T13:34:10Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 98
undervaluedScore: 65
maintainers: ["dependabot[bot]", "paketo-bot", "ZephireNZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/785cf9c47e5c18a01e348ec82c3111e46a6549d28c8d54733159c323758470da/paketo-buildpacks/go-dist"
---

# Go Distribution Cloud Native Buildpack

The Go Distribution CNB provides the Go binary distribution that can be used to
execute [Go tooling](https://golang.org/cmd/go/). The buildpack installs the Go
binary distribution onto the `$PATH` which makes it available for subsequent
buildpacks. These buildpacks can then use that distribution to run Go tooling
including building Go application binaries. Examples of buildpacks that perform
this binary building process include the [Go Mod
CNB](https://github.com/paketo-buildpacks/go-mod) and the [Dep
CNB](https://github.com/paketo-buildpacks/dep).
The buildpack is published to DockerHub for consumption at `paketobuildpacks/go-dist`.

## Integration

The Go Distribution CNB provides Go as a dependency. Downstream buildpacks, like
[Go Mod](https://github.com/paketo-buildpacks/go-mod) or
[Dep](https://github.com/paketo-buildpacks/dep), can require the go dependency
by generating a [Build Plan
TOML](https://github.com/buildpacks/spec/blob/master/buildpack.md#build-plan-toml)
file that looks like the following:

```toml
[[requires]]

  # The name of the  dependency is "go". This value is considered
  # part of the public API for the buildpack…
