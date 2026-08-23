---
repo: "manaelproxy/manael"
name: "manael"
description: "Manael is a simple HTTP proxy for processing images."
readmeQualityOk: true
url: "https://github.com/manaelproxy/manael"
homepage: "https://manael.org/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["go", "webp", "proxy", "manael"]
stars: 35
forks: 3
openIssues: 2
closedIssues: 112
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-11-22T09:11:55Z"
lastCommitAt: "2026-08-23T04:11:10Z"
lastReleaseAt: "2019-09-08T06:43:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 61
maintainers: ["renovate[bot]", "ykzts"]
openGraphImageUrl: "https://opengraph.githubassets.com/2fe0cf1ff39d5e614b8698d2b27d3cd7ccd3e4208decb945c9bd4445e504e5b1/manaelproxy/manael"
fundingLinks: ["GITHUB:https://github.com/ykzts", "CUSTOM:https://www.paypal.me/ykzts", "PATREON:https://patreon.com/ykzts"]
---

# Manael

Manael is a simple HTTP proxy for processing images.

## Installation

- [Download latest binary](https://github.com/manaelproxy/manael/releases/latest)

### Build from source

Building from source requires [libvips](https://www.libvips.org/) development headers in addition to Go and Git.

On Debian/Ubuntu:

```console
sudo apt-get install -y libvips-dev
```

On macOS (Homebrew):

```console
brew install vips
```

## Usage

Start the proxy server:

```console
manael -http=:8080 -upstream_url=http://localhost:9000
```

To convert a JPEG image to WebP, send a request with an `Accept: image/webp` header. Manael will automatically convert the image if the upstream server returns a JPEG or PNG:

```console
curl -sI -X GET -H "Accept: image/webp" http://localhost:8080/image.jpg
```

The response will have `Content-Type: image/webp` when conversion succeeds.

> **Note:** Manael only converts images for `GET` requests. `HEAD` requests (and other HTTP methods) are passed through to the upstream server unchanged. When testing from the command line, use `curl -sI -X GET` to fetch the headers of a converted image.

## License…
