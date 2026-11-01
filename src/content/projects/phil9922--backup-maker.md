---
repo: "phil9922/backup-maker"
name: "backup-maker"
description: "Automatic real-time, versioned backups to USB drives, NAS, another computer, router USB storage, or SD cards. Install only on the computer being backed up. Windows & Linux. LAN-only. No cloud. No destination software."
readmeQualityOk: true
url: "https://github.com/phil9922/backup-maker"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["backup", "backup-tool", "golang", "nas", "self-hosted", "smb", "file-backup", "incremental-backup", "linux", "local-backup"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-24T03:53:51Z"
lastCommitAt: "2026-11-01T10:44:03Z"
lastReleaseAt: "2026-07-28T19:53:13Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 75
undervaluedScore: 21
maintainers: ["phil9922"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1310602861/8fb52e54-890f-40d0-876a-e3833519759c"
fundingLinks: ["GITHUB:https://github.com/phil9922", "KO_FI:https://ko-fi.com/phil9922"]
discussionCount: 1
---

# backup-maker

**Install it on the one computer you want protected.** Everything else is just
somewhere to put the copies — no software to install over there, no accounts,
nothing leaving your network.

Every folder you choose is mirrored, in real time, onto as many places as you
like at once:

- **a drive inside or plugged into that computer** — an SD card, a USB stick,
  an external disk
- **a USB drive plugged into your router**
- **a NAS**
- **a shared folder on any Windows, Mac or Linux machine** on your network —
  if it can share a folder, it can hold your backups, with **nothing installed
  on it**

That's the whole model: one install, many destinations.

> **Optionally**, a second computer can also run backup-maker and pair with the
> first. That unlocks the strongest transfer mode (block-level, verified, delta
> sync) and works between any operating systems — but it is an upgrade, not the
> point. You never need it.

### Fully self-hosted, and local by design

Your backups go to hardware you own, over your own network. There is **no cloud
service, no account, no telemetry, and no off-site mode** — not disabled by
default, but absent. The sync engine is locked to your…
