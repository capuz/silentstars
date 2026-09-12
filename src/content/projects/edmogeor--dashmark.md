---
repo: "edmogeor/dashmark"
name: "dashmark"
description: "A lightweight dashboard of links to your Docker services"
readmeQualityOk: true
url: "https://github.com/edmogeor/dashmark"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 21
forks: 0
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-08-19T19:24:39Z"
lastCommitAt: "2026-09-12T08:05:46Z"
lastReleaseAt: "2026-08-22T17:42:09Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 50
maintainers: ["edmogeor", "actions-user", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b316069feedb906a1bc89070a283f5b0934dec756e952f8ac7a6d7140f826b7/edmogeor/dashmark"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/edmogeor"]
discussionCount: 0
---

<h1>Dashmark</h1>
  <p>A lightweight dashboard for your Docker services.</p>
  <p>
    </a>
    </a>
    </a>
    </a>
  </p>
</div>

Dashmark finds Docker containers with `dashmark.*` labels and displays them as cards. It is a self-hosted Node.js service built with Astro.

## Why Dashmark?

Excellent self-hosted dashboards already exist, including [Homepage](https://gethomepage.dev/), [Heimdall](https://heimdall.site/), [Homarr](https://homarr.dev/), and [Flame](https://github.com/pawelmalak/flame). Dashmark takes inspiration from Heimdall's simplicity, then removes the setup friction: configure cards beside their services in `docker-compose.yml`, let Docker labels supply the details, and rely on automatic icon matching when an explicit icon is not worth the effort.

Dashmark is links first. It is built for fast, low-fuss navigation across a large collection of services: searchable, easy to scan, and polished by default with [shadcn/ui](https://ui.shadcn.com/), without turning the dashboard itself into another project to maintain.

## Features

- Discover opt-in containers on one or more Docker hosts.
- Create cards from Docker labels or YAML.
- Reuse Traefik host rules for card…
