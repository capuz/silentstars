---
repo: "the-events-calendar/tribe-common"
name: "tribe-common"
description: "Common classes and functions used in our plugins"
readmeQualityOk: true
url: "https://github.com/the-events-calendar/tribe-common"
language: "PHP"
languages: ["PHP"]
languagePcts: [74]
topics: ["wordpress", "wordpress-plugin", "the-events-calendar", "event-tickets"]
stars: 85
forks: 30
openIssues: 0
closedIssues: 0
watchers: 36
contributors: 66
recentReleases: 0
createdAt: "2015-08-31T17:22:40Z"
lastCommitAt: "2026-11-05T14:05:38Z"
lastReleaseAt: "2016-06-23T18:54:27Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 43
maintainers: ["dpanta94", "sdokus", "larodiel"]
openGraphImageUrl: "https://opengraph.githubassets.com/51ab7536f206ee1d74ebdd742c2df21c9f8b20b5846a64038c3571208126d680/the-events-calendar/tribe-common"
---

# tribe-common
Common classes and functions used in our plugins

## Specs and planning

Work on this repository is planned before it is written, using
[OpenSpec](https://github.com/Fission-AI/OpenSpec). **This is enforced** — every
pull request is checked for a plan.

Plans do not live here. A TEC feature routinely spans several repositories, so a
spec kept in one of them is invisible from the others. They all live in one shared
store instead: [`the-events-calendar/plans`](https://github.com/the-events-calendar/plans).

### First time only

```bash
npm install -g @fission-ai/openspec
git clone git@github.com:the-events-calendar/plans.git ~/repos/tec-plans
openspec store register ~/repos/tec-plans --id tec-plans
openspec config set defaultStore tec-plans
```

The clone path is yours to choose. The `--id` is not — every command refers to the
store as `tec-plans`.

### Working on a ticket

1. **Create the change before writing code**, named after the ticket in lower
   case. OpenSpec requires kebab-case and rejects anything else, so the ticket
   `SOFT-1234` becomes the change `soft-1234`:
   `openspec new change soft-1234 --store tec-plans --description "what this does"`
2. Write…
