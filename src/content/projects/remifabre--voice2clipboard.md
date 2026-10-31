---
repo: "RemiFabre/voice2clipboard"
name: "voice2clipboard"
description: "One-key voice-to-transcription tool: record speech, transcribe locally with Whisper, then paste. Never lose your audio files anymore!"
readmeQualityOk: true
url: "https://github.com/RemiFabre/voice2clipboard"
homepage: "https://github.com/RemiFabre/voice2chatgpt"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [54, 42]
topics: ["chatgpt", "linux", "llm", "ollama", "open-source", "productivity", "python", "speech-recognition", "transcription", "voice"]
stars: 8
forks: 0
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-02T18:27:39Z"
lastCommitAt: "2026-10-31T15:59:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 67
undervaluedScore: 55
maintainers: ["RemiFabre"]
openGraphImageUrl: "https://opengraph.githubassets.com/315affad4e8aeb73d10536866b09bef759059791dadca9a2760129300ea528c9/RemiFabre/voice2clipboard"
---

# voice2clipboard

Local voice-to-text workflows with a production macOS always-on path and separated experiment tracks.

## Start Here

### Setup A: macOS daily workflow (recommended)
This is the setup you use every day.

1. Check state:
```bash
cd /Users/remi/voice2clipboard
./voice_control.sh status
```

2. Start services:
```bash
./voice_control.sh start
```

3. Open live transcript in VS Code:
```bash
./voice_control.sh live
```

4. Capture a clipboard window:
```bash
./voice_control.sh mark-start
# speak
./voice_control.sh mark-stop
```

Voice-command mode is enabled by default in daemon service:
- say `roger start` to begin selection
- say `roger stop` to end selection and copy
- aliases: `copy start` / `copy stop`

5. Stop everything:
```bash
./voice_control.sh stop
```

Main runbook: `docs/runbooks/STABLE_OPERATIONS.md`

### Setup B: macOS manual tuning session (latency/commit experiments)
Use this when you want to tweak daemon params manually.

```bash
cd /Users/remi/voice2clipboard
./voice_control.sh stop
./scripts/mac/run_voxmlx_server.sh
```

In a second terminal:
```bash
cd /Users/remi/voice2clipboard
source /Users/remi/.virtualenvs/voice2clipboard/bin/activate…
