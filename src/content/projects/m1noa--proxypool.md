---
repo: "M1noa/proxypool"
name: "proxypool"
description: "hourly-refreshed, checked, proxy list - the only proxy repo you'll ever need"
readmeQualityOk: true
url: "https://github.com/M1noa/proxypool"
homepage: "https://proxies.minoa.cat"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["anonimity", "free", "free-proxy-list", "http", "proxies", "proxy-list", "residential-proxy", "socks4", "socks5", "vpn"]
stars: 13
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-26T04:44:34Z"
lastCommitAt: "2026-11-09T03:30:05Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/986862030005e57a8ffaa54599ab21854e3fb0cae9e0317abfef4b40cb34d632/M1noa/proxypool"
---

# [ProxyPool](https://proxies.minoa.cat)
> THIS PROJECT WAS MADE PARTIALLY USING AGENTIC AI CODING TOOLS

   

hourly refreshed proxy lists. fetched from public sources, and checked...

| file | what |
|---|---|
| [proxies.json](https://raw.githubusercontent.com/M1noa/proxypool/output/proxies.json) | all live proxies, sorted by quality then response time: protocols, country, anonymity, sources, reputation |
| [proxies.minoa.cat](https://proxies.minoa.cat) | api that can filter and return proxies in any format (eg http.txt) |
| [useragents.json](https://raw.githubusercontent.com/M1noa/proxypool/output/useragents.json) | weighted current user agent strings with usage shares |
| [proxies.minoa.cat/useragents.html](https://proxies.minoa.cat/useragents.html) | api that can filter and return user agents in any format (eg ua-chrome.txt) |

sources configurable in [`sources.jsonc`](https://github.com/M1noa/proxypool/blob/HEAD/sources.jsonc). country + asn data from [db-ip lite](https://db-ip.com); `ip_type` (hosting/residential) from [ipverse/as-metadata](https://github.com/ipverse/as-metadata) (cc0).

each proxy that a public threat feed lists carries a `reputation` block in…
