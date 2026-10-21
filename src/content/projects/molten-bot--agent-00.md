---
repo: "Molten-Bot/agent_00"
name: "agent_00"
description: "Rapid Development, aided by your fav agent: Claude, Codex"
readmeQualityOk: true
url: "https://github.com/Molten-Bot/agent_00"
homepage: "https://molten.bot/agent_00"
language: "Go"
languages: ["Go"]
languagePcts: [73]
topics: ["codex", "claude-code", "codex-cli", "ai-harness"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-02T15:38:09Z"
lastCommitAt: "2026-10-21T23:35:44Z"
lastReleaseAt: "2026-05-29T23:52:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 64
maintainers: ["jefking", "moltenbot000", "CryptoSmoke"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e9d8ebcbf62905dd12e80c66b835316528c74242e50d5f0f4c21b3b2f8a75e1/Molten-Bot/agent_00"
---

# Agent_00

The highest velocity way to make code changes. Run AI coding agents against GitHub repositories, prompt to PR. Product details live at
[molten.bot/agent_00](https://molten.bot/agent_00).

## Quick Start

### Docker

```bash
docker run -p 7777:7777 \
  --cap-drop=ALL \
  --security-opt seccomp=unconfined \
  --security-opt apparmor=unconfined \
  moltenai/agent_00:latest
```

### Docker Compose with Prompt Dictation

```bash
cp .env.example .env
docker compose up
```

For a local image build instead of the published Docker Hub image:

```bash
docker compose -f docker-compose.yml -f docker-compose.local.yml up --build
```

The Compose stack runs `agent_00` with a `linuxserver/faster-whisper`
sidecar. The web UI probes `faster-whisper:10300`; when it is reachable, the
Prompt Studio shows a microphone button that appends dictated text to the
prompt field. The Compose sidecar disables Docker log capture because
`wyoming-faster-whisper` logs transcript text at INFO level.
The bundled sidecar defaults to the `base-int8` model and English language
hints for more reliable short-form dictation; set both `WHISPER_LANG=auto` and
`WHISPER_SPEECH_LANGUAGE=auto` to use Whisper…
