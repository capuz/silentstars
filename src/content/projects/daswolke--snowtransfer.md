---
repo: "DasWolke/SnowTransfer"
name: "SnowTransfer"
description: "Minimalistic rest client for the discord api"
url: "https://github.com/DasWolke/SnowTransfer"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["discord", "rest", "api"]
stars: 66
forks: 18
openIssues: 0
closedIssues: 7
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2017-10-15T18:00:13Z"
lastCommitAt: "2026-06-24T23:37:27Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 33
maintainers: ["PapiOphidian", "cloudrac3r"]
openGraphImageUrl: "https://opengraph.githubassets.com/36c751229deb2ca5fd3caf00aa74bea0954ad0010ad3d8406aa28dfeca7e14ef/DasWolke/SnowTransfer"
---

# A minimalistic rest client for the discord api

---

Part of the WeatherStack

SnowTransfer is a small library specially made to **only** cover the REST/HTTP area of the discord api.
It makes no assumptions about the rest of your stack, therefore you can use it anywhere as long as you use node 22.0.0 or higher.

### Some of the things that make SnowTransfer awesome:
- No requirement for other components
- Full coverage of the discord rest api
- Well documented
- Supports both Bot and Bearer tokens (Bearer tokens will have much more limited access than Bot tokens)

### General Usecase:
SnowTransfer is not your everyday library,
especially compared to other libraries, it makes sense to use it when you:
- Want to build a microservice based bot, where casual discord libraries would not be suitable since they assume the availability of other components like a gateway or a cache
- Only need a simple rest client that can be wrapped easily.

### Microservice Bots:
I've written a general whitepaper on the idea of microservice bots, which you can find on gist: [Microservice Bot Whitepaper](https://gist.github.com/DasWolke/c9d7dfe6a78445011162a12abd32091d)

### Documentation:
You can find…
