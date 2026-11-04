---
repo: "xPaw/SteamWebAPIDocumentation"
name: "SteamWebAPIDocumentation"
description: "📃 An automatically generated list of Steam Web API interfaces, methods and parameters. Allows you to craft requests in the browser."
readmeQualityOk: true
url: "https://github.com/xPaw/SteamWebAPIDocumentation"
homepage: "https://steamapi.xpaw.me"
language: "TypeScript"
languages: ["TypeScript", "PHP", "Vue"]
languagePcts: [32, 27, 25]
topics: ["vue", "documentation", "steam", "steam-api", "hacktoberfest"]
stars: 258
forks: 32
openIssues: 1
closedIssues: 9
watchers: 13
contributors: 5
recentReleases: 0
createdAt: "2019-03-05T18:09:02Z"
lastCommitAt: "2026-11-04T13:04:38Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 39
maintainers: ["github-actions[bot]", "xPaw", "Revadike"]
openGraphImageUrl: "https://opengraph.githubassets.com/56691f7d0f55757148de76efaf32954a66f0d568a06b3c25d8319343cf84f314/xPaw/SteamWebAPIDocumentation"
fundingLinks: ["GITHUB:https://github.com/xPaw"]
---

# Steam Web API Documentation

An automatically generated list of Steam Web API interfaces, methods and parameters. Allows you to craft requests in the browser.

If you specify the web api key, it will be stored in your browser, and will only be sent to Valve's API servers if you chose to do so.

**⚠ Please do not email me about questions on how to use specific APIs,
I provide an automatically updated and generated list, I do not personally know how to use all of them.**

## api.json

`api.json` is the final file that is generated from various sources:

1. Takes existing [`api.json`](https://github.com/xPaw/SteamWebAPIDocumentation/blob/HEAD/api.json) file as a base, so removed methods are persisted
2. Official list from [`GetSupportedAPIList`](https://steamapi.xpaw.me/#ISteamWebAPIUtil/GetSupportedAPIList)
   - Using normal API key
   - Using partner API key
3. [Parsed protobufs](https://github.com/SteamDatabase/Protobufs) to find service methods and tested against the API
   - Descriptions and fields are also parsed
4. [`api_undocumented_methods.txt`](https://github.com/xPaw/SteamWebAPIDocumentation/blob/HEAD/api_undocumented_methods.txt) to insert undocumented and otherwise…
