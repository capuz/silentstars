---
repo: "TulevaEE/onboarding-client"
name: "onboarding-client"
description: "Frontend for web onboarding client of Tuleva"
readmeQualityOk: true
url: "https://github.com/TulevaEE/onboarding-client"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [88]
topics: ["react", "javascript", "scss", "translation", "oauth", "circleci", "redux"]
stars: 9
forks: 8
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 35
recentReleases: 0
createdAt: "2017-01-30T07:33:17Z"
lastCommitAt: "2026-11-02T13:38:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 88
undervaluedScore: 75
maintainers: ["Kadi-R", "ErkoRisthein", "mariasuurna-bit"]
openGraphImageUrl: "https://opengraph.githubassets.com/07b57d06669f74fe04856cfaf03e04147800ccdafed0c43bf33e29963f45e795/TulevaEE/onboarding-client"
---

# :chart_with_upwards_trend: Onboarding client

1. Client for [Tuleva onboarding](https://pension.tuleva.ee)

## Tech evolution

Originally, this repo was built using js, redux and enzyme for testing. Over the years react has grown, rendering some of these technologies less useful. This architecture has shown itself to be overcomplicated and the current tests to not give as much value as they could. Thus, whenever you are working on new functionality in this repo, try to do the following:

- Convert files you touch to typescript, this can be easily done as typescript and js can be used interchangeably in this repo.
- Convert class components to functional if possible.
- Try to not use Redux (See below)
- Use react testing library and msw for tests and try to mock as little as possible, building tests to imitate how a user would use your application. See the [`CancellationFlow`](https://github.com/TulevaEE/onboarding-client/blob/HEAD/src/components/flows/cancellation/CancellationFlow.tsx) for an example of how to incrementally move to this structure while reusing previous redux code.

### Migrating away from Redux

* Prefer [React Query](https://react-query.tanstack.com/) hooks in…
