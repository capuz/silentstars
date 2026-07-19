---
repo: "HHS/OPRE-OPS"
name: "OPRE-OPS"
description: "ACF's OPRE OPS product.  Code name Unicorn."
readmeQualityOk: true
url: "https://github.com/HHS/OPRE-OPS"
language: "HTML"
languages: ["HTML", "JavaScript", "Python"]
languagePcts: [48, 31, 20]
stars: 13
forks: 10
openIssues: 284
closedIssues: 1507
watchers: 8
contributors: 32
recentReleases: 0
createdAt: "2021-05-18T18:43:14Z"
lastCommitAt: "2026-07-19T06:11:13Z"
lastReleaseAt: "2024-11-19T15:41:07Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 97
undervaluedScore: 72
maintainers: ["josbell", "renovate[bot]", "Santi-3rd"]
openGraphImageUrl: "https://opengraph.githubassets.com/9eae34cdf3430030577ece4a7b01c093b99d2084571150c0e5d784985941b0dd/HHS/OPRE-OPS"
---

# OPRE OPS

This is the OPRE Portfolio Management System, or OPS. The finished product will replace OPRE's prior system,
MAPS. The purpose of OPS can be found on
[the wiki](https://github.com/HHS/OPRE-OPS/wiki).

## Dependencies

At a bare minimum, you need [Docker](https://www.docker.com) and
[Docker Compose](https://docs.docker.com/compose/install/) installed to run the application locally. [Podman](https://podman.io) has also been validated as a functional replacement for Docker.
If you want to do development, you will also need to install [Python](https://www.python.org), [Node.js](https://nodejs.org), and
[pre-commit](https://pre-commit.com/#installation).

## RSA Key Generation

The backend uses RSA keys to sign and verify JWTs. You can generate these keys by running the following commands...

```shell
mkdir ~/ops-keys
openssl genrsa -out ~/ops-keys/keypair.pem 2048
openssl rsa -in ~/ops-keys/keypair.pem -pubout -out ~/ops-keys/public.pem
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in ~/ops-keys/keypair.pem -out ~/ops-keys/private.pem
```

Then place the private/public keys in your shell environment...

```shell
export JWT_PRIVATE_KEY=$(cat…
