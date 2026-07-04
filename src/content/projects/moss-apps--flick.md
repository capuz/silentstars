---
repo: "moss-apps/Flick"
name: "Flick"
description: "Flick Player is a high-performance music player for Android that delivers bit-perfect audio through external USB DACs and amplifiers via a custom Rust-based UAC 2.0 implementation. It features a 31-band equalizer, automatic music library scanning with metadata extraction, gapless playback built with Flutter."
readmeQualityOk: true
url: "https://github.com/moss-apps/Flick"
homepage: "https://www.flick-player.site"
language: "Dart"
languages: ["Dart", "Rust"]
languagePcts: [69, 23]
stars: 102
forks: 7
openIssues: 5
closedIssues: 24
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2025-12-14T17:33:36Z"
lastCommitAt: "2026-07-04T22:52:00Z"
lastReleaseAt: "2026-06-15T14:36:10Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 39
maintainers: ["ultraelectronica"]
openGraphImageUrl: "https://opengraph.githubassets.com/ceb6e8495aa04f67f137c6efbc6e22e8fb184338b91cf39aa767ead90956d983/moss-apps/Flick"
---

# Flick

</p>

  </a>
</p>

---

An Android music player with a Rust audio engine. Bit-perfect PCM and native DSD to USB DACs, hi-res on DAPs, plus a full DSP chain.

Builds at [GitHub Releases](https://github.com/moss-apps/flick) or the [Play Store](https://play.google.com/store/apps/details?id=com.mossapps.flick).

## What it does

- **Rust audio engine** — bit-perfect USB DAC output (UAC 2.0), native DSD (DSF/DFF/WavPack), DoP, and DAP hi-res via Oboe/AAudio exclusive mode. Falls back to Android's standard pipeline when needed.
- **31-band parametric EQ** with dynamics (compressor/limiter), convolution reverb from IR files, crossfade, and gapless playback.
- **Library** — MediaStore scanner with differential sync, removable storage (SD/USB) via SAF, metadata editing that writes back to files, album art from MusicBrainz/iTunes/Deezer. CUE sheet support, EAC rip logs, duplicate detection.
- **Lyrics** — search via LRCLib.net, synced LRC editor, plain text fallback.
- **Widgets** — mini player, compact, and full-size widgets that work when the app is killed.
- **Flick Replay** — daily/weekly/monthly/yearly listening recaps you can save as PNG.
- **Last.fm scrobbling**, adaptive…
