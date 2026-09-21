---
repo: "prmpsmart/audiowave"
name: "audiowave"
description: "Record, Play, Read and Write wave audio data. Drawing of audio waveforms- audiograms"
readmeQualityOk: true
url: "https://github.com/prmpsmart/audiowave"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["audio-visualization", "audiogram", "audiowaveform", "pyside6", "python-qt", "qt", "qt6", "python-recording-playing"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-08-22T06:53:36Z"
lastCommitAt: "2026-09-21T09:14:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 35
maintainers: ["prmpsmart"]
openGraphImageUrl: "https://opengraph.githubassets.com/4582b50817e9ef043cd86e14112b129eabb6340c6a6c00d143762f932e136ae0/prmpsmart/audiowave"
---

# AudioWave

**Waveforms, analysis and audio editing for Python and Qt.** AudioWave is a PySide6 library for showing, playing,
measuring and editing audio, plus **AudioWave Studio**, a desktop app built only on the library to show what it can do.

- **Ten waveform styles** (bars, capsule, hairline, envelope, line, stairs, dots, RMS + peak, ground, radial) that you
  can mix per channel, restyle live and extend with one class.
- **Views that stay in sync:** waveform, overview, spectrogram, live spectrum analyser, vectorscope, level meters.
- **Real measurement:** ITU-R BS.1770 loudness (momentary, short-term, integrated LUFS, range), spectra, stereo image,
  silence detection.
- **Editing with undo:** trim, cut, fade, silence, normalise to a peak or LUFS target, remove silences.
- **Plays and records** through QtMultimedia: a playhead driven by the device clock, gapless loops, seek, speed, per-channel
  mute/solo, live waveform while recording.
- **Reads WAV, MP3 and more** (FLAC, Ogg, M4A depending on your Qt build) with no extra dependency.
- **A Qt-free core:** `import audiowave` needs only numpy, so the maths is usable in scripts and servers.
- **Tested:** over 200 tests,…
