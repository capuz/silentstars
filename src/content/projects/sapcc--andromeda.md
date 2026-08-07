---
repo: "sapcc/andromeda"
name: "andromeda"
description: "Platform agnostic GSLB frontend with OpenStack-like API"
readmeQualityOk: true
url: "https://github.com/sapcc/andromeda"
homepage: "https://sapcc.github.io/andromeda/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [73, 26]
topics: ["golang", "openstack", "gslb", "loadbalancer"]
stars: 7
forks: 3
openIssues: 3
closedIssues: 3
watchers: 37
contributors: 210
recentReleases: 0
createdAt: "2020-11-20T12:56:08Z"
lastCommitAt: "2026-08-07T05:15:17Z"
lastReleaseAt: "2025-05-23T17:33:31Z"
status: "watched"
tags: ["solo_builder", "legacy_hero", "community_watch"]
healthScore: 87
undervaluedScore: 57
maintainers: ["renovate[bot]", "ronchi-oss", "notandy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2acf0bd7dc549ed9bb1d3af5a429e20b2d7ca35106a3d13fe6d73cc29c538f66/sapcc/andromeda"
---

# andromeda GSLBaaS
Platform agnostic GSLB frontend with OpenStack-like API

Andromeda is a OpenStack like REST API Fronted for Global Loadbalancing as a Service (GLbaaS). It can support multiple backends, called provider.
Features:
* Multi-tenant capable
* OpenStack keystone authentication
* OpenStack policy support
* Prometheus metrics
* Rate limiting
* OpenStack like Quota API
* Multiple Database backends supported
  * PostgreSQL
  * MariaDB (Warning, MySQL/Percona is **not** supported)
  * CockroachDB

Currently it supports following GSLB provider:

* F5 BigIP DNS
* Akamai

API Documentation: https://sapcc.github.io/andromeda/

## CLI Client
Andromeda provides a reference CLI client called `m31ctl` that uses the REST API of Andromeda.

## Running Requirements
* go 1.25
* NATS
* SQL Database (PostgreSQL/MariaDB/CockroachDB)

### Build requirements
* GNU Make

Not required, will be installed by Makefile:

* [migrate](https://github.com/golang-migrate/migrate)
* [swagger](https://github.com/go-swagger/go-swagger/blob/master/docs/install.md)
* [protoc](https://grpc.io/docs/protoc-installation/)
* [protoc-gen-go](https://github.com/golang/protobuf)
*…
