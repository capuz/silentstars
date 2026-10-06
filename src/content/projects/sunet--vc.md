---
repo: "SUNET/vc"
name: "vc"
description: "European Union identity suite for verifiable credential "
readmeQualityOk: true
url: "https://github.com/SUNET/vc"
language: "Go"
languages: ["Go"]
languagePcts: [93]
topics: ["vctm"]
stars: 14
forks: 13
openIssues: 41
closedIssues: 128
watchers: 6
contributors: 16
recentReleases: 2
createdAt: "2023-02-08T09:52:05Z"
lastCommitAt: "2026-10-06T10:41:25Z"
lastReleaseAt: "2026-09-11T15:07:31Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 78
maintainers: ["masv3971", "leifj", "Didr"]
openGraphImageUrl: "https://opengraph.githubassets.com/383aa01be962c029ab2e3430df4ee456de843c7613847b14768070e87ca5ba3f/SUNET/vc"
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

###…
