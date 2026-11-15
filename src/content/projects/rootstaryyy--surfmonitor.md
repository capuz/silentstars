---
repo: "rootSTARYYY/SurfMonitor"
name: "SurfMonitor"
description: "A local-first Windows desktop infrastructure, website, and remote Linux VPS monitoring suite built with Electron 33, React 18, TypeScript, Vite, Tailwind CSS, Recharts, and SQLite (better-sqlite3)."
readmeQualityOk: true
url: "https://github.com/rootSTARYYY/SurfMonitor"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 4
createdAt: "2026-11-14T11:51:29Z"
lastCommitAt: "2026-11-15T08:28:05Z"
lastReleaseAt: "2026-11-14T15:43:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 45
maintainers: ["rootSTARYYY"]
openGraphImageUrl: "https://opengraph.githubassets.com/51d9af29144dd789ae57264d93ef38401e3ef23fa165b773617e8a0e7843a48f/rootSTARYYY/SurfMonitor"
---

A local-first Windows desktop infrastructure, website, and remote Linux VPS monitoring suite built with <strong>Electron 33</strong>, <strong>React 18</strong>, <strong>TypeScript</strong>, <strong>Vite</strong>, <strong>Tailwind CSS</strong>, <strong>Recharts</strong>, and <strong>SQLite (<code>better-sqlite3</code>)</strong>.

---

## Key Features

### Website, Protocol & Dependency Monitoring
- **Three-State Health Classification (`UP`, `DEGRADED`, `DOWN`)**: Separates network reachability from HTTP application health using configurable expected status code expressions (`200-399` default), JSONPath/text/latency assertions, and retries.
- **Multi-Protocol Checks**: HTTP/HTTPS (`GET`, `HEAD`, `POST`, `PUT`, `PATCH`, `DELETE`, `OPTIONS`), SSL/TLS certificate expiry, DNS record resolution, TCP port checks, ICMP ping, keyword matching, local heartbeat receiver (`127.0.0.1:45821`), content diffing, and domain RDAP expiry.
- **Website Intelligence**: Redirect chain analyzer, security header grading, and broken-link crawler with SSRF protection.
- **Groups, Services & Dependency Map**: Organize monitors into groups, model service dependencies with cycle detection, and inspect…
