---
repo: "SUNET/vc"
name: "vc"
description: "European Union identity suite for verifiable credential"
readmeQualityOk: true
url: "https://github.com/SUNET/vc"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["vctm"]
stars: 14
forks: 19
openIssues: 33
closedIssues: 176
watchers: 6
contributors: 20
recentReleases: 4
createdAt: "2023-02-08T09:52:05Z"
lastCommitAt: "2026-11-27T11:58:39Z"
lastReleaseAt: "2026-11-19T13:08:33Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "fork_magnet"]
healthScore: 96
undervaluedScore: 82
maintainers: ["masv3971", "leifj", "Wicpar"]
openGraphImageUrl: "https://opengraph.githubassets.com/ca767d7c86d99c896d503d6ee4e9cdc95e5233b2133f211aecd287dc2537fdf1/SUNET/vc"
---

# VC

A Go-based microservices backend for issuing and verifying digital credentials, originally created within the [DC4EU](https://www.dc4eu.eu/) (Digital Credentials for Europe) project.

The platform implements the OpenID4VCI and OpenID4VP protocols to issue and verify credentials in SD-JWT VC, W3C Verifiable Credentials 2.0, and ISO/IEC 18013-5 mdoc formats.

## Quick Start

```bash
# 1. Generate development PKI certificates
make pki

# 2. Start all services (MongoDB + microservices)
make start

# 3. Verify everything is running
docker compose ps
```

The services will be available on the internal Docker network (`172.16.50.0/24`):

| Service      | Address                          |
| ------------ | -------------------------------- |
| API Gateway  | `http://apigw.vc.docker:8080`    |
| Issuer       | `http://issuer.vc.docker:8080`   |
| Verifier     | `http://verifier.vc.docker:8080` |
| Registry     | `http://registry.vc.docker:8080` |
| MongoDB      | `mongodb://mongo.vc.docker:27017` |

To access a service from the host, use its container IP directly (e.g. `http://172.16.50.2:8080` for apigw) or publish ports in `docker-compose.yaml`.

To stop everything: `make stop`
