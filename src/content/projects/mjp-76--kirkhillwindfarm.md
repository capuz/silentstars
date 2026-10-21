---
repo: "MJP-76/KirkHillWindFarm"
name: "KirkHillWindFarm"
description: "Home Assistant integration for the Kirk Hill Community Wind Farm dashboard API"
readmeQualityOk: true
url: "https://github.com/MJP-76/KirkHillWindFarm"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [72, 28]
topics: ["hacs", "home-assistant", "home-assistant-integration", "lovelace", "wind-energy"]
stars: 11
forks: 0
openIssues: 1
closedIssues: 49
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-29T16:48:49Z"
lastCommitAt: "2026-10-21T21:14:32Z"
lastReleaseAt: "2026-07-04T16:14:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["MJP-76"]
openGraphImageUrl: "https://opengraph.githubassets.com/261cb5c8cebd46c8a87a8aef382cebc315080e8bc11ed0e1b6d7ff1fa8d99dbe/MJP-76/KirkHillWindFarm"
---

# Kirk Hill Wind Farm Integration

A Home Assistant custom component for the Kirk Hill Wind Farm dashboard API.

It pulls current data for both OpenAPI scopes:

- `owner` (your ownership share)
- `site` (whole-site values)

> - **Money is a panel, not a column.** The Owner and Site panels carry
>   generation, power, capacity and wind only — the `Value (£)` column, the
>   `£/h` cells, the Member savings line and both price pills are gone. A
>   **Return on investment** panel leads the right column above them, in the
>   same box, showing the headline: invested amount, all periods, from the
>   board, your estimates and your return — click it for the full ledger
>   (every period the board declared a p/W rate for, its £ figure and ROI) and
>   the add/edit forms. The old price/rate entities stay disabled and zeroed
>   while the model is confirmed. Generation, power and capacity are unaffected.
> - **Kirk Hill API remains the authoritative source for actual farm generation.**

## Support me

If you find this project useful, and would like to help support its continued development, you can do so here:

## Features

The integration polls the Kirk Hill Wind Farm API and turns it into…
