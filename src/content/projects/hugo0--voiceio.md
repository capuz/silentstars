---
repo: "Hugo0/voiceio"
name: "voiceio"
description: "Voice dictation for Linux that learns your voice. Local, offline, MIT. Parakeet or Whisper, streams into any app on Wayland and X11 (GNOME, KDE, Hyprland, sway)."
readmeQualityOk: true
url: "https://github.com/Hugo0/voiceio"
homepage: "https://voiceio.dev"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["asr", "dictation", "gnome", "ibus", "linux", "offline", "parakeet", "privacy", "python", "speech-to-text"]
stars: 27
forks: 3
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-08T18:29:10Z"
lastCommitAt: "2026-11-14T10:06:27Z"
lastReleaseAt: "2026-04-08T20:44:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 53
maintainers: ["Hugo0"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e6ac2fd93b3cd8466478ee220ba7f83be56e78d0a755b8293d0bff01f540898/Hugo0/voiceio"
discussionCount: 1
promoted: true
postedAt: "2026-11-15T08:37:20.001Z"
---

# voiceio

**Voice dictation for Linux that learns you.** Local, private, open source, and it fine-tunes itself on your own voice.

**[Try it in your browser at voiceio.dev](https://voiceio.dev)**: no install, the model runs in the tab.

- **Types anywhere.** Press your hotkey, speak, and the words stream into the focused app with a live underlined preview (IBus), on Wayland and X11: GNOME, KDE, Hyprland, sway, i3.
- **Runs on your machine.** Whisper, or NVIDIA's Parakeet (text lands ~0.7 s after you stop talking instead of ~4.4 s, with every name you use as a hotword), decodes your speech locally. No account, no server, no telemetry; logs never contain your words.
- **Learns your words.** Keep your recordings (opt-in, on your disk) and voiceio fine-tunes its model on them while the machine is idle. It switches only when the new model wins on clips it never trained on. On the author's voice: 12.1% → 4.9% word errors after one night on a laptop CPU.

## Install

**With a coding agent.** Paste this into Claude Code, Codex or any agent with a shell:
