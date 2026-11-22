---
repo: "lrstanley/chix"
name: "chix"
description: "helper middleware and functionality for go-chi/chi"
readmeQualityOk: true
url: "https://github.com/lrstanley/chix"
homepage: "https://pkg.go.dev/github.com/lrstanley/chix/v2"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["go", "authentication", "go-chi", "golang", "helper", "http", "middleware"]
stars: 44
forks: 1
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-05-01T07:02:01Z"
lastCommitAt: "2026-11-22T11:46:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 93
undervaluedScore: 47
maintainers: ["lrstanley"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/487468789/f974b48d-0fd9-4b3c-ae50-5b44a0b46578"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 1
---

## :link: Table of Contents

  - [Usage](#gear-usage)
  - [Features](#sparkles-features)
  - [Related Libraries](#zap-related-libraries)
  - [Example Projects](#bulb-example-projects)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :gear: Usage

```console
go get -u github.com/lrstanley/chix/v2@latest
```

## :sparkles: Features

- `http.Server` helpers (`Run`, `RunTLS`) for starting and gracefully shutting down the server, with optional background jobs alongside HTTP via `lrstanley/x/sync/scheduler`.
- Per-request `Config` middleware: API base path, JSON encode/decode hooks, request decode/validate, `slog.Logger`, error resolvers, and masking of non-public 5xx errors.
- RealIP middleware (trusted proxy chain parsing; not "trust any `X-Forwarded-For`").
- Private IP middleware for internal-only routes.
- Request ID middleware (client header or generated ID; header name configurable on `Config`).
- Rendering helpers: JSON, XML, CSV, and streaming CSV via iterators -- all support `?pretty=true` where applicable.
