---
repo: "receptron/avatarscript"
name: "avatarscript"
description: "Turn an avatar and text into a lip-synced, acted video: a standard avatar package, a script language, and a TTS-driven renderer."
readmeQualityOk: true
url: "https://github.com/receptron/avatarscript"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 31
forks: 4
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 9
createdAt: "2026-10-05T17:24:36Z"
lastCommitAt: "2026-11-20T11:57:36Z"
lastReleaseAt: "2026-10-14T01:32:45Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 48
maintainers: ["snakajima", "isamu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c9becc4ef1000a21fbea09e8d724be4ce7e3b23f9d4f926c2c043e6811623ef/receptron/avatarscript"
---

# AvatarScript

Turn an avatar and text into a lip-synced, acted video:

```
avatar package + text ──► AvatarScript (.avs) ──► compiler + TTS ──► score.json + audio ──► video.mp4
```

AvatarScript defines a standard avatar package, a script language for directing an avatar's
speech, emotion and gestures, and a compiler and renderer that produce the video. The first
runtime is the mesh avatar engine, [mesh-avatar](https://www.npmjs.com/package/mesh-avatar) from
[mesh-avatar-studio](https://github.com/shinshin86/mesh-avatar-studio).
See [PLAN.md](https://github.com/receptron/avatarscript/blob/HEAD/PLAN.md) for the design and milestones.

## Status

Early, but working end to end: speech from ElevenLabs, OpenAI or Gemini, Japanese and English
lip sync, emotions and motions, rendered to MP4 with the mesh engine; an avatar that sings a song
made with [JingleScript](https://github.com/receptron/jinglescript); a tool for LLMs
(`manageAvatarScript`) and a [GUI Chat Protocol plugin](https://github.com/receptron/avatarscript/blob/HEAD/gui-plugin) that carries it, in which the
avatar performs live in the page and a video is made only on request. Not yet: gaze and emphasis
rendering.
