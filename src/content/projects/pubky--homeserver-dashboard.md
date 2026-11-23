---
repo: "pubky/homeserver-dashboard"
name: "homeserver-dashboard"
description: "Web-based admin dashboard for managing Pubky homeservers. Built with Next.js, TypeScript, and Shadcn UI."
readmeQualityOk: true
url: "https://github.com/pubky/homeserver-dashboard"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 9
forks: 1
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 12
recentReleases: 0
createdAt: "2025-12-10T15:33:53Z"
lastCommitAt: "2026-11-23T10:13:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 65
maintainers: ["SHAcollision", "86667", "mdozhdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/85db6969946f78e5827da054018e33ba25d2d48bfb54d0c22159632590f30a41/pubky/homeserver-dashboard"
---

# Homeserver Dashboard

A small web-based admin dashboard for Pubky homeservers. Built with **Next.js (App Router)**, **React**, and **Tailwind + shadcn/ui**.

The UI lives under a single route: **`/dashboard`** (the home page redirects there).

## Run it next to a homeserver

The dashboard runs beside a Pubky homeserver, on the same machine, and talks to the homeserver's admin API. It needs read access to the homeserver's `config.toml` and nothing else installed: the release archive carries its own Node.js. Nothing here is specific to Docker or Umbrel.

1. **Download the dashboard.** Pick a version from the [releases page](https://github.com/pubky/homeserver-dashboard/releases). Releases are built for Linux on x86-64 (`linux-amd64`) only for now; on anything else, see "from source" below.

   ```bash
   DASHBOARD_VERSION=<version>     # e.g. 0.1.34
   curl -LO https://github.com/pubky/homeserver-dashboard/releases/download/v${DASHBOARD_VERSION}/homeserver-dashboard-v${DASHBOARD_VERSION}-linux-amd64.tar.gz
   tar -xzf homeserver-dashboard-v${DASHBOARD_VERSION}-linux-amd64.tar.gz
   cd homeserver-dashboard-v${DASHBOARD_VERSION}-linux-amd64
   ```
