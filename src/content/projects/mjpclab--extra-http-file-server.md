---
repo: "mjpclab/extra-http-file-server"
name: "extra-http-file-server"
description: "Simple static web server. Based on Go HTTP File Server(https://github.com/mjpclab/go-http-file-server)."
readmeQualityOk: true
url: "https://github.com/mjpclab/extra-http-file-server"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["cli", "http-server", "static-server", "go"]
stars: 17
forks: 0
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2022-09-03T15:07:43Z"
lastCommitAt: "2026-08-28T15:34:30Z"
lastReleaseAt: "2023-08-05T14:36:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 65
undervaluedScore: 36
maintainers: ["marjune163"]
openGraphImageUrl: "https://opengraph.githubassets.com/10989d1790212f4b70213f5ae5b76de5fc1f7ee11f91c7a3b91e135966720bd5/mjpclab/extra-http-file-server"
---

# Extra HTTP File Server

Extra HTTP File Server is based on Go HTTP File Server, with extra features.
It provides frequently used features for a simple static website.

# Different to Go HTTP File Server

## Code base

Based on Go HTTP File Server's main branch, dropped support for legacy Go version.
This means it is impossible to use legacy Go version to compile binaries for legacy systems, e.g. Windows XP.

## Changed behavior
For PKI validation URL `/.well-known/`,
will skip redirecting from http: to https: even `--to-https` is specified.

## New options

```
--ip-allow <IP>|<network/prefix> ...
--ip-allow-file <file> ...
    Only allow client access from specific IP or network.
    Unmatched client IP will be denied.

--ip-deny <IP>|<network/prefix> ...
--ip-deny-file <file> ...
    Only denly client access from specific IP or network.
    Unmatched client IP will be allowed to access.

--rewrite-host <separator><match><separator><replace>
    Transform a request host+URL (in the form of "host[:port]/request/path?param=value")
    into another URL if it is matched by regular expression `match`.

    The rewrite target is specified by `replace`.
    Use `$0` to represent the…
