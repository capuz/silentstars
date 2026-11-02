---
repo: "omnipin/hoverfly"
name: "hoverfly"
description: "Experimental Swarm light client."
readmeQualityOk: true
url: "https://github.com/omnipin/hoverfly"
homepage: "https://hoverfly.bzz.link"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["ethereum", "ethswarm", "swarm"]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-09T22:28:52Z"
lastCommitAt: "2026-11-02T11:35:09Z"
lastReleaseAt: "2026-07-01T14:28:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["github-actions[bot]", "v1rtl"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1234214614/7cc6849d-a937-477d-a01a-8b5f6870b02a"
---

# hoverfly

Experimental [Swarm][swarm] light client. Upload and download files to decentralized storage natively and in a browser.

[swarm]: https://www.ethswarm.org/

## Features

- **Light node functionality.** End-to-end content upload and download.
- **Browser-friendly.** upload files from your browser using the [demo](https://hoverfly.bzz.link) and integrate into your web app with [`@omnipin/hoverfly`](https://www.npmjs.com/package/@omnipin/hoverfly) .
- **Collection support.** Upload, download and list content-addressable tarballs.
- **Erasure coding.** Reed–Solomon redundancy on both upload and download.
- **Onchain postage batch creation.** Buy storage straight from the CLI.
- **Multiple modes** Static commands for simplicity, daemon mode for warm connection pool, pusher nodes for splitting content signing and upload.
- **Cross-platform.** Compiles to WebAssembly, Linux x86/ARM, MacOS and FreeBSD.
- **Small size.** 5MB gzipped, 14MB unpacked x86 Linux binary.
- **CI-friendly.** ~400-500KB/s uploads in GitHub Actions.

## Install

```bash
curl -fsSL https://raw.githubusercontent.com/omnipin/hoverfly/main/install.sh | sh
```

### Specific version

```sh
curl -fsSL…
