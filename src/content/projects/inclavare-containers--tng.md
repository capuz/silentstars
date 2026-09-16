---
repo: "inclavare-containers/TNG"
name: "TNG"
description: "Trusted Network Gateway: A tool for establishing secure communication tunnels in confidential computing."
readmeQualityOk: true
url: "https://github.com/inclavare-containers/TNG"
homepage: "https://inclavare-containers.github.io/TNG/"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["confidential-computing", "network", "tee"]
stars: 24
forks: 10
openIssues: 4
closedIssues: 3
watchers: 4
contributors: 8
recentReleases: 0
createdAt: "2024-04-01T01:40:39Z"
lastCommitAt: "2026-09-16T07:39:50Z"
lastReleaseAt: "2025-05-15T04:47:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 61
maintainers: ["imlk0", "zeyuan-lcl"]
openGraphImageUrl: "https://opengraph.githubassets.com/292fed5b13fa2b74565357ae82a29ac9259116bee44bb6f6b93415a4d8503150/inclavare-containers/TNG"
---

# TNG

[中文文档](https://github.com/inclavare-containers/TNG/blob/HEAD/README_zh.md)

> **Trusted Network Gateway** — a transparent gateway that establishes **end-to-end encrypted tunnels with remote attestation** for confidential computing environments. Zero code changes required.

## Quick Start

TNG offers multiple integration modes — pick the one that fits your scenario.

<details>
<summary><b>Run with Docker</b> — fastest way to try TNG</summary>

```sh
docker run -it --rm --privileged --network host --cgroupns=host \
  ghcr.io/inclavare-containers/tng:latest \
  tng launch --config-content='<your config json>'
```

No installation needed. Just provide a JSON config and TNG handles the rest.

</details>

<details>
<summary><b>tng exec</b> — zero code changes for existing apps</summary>

```sh
# Start your existing app through TNG transparently
tng exec --config-file config.json -- ./your-app
```

Your app talks to the backend as usual — TNG intercepts at the network layer and encrypts via remote attestation tunnel.

</details>

<details>
<summary><b>JavaScript SDK</b> — browser-side encrypted requests</summary>

```sh
npm install @inclavare-containers/tng
```

```js
import {…
