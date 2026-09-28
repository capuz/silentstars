---
repo: "Clatasha/Clatasha-HUD"
name: "Clatasha-HUD"
description: "Clatasha HUD is a OBS Studio Plugin that Creates a Status indication HUD that only you can see while streaming or recording. it tells how long you've been recording for , audio levels, disk space and other important displays. "
readmeQualityOk: true
url: "https://github.com/Clatasha/Clatasha-HUD"
language: "C++"
languages: ["C++"]
languagePcts: [97]
topics: ["gaming", "obs-studio", "overlay"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-09-19T17:16:32Z"
lastCommitAt: "2026-09-28T10:06:08Z"
lastReleaseAt: "2026-09-25T22:10:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["Clatasha"]
openGraphImageUrl: "https://opengraph.githubassets.com/f67f5a06f85446fb7a868a012ac3826920d5795a0fb935d226a7c0d7d90e199b/Clatasha/Clatasha-HUD"
---

</p>

# Clatasha HUD

Clatasha HUD is a Windows OBS Studio plugin that adds a compact, always-on-top status HUD for the streamer and a five-slot browser overlay manager for HUD-only, stream-only, or combined overlays.
</p>

The plugin runs inside OBS Studio. It does not require a separate Python process.

### Current features
</p>

### Compact local HUD

- 145 × 50 frameless, always-on-top, click-through HUD.
- Actual foreground game/application FPS through the Clatasha DXGI ETW helper.
- OBS renderer FPS shown beside the game FPS.
- Game FPS is blue while idle and red while recording or streaming.
- Desktop Audio and Mic/Aux segmented level meters with separate monitor and microphone icons.
- Recording/streaming session timer.
- Recording-drive free-space display.
- Recording/streaming activity spinner.
- Adjustable HUD opacity and corner placement.
- Visibility watchdog that restores the main HUD if Windows unexpectedly hides or drops its topmost state.
- Windows capture-exclusion request for local HUD windows where supported.

If game FPS cannot be read, Clatasha HUD displays `--` rather than substituting OBS renderer FPS.
</p>

### Browser Overlays

Clatasha HUD includes five…
