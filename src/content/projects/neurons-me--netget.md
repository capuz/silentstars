---
repo: "neurons-me/netget"
name: "netget"
description: "It listens on ports 80 and 443, routes every incoming request to the right place."
readmeQualityOk: true
url: "https://github.com/neurons-me/netget"
homepage: "http://netget.site"
language: "HTML"
languages: ["HTML", "TypeScript"]
languagePcts: [36, 34]
topics: ["decentralized", "dynamic-routing", "networking", "proxy-server", "reverse-proxy", "ssl-certificates", "vpn", "wildcards"]
stars: 66
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2024-08-02T04:24:53Z"
lastCommitAt: "2026-08-05T06:06:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 45
maintainers: ["neurons-me", "pplalo"]
openGraphImageUrl: "https://opengraph.githubassets.com/fec0857121a39605fca659d7dd713eaa5aae849a54cf56aa273ce14d5bf21512/neurons-me/netget"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/dkwnxf6gm/image/upload/v1780604418/netget_gmdvxy-removebg-preview_eibfyi.png" />
</picture>

# Getting Started
Listens on **ports 80 and 443** and routes every incoming request to the right service.

#### Install: (You need [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/))

```bash
npm i -g netget
```

#### **Start netget on your terminal by running:**

```bash
netget
```

#### Command Line:

```bash
netget # opens CLI
netget reload  # reloads server 
netget restart # alias for reload
```

---

# Configuring Domain Routes:
**Domain map** — live *routing table* is checked every second. 

Routing changes take effect immediately — *no restart needed:*

```json
{
  "domains": {
    "suis-macbook-air.local": { "type": "static", "root": "/Users/suign/.get/html" },
    "other-service.local": { "type": "proxy",  "target": "127.0.0.1:8161" }
  }
}
```

| Type | Behavior |
|---|---|
| `static` | Serves files from `root`. `index.html` fallback. |
| `proxy` | Forwards to `target` with standard proxy headers. |
| `server` | Same as proxy. Alias for app servers. |

---

## Node…
