---
repo: "mvrahden/go-test"
name: "go-test"
description: "Go test suite framework – BDD vocabulary, lifecycle hooks, fixtures, fuzzing, benchmarking, snapshots. Zero reflection, zero runtime deps –  powered by code generation."
readmeQualityOk: true
url: "https://github.com/mvrahden/go-test"
homepage: "https://mvrahden.github.io/go-test/"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["golang", "bdd", "code-generation", "tdd", "testing-framework", "assertions", "bdd-framework", "codegen", "go-testing", "golang-testing"]
stars: 130
forks: 1
openIssues: 0
closedIssues: 2
watchers: 6
contributors: 1
recentReleases: 0
createdAt: "2024-01-02T10:44:47Z"
lastCommitAt: "2026-10-29T21:24:01Z"
lastReleaseAt: "2026-05-06T20:58:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["mvrahden", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2ad760111b6c148c7d6f40d96bc6edd08556f619530b0934882e1baaff2d96d/mvrahden/go-test"
---

# gotest

Specification-driven test suites for Go with isolation and parallelism as first-class citizens.

Write test suites as Go structs.
`gotest` generates the lifecycle wiring, `t.Run` nesting, and process isolation that you'd write by hand.
What runs is standard `go test`.
What you read back is a behavioral specification.

No third-party runtime dependencies. No reflection in discovery or registration. Pure code generation.

## Install

Add gotest to your module as a Go tool. Its version and its Go toolchain then follow your `go.mod`:

```bash
go get -tool github.com/mvrahden/go-test/cmd/gotest@latest
go tool gotest ./...
```

`go get -tool` pins the CLI and the `pkg/gotest` runtime to the same release, and `go tool` rebuilds the CLI with your module's Go. Upgrading is the same command again. One caution for both: `@latest` raises your module's `go` line when the newest release needs a newer Go (`go get` prints `upgraded go …`). To keep your Go version, name the newest release whose go line fits instead; `go list -m -f '{{.GoVersion}}' github.com/mvrahden/go-test@<version>` prints a release's. In a module that already requires gotest, name that version in place of `@latest`…
