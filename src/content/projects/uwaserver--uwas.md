---
repo: "uwaserver/uwas"
name: "uwas"
description: "Unified Web Application Server — Apache+Nginx+Varnish+Caddy in a single Go binary. Auto HTTPS, built-in caching, PHP/FastCGI, reverse proxy, load balancing, WAF, web dashboard, and MCP server."
url: "https://github.com/uwaserver/uwas"
homepage: "http://uwaserver.com/"
language: "Go"
languages: ["Go"]
languagePcts: [83]
topics: ["webserver", "acme", "cache", "devops", "fastcgi", "go", "golang", "htaccess", "https", "lets-encrypt"]
stars: 123
forks: 13
openIssues: 0
closedIssues: 11
watchers: 5
contributors: 2
recentReleases: 10
createdAt: "2026-03-21T21:43:49Z"
lastCommitAt: "2026-06-25T02:06:57Z"
lastReleaseAt: "2026-05-04T08:32:20Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 38
maintainers: ["ersinkoc"]
openGraphImageUrl: "https://opengraph.githubassets.com/8b13af7e498f748cd109ed06a4999b318410946d027acf57e66ab736cdaefc73/uwaserver/uwas"
discussionCount: 5
---

# UWAS

**Unified Web Application Server**

One binary to serve them all.

Apache + Nginx + Varnish + Caddy + cPanel → UWAS

---

</p>

> **Note:** UWAS is production-ready with 50+ installed instances.

## What is UWAS?

UWAS replaces your entire web server stack and hosting control panel with a single Go binary. Auto HTTPS, built-in caching, PHP support, .htaccess compatibility, reverse proxy, WebSocket forwarding, WAF, multi-user access control, and a 42-page React dashboard with 254+ API endpoints.

One binary. Zero hassle.

## Current Snapshot (v0.6.42)

- **Dashboard pages:** 42 (`web/dashboard/src/pages`)
- **Admin API routes:** 254 (route registrations under `/api/v1` in `internal/admin/routes.go` + analytics hooks)
- **Go packages:** 57 (from `go list ./...`)
- **CLI commands:** 19
- **Test status:** `go test ./...` passing (parallel)
- **70 security/stability fixes + 14 hot-path perf wins** since v0.4.0 (see [CHANGELOG](CHANGELOG.md))

**v0.6.x highlights (standalone apps + hard legacy cutover):**
- Apps are first-class objects under `/etc/uwas/apps.d/<name>.yaml`
- Domains expose apps with reverse proxy upstreams such as `apps://my-api`
- Domains use a dedicated Add…
