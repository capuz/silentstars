---
repo: "Soheab/oauthcord.py"
name: "oauthcord.py"
description: "A Python library for interacting with the Discord API using OAuth2 authentication, with support for RPC."
readmeQualityOk: true
url: "https://github.com/Soheab/oauthcord.py"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-07T20:25:23Z"
lastCommitAt: "2026-09-27T09:29:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 75
undervaluedScore: 37
maintainers: ["Soheab"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d345576d26fb1b6cf76a26567f679b32efffc2a1963a8d8b95f8b48fcc77d52/Soheab/oauthcord.py"
---

> [!WARNING]
> This library is under active development. Public APIs and internal structures may change without notice.
>
> Expect breaking changes. Do not treat the current API as production-stable.
>
> PRs are welcome, but since I'm actively working on this and may redesign things, please open an issue or contact me before working on anything beyond a fix or critical bug.

## Contact

Feel free to contact me on Discord @`soheab_` (ID `150665783268212746`). DMing or mentioning me in any server is fine to me.

You can also open an issue for anything, whether it's a question, a bug, or a feature idea.

# oauthcord.py

`oauthcord.py` is a Python library for interacting with the Discord API using OAuth2 authentication, with support for RPC.

It is designed for applications that need to send users through Discord OAuth, exchange authorization codes for tokens, and call Discord endpoints with typed models instead of raw JSON payloads. It also supports Discord's [RPC protocol](https://docs.discord.com/developers/topics/rpc) for talking to a local Discord desktop client over IPC.

This is not a gateway or bot framework. If you need bot events, shards, or gateway state, use a bot SDK such…
