---
repo: "fabriziosalmi/secure-proxy-manager"
name: "secure-proxy-manager"
description: "Secure proxy solution with filtering, real-time monitoring and a modern web UI."
readmeQualityOk: true
url: "https://github.com/fabriziosalmi/secure-proxy-manager"
homepage: "https://fabriziosalmi.github.io/secure-proxy-manager/"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [52, 32]
topics: ["proxy", "proxy-configuration", "proxy-tool", "squid", "squid-proxy", "squid-proxy-security", "ui", "content-filtering", "dns-filtering", "egress-filtering"]
stars: 48
forks: 5
openIssues: 2
closedIssues: 68
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2024-12-30T10:05:07Z"
lastCommitAt: "2026-10-31T09:54:37Z"
lastReleaseAt: "2025-06-16T13:52:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 58
maintainers: ["fabriziosalmi"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/910025723/00bb0043-5a10-47bf-9787-2a0b11d4c29f"
fundingLinks: ["GITHUB:https://github.com/fabriziosalmi"]
discussionCount: 4
---

# Secure Proxy Manager

Documentation: <https://fabriziosalmi.github.io/secure-proxy-manager/>

Secure Proxy Manager (SPM) is a self-hosted forward proxy for a home, lab or
small-office network. It runs as one Docker Compose stack: a Squid forward
proxy, a Go WAF that Squid calls over ICAP, a dnsmasq resolver that sinkholes
blocked domains, a Go backend with a REST API, and a React web UI.

It is for an operator who wants every client's outbound HTTP and HTTPS to pass
through one point they control: block domains and IP ranges, optionally allow
only an explicit list of destinations, inspect requests against WAF rules, and
see which client reached what. The proxy, the WAF and the data run on your
host. By default dnsmasq forwards lookups to public resolvers
(`DNS_UPSTREAM_1..3`), and the backend asks GitHub for the latest release
every 6 hours.

## Services

| Service | Built from | Role |
|---|---|---|
| `web` | `ui/` (nginx serving the React build) | HTTPS entry point: serves the UI, proxies `/api/` and the WebSocket to the backend |
| `backend` | `backend-go/` (Go, chi, SQLite) | REST API, authentication, settings, log ingestion, background workers |
| `waf` | `waf-go/` (Go) |…
