---
repo: "tailscale/libtailscale"
name: "libtailscale"
description: "Tailscale C library"
readmeQualityOk: true
url: "https://github.com/tailscale/libtailscale"
language: "Swift"
languages: ["Swift"]
languagePcts: [47]
stars: 344
forks: 65
openIssues: 0
closedIssues: 0
watchers: 22
contributors: 40
recentReleases: 0
createdAt: "2023-02-21T01:01:40Z"
lastCommitAt: "2026-10-09T18:56:42Z"
status: "thriving"
tags: []
healthScore: 73
undervaluedScore: 20
maintainers: ["prakashrj", "raggi", "JBetchGH"]
openGraphImageUrl: "https://opengraph.githubassets.com/617b64710750c0f17185b0642fa9dadcc2b69c550df96de2aa36b893bdba930c/tailscale/libtailscale"
---

# libtailscale

libtailscale is a C library that embeds Tailscale into a process.

Use this library to compile Tailscale into your program and get
an IP address on a tailnet, entirely from userspace.

## Building

With the latest version of Go, run:

```
go build -buildmode=c-archive
```

or 

```
make archive
```

This will produce a `libtailscale.a` file. Link it into your binary,
and use the `tailscale.h` header to reference it.

It is also possible to build a shared library using

```
go build -buildmode=c-shared
```

or

```
make shared
```

## Bugs

Please file any issues about this code or the hosted service on
[the issue tracker](https://github.com/tailscale/tailscale/issues).

## License

BSD 3-Clause for this repository, see LICENSE.
