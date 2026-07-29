---
repo: "ellmos-ai/ai-media-editor"
name: "ai-media-editor"
description: "Local AI media editor for video, audio and podcasts with local transcription, transcript-based cuts, Hyperframes motion graphics and agent-driven edits"
readmeQualityOk: true
url: "https://github.com/ellmos-ai/ai-media-editor"
homepage: "https://github.com/ellmos-ai/ai-media-editor#readme"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["faster-whisper", "hyperframes", "local-transcription", "media-editing", "podcast-editing", "video-editing", "whisperx", "ai-media-editor", "agent-workflow", "ai-video-editing"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-17T17:09:57Z"
lastCommitAt: "2026-07-29T06:13:07Z"
status: "newborn"
tags: ["hidden_gem", "funded"]
healthScore: 76
undervaluedScore: 28
maintainers: ["lukisch"]
openGraphImageUrl: "https://opengraph.githubassets.com/3abe3078343e05da7336e390b33c325a6c10d763c6187961f39833ef99b60299/ellmos-ai/ai-media-editor"
fundingLinks: ["CUSTOM:https://paypal.me/lukasgeiger2507"]
---

</p>

# ai-media-editor — local AI media editor (Video · Audio · Podcast)

> [!NOTE]
> **AI / Agent Native Integration:** `ai-media-editor` is specifically designed for autonomous agent execution (Claude Code, Gemini/Antigravity, Codex). It provides deterministic project preparation, Scribe JSON schema generation, and timestamped frame contact-sheets so LLMs can visually inspect and cut media locally without third-party SaaS dependencies.

Use an AI coding agent (e.g. Claude Code) as a video/podcast editor — with **local
transcription instead of ElevenLabs Scribe**. The orchestrator (`editor.py`) handles the
deterministic prep (route to the right STT engine/compute, produce Scribe-JSON, pack takes);
the creative cutting/animation work is then driven by the agent.

## System Architecture

```mermaid
graph TD
    Input["Media Input (Video / Audio)"] --> Doctor["editor.py doctor / prepare"]
    Doctor --> STT["Local STT Engine (faster-whisper / WhisperX)"]
    STT --> Scribe["Scribe JSON & Packed Takes"]
    Scribe --> Agent["AI Coding Agent (Claude / Gemini / Codex)"]
    Agent --> FrameView["tools/frame_view.py (Timestamped Frames)"]
    Agent --> CutView["tools/cut_view.py (Pause…
