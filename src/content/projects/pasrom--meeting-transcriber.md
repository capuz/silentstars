---
repo: "pasrom/meeting-transcriber"
name: "meeting-transcriber"
description: "On-device meeting transcriber for macOS — auto-records Teams/Zoom/Webex, transcribes & separates speakers locally. No cloud. Open-source alternative to Otter/Granola/Fireflies."
readmeQualityOk: true
url: "https://github.com/pasrom/meeting-transcriber"
homepage: "https://meetingtranscriber.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [91]
topics: ["coreml", "fluidaudio", "macos", "on-device-ai", "privacy-first", "swift", "whisper", "apple-neural-engine", "meeting-notes", "menu-bar-app"]
stars: 99
forks: 25
openIssues: 10
closedIssues: 29
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-08T20:45:39Z"
lastCommitAt: "2026-08-01T06:15:01Z"
lastReleaseAt: "2026-04-10T10:12:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 34
maintainers: ["pasrom", "jianjettfu-oss", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/1176264980/c119b805-b2f7-42d5-87c0-1fff3832748a?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260801T061714Z&X-Amz-Expires=300&X-Amz-Signature=e2224b1ce88f9e595f8e1f99ece3714ab3643115c49fafa7b79d7e31cf95d9a6&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTU2NTMzNCwibmJmIjoxNzg1NTY1MDM0LCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.TjQg7RgCX4Fa-2kaYdTliifgD_Ls8fsqnLTWl00MBL8"
discussionCount: 1
---

# Meeting Transcriber

> **The local-first meeting transcriber for macOS.** Records Teams, Zoom, and Webex calls, transcribes them on-device with Whisper / Parakeet, separates speakers, and turns the result into a Markdown protocol using your own Claude CLI or any local LLM. **No cloud. No subscription. No audio ever leaves your Mac.**

</p>

</p>

## Why this exists

Cloud meeting recorders (Otter, Fireflies, Granola, tl;dv) work great, until you remember that every word from every meeting goes to a third-party server. For a lot of teams (legal, healthcare, M&A, anything under NDA, or just folks who'd rather not) that's a non-starter.

Meeting Transcriber runs the entire pipeline (recording, transcription, speaker diarization, summarization) on your Mac. No account, no upload, no monthly bill.

|                                | Cloud transcribers | **Meeting Transcriber** |
|--------------------------------|:------------------:|:-----------------------:|
| Audio leaves your machine      | Yes                | **No**                  |
| Recurring cost                 | $10–30 / month     | **Free**                |
| Works offline                  | No                 | **Yes**…
