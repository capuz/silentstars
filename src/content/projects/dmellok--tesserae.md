---
repo: "dmellok/tesserae"
name: "tesserae"
description: "E-ink dashboard companion. Compose dashboards in a browser, render server-side, and push to e-ink panels over REST or MQTT."
readmeQualityOk: true
url: "https://github.com/dmellok/tesserae"
homepage: "https://tesserae.ink"
language: "Python"
languages: ["Python"]
languagePcts: [59]
topics: ["dashboard", "e-ink", "esp32", "home-assistant", "raspberry-pi", "self-hosted", "tesserae"]
stars: 198
forks: 10
openIssues: 40
closedIssues: 30
watchers: 2
contributors: 5
recentReleases: 10
createdAt: "2026-05-25T07:37:15Z"
lastCommitAt: "2026-07-13T06:38:51Z"
lastReleaseAt: "2026-06-07T21:36:26Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "funded", "release_machine", "community_hub"]
healthScore: 88
undervaluedScore: 30
maintainers: ["dmellok", "charmmmz"]
openGraphImageUrl: "https://opengraph.githubassets.com/85cf1ec429d2bfc9f0ee18f2f294d6863b6a4b7b00947160665ae925b0f64568/dmellok/tesserae"
fundingLinks: ["GITHUB:https://github.com/dmellok"]
discussionCount: 21
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
install count, and a daily aggregate heartbeat, off by default and opt-in
(you're asked once at first-run setup; toggle in Settings → System → Online
features).

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
docker compose…
