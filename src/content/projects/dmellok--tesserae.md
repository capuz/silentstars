---
repo: "dmellok/tesserae"
name: "tesserae"
description: "E-ink dashboard companion. Compose dashboards in a browser, render server-side, and push to e-ink panels over REST or MQTT."
readmeQualityOk: true
url: "https://github.com/dmellok/tesserae"
homepage: "https://tesserae.ink"
language: "Python"
languages: ["Python", "CSS"]
languagePcts: [58, 20]
topics: ["dashboard", "e-ink", "esp32", "home-assistant", "raspberry-pi", "self-hosted", "tesserae"]
stars: 190
forks: 10
openIssues: 42
closedIssues: 27
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-05-25T07:37:15Z"
lastCommitAt: "2026-07-11T05:58:14Z"
lastReleaseAt: "2026-06-07T21:36:26Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine"]
healthScore: 88
undervaluedScore: 30
maintainers: ["dmellok", "charmmmz"]
openGraphImageUrl: "https://opengraph.githubassets.com/0aaddf4344d558ed32304d54591e63199f1c7bffecfd8acc9d6e508c18af4300/dmellok/tesserae"
fundingLinks: ["GITHUB:https://github.com/dmellok"]
discussionCount: 20
---

# Tesserae

  </a>
  <br>
  <em>Nine panels, one Tesserae server.</em>
</p>

Self-hosted dashboard companion for e-ink displays. Compose tile-based
dashboards in a browser, render the frame headless, push it to one or
more panels over MQTT or HTTP.

Open source under AGPL-3.0-or-later. No SaaS, no cloud account. The only
outbound contact is `api.tesserae.ink` for update checks, an anonymous
install count, and a daily aggregate heartbeat, switchable off in one place
(Settings → System → Online features).

**📖 [Full documentation](https://docs.tesserae.ink/):**
install guides, [hardware quickstarts](https://docs.tesserae.ink/quickstart/),
[widget gallery](https://docs.tesserae.ink/widgets/gallery/),
[community catalog](https://docs.tesserae.ink/widgets/community/),
[architecture deep dive](https://docs.tesserae.ink/dev/architecture/),
[how to build a widget](https://docs.tesserae.ink/dev/writing-a-widget/),
[how to add hardware support](https://docs.tesserae.ink/dev/adding-hardware/).

## Quick start

```sh
mkdir tesserae && cd tesserae
curl -fsSLO https://raw.githubusercontent.com/dmellok/tesserae/main/docker-compose.yml
docker compose up -d
```

Open <http://localhost:8765>.…
