---
repo: "bardesss/arr-mcp"
name: "arr-mcp"
description: "One MCP server for the whole self-hosted media stack: Radarr, Sonarr, Whisparr, Lidarr, Prowlarr, Bazarr, Jellyfin, Plex, Seerr, SABnzbd, NZBGet, Transmission, qBittorrent, Profilarr, Cleanuparr, Reclaimerr and Dispatcharr."
readmeQualityOk: true
url: "https://github.com/bardesss/arr-mcp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["bazarr", "jellyfin", "mcp", "mcp-server", "prowlarr", "radarr", "sabnzbd", "seerr", "self-hosted", "sonarr"]
stars: 92
forks: 10
openIssues: 3
closedIssues: 43
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2026-08-04T13:01:02Z"
lastCommitAt: "2026-11-05T11:23:59Z"
lastReleaseAt: "2026-08-06T14:19:26Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 98
undervaluedScore: 33
maintainers: ["bardesss", "dependabot[bot]", "ghostintherack"]
openGraphImageUrl: "https://opengraph.githubassets.com/5dd104360ee68ff0ce5aa0627e598454a3020e6b8badee02cbb9bd191fbd1556/bardesss/arr-mcp"
---

# arr-mcp

### Talk to your entire media stack. One server, one endpoint, one conversation.

**Radarr · Sonarr · Whisparr · Lidarr · Prowlarr · Bazarr · Jellyfin · Plex · Seerr · SABnzbd · NZBGet · Transmission · qBittorrent · Profilarr · Cleanuparr · Reclaimerr · Dispatcharr**

## Everyone else ships one MCP server per service. This is one for the stack.

That difference is the whole point, because the interesting questions live
*between* services:

> *"Why isn't the film I requested on Tuesday showing up in Jellyfin?"*

No single service can answer that. It spans Seerr, Radarr, Prowlarr, SABnzbd and
Jellyfin — five APIs, five sets of ids, five half-answers. arr-mcp correlates
them and hands back the causal chain:

```
diagnose { query: "Blade" }
```

> No file on disk yet. Trigger a search in Radarr or Sonarr — nothing is
> downloading and no indexer reported a failure.

One call. One answer. It even answers with a service down, and tells you which
part it could not check rather than guessing across the hole.

## Why people run it

|  | |
| --- | --- |
| 🔍 **`diagnose` answers what no single service can** | Walks the whole chain — requested, managed, monitored, downloaded,…
