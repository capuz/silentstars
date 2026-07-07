---
repo: "freeCodeCamp/news"
name: "news"
description: "freeCodeCamp's JAMstack Developer News publication. Built with 11ty, Ghost, and help from kind contributors like you."
readmeQualityOk: true
url: "https://github.com/freeCodeCamp/news"
homepage: "https://freecodecamp.org/news"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [42, 28]
stars: 65
forks: 59
openIssues: 9
closedIssues: 50
watchers: 9
contributors: 52
recentReleases: 0
createdAt: "2021-06-25T11:33:34Z"
lastCommitAt: "2026-07-07T06:38:10Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 55
maintainers: ["renovate[bot]", "scissorsneedfoodtoo", "raisedadead"]
openGraphImageUrl: "https://opengraph.githubassets.com/60f1dda86f37af6253d9162aa2537d9f5cb19fb0a8f49ac0399293205240d3c3/freeCodeCamp/news"
fundingLinks: ["GITHUB:https://github.com/freeCodeCamp", "PATREON:https://patreon.com/freecodecamp", "CUSTOM:www.freecodecamp.org/donate"]
---

# Developer News

Welcome to freeCodeCamp's [Developer News][1] codebase — A JAMStack app built with [Hashnode][2], [11ty][3], and lots of love from the community. We use this project to build and deploy multiple instances of our publications in several world languages. All of the services are then distributed globally by our CDN.

## Contributing

We limit contributions to this specific repository because of the complexities of our deployment and QA processes. We welcome you to work on any of our other open-source projects. You can find our contributing [guidelines here][5].

If you have found an issue or a bug in this repository, please connect with us in the [contributor's chat room][6] first.

Happy Contributing!

## Builds and Deployments

### Build

We use GHA to build the news sites. Workflows are in the `.github/workflows` directory.

### Build Schedules

New builds to the `/news` sites are triggered according to the schedule below:

| Language     | Schedule (UTC)                                                                    |
| :----------- | :-------------------------------------------------------------------------------- |
| English      | Every 3 Hours - except…
