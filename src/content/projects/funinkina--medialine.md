---
repo: "funinkina/medialine"
name: "medialine"
description: "A GNOME Shell extension that shows the currently playing media track in the top bar via MPRIS."
url: "https://github.com/funinkina/medialine"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
topics: ["gnome-extension", "gnome-shell", "gnome-shell-extension", "dbus-service", "mpris", "mpris-dbus-interface"]
stars: 20
forks: 1
openIssues: 4
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 5
createdAt: "2026-05-26T18:33:27Z"
lastCommitAt: "2026-06-29T07:22:21Z"
lastReleaseAt: "2026-06-21T08:42:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 46
maintainers: ["funinkina"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6d26743cd9420dec112bd69ba300eaabc762f33b28a296c407711af5caf03dd/funinkina/medialine"
---

# Medialine

A GNOME Shell extension that shows the currently playing media track in the top bar in a elegant minimal way.

</a>

</div>

<details>
<summary>Preview</summary>

</details>

## Features

### Panel Indicator
- Displays track info (title, artist, album) inline in the top bar
- Four icon modes: **album art**, **app icon**, **playback status icon**, or **custom image**
- Auto-hides when no media is playing or playback is stopped
- Configurable icon size, spacing, text separator, and max label width

### Rich Popup
Click the indicator to open a media popup with:
- Album art preserving the original aspect ratio (square album covers and 16:9 video thumbnails like YouTube) — click to **raise/focus the player window**
- **App icon badge** overlaid on the album art, toggleable in settings
- Track title, artist, and album name
- Live **progress bar** with elapsed and total time (updates every second)
- **Click or drag** anywhere on the progress bar to seek (a thumb appears on hover when the player supports seeking)
- **Playback controls** — shuffle, previous, play/pause, next, repeat (off / track / playlist) — with greyed-out state when unavailable
- Customizable popup colors…
