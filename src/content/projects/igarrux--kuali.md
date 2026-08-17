---
repo: "igarrux/kuali"
name: "kuali"
description: "Open-source local meeting transcription for Discord and Google Meet with real speaker attribution."
readmeQualityOk: true
url: "https://github.com/igarrux/kuali"
homepage: "https://kuali.garrux.dev"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [49, 27]
topics: ["discord-bot", "google-meet", "local-first", "meeting-transcription", "rust", "tauri", "whisper", "ai-meeting-assistant", "local-ai", "macos"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-08T20:51:29Z"
lastCommitAt: "2026-08-17T04:19:21Z"
lastReleaseAt: "2026-08-11T20:53:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 68
maintainers: ["Garruxx"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e14db4f6406011611ced22e2cb1052244b3bfc265e833c46f7b0971f3d8b423/igarrux/kuali"
discussionCount: 1
---

</p>

<h1 align="center">Kuali</h1>

  <strong>Open-source, local meeting transcription for Discord and Google Meet with real speaker attribution.</strong>
</p>

</p>

  <strong>English</strong> · <a href="README.es.md">Español</a>
  <br>
</p>

Kuali listens to live calls, transcribes them on your computer, and keeps every
speaker attached to their words. Meetings become a searchable library with live
transcripts, summaries, decisions, questions, and participant-owned tasks.

Raw audio is processed in memory by Whisper and Silero. It is never retained as
an audio recording and never sent to a Kuali-operated service.

## Why Kuali

Kuali is built around participants, not around one mixed system-audio file:

- **Speaker identity exists before transcription.** Discord supplies a stream
  and stable identity per user, while the Meet integration transports
  participant context with live audio. Kuali does not need to guess afterward
  with post-recording diarization.
- **Discord and Google Meet setup is deliberately simple: three short steps.**
  The bilingual guide shows the real controls, saves progress, and avoids
  manual OAuth URLs, configuration files, and browser developer mode.…
