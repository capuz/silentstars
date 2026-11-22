---
repo: "lrstanley/geoip"
name: "geoip"
description: ":globe_with_meridians: Geolocation API service -- Run it yourself! | alternative to freegeoip.net"
readmeQualityOk: true
url: "https://github.com/lrstanley/geoip"
homepage: "https://geoip.pw"
language: "TypeScript"
languages: ["TypeScript", "Go"]
languagePcts: [61, 34]
topics: ["maxmind-geoip", "geoip", "api", "go", "docker", "cli", "golang"]
stars: 176
forks: 13
openIssues: 2
closedIssues: 3
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2015-03-08T08:38:42Z"
lastCommitAt: "2026-11-22T11:46:33Z"
lastReleaseAt: "2020-08-30T06:19:15Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 72
undervaluedScore: 24
maintainers: ["lrstanley"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/31843404/bea6571f-c7f2-44d4-b0eb-976f7e5ec852"
fundingLinks: ["GITHUB:https://github.com/lrstanley"]
discussionCount: 1
---

## :link: Table of Contents

  - [Installation](#computer-installation)
    - [Container Images (ghcr)](#whale-container-images-ghcr)
    - [Build From Source](#toolbox-build-from-source)
  - [Usage](#gear-usage)
    - [Example](#example)
  - [Support &amp; Assistance](#raising_hand_man-support--assistance)
  - [Contributing](#handshake-contributing)
  - [License](#balance_scale-license)

## :computer: Installation

Check out the [releases](https://github.com/lrstanley/geoip/releases)
page for prebuilt versions.

### :whale: Container Images (ghcr)

```console
$ docker run -it --rm -p 8080:8080 --env-file .env -v $PWD/:/data ghcr.io/lrstanley/geoip:latest
$ curl -I http://localhost:8080
HTTP/1.1 200 OK
Content-Type: text/html
Date: Thu, 06 Aug 2020 00:55:21 GMT
```

### :toolbox: Build From Source

Dependencies (to build from source only):

- [Go](https://golang.org/doc/install) (latest)
- [Bun](https://bun.sh/docs/installation) (latest)

Setup:

```console
git clone <repo>
cd geoip
make
./geoip --help
```

## :gear: Usage

Take a look at the [CLI usage options here](https://github.com/lrstanley/geoip/blob/HEAD/USAGE.md).
