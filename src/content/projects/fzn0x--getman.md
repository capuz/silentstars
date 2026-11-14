---
repo: "fzn0x/getman"
name: "getman"
description: "Getman - An open-source Postman alternative, written in Rust. Requests are YAML files in your repository, sent from a desktop app, a browser, a terminal or CI."
readmeQualityOk: true
url: "https://github.com/fzn0x/getman"
homepage: "https://fzn0x.github.io/getman/"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["api-client", "cli", "local-first", "rust", "tui", "desktop-app", "grpc", "http3", "offline-first", "openapi"]
stars: 28
forks: 8
openIssues: 0
closedIssues: 3
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-10-14T08:17:10Z"
lastCommitAt: "2026-11-14T10:43:03Z"
lastReleaseAt: "2026-11-14T10:12:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 99
undervaluedScore: 54
maintainers: ["fzn0x", "Urdemonlord"]
openGraphImageUrl: "https://opengraph.githubassets.com/53fb1673dd7cad533f28f3d4c4f8dd37d5aeb58183fbd6cf142a9c7612e431e4/fzn0x/getman"
---

An open-source Postman alternative, written in Rust.<br>
  Requests are YAML files in your repository, sent from a desktop app, a browser, a terminal or CI.

---

Getman is an API client for HTTP/1.1, HTTP/2, HTTP/3, gRPC, WebSocket,
Server-Sent Events and Socket.IO. A workspace is a folder of YAML files,
one per request, that you commit and review with the code it tests. One
engine runs behind the desktop app, the browser UI, the terminal UI and
`getman run`, so a request behaves the same in each. It imports Postman
collections and runs `pm` scripts.

[Install](#install) · [Documentation](https://fzn0x.github.io/getman/) ·
[Command line](https://github.com/fzn0x/getman/blob/HEAD/docs/cli.md) · [Moving from Postman](https://github.com/fzn0x/getman/blob/HEAD/docs/why-getman.md#moving-over) ·
[Changelog](https://github.com/fzn0x/getman/blob/HEAD/CHANGELOG.md) · [Bahasa Indonesia](https://github.com/fzn0x/getman/blob/HEAD/README-ID.md)

## Quick start

```sh
mkdir my-api && cd my-api
getman init --example                         # getman.yaml, 2 environments, 3 requests
getman send posts/get-a-post.yaml -e public   # send one request, print the body
getman run -e public…
