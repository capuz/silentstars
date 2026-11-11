---
repo: "MisterTemaki/MediaPlayerClassicPS5"
name: "MediaPlayerClassicPS5"
description: "Media Player Classic Home Cinema as a native PS5 app (FFmpeg)"
readmeQualityOk: true
url: "https://github.com/MisterTemaki/MediaPlayerClassicPS5"
language: "C++"
languages: ["C++"]
languagePcts: [54]
stars: 9
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-15T20:41:48Z"
lastCommitAt: "2026-11-11T19:47:35Z"
lastReleaseAt: "2026-11-03T10:38:36Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 56
maintainers: ["MisterTemaki", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/3a819bfd9ae7b1036f441cfaa3550d2df4250eb39db0564138a9cc8e2316c98a/MisterTemaki/MediaPlayerClassicPS5"
---

# Media Player Classic PS5

A port of **Media Player Classic - Home Cinema** (MPC-HC 1.7.13) to the PlayStation 5: MPC-HC's window,
menus, toolbar, seek bar, status bar, dialogs and keyboard behaviour, drawn as Windows 10 draws them, on a
native PS5 app that plays video and music from **USB drives, the console's storage, disc drives (the PS5's own and
USB drives: data discs, unencrypted DVD-Video and Blu-ray), Windows/Samba network shares (SMB) and the Internet
(HTTP/HTTPS, HLS)**.

On Windows MPC-HC plays through DirectShow and LAV Filters, which are FFmpeg inside; here the playback engine
is **FFmpeg 7.1.5** itself (with **dav1d** for AV1), built for the console, and SMB shares are read with
**libsmb2**, the library VLC's SMB module uses.

PS5 port by [github.com/MisterTemaki](https://github.com/MisterTemaki), with the PS5 layer of
[PS5SX2](https://github.com/MisterTemaki) (video out, sound, pad, the installer and the sandbox helper).

**1.6.2 development: encrypted network passwords.** Passwords are masked in the SMB form and hidden from
addresses. **Save password on this PS5** reuses the encrypted password automatically after restart, with no
master password or extra dialog.…
