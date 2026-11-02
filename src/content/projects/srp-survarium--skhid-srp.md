---
repo: "srp-survarium/skhid-srp"
name: "skhid-srp"
description: "Servers for Survarium 0.100b, 0.21d and 0.26g (Skhid community servers), with docs and client patch tools"
readmeQualityOk: true
url: "https://github.com/srp-survarium/skhid-srp"
language: "Rust"
languages: ["Rust", "ActionScript"]
languagePcts: [49, 22]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-12T15:33:56Z"
lastCommitAt: "2026-11-02T13:38:05Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 42
maintainers: ["sushi-shi"]
openGraphImageUrl: "https://opengraph.githubassets.com/42176cf10ac5ac10a43ecf880bc3cd31f921ee0a2047c7ac66e3c342ed1a454c/srp-survarium/skhid-srp"
---

# Survarium Restoration Project: servers for three game versions

Server side of the old online shooter Survarium, written in Rust, for three
builds of the original game client. Each build speaks its own network
protocol, so each has a server of its own.

Built on the open source SRP project,
[srp-survarium/srp](https://github.com/srp-survarium/srp), whose 0.100b server
is where this code began. Not affiliated with or endorsed by Vostok Games;
Survarium is a trademark of its owners. The game itself is not in this
repository.

## The three versions

| Folder | Game build | What it is | State |
|---|---|---|---|
| [`srp-0100b/`](https://github.com/srp-survarium/skhid-srp/blob/HEAD/srp-0100b/) | 0.100b (early 2013) | Server-authoritative matches: the server runs combat, spawns, batteries and traps | Works locally; not hosted |
| [`srp-021d/`](https://github.com/srp-survarium/skhid-srp/blob/HEAD/srp-021d/) | 0.21d, build 2010 (April 2014) | Lockstep matches: clients simulate, the server relays inputs and compares world hashes | Hosted on skhid.link from 2026-10-10 to 2026-10-12; not hosted now |
| [`srp-026g/`](https://github.com/srp-survarium/skhid-srp/blob/HEAD/srp-026g/) | 0.26g,…
