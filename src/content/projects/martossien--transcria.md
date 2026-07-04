---
repo: "Martossien/transcria"
name: "transcria"
description: "Self-hosted meeting transcription portal — speech-to-text, speaker diarization, LLM-corrected transcripts, structured summaries and Word minutes, on your own GPUs. Flask + PostgreSQL, GDPR audit trail, distributed GPU topologies, docker"
readmeQualityOk: true
url: "https://github.com/Martossien/transcria"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["asr", "flask", "gdrp", "gpu", "llm", "meeting-minutes", "on-premise", "postgresql", "pyannote", "self-hosted"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-14T16:53:57Z"
lastCommitAt: "2026-07-04T22:15:17Z"
lastReleaseAt: "2026-07-04T17:06:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1238996816/676075a7-440a-44a4-9c7d-8bb4615c94ad"
---

# TranscrIA

**Self-hosted meeting transcription portal.** TranscrIA turns long meeting recordings into
usable deliverables on your own GPUs: corrected, speaker-attributed transcripts (SRT),
structured summaries, quality reports, and meeting-type-aware Word minutes. No cloud, no
per-minute API bill, full data sovereignty.

It is built as a **service** for teams that process real meetings week after week — not as
a thin wrapper around a transcription model. A guided, human-in-the-loop workflow, a
production GPU queue, and role-based multi-user access are first-class, not afterthoughts.

*Interface and documentation are currently French-first — see [README français](README.fr.md).
UI strings and LLM prompts are centralized, so localization is a planned evolution rather
than a rewrite.*

## Project status — 0.2.0, first stable release

This is the first release TranscrIA considers **stable**. The transcription pipeline,
the human-in-the-loop wizard, the GPU queue and scheduler, exports, multi-user access,
and both the single-box and distributed deployments are validated end-to-end (unit and
integration suite plus real-GPU runs). The interface is French-first, and reference
quality…
