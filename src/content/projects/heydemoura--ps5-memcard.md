---
repo: "heydemoura/ps5-memcard"
name: "ps5-memcard"
description: "PS5 payload that mirrors every save to a USB drive under /memcard and imports them into any profile from a web page"
readmeQualityOk: true
url: "https://github.com/heydemoura/ps5-memcard"
language: "C"
languages: ["C"]
languagePcts: [99]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-11-10T01:44:32Z"
lastCommitAt: "2026-11-15T08:26:58Z"
lastReleaseAt: "2026-11-15T08:27:45Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 79
undervaluedScore: 17
maintainers: ["heydemoura"]
openGraphImageUrl: "https://opengraph.githubassets.com/f98909c13420d25b3d80715e9f2f9068418aa6989f0c449be475155233aef963/heydemoura/ps5-memcard"
---

# ps5-memcard

A memory card for a jailbroken PS5. The payload watches every save on the console
(PS5 and PS4 titles, all profiles) and keeps a copy on a USB drive under `/memcard`.
Several drives can be memory cards at once; every card gets every save.
Its web page shows what is on each card, imports any card save into any profile on
the console, and backs up a save on demand.

Built on [Garlic SaveMgr](https://github.com/earthonion/garlic-savemgr) by earthonion:
the native save mounting, re-signing and import code is Garlic's. The page follows
the look of [sendpayload.pages.dev](https://sendpayload.pages.dev).

## Use

1. Plug a USB drive (exFAT or FAT32) into the PS5.
2. Send `ps5-memcard.elf` to the ELF loader (port 9021).
3. Open `http://<ps5-ip>:8083/`.

From then on it runs by itself until the console reboots. Sending the payload again
replaces the running copy.

Loading the payload also:

- adds a **PS5 Memcard** shortcut to the **Media** tab of the home screen, which
  opens the page in the console's own browser (`http://127.0.0.1:8083/`);
- shows a notification, with the same icon, saying how many memory cards were
  found: *PS5 Memcard / 2 Memory Cards detected*.

The…
