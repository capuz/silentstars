---
repo: "mcandre/rockhopper"
name: "rockhopper"
description: "metapackage generator"
readmeQualityOk: true
url: "https://github.com/mcandre/rockhopper"
language: "Shell"
languages: ["Shell"]
languagePcts: [56]
stars: 14
forks: 0
openIssues: 25
closedIssues: 80
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-02T23:37:49Z"
lastCommitAt: "2026-11-14T22:04:29Z"
lastReleaseAt: "2026-02-26T09:24:34Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 88
undervaluedScore: 54
maintainers: ["mcandre"]
openGraphImageUrl: "https://opengraph.githubassets.com/405fdc5e107fcc1e11fe424ef11b6a43f7d70b31822ff30ab13e542deb170e71/mcandre/rockhopper"
---

# rockhopper: metapackage generator

```text
  o<  gak! gak!
-/)
 ^^
```

# ABOUT

rockhopper builds packages for a wide variety of platforms.

BYOB (Bring Your Own Binaries).

# EXAMPLES

```console
% cd examples/go

% rockhopper

% tree .rockhopper/artifacts
.rockhopper/artifacts
├── alpine-linux
│   ├── raygun-0.0.1-r1.aarch64.apk
│   └── raygun-0.0.1-r1.x86_64.apk
├── appimage
│   ├── raygun-0.0.1-1-aarch64.AppImage
│   └── raygun-0.0.1-1-x86_64.AppImage
├── fedora
│   ├── raygun-0.0.1-1.aarch64.rpm
│   └── raygun-0.0.1-1.x86_64.rpm
...
```

rockhopper is programming language agnostic. For more programming language samples, see [examples](https://github.com/mcandre/rockhopper/blob/HEAD/examples).

# DOWNLOAD

```sh
cargo install rockhopper
```

## Prerequisites

* [cargo](https://doc.rust-lang.org/cargo/)
* [Docker](https://www.docker.com/)

## Postinstall

Register `~/.cargo/bin` to `PATH` environment variable.

For details on tuning rockhopper, see [CONFIGURATION](https://github.com/mcandre/rockhopper/blob/HEAD/CONFIGURATION.md).

For details on building from source, see [DEVELOPMENT](https://github.com/mcandre/rockhopper/blob/HEAD/DEVELOPMENT.md).

# DOCKER IMAGES…
