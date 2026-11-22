---
repo: "hansonds/Torvia-Jellyfin"
name: "Torvia-Jellyfin"
description: "Jellyfin plugin that turns your TorBox movies and series into Jellyfin libraries and streams them straight from TorBox to every client. Watch history stays on your server."
readmeQualityOk: true
url: "https://github.com/hansonds/Torvia-Jellyfin"
homepage: "https://phoenicx.org/torvia/"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [72, 28]
topics: ["jellyfin-plugin", "jellyfin-torbox", "jellyfin-torbox-plugin"]
stars: 26
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-11-03T16:54:38Z"
lastCommitAt: "2026-11-22T11:48:16Z"
lastReleaseAt: "2026-11-04T07:26:16Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 69
undervaluedScore: 40
maintainers: ["hansonds", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/263bee7045c4c35bfba2e9924c25dddf7899ad05ec46e71c5bfb7bdee8342489/hansonds/Torvia-Jellyfin"
---

A Jellyfin plugin that turns your TorBox movies and series into real Jellyfin libraries —<br>
and streams them <b>directly from TorBox to your Jellyfin apps</b>, with no load on your server.</p>

---

## ✨ Why Torvia

Normally, to watch your TorBox downloads in Jellyfin, the server has to **download the video and
pass it on** to your app (for example with an rclone mount). Every viewer then uses your server's
bandwidth, and a few 4K streams at once can make everything buffer.

**Torvia skips the middle step.** Jellyfin keeps the library, the posters and everyone's watch
history — but the video itself goes **straight from TorBox to the app**:

```
          Library, posters, watch history
 Your app  ◄──────────────────────────────►  Your Jellyfin server   (tiny traffic)
    ▲
    │  The movie itself
    └──────────────────────────────────────  TorBox  (no server in between)
```
