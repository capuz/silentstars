---
repo: "akshinmrv/Voxa"
name: "Voxa"
description: "Dub any video into another language and keep it in sync — no drift. Single-file Python CLI · per-speaker voices · 4 TTS + 5 translators · fully offline path · no API key · MIT"
readmeQualityOk: true
url: "https://github.com/akshinmrv/Voxa"
homepage: "https://voxa.servoogle.com"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [74, 22]
topics: ["ai", "ffmpeg", "localization", "python", "speech-to-text", "text-to-speech", "translation", "video-dubbing", "whisper", "faster-whisper"]
stars: 18
forks: 3
openIssues: 7
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-10T08:49:42Z"
lastCommitAt: "2026-11-05T11:25:17Z"
lastReleaseAt: "2026-07-28T09:01:09Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 55
undervaluedScore: 27
maintainers: ["akshinmrv"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1296293059/12427ab6-6b22-4c1a-9447-898a6a0beed9"
discussionCount: 1
---

# Voxa

**Dub any video into another language — and keep it in sync.**

Voxa transcribes a video, translates it with context, speaks it in the target language, and
mixes the result back over the original. The engine is one Python file with four speech
engines, five translation backends, and one non-negotiable property: the dub does not drift
away from the speaker.

**[▶ Watch the drift comparison](https://voxa.servoogle.com/#demo)** — you hear Voxa's dub locked to
the speaker at 0.0s, while a naive concatenation drifts seconds behind. Same dub, measured not claimed.

```bash
pipx install voxa-dub
voxa talk.mp4 --target_lang ru        # → talk_dubbed_ru.mp4
```

🎧 **[Hear the demo dubs](https://voxa.servoogle.com)** — English → Turkish, Azerbaijani
and French, produced with no API key

---

## Overview

Most dubbing tools concatenate synthesized clips one after another. A clip that runs slightly
long pushes the next one later, the error accumulates, and three minutes in the dub is a
sentence behind the speaker.

Voxa places every clip **anchored to the source timeline**. The slot for a line runs from its
own onset to the *next line's* onset. A clip that over-runs is trimmed to…
