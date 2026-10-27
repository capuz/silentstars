---
repo: "degD/wserve"
name: "wserve"
description: "WSERVE: Static Web Server in Pure C"
readmeQualityOk: true
url: "https://github.com/degD/wserve"
language: "C"
languages: ["C"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-08T10:39:07Z"
lastCommitAt: "2026-10-27T12:39:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["degD"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ba4ce58cfa4f93f1ddcb7d215015fbde1861254f11936ff6d73b7412a53e56c/degD/wserve"
---

# WSERVE: Static Web Server in Pure C

This is a static IPv4 Linux web server written in pure C. No external libraries used, except [bearSSL](https://www.bearssl.org/). Even the HTTP parser is written in pure C. It supports a subset of HTTP/1.1. GET, HEAD, POST requests are supported and custom paths can be configured for dynamic routing. HTTPS is supported through [bearSSL](https://www.bearssl.org/). But `Transfer-Encoding: chunked` support, extensive E2E testing and a stable release is still in progress. The project also includes a custom JSON parser specifically designed for the POST requests. 

## Features

- IPv4 supported.
- Pure C.
- HTTP/1.1 subset.
- GET and HEAD supported. POST is planned.
- Static serving.
- Extensive MIME types support.
- Automatic rejection of malformed requests.
- Prevention of static directory escape.
- Extensive error responses.
- Dynamic routes
- Functional `POST` handling
- Custom JSON parser
- HTTPS

## Not supported (yet)

- Keep-alive connections
- Chunked transfer encoding
- Production hardening or compatibility guarantees

## Roadmap

- [x] TCP Server
- [x] HTTP Parser
- [x] Static Routing
- [x] Dynamic Routing

For detailed version roadmap,…
