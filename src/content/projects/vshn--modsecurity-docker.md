---
repo: "vshn/modsecurity-docker"
name: "modsecurity-docker"
description: "A custom Docker image based on the official ModSecurity image."
url: "https://github.com/vshn/modsecurity-docker"
language: "Awk"
languages: ["Awk", "Dockerfile"]
languagePcts: [64, 20]
topics: ["modsecurity", "modsecurity-core-rule-set", "docker", "vshn-project-ignore"]
stars: 13
forks: 3
openIssues: 2
closedIssues: 6
watchers: 3
contributors: 27
recentReleases: 0
createdAt: "2019-02-14T14:28:13Z"
lastCommitAt: "2026-06-29T07:22:09Z"
lastReleaseAt: "2025-09-15T09:51:03Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 80
undervaluedScore: 38
maintainers: ["renovate[bot]", "vshntea"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ef25ebbec88f7f89957231f6dfa8d7702104090ba32cdf78731b8723c9c6f0a/vshn/modsecurity-docker"
---

# VSHN ModSecurity Container Image

Based on the official [coreruleset/modsecurity-crs-docker](https://github.com/coreruleset/modsecurity-crs-docker) image.

- Contains the necessary tweaks to run on OpenShift
- Sets opinionated default configurations
- Includeds the [ClamAV anti-virus scanner](https://www.clamav.net/) client

## Usage

The latest image can be pulled from

    ghcr.io/vshn/modsecurity-docker:latest

Our tags track upstream CRS versions.
See [ghcr.io/vshn/modsecurity-docker](https://github.com/vshn/modsecurity-docker/pkgs/container/modsecurity-docker) for a list of historic tags.

## Development

A very basic Docker Compose setup including this container with `httpbun` as the backend. To start it, run:

```sh
docker compose up
```

Once the containers are running, you can make requests to it:

```sh
curl -i http://localhost:8080/anything

curl -i -H 'Host: vshn.ch' http://localhost:8080/anything

curl -i http://localhost:8080/cookies/set/secret/random-value
```

For all supported endpoints, visit [localhost:8080](http://localhost:8080/).

### Release

To publish a new release, simply create & push a new Git Tag.

NOTE: Tags should follow the included CRS version.…
