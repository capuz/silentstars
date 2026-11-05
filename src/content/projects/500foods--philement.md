---
repo: "500Foods/Philement"
name: "Philement"
description: "A Klipper replacement! Well, eventually. In the shorter term it is more a collection of elements that will eventually come together to become a Klipper replacement."
readmeQualityOk: true
url: "https://github.com/500Foods/Philement"
homepage: "https://www.philement.com"
language: "C"
languages: ["C", "Shell", "Lua"]
languagePcts: [41, 28, 21]
topics: ["3d-printing", "klipper"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2024-06-02T00:25:11Z"
lastCommitAt: "2026-11-05T00:21:09Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 76
maintainers: ["500Foods"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df009a1cc38965fd3788dfa0792be05ac1b2491ab232259be0336073d3dfb92/500Foods/Philement"
fundingLinks: ["GITHUB:https://github.com/500Foods", "CUSTOM:www.buymeacoffee.com/andrewsimard500"]
discussionCount: 3
---

# [Philement](https://www.philement.com)

Philement is a family of small pieces that are supposed to add up to a machine you can run locally and then forget about.

The first piece is [Hydrogen](https://github.com/500Foods/Philement/blob/HEAD/docs/H/README.md): a compact, multithreaded C process that already knows how to be a web server, a websocket host, an identity provider, a database client, a mail and print queue, and an MCP endpoint. It is meant to be generic. Print farms are one use. So are other appliances that need a sturdy host and do not want a cloud account or a sidecar for every concern.

Extensibility is pushed where it belongs. Almost everything you will want to add is Lua, against a sandboxed host API, or it is data in the database layer. There is no plugin folder and no `pip install` into the host. On the rare day the host is actually missing a primitive — MCP was one of those — you change the C. That code is structured, documented, and tested on purpose, so changing it is a normal patch, not a hack bolted on the side.

If the only thing this project accomplishes is a C host with Lua on top instead of a Python one, that is already a service. The process stays…
