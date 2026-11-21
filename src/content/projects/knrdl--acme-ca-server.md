---
repo: "knrdl/acme-ca-server"
name: "acme-ca-server"
description: "ACME CA Server (self hosted let's encrypt)"
readmeQualityOk: true
url: "https://github.com/knrdl/acme-ca-server"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["acme", "acme-challenge", "acme-server", "pki"]
stars: 117
forks: 18
openIssues: 3
closedIssues: 12
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2023-04-13T17:46:05Z"
lastCommitAt: "2026-11-21T13:30:06Z"
lastReleaseAt: "2023-11-19T16:57:59Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 45
maintainers: ["knrdl", "dependabot[bot]", "itronik-net"]
openGraphImageUrl: "https://opengraph.githubassets.com/8e2cda2bd118ee4af255984cd9a8b7a03db7d72b71e1ed774021333c9efb0510/knrdl/acme-ca-server"
---

# ACME CA Server

A self-hosted ACME server with a built-in CA and optional web interface.

## Features

* ✅ **ACME Server** implementation (supports `http-01` challenge)
* 🔐 **Built-in CA** to sign/revoke certificates (can be replaced with an external CA), CA rollover is supported
* ✉️ **Mail notifications**  (for account creation, expiring and expired certificates) with customizable templates
* 🌐 **Web UI** (certificate and domain log) with customizable templates

Tested with [Certbot](https://certbot.eff.org/), [Traefik](https://traefik.io/traefik/), [Caddy](https://caddyserver.com/), [uacme](https://github.com/ndilieto/uacme), [acme.sh](https://github.com/acmesh-official/acme.sh).

## Setup
### 1. Generate a new CA root certificate (or use an existing one)

You can generate a new root CA key and certificate using OpenSSL:

```shell
openssl genrsa -out ca.key 4096
openssl req -new -x509 -nodes -days 3650 -subj "/C=DE/O=Demo" -key ca.key -out ca.pem
````

These two files (`ca.key` and `ca.pem`) will be imported into the container on first startup.
