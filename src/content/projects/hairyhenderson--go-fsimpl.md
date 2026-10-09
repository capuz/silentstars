---
repo: "hairyhenderson/go-fsimpl"
name: "go-fsimpl"
description: "Go io/fs.FS filesystem implementations for various URL schemes"
readmeQualityOk: true
url: "https://github.com/hairyhenderson/go-fsimpl"
homepage: "https://pkg.go.dev/github.com/hairyhenderson/go-fsimpl"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "golang", "filesystem", "git", "vault", "consul", "s3", "gcs", "url", "iofs"]
stars: 327
forks: 28
openIssues: 1
closedIssues: 27
watchers: 1
contributors: 13
recentReleases: 0
createdAt: "2021-04-13T16:15:36Z"
lastCommitAt: "2026-10-09T18:57:06Z"
lastReleaseAt: "2024-11-24T22:02:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 40
maintainers: ["renovate[bot]", "hairyhenderson-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2069f7819ce91bb9f966d9861d6c3e70908acd744431a13b862f51b46683a767/hairyhenderson/go-fsimpl"
fundingLinks: ["GITHUB:https://github.com/hairyhenderson"]
discussionCount: 1
---

# hairyhenderson/go-fsimpl

This module contains a collection of Go _filesystem implementations_ that can
be discovered dynamically by URL scheme.

These filesystems implement the [`fs.FS`](https://pkg.go.dev/io/fs#FS) interface
[introduced in Go 1.16](https://go.dev/doc/go1.16#fs). This means that currently all implementations are
read-only, however this may change in the future (see
[golang/go#45757](https://github.com/golang/go/issues/45757) for progress).

Most implementations implement the [`fs.ReadDirFS`](https://pkg.go.dev/io/fs#ReadDirFS)
interface, though the `httpfs` filesystem does not.

Some extensions are available to help add specific functionality to certain
filesystems:
- `WithContextFS` - injects a context into a filesystem, for propagating
	cancellation in filesystems that support it.
- `WithHeaderFS` - sets the `http.Header` for all HTTP requests used by the
	filesystem. This can be useful for authentication, or for requesting
	specific content types.
- `WithHTTPClientFS` - sets the `*http.Client` for all HTTP requests to be made
	with.

Many of the filesystem packages also have their own extensions.

This module also provides `ContentType`, an extension to the…
