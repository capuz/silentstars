---
repo: "faisalkindi/CrimsonDesert-UltimateModsManager"
name: "CrimsonDesert-UltimateModsManager"
description: "Crimson Desert Ultimate Mods Manager — Delta-based PAZ/PAMT patching, script mod support, conflict detection, drag-and-drop import"
readmeQualityOk: true
url: "https://github.com/faisalkindi/CrimsonDesert-UltimateModsManager"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 117
forks: 19
openIssues: 11
closedIssues: 239
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-03-26T13:25:46Z"
lastCommitAt: "2026-08-29T10:22:38Z"
lastReleaseAt: "2026-03-31T08:41:12Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 32
maintainers: ["faisalkindi", "AgentKush", "glebkin"]
openGraphImageUrl: "https://opengraph.githubassets.com/f37b3a215301d7979f0106379ece0f38b28eae5239ee4f4f30eeaf50b744e541/faisalkindi/CrimsonDesert-UltimateModsManager"
---

</p>

  <b>The only mod manager you need for Crimson Desert.</b><br>
  Every mod format. Every store (Steam, Epic, Xbox). One click.
</p>

</p>

---

## What's New

CDUMM ships frequent updates. The complete version history — every release back to the first commit — is in **[CHANGELOG.md](https://github.com/faisalkindi/CrimsonDesert-UltimateModsManager/blob/HEAD/CHANGELOG.md)**; the [Releases](https://github.com/faisalkindi/CrimsonDesert-UltimateModsManager/releases) page has full notes and downloads (the in-app updater shows them too). Recent highlights, newest first:

### v3.13 — 22 more of the game's tables readable

- **v3.13.0** — _August 12, 2026_ — **CDUMM reads 22 more of the game's data tables, taking it from 7 to 29.** Their layouts were worked out from the game's own code and then held to a hard rule before being accepted: the walk has to account for **every byte of every record** in the table, and no other layout the format allows may fit it as well. A walk that reaches the last field with bytes left over hasn't understood the record, it's just stopped politely, so anything short of an exact fit was thrown away rather than shipped. Getting there needed a real bug fixed…
