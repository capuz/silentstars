---
repo: "HHS/OPRE-OPS"
name: "OPRE-OPS"
description: "ACF's OPRE OPS product.  Code name Unicorn."
url: "https://github.com/HHS/OPRE-OPS"
language: "HTML"
languages: ["HTML", "JavaScript", "Python"]
languagePcts: [50, 30, 20]
stars: 13
forks: 10
openIssues: 288
closedIssues: 1487
watchers: 8
contributors: 31
recentReleases: 0
createdAt: "2021-05-18T18:43:14Z"
lastCommitAt: "2026-06-24T23:39:34Z"
lastReleaseAt: "2024-11-19T15:41:07Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 72
maintainers: ["renovate[bot]", "josbell", "rajohnson90"]
openGraphImageUrl: "https://opengraph.githubassets.com/558906d8c28c53b650b6e301ebe07a770588922da5f5a457c75c39e93314581d/HHS/OPRE-OPS"
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
