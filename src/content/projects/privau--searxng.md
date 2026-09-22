---
repo: "privau/searxng"
name: "searxng"
description: "Builds a custom SearXNG image, a privacy-respecting metasearch engine."
readmeQualityOk: true
url: "https://github.com/privau/searxng"
homepage: "https://priv.au"
language: "Less"
languages: ["Less"]
languagePcts: [65]
topics: ["docker", "privacy", "searxng", "metasearch-engine", "searx"]
stars: 120
forks: 14
openIssues: 2
closedIssues: 55
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2023-04-02T12:16:15Z"
lastCommitAt: "2026-09-22T08:45:48Z"
status: "thriving"
tags: []
healthScore: 89
undervaluedScore: 48
maintainers: ["vojkovic"]
openGraphImageUrl: "https://opengraph.githubassets.com/f167dfe922b878407bc41139aec881d368e130e038072449e15130a52ae9a721/privau/searxng"
discussionCount: 0
---

# SearXNG

Builds a modified [SearXNG](https://github.com/searxng/searxng) container, a privacy respecting metasearch engine. Includes a suite of custom themes and bleeding edge patches that either don't fit upstream or aren't ready yet.

🌐 Global : https://priv.au

---

🇺🇸 Kansas City, United States : https://na.priv.au

🇸🇬 Singapore, Singapore : https://as.priv.au

🇩🇪 Frankfurt, Germany : https://eu.priv.au

🇦🇺 Melbourne, Australia : https://au.priv.au

Use the [Looking Glass](https://lg.as44354.net/) to find the closest one to you.

---

## Basic Usage

* ```docker run -d --restart always -p 127.0.0.1:8080:8080 --name searxng ghcr.io/privau/searxng```

* Visit `http://127.0.0.1:8080` in your browser, stop the server with `Ctrl` + `C`.

## Theme Development

* Clone this repo: ```git clone https://github.com/privau/searxng.git```

* Make your changes to the theme within `src/less`

* Build the static files by running `update.sh`.

* You can build the docker container locally by running: ```docker build --pull -f ./Dockerfile -t searxng-dev:latest .```

* Run the local container with: ```docker run -it --rm -p 8080:8080 searxng-dev:latest```

* Alternatively, you can…
