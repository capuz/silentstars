---
repo: "pimalaya/ortie"
name: "ortie"
description: "CLI to manage OAuth tokens"
readmeQualityOk: true
url: "https://github.com/pimalaya/ortie"
homepage: "https://pimalaya.org"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["access-token", "cli", "pim", "refresh-token", "rust", "token", "pimalaya", "oauth"]
stars: 84
forks: 8
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2025-05-29T06:48:10Z"
lastCommitAt: "2026-11-21T13:30:59Z"
lastReleaseAt: "2026-11-21T10:53:36Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 89
undervaluedScore: 55
maintainers: ["soywod"]
openGraphImageUrl: "https://opengraph.githubassets.com/5518b0c66cdbf8c7a70b8af25aee5c224e3b340730465941fff95e8c4b678e2b/pimalaya/ortie"
fundingLinks: ["GITHUB:https://github.com/soywod", "KO_FI:https://ko-fi.com/pimalaya", "BUY_ME_A_COFFEE:https://buymeacoffee.com/pimalaya", "LIBERAPAY:https://liberapay.com/pimalaya", "THANKS_DEV:https://thanks.dev/u/gh/soywod", "CUSTOM:https://www.paypal.com/paypalme/soywod"]
discussionCount: 0
---

# 🔑 Ortie [](https://matrix.to/#/#pimalaya:matrix.org) [](https://fosstodon.org/@pimalaya) [](https://pimalaya.org/sponsor/)

CLI to manage OAuth tokens

```sh
$ ortie token inspect --json
```

```json
{
  "tokenType": "Bearer",
  "issuedAt": "2026-11-21T08:00:00Z",
  "expiresAt": "2026-11-21T09:00:00Z",
  "withRefreshToken": true,
  "scope": "https://mail.google.com/ https://www.googleapis.com/auth/calendar"
}
```

## Table of contents

- [Features](#features)
- [RFC coverage](#rfc-coverage)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Google](#google)
  - [Microsoft](#microsoft)
  - [Fastmail](#fastmail)
- [Usage](#usage)
- [Alternatives](#alternatives)
- [AI policy](https://github.com/pimalaya/.github/blob/master/AI_POLICY.md)
- [License](#license)
- [Social](#social)
- [Contributing](https://github.com/pimalaya/ortie/blob/HEAD/CONTRIBUTING.md)
- [Sponsoring](#sponsoring)
