---
repo: "xmorose/spindle"
name: "spindle"
description: "Spindle — self-hosted YourSpotify-style listening stats dashboard for Navidrome (thin scrobble plugin -> TS backend -> Vue dashboard)"
url: "https://github.com/xmorose/spindle"
homepage: "https://ko-fi.com/xmorose"
language: "TypeScript"
languages: ["TypeScript", "Vue"]
languagePcts: [52, 45]
topics: ["listening-stats", "navidrome-plugin", "self-hosted", "spotify-wrapped", "subsonic"]
stars: 15
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-05-29T01:17:48Z"
lastCommitAt: "2026-06-23T23:06:43Z"
lastReleaseAt: "2026-06-07T16:51:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 52
maintainers: ["xmorose"]
openGraphImageUrl: "https://opengraph.githubassets.com/811c5d4bb9d7a5bae6600b756c4906798ef16543e167831a72e5576f3f21c1f5/xmorose/spindle"
---

# Spindle

Listening stats for your own Navidrome server. Think Last.fm or Spotify Wrapped, except the data is yours and it lives right next to your music.

I self-host Navidrome and always missed having real stats. Last.fm scrobbling sort of works, but the site feels ancient and my history isn't really mine. So I built this. It watches what you play, keeps the history in its own little SQLite database, and turns it into top artists/albums/tracks, when you actually listen (an hour-of-day clock and a weekday heatmap), your listening sessions, an all-time view, and a year in review. The whole interface recolors itself from the cover art of whatever you've been playing, which I'm probably too proud of.

It's single-user and sits behind a password, so it's fine to put on a real domain.

## Screenshots

  <sub>Home: headline numbers, top artist, listening over time, and the hour-of-day clock</sub>
</p>

<table>
  <tr>
    <td width="50%" align="center"><img src="docs/screenshots/wrapped.png" alt="Year in review"><br><sub>Your year in review</sub></td>
    <td width="50%" align="center"><img src="docs/screenshots/artists.png" alt="Library browse"><br><sub>Browsing the library (artist…
