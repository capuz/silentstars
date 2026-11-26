---
repo: "NikKurkov/sitewatcher"
name: "sitewatcher"
description: "Makes sure that everything is fine with your site."
readmeQualityOk: true
url: "https://github.com/NikKurkov/sitewatcher"
homepage: "https://monitoring.kurkov.dev/demo"
language: "Python"
languages: ["Python"]
languagePcts: [79]
topics: ["rdap", "self-hosted", "ssl-monitoring", "status-page", "uptime-monitoring", "website-monitoring"]
stars: 2
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-08-26T06:47:08Z"
lastCommitAt: "2026-11-26T22:50:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 99
maintainers: ["NikKurkov"]
openGraphImageUrl: "https://opengraph.githubassets.com/d712a4a8a3be7894f19a3db9cbb18d51f2c99fa37bd76b24b64a3a452f3d0d27/NikKurkov/sitewatcher"
promoted: true
---

The demo is a public status page. You can see the monitored sites and open the Signal room without signing in. The screenshots above show the signed-in workspace with sample data.

## What can I monitor?

- Whether a site opens, what HTTP status it returns, and how long the request takes.
- When its HTTPS certificate and domain registration expire.
- Whether a page still contains the words you expect, or shows signs of defacement.
- Changes to its IP addresses, blocklist and reputation reports, TCP ports, and the route to the server.

Choose the checks and alert channels for each site. Group sites in the dashboard, look back through their check history, and share selected sites or groups on public or private status pages. Alerts can go to email, Telegram, or both.

Some checks use external data. VirusTotal needs an API key, and its reports are cached for 24 hours. The [user guide](https://github.com/NikKurkov/sitewatcher/blob/HEAD/docs/usage.en.md) explains how to set up each check and read its results.

## Get started

Install Git and Docker with Compose, then run:
