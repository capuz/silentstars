---
repo: "g31s/pdocker"
name: "pdocker"
description: "Pdocker is a simple terminal UI to maintain and manage personal projects in Docker."
readmeQualityOk: true
url: "https://github.com/g31s/pdocker"
language: "Shell"
languages: ["Shell"]
languagePcts: [87]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2019-07-12T08:23:51Z"
lastCommitAt: "2026-09-07T08:34:42Z"
lastReleaseAt: "2021-02-27T06:10:39Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 40
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/dd19fbb2c0494ce472b18dc7738aaf2e16b315ff6ace1473dca56617e99c4fc7/g31s/pdocker"
---

# Pdocker v3.0.0

Pdocker keeps one throwaway Docker container per personal project — a sandbox
you can open in a second, break freely, and recreate without ceremony.

It is deliberately a single Bash script. If you outgrow it, you want Docker
Compose or Dev Containers, and `pdocker` is easy to walk away from.

## Quick start

```
curl -fsSL https://raw.githubusercontent.com/g31s/pdocker/master/bootstrap.sh | bash -s -- --build
```

Then, from a project you already have:

```
cd ~/Projects/myapi          # a directory with a go.mod in it
pdocker new myapi -t go -v . -p 8080:8080
```

That builds a Go toolchain image the first time, mounts the directory at
`/workspace`, publishes port 8080, and drops you in a shell with `go` on the
PATH. Later, `pdocker myapi` reopens it.

Drop the `-t go` and pdocker notices the `go.mod` and *offers* the Go template
instead — handy in an existing repo, but the flag is what makes it repeatable.

## How it works

Every project has a **spec** — a plain file under `~/.pdocker/projects/`:

```
IMAGE=pdocker:go
VOLUME=/Users/you/Projects/myapi
PORTS=8080:8080,5432:5432
TEMPLATE=go
```

Containers are always (re)created from that spec and a base image,…
