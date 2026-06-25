---
repo: "M-Igashi/mp3rgain"
name: "mp3rgain"
description: "Lossless MP3 volume adjustment - a modern mp3gain replacement written in Rust"
url: "https://github.com/M-Igashi/mp3rgain"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["aacgain", "audio", "audio-normalization", "cli", "flac", "lossless", "mp3", "mp3gain", "music", "normalize"]
stars: 82
forks: 4
openIssues: 3
closedIssues: 107
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2026-01-10T16:23:28Z"
lastCommitAt: "2026-06-25T06:41:46Z"
lastReleaseAt: "2026-01-12T12:32:43Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 33
maintainers: ["M-Igashi", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9a4aa7cea447db6140b74132418d724bc581ab7f181e73964063507edb7237a3/M-Igashi/mp3rgain"
---

</p>

# mp3rgain

**Lossless MP3/AAC volume adjustment - a modern mp3gain / aacgain replacement written in Rust**

mp3rgain adjusts MP3 and AAC volume without re-encoding by modifying the `global_gain` field in each frame. This preserves audio quality while achieving permanent volume changes.

> **The only actively maintained CLI for lossless AAC/M4A bitstream gain adjustment.**
> aacgain (the historic CLI) has been unmaintained since ~2009 and rarely builds on modern 64-bit systems. foobar2000 also offers re-encode-free AAC gain on MP4/MKA via its "Apply ReplayGain to file content" feature (Windows GUI only, no undo). mp3rgain is the actively maintained, cross-platform, scriptable, undoable option for headless / batch / CI use.

## Features

- **CLI lossless AAC bitstream gain**: re-encode-free `global_gain` rewrite for AAC/M4A — replacing the long-abandoned aacgain, with `-u` undo (foobar2000's GUI equivalent has no undo path)
- **Lossless & Reversible**: No re-encoding, all changes can be undone (MP3 and AAC)
- **ReplayGain**: Track and album gain analysis for MP3 and AAC/M4A
- **Zero dependencies**: Single static binary (no ffmpeg, no mp3gain, no aacgain)
- **Cross-platform**:…
