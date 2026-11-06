---
repo: "Victor-Kipruto-Rop/status.pesaguard"
name: "status.pesaguard"
description: "Documentation for pesaguard"
readmeQualityOk: true
url: "https://github.com/Victor-Kipruto-Rop/status.pesaguard"
homepage: "http://status.pesaguard.co.ke/"
language: "JavaScript"
languages: ["JavaScript", "CSS"]
languagePcts: [59, 28]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-19T08:27:33Z"
lastCommitAt: "2026-11-06T13:21:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 51
maintainers: ["Victor-Kipruto-Rop"]
openGraphImageUrl: "https://opengraph.githubassets.com/8d8abec675bcd18045fdd1f4780dd42a17d4d7ed186c4fea0942bfaab99df106/Victor-Kipruto-Rop/status.pesaguard"
---

# PesaGuard Status (status.pesaguard.co.ke)

Static status page for PesaGuard. No build step: hand-written HTML plus vanilla
CSS/JS. The home page reads current API and dependency health from
`https://api.pesaguard.co.ke/public/status`; status subscriptions use the same
API origin. Support is available at `support@pesaguard.co.ke`.

The palette, typography and brand mark follow the PesaGuard public website.
The public status experience is light-only, with compact service cards and
responsive navigation. The home page shows 30-day service history strips from
verified daily monitoring samples; missing days remain unknown and partial-day
coverage is disclosed. Uptime percentages appear only after measured coverage
thresholds are met. No synthetic uptime history is generated.

## Live status integration

The backend endpoint returns a sanitized status snapshot for the 19 services
shown on this page. It probes public website, tenant dashboard, developer
platform, documentation, and developer API endpoints; maps Core API dependency,
Daraja OAuth, webhook readiness, and database checks; and exposes the remaining
capabilities as `unknown` until a direct health signal exists. Core…
