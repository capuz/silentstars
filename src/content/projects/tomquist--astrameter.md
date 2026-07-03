---
repo: "tomquist/AstraMeter"
name: "AstraMeter"
description: "This project emulates Smart Meter devices for Marstek storages such as the B2500, Marstek Jupiter and Marstek Venus energy storage system while allowing integration with almost any smart meters."
url: "https://github.com/tomquist/AstraMeter"
homepage: "https://astrameter.com/"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["b2500", "b2500d", "juputer", "marstek", "venus", "shelly", "shelly-3em", "ct002", "ct003"]
stars: 338
forks: 54
openIssues: 1
closedIssues: 176
watchers: 17
contributors: 6
recentReleases: 6
createdAt: "2024-06-16T19:53:49Z"
lastCommitAt: "2026-07-03T06:22:42Z"
lastReleaseAt: "2026-06-06T14:18:08Z"
status: "thriving"
tags: ["release_machine", "community_hub"]
healthScore: 99
undervaluedScore: 44
maintainers: ["tomquist", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bbca2b572ad06fb2a59eed1e43dfe00eb0979494a907e15a2cae92eb5dd7205/tomquist/AstraMeter"
discussionCount: 109
---

# AstraMeter

> **Formerly known as b2500-meter.** The project was renamed to reflect support
> for the full range of Marstek storage systems (B2500, Jupiter, Venus, …), not
> just the B2500.

AstraMeter emulates Smart Meter devices for Marstek storage systems such as the
B2500, Jupiter, and Venus, while letting you feed it from almost any real smart
meter. Your storage system sees a meter it understands; AstraMeter reads your
actual grid power from a source of your choosing and steers the batteries toward
net-zero grid exchange.

It does this by emulating one or more of these devices:

- **CT002 / CT003** (Marstek's native CT protocol) — use for **multiple** storage
  devices; it coordinates a shared target across the fleet.
- **Shelly Pro 3EM** — uses port 1010 (B2500 firmware up to v224) and port 2220
  (B2500 firmware v226+); target a specific port with `shellypro3em_old` (1010) or
  `shellypro3em_new` (2220).
- **Shelly EM gen3**
- **Shelly Pro EM50**

> **Which device type?** Use **CT002**/**CT003** when you steer **multiple**
> storage devices; use a **Shelly** type (`shellypro3em`, `shellyemg3`,
> `shellyproem50`, …) otherwise. See
> [CT002 / CT003 steering](docs/ct002.md)…
