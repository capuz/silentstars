---
repo: "ArchAstro/aster"
name: "aster"
description: "A simple mono-repo build tool."
readmeQualityOk: true
url: "https://github.com/ArchAstro/aster"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 66
forks: 1
openIssues: 53
closedIssues: 3
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-01-23T12:43:35Z"
lastCommitAt: "2026-11-14T22:02:59Z"
lastReleaseAt: "2026-01-29T16:57:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 33
maintainers: ["calvin-archastro", "cgwald", "ark-archastro"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa0c91a6e21b4e0482cf2a423314f969e7e02aedf996a37da0b59902a42d8ac8/ArchAstro/aster"
discussionCount: 0
---

# Aster

Aster is a build orchestrator for polyglot monorepos. It discovers projects
across languages, connects their dependencies into one graph, and runs work in
the correct order while independent targets execute in parallel.

```console
aster test --all
aster build //services/api
aster affected test --base=main
```

### Go tests with shell setup

When setup exports build flags or starts fixtures with an EXIT cleanup trap,
use the explicit external-Go boundary:

```toml
[targets.test]
command = "bash -ec 'source setup.sh; aster exec-go-test -- -count=1 ./...'"
```

`affected --related` records a deferred selection in the dry-run command; it
never executes setup during planning. At runtime the owning shell performs
setup, then Aster checks buildability with `go list` and runs external `go test`
in that shell's exported environment and current directory. The shell waits
and retains its cleanup trap. Do not use `exec` if the shell must run an EXIT
trap. This boundary deliberately bypasses shell functions and aliases named
`go`; unmarked shell commands retain their existing behavior and conservative
full-suite fallback. Without a related selection the helper runs the supplied
Go…
