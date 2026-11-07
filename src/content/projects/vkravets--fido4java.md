---
repo: "vkravets/Fido4Java"
name: "Fido4Java"
description: "Framework to working with fido stuff"
readmeQualityOk: true
url: "https://github.com/vkravets/Fido4Java"
language: "Java"
languages: ["Java"]
languagePcts: [74]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2012-03-01T08:42:36Z"
lastCommitAt: "2026-11-07T13:54:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 77
undervaluedScore: 69
maintainers: ["vkravets"]
openGraphImageUrl: "https://opengraph.githubassets.com/d72d14f4f2427a6db277b7f0e713ebf722db4a6293f4dde5c6500b0a8fd5a196/vkravets/Fido4Java"
---

JFtn
====

### BUILD STATUS:

### ABOUT
JFtn is a Java FTN mail node and tosser, derived from the original
[JFtn project](https://sourceforge.net/projects/jftn/). It is under active development.
The standalone distribution requires Java 17+ or a package with a bundled JRE.
The application bundle uses Netty as its default BinkP transport.
`JFtnRunner` reads connections and local AKAs from the `Link` entries in `jftn.conf`.
Station metadata uses `SysOp` and the optional `System`, `Location` and `NDL` keys
(defaults: `JFtn`, an empty location and `BINKP`).
Report bugs and feature requests through the repository's issue tracker.

### FEATURES
- Full/Headless with SQL, Legacy with JAM/MSG mailboxes, and SQL-free Transit profiles.
- Netmail and echomail routing, subscriptions and durable outbound queues.
- Binkp 1.0/1.1, NR and resumable transfers; Netty by default, with MINA2 available.
- Optional JAM editor views and historical archive import, checked against HPT.
- Scripted AreaFix, FileFix, TIC distribution and node/point directory imports.
- Embedded Vue/TypeScript UI with English/Ukrainian, light/dark themes, password
  and passkey login, point registration, node settings and…
