---
repo: "neodeskapp/neodesk"
name: "neodesk"
description: "Your own remote desktop server, compatible with the RustDesk client."
readmeQualityOk: true
url: "https://github.com/neodeskapp/neodesk"
homepage: "https://neode.sk"
language: "Go"
languages: ["Go"]
languagePcts: [71]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-11-09T23:15:58Z"
lastCommitAt: "2026-11-27T16:23:08Z"
lastReleaseAt: "2026-11-27T16:25:28Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 54
maintainers: ["rathlinus", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1451983191/0c117755-33be-4141-bf52-406790885941"
discussionCount: 0
---

NeoDesk is a remote desktop server you run yourself. It speaks the RustDesk
protocol, so the normal RustDesk client connects to it, and it comes with a web
console for the devices you look after. Your data stays on your server: the
project sends no analytics, crash reports or usage data anywhere
([Privacy](https://neode.sk/docs/project/privacy)).

Getting help: ask on the [NeoDesk Discord](https://discord.gg/nwERSawufr) or in
[GitHub Discussions](https://github.com/neodeskapp/neodesk/discussions).

## One binary on your server

RustDesk's own server is two programs, hbbs and hbbr. NeoDesk does both jobs
in one Go binary, and the same binary answers the client API and serves the web
console. It stores its data in SQLite, or in PostgreSQL if you prefer.
