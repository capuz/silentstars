---
repo: "uwaserver/uwas"
name: "uwas"
description: "Unified Web Application Server — Apache+Nginx+Varnish+Caddy in a single Go binary. Auto HTTPS, built-in caching, PHP/FastCGI, reverse proxy, load balancing, WAF, web dashboard, and MCP server."
readmeQualityOk: true
url: "https://github.com/uwaserver/uwas"
homepage: "http://uwaserver.com/"
language: "Go"
languages: ["Go"]
languagePcts: [84]
topics: ["webserver", "acme", "cache", "devops", "fastcgi", "go", "golang", "htaccess", "https", "lets-encrypt"]
stars: 125
forks: 13
openIssues: 1
closedIssues: 11
watchers: 5
contributors: 3
recentReleases: 0
createdAt: "2026-03-21T21:43:49Z"
lastCommitAt: "2026-08-28T12:24:04Z"
lastReleaseAt: "2026-05-04T08:32:20Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 33
maintainers: ["ersinkoc", "diggyen", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/68a4a4b01da27a42559d816715167f3129b5645d8d3fe98c6be3c86f762f823d/uwaserver/uwas"
discussionCount: 5
---

# UWAS

**Unified Web Application Server**

One binary to serve them all.

Apache + Nginx + Varnish + Caddy + cPanel → UWAS

---

</p>

> **Note:** UWAS is intended for production use; verify it against your own deployment, traffic, and security requirements.

## What is UWAS?

UWAS replaces your entire web server stack and hosting control panel with a single Go binary. Auto HTTPS, built-in caching, PHP support, .htaccess compatibility, reverse proxy, WebSocket forwarding, WAF, multi-user access control, and a 42-page React dashboard backed by 251 explicit admin API route registrations.

One binary. Zero hassle.

## Current Snapshot (v0.8.9)

- **Dashboard pages:** 42 (`web/dashboard/src/pages`)
- **Admin API routes:** 251 explicit route registrations in `internal/admin/routes.go` under `/api/v1` plus dashboard/static handlers
- **Go packages:** 55 (from `go list ./... | grep -v '/node_modules/'`)
- **CLI commands:** 19
- **Test status:** all gates pass — `go build`, `go vet`, `staticcheck`, `go test` (54/54 packages), `go test -race` (0 data races), dashboard npm build; CI runs additional `govulncheck`, shellcheck, installer tests, Docker Compose validation, and docs/site builds…
