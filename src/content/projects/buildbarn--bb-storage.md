---
repo: "buildbarn/bb-storage"
name: "bb-storage"
description: "Storage daemon, capable of storing data for the Remote Execution protocol"
readmeQualityOk: true
url: "https://github.com/buildbarn/bb-storage"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 194
forks: 144
openIssues: 15
closedIssues: 66
watchers: 12
contributors: 60
recentReleases: 0
createdAt: "2019-02-03T15:34:20Z"
lastCommitAt: "2026-10-09T18:55:44Z"
lastReleaseAt: "2026-03-16T20:13:22Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 44
maintainers: ["moroten", "EdSchouten", "Links2004"]
openGraphImageUrl: "https://opengraph.githubassets.com/65e3b9b20d66ecbc89cfc01a1c871e7987493cb3ce4662417ea5ac357308d633/buildbarn/bb-storage"
---

# The Buildbarn storage daemon [](https://github.com/buildbarn/bb-storage/actions) [](https://pkg.go.dev/github.com/buildbarn/bb-storage) [](https://goreportcard.com/report/github.com/buildbarn/bb-storage)

Translations: [Chinese](https://github.com/buildbarn/bb-storage/blob/main/doc/zh_CN/README.md)

The Buildbarn project provides an implementation of the
[Remote Execution protocol](https://github.com/bazelbuild/remote-apis).
This protocol is used by tools such as [Bazel](https://bazel.build/),
[BuildStream](https://wiki.gnome.org/Projects/BuildStream/) and
[recc](https://gitlab.com/bloomberg/recc) to cache and optionally
execute build actions remotely.

This repository provides Buildbarn's storage daemon. This daemon can be
used to build a scalable build cache. On its own, it cannot be used to
execute build actions remotely. When using only this storage daemon,
build actions will still be executed on the local system. This daemon
does, however, facilitate remote execution by allowing execution
requests to be forwarded to a separate remote execution service.

This storage daemon can be configured to use a whole series of backends.
Examples include a backend that forwards traffic…
