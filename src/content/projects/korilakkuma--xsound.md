---
repo: "Korilakkuma/XSound"
name: "XSound"
description: "XSound gives Web Developers Powerful Audio Features Easily !"
readmeQualityOk: true
url: "https://github.com/Korilakkuma/XSound"
homepage: "https://xsound.jp"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["webaudio", "webmidi", "webrtc", "audio", "music", "webassembly"]
stars: 219
forks: 17
openIssues: 23
closedIssues: 56
watchers: 5
contributors: 1
recentReleases: 0
createdAt: "2017-11-19T07:00:02Z"
lastCommitAt: "2026-11-15T08:27:18Z"
lastReleaseAt: "2018-06-12T01:41:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "under_pressure"]
healthScore: 73
undervaluedScore: 40
maintainers: ["Korilakkuma"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/111272247/2fa6624c-3319-48ab-b77d-d71cca5a49a4"
---

## Overview
  
XSound gives Web Developers Powerful Audio Features Easily !  
In concrete, XSound is useful to implement the following features.
  
- Create Sound
- Play the One-Shot Audio
- Play the Audio
- Play the Media
- Streaming (by WebRTC)
- MIDI (by Web MIDI API)
- MML (Music Macro Language)
- Effectors (Compressor / Wah / Equalizer / Tremolo / Phaser / Chorus / Delay / Reverb ... etc)
- Visualization (Overview in Time Domain / Time Domain / Spectrum)
- Multi-Track Recording (Create WAVE file)
- Audio Streaming
- Visual Audio Sprite
  
XSound don't depend on other libraries or frameworks (For example, jQuery, React).
  
## Supported Browsers
  
  
## Getting Started

In case of using as **full stack** (For example, use oscillator) ...

```JavaScript
X('oscillator').setup([true, true, false, false]).ready(2, 5).start([440, 880]).stop();
```

or, in case of using as **module base** (For example, use chorus effector) ...

```JavaScript
// The instance of `AudioContext`
const context = X.get();

// Create the instance of `Chorus` that is defined by XSound
const chorus = new X.Chorus(context);

const oscillator = context.createOscillator();

// The instance that is defined by…
