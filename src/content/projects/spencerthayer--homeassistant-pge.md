---
repo: "spencerthayer/homeassistant-pge"
name: "homeassistant-pge"
description: "Home Assistant custom integration for Portland General Electric (PGE) energy usage, billing, and programs — not California PG&E."
readmeQualityOk: true
url: "https://github.com/spencerthayer/homeassistant-pge"
homepage: "https://github.com/spencerthayer/homeassistant-pge"
language: "Python"
languages: ["Python"]
languagePcts: [80]
topics: ["energy", "hacs", "home-assistant", "portland-general-electric"]
stars: 9
forks: 1
openIssues: 3
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-26T16:20:54Z"
lastCommitAt: "2026-08-15T04:04:20Z"
lastReleaseAt: "2026-07-30T14:07:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 58
maintainers: ["spencerthayer", "LJspice"]
openGraphImageUrl: "https://opengraph.githubassets.com/065b672222188cfc7e5a9922eb2164ce403db9386080122208cf11fd0ed2f7e4/spencerthayer/homeassistant-pge"
discussionCount: 2
---

# Portland General Electric (PGE) Energy for Home Assistant

Home Assistant custom integration for **Portland General Electric (PGE)** — imports your energy usage into the HA Energy dashboard and a first-party `/pge` panel, using PGE's own in-house portal GraphQL API (not Opower, not HTML scraping).

> **Not Pacific Gas & Electric (PG&E).** This is for [Portland General Electric](https://portlandgeneral.com/) in Oregon. It does **not** work with California PG&E / Opower integrations.
>
> **Unsupported / unofficial:** MFA- and CAPTCHA-enabled PGE accounts are not supported (fail closed). The portal API is unofficial and may change without notice. Not affiliated with or endorsed by Portland General Electric.

**Requires Home Assistant 2026.7.0+.**

---

## The panel

A first-party Home Assistant panel at `/pge` — usage, cost, outdoor temperature, billing, programs, and live sync progress for all configured accounts.

_At a glance — yesterday and week totals, statement and since-statement sums, PGE's own open-cycle estimates, amount due._

_Usage — hourly kWh bars with a cost series, plus Range accounting and per-hour breakdown tables._

  <br><em>Analytics — weather vs usage and…
