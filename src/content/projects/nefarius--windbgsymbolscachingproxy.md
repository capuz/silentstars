---
repo: "nefarius/WinDbgSymbolsCachingProxy"
name: "WinDbgSymbolsCachingProxy"
description: "WinDbg Symbols Caching Proxy."
readmeQualityOk: true
url: "https://github.com/nefarius/WinDbgSymbolsCachingProxy"
homepage: "https://discord.nefarius.at"
language: "C#"
languages: ["C#"]
languagePcts: [82]
stars: 19
forks: 2
openIssues: 0
closedIssues: 6
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-04-10T15:11:42Z"
lastCommitAt: "2026-10-31T15:58:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 100
undervaluedScore: 69
maintainers: ["nefarius", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2d9bf68b5f7d3b6367030e52168f35679553f6621c83fb38ce2dec4d4068674/nefarius/WinDbgSymbolsCachingProxy"
fundingLinks: ["GITHUB:https://github.com/nefarius", "PATREON:https://patreon.com/nefarius", "LIBERAPAY:https://liberapay.com/Nefarius", "CUSTOM:https://www.buymeacoffee.com/Nefarius", "CUSTOM:https://paypal.me/NefariusMaximus", "CUSTOM:https://docs.nefarius.at/Donations/"]
---

# <img src="assets/NSS-128x128.png" align="left" />WinDbgSymbolsCachingProxy

Microsoft debugging symbols caching proxy using [FastEndpoints](https://fast-endpoints.com/)
and [MongoDB](https://mongodb-entities.com/).

## About

When working frequently
with [WinDbg](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/debugging-using-windbg-preview) to
analyze kernel memory dumps, symbol (down)loading is a widespread occurrence. What's also quite common is the abysmal
performance of the official Microsoft Symbol Servers, taking easily **between two and three seconds** for every request!
Being fed up with wasting precious lifetime I made this little caching proxy you can put in between your WinDbg
instances and use it in conjunction with an offline caching directory. The proxy server will store a copy of the
requested symbol in a MongoDB database, including information if the symbol even exists upstream.
This information gets cached for a week, so you won't waste any more time twiddling thumbs while the Microsoft servers
take their sweet time to return a 404.

## Real-world example

> [!NOTE]  
> I performed these tests in a very early version of the project; recent…
