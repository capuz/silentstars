---
repo: "jmhodges/howsmyssl"
name: "howsmyssl"
description: "The web app running howsmyssl.com"
readmeQualityOk: true
url: "https://github.com/jmhodges/howsmyssl"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 351
forks: 58
openIssues: 15
closedIssues: 90
watchers: 15
contributors: 25
recentReleases: 0
createdAt: "2013-10-27T06:48:13Z"
lastCommitAt: "2026-10-15T08:32:46Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 95
undervaluedScore: 37
maintainers: ["dependabot[bot]", "jmhodges", "dev-cert-rotator[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ce81a5e0cc40385019eb17bb69bcc68ba7f8a512f18c081e4f6b7d48ff91c504/jmhodges/howsmyssl"
---

howsmyssl
=========

howsmyssl is the web app behind [https://howsmyssl.com](https://howsmyssl.com).

Orientation
--------
This is a Go project.

The HTML code goes in `templates/`. Templates are generated with Go's
`html/template` package. Determining the client's security is done in
client_info.go.

`go build` will generate a static binary called howsmyssl. This repo is `go
get`'able, of course.

It has a fork of Go 1.27.2's crypto/tls library at ./tls1272/ in order to expose
the client's ClientHello details (offered cipher suites, compression methods,
supported versions, curves, and signature algorithms) on the ConnectionState
struct.

It's been useful to me to use [justrun][justrun] to recompile the project
while modifying the template. Typical use is simply:

    justrun -c "go build && ./howsmyssl" -i howsmyssl . templates/

(Justrun has the benefit of controlling the lifecycle of a process, unlike
most other file watch utilities.)

[justrun]: https://github.com/jmhodges/justrun
