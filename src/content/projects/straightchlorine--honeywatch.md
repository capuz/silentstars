---
repo: "straightchlorine/honeywatch"
name: "honeywatch"
description: "SSH honeypot with real-time attack visualization and threat analysis."
readmeQualityOk: true
url: "https://github.com/straightchlorine/honeywatch"
homepage: "https://honey.piotrkrzysztof.dev"
language: "Python"
languages: ["Python", "TypeScript", "Vue"]
languagePcts: [36, 34, 26]
topics: ["cowrie-honeypot", "cowrie-ssh", "dashboard", "docker-compose", "flask", "honeypot", "k8s", "maxmind", "ssh-honeypot", "vue"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-22T13:21:04Z"
lastCommitAt: "2026-09-18T08:27:16Z"
lastReleaseAt: "2026-04-25T14:28:44Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 52
maintainers: ["straightchlorine", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a190d636e086c35120c6afe693f6980d82060c095695faca11c81fb9fc234a38/straightchlorine/honeywatch"
---

</p>

[Live dashboard](https://honey.piotrkrzysztof.dev) &middot; [Documentation](https://docs.honeywatch.piotrkrzysztof.dev)

SSH honeypot with attack visualization and threat analysis.

</div>

         alt="Honeywatch dashboard: live world map of SSH attacks."
         width="800">
  </a>
</p>

## Architecture

```mermaid
graph LR
    subgraph honeypot["Honeypot VPS"]
        Cowrie[Cowrie SSH :22] -.->|HTTP only| Egress[egress-proxy]
        Cowrie -->|JSON logs| Ingestor
        Ingestor -->|INSERT as honeywatch_ingestor| PG[(Postgres)]
        API[Flask API] -->|SELECT as honeywatch_api| PG
        Nginx[nginx<br/>binds TS_IP only] --> API
    end

    subgraph k3s["Hetzner k3s (ArgoCD managed)"]
        Traefik[Traefik + cert-manager] --> Dashboard[Dashboard SPA]
        Traefik -->|/api/*| TSE[ts-egress sidecar]
    end

    Net((Internet)) -->|HTTPS<br/>honey.piotrkrzysztof.dev| Traefik
    TSE -.->|Tailnet| Nginx
```

The honeypot VPS runs Cowrie, ingestor, Postgres, Flask API,
and an internal nginx that binds only to the Headscale tailnet interface.

Cowrie has no direct internet egress; outbound traffic is forced through
a tinyproxy sidecar (`egress-proxy`).

The…
