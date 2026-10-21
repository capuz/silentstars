---
repo: "luizfonseca/proksi"
name: "proksi"
description: "The easiest proxy will you ever configure. Batteries-included CDN, reverse proxy and Load Balancer with Docker support powered by Cloudflare Pingora."
readmeQualityOk: true
url: "https://github.com/luizfonseca/proksi"
homepage: "http://docs.proksi.info"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["docker", "proxy-server", "swarm", "pingora", "reverse-proxy", "cdn", "caddy", "nginx", "traefik"]
stars: 222
forks: 19
openIssues: 3
closedIssues: 17
watchers: 5
contributors: 5
recentReleases: 0
createdAt: "2024-05-06T22:58:00Z"
lastCommitAt: "2026-10-21T23:36:31Z"
lastReleaseAt: "2024-05-27T18:04:53Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 97
undervaluedScore: 42
maintainers: ["luizfonseca", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/796942916/a6cfd9e1-4dce-4aba-bdb1-dca3939d7764"
fundingLinks: ["GITHUB:https://github.com/luizfonseca"]
---

# Proksi: Automatic SSL, HTTP, and DNS Proxy

## Contents

- [About](#about)
- [Features](#features)
- [Quick start](#quick-start)
  - [Configuration File Handling](#configuration-file-handling)
- [Configuration](#configuration)
  - [Server](#server)
  - [Hosts and locations](#hosts-and-locations)
    - [Ports, plain HTTP, and any host](#ports-plain-http-and-any-host)
  - [TCP](#tcp)
  - [Upstreams](#upstreams)
  - [Certificates](#certificates)
  - [Headers](#headers)
  - [Plugins](#plugins)
  - [Rules](#rules)
  - [Caching](#caching)
  - [Docker](#docker)
  - [Kubernetes](#kubernetes)
  - [Running many servers](#running-many-servers)
  - [Metrics](#metrics)
  - [Auto reload](#auto-reload)
  - [Functions and environment variables](#functions-and-environment-variables)
  - [YAML](#yaml)
  - [Migrating from `routes = [...]`](#migrating-from-routes--)
  - [What's next](#whats-next)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

# About

Proksi is a simple, lightweight, and easy-to-use proxy server that automatically handles SSL, HTTP, and DNS traffic. It is designed to be used as a standalone proxy server or as a component in a larger system.…
