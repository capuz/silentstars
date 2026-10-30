---
repo: "Ryoku-dev/ryostore"
name: "ryostore"
description: "Ryoku store of community tools,plugins, bundles and MORE!"
readmeQualityOk: true
url: "https://github.com/Ryoku-dev/ryostore"
language: "QML"
languages: ["QML"]
languagePcts: [82]
stars: 18
forks: 43
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 35
recentReleases: 1
createdAt: "2026-06-03T22:16:04Z"
lastCommitAt: "2026-10-30T10:22:59Z"
lastReleaseAt: "2026-08-05T20:03:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 98
undervaluedScore: 59
maintainers: ["neur0map", "aethctl", "feelyourwarmth"]
openGraphImageUrl: "https://opengraph.githubassets.com/14b82360b694ae67b40da131a0682262fcb16a1812a80c248731660b8cc7de83/Ryoku-dev/ryostore"
---

# Ryostore

The content catalogue for the [Ryoku](https://ryoku.dev) desktop. This is the
repository behind **Ryostore**, the in-desktop store: everything you browse and
install from Ryoku Settings and the Store lives here, and the shell fetches it
from this repo's `main` on demand.

Every top-level folder is one independent catalogue with its own `registry.json`
index. An item is invisible to the desktop until it is listed in that registry.

| Catalogue | What it holds | Where it shows up |
| --- | --- | --- |
| `rices/` | Whole-desktop looks: window style, shell skin, colour mode, wallpaper | Settings -> Appearance -> Rices |
| `plugins/` | Shell plugins: desktop widgets, frame popouts, and QS Bar widgets | Settings -> Add-ons -> Plugins |
| `colorschemes/` | Colour schemes | Settings -> Colour scheme -> Download |
| `lockscreens/` | Lockscreen looks | Settings -> Lockscreen |
| `decors/` | Poster / ornament art for the desktop | Settings -> Appearance |
| `barstyles/` | Bar skins | Settings -> Bar |
| `docks/` | Docks: the app strip on a screen edge, shared by every bar style, built by the community | Edit desktop -> Dock |
| `launchers/` | App launchers: what Super+Space…
