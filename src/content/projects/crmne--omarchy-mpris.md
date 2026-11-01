---
repo: "crmne/omarchy-mpris"
name: "omarchy-mpris"
description: "Media controls for the Omarchy bar with album art, now-playing metadata, and playback buttons"
readmeQualityOk: true
url: "https://github.com/crmne/omarchy-mpris"
homepage: "https://plugins.omarchy.org/plugin.html?id=crmne.mpris"
language: "QML"
languages: ["QML", "Python"]
languagePcts: [54, 38]
topics: ["hyprland", "mpris", "omarchy", "omarchy-plugin", "quickshell", "album-art", "media-controls", "music-player", "now-playing", "spotify"]
stars: 21
forks: 7
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-08-13T10:07:30Z"
lastCommitAt: "2026-11-01T22:59:30Z"
lastReleaseAt: "2026-10-28T10:13:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 85
undervaluedScore: 47
maintainers: ["crmne", "renovate[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1332971440/ebe625d7-a8aa-48db-9dc5-bb3de683a6a4"
fundingLinks: ["GITHUB:https://github.com/crmne", "PATREON:https://patreon.com/crmne"]
discussionCount: 0
---

# Media Controls + Album Art for Omarchy

A native Quattro/Quickshell now-playing widget for the Omarchy bar, with media
controls, live album art, and artist/title details:

`previous` · `play/pause` · `next` · `album art` · `artist — title`

On crowded horizontal bars, the widget adapts independently on each monitor.
It shortens the label first, then drops previous/next, play/pause, and artwork
as necessary so it gives space back before the bar sections overlap. The full
track details remain available in the tooltip.

Adaptive sizing measures the visible slots in each bar window, including on
hosts that expose the restricted plugin bar API. It applies in the left and
right sections; centered placement still needs layout cooperation from the
host. If even the compact control cannot fit, the widget temporarily hides
until space is available again.

It works with Spotify and other Linux media players that expose the standard
MPRIS interface. The widget uses Quickshell's MPRIS service directly: it does
not poll `playerctl` or depend on the old Waybar scripts. It also works on custom or cloned bars, which do not receive
the shell's plugin services: there the widget runs its own copy…
