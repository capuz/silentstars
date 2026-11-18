---
repo: "notadev-iamaura/meeting-transcriber"
name: "meeting-transcriber"
description: "Local Korean AI meeting transcription system — 100% offline, optimized for Apple Silicon"
originalDescription: "한국어 로컬 AI 회의 전사 시스템 — 100% 오프라인, Apple Silicon 최적화"
descriptionLang: "ko"
readmeQualityOk: true
url: "https://github.com/notadev-iamaura/meeting-transcriber"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 23
forks: 8
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-05T11:03:59Z"
lastCommitAt: "2026-11-18T12:07:58Z"
lastReleaseAt: "2026-06-09T03:00:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 41
maintainers: ["notadev-iamaura"]
openGraphImageUrl: "https://opengraph.githubassets.com/e805d42988bb192e32370100737544f3f7b445cbae58ad4db16b5e25f4d8f1d8/notadev-iamaura/meeting-transcriber"
---

# Recap

[English](https://github.com/notadev-iamaura/meeting-transcriber/blob/HEAD/README.en.md) | Korean

> **A tool that records Korean meetings locally and turns them into a searchable Decision Wiki**
> _Local Korean meeting recorder and cited Decision Wiki for Apple Silicon._

Recap is a project that handles the flow of meeting recording → transcription → speaker diarization → AI correction and summarization → search and chat → Decision Wiki organization, by default locally on Apple Silicon Macs.
Its goal is to make conversations that would otherwise disappear after a meeting findable again, together with decisions, action items, and original timestamp evidence.

The default transcription model is the local `whisper-large-v3-turbo`, and there is no external transmission. If you select OpenAI as the default in settings and consent once, then new transcribed audio is sent to OpenAI from then on until you switch back to local. Per-meeting comparisons require separate consent each time they run. Correction, summarization, search, and chat continue to run locally.
