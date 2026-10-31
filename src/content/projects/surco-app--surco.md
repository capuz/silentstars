---
repo: "surco-app/surco"
name: "surco"
description: "Free, open-source track organizer for DJs — auto-tags from Discogs & Bandcamp, spots fake lossless files, detects BPM & key, converts and exports to your DJ software or Apple Music (macOS & Windows)"
readmeQualityOk: true
url: "https://github.com/surco-app/surco"
homepage: "https://www.getsurco.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["audio-analysis", "bandcamp", "discogs", "dj", "electron", "flac", "id3-tags", "metadata", "music", "music-library"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-02T08:14:40Z"
lastCommitAt: "2026-10-31T09:49:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 63
maintainers: ["getsurco"]
openGraphImageUrl: "https://opengraph.githubassets.com/acaeac10acfbe7ea68731bb02c2c54372a00496643b3bf27be7ca896d38e5ac5/surco-app/surco"
---

Open-source track organizer for DJs, for macOS and Windows.

Drop your tracks in. Surco finds the right metadata, checks that your files really are lossless, converts them and marks their cues. Then it keeps your rekordbox, Traktor, Engine DJ and Apple Music libraries up to date, so a track stays the same track everywhere you play it.

## What it does

- **Auto-tagging.** Searches Discogs, Bandcamp, Deezer, Beatport and MusicBrainz and matches whole imports on its own. Title, duration, artist and catalog number have to agree before anything is written, and uncertain matches wait for a one-click review instead of being applied.
- **Fake-lossless detection.** A spectrogram and a verdict that explains itself with the numbers it measured. It flags a 320 kbps re-encode sold as FLAC or WAV, upsampled audio and other quality lies.
- **Cue editor.** Hot cues and CALLs on the rekordbox wave and grid. Pick a flow such as Mix in 64 or one of your own, click where the track drops and the rest of the cues land counting back.
- **Auto mark.** Suggests where each track drops, on one track or a whole selection, and tells sure suggestions from doubtful ones. It learns how you mark from the cues…
