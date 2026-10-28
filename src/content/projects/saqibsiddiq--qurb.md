---
repo: "saqibsiddiq/Qurb"
name: "Qurb"
description: "Developing a cross-platform file-sharing application enabling seamless file transfer between desktop and mobile devices across different networks, regardless of geographic distance."
readmeQualityOk: true
url: "https://github.com/saqibsiddiq/Qurb"
homepage: "https://qurb.cloud"
language: "Rust"
languages: ["Rust"]
languagePcts: [71]
stars: 19
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-11T08:04:54Z"
lastCommitAt: "2026-10-28T09:57:39Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 45
maintainers: ["saqibsiddiq"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c6b9c3c2787c6743bf0096839f6f803f57b5fc0992c0ea065506b5368257f96/saqibsiddiq/Qurb"
---

# qurb

Private cloud storage. Dropbox-like sync where your files stay on your own
devices — they move directly between them, encrypted end to end, and are never
stored on our servers.

**Status (2026-10-19): working on Linux and Android, both apps designed, in
light and dark. A computer backs up a phone's WhatsApp and chosen folders, and
keeps a folder for each person, opened with a yes on their phone. Release
0.1.0 is built — Linux, Android on every ABI, and Windows, which has not run
on Windows — and not yet published ([docs/releasing.md](https://github.com/saqibsiddiq/Qurb/blob/HEAD/docs/releasing.md)).**

- The engine is complete and hardened: two devices sync end to end over QUIC,
  with encryption, conflict handling that never discards an edit, and key
  management — verified at 100,000 files, and tested against crashes, wrong
  clocks, long absences, damaged disks and hostile peers.
- The **desktop window** does everything the command line does: setting up,
  pairing by QR code or six digits, browsing and freeing files, sending to one
  device, recently deleted, settling conflicts, sharing a folder with chosen
  devices, keeping a folder only remotely, and a passphrase on…
