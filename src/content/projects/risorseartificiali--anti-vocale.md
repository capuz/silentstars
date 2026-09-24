---
repo: "RisorseArtificiali/anti-vocale"
name: "anti-vocale"
description: "Android app for transcribing voice messages locally on-device, with no internet required."
readmeQualityOk: true
url: "https://github.com/RisorseArtificiali/anti-vocale"
homepage: "https://play.google.com/store/apps/details?id=com.antivocale.app"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [87]
topics: ["android", "kotlin", "offline", "on-device", "privacy", "speech-recognition", "transcription", "whisper"]
stars: 98
forks: 5
openIssues: 10
closedIssues: 100
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-03-26T20:25:08Z"
lastCommitAt: "2026-09-24T06:43:40Z"
lastReleaseAt: "2026-05-08T15:44:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 34
maintainers: ["paoloantinori"]
openGraphImageUrl: "https://opengraph.githubassets.com/60ede944a3af356e14cc7e77fd65c1c94c767d70b16747f288a479571136a5fa/RisorseArtificiali/anti-vocale"
---

&nbsp;
</p>

</p>

# Anti-Vocale

Android app for transcribing voice messages locally on-device, with no internet required.

Anti-Vocale receives shared audio files (from WhatsApp, Telegram, etc.), transcribes them using on-device ASR models, and delivers the result via notification with one-tap copy and share-back actions.

It works on recorded calls and meetings too, at any length: recordings beyond a model's limit are split and stitched automatically (up to two hours on the streaming path), a failed long run keeps the transcript it already produced, and results export as subtitles (SRT, VTT) or timestamped text. Speaker separation is not implemented yet ([#83](https://github.com/RisorseArtificiali/anti-vocale/issues/83)).

## Why this app exists

The big messengers transcribe voice messages only partially, or not at all:

- **WhatsApp on Android** officially transcribes just English, Portuguese, Spanish, and Russian. Italian is supported on iPhone but is not supported on Android.
- **Telegram** runs transcription on its own servers and reserves it for paid Premium subscribers; free accounts get at most a small weekly trial quota that Telegram itself can dial down to nothing.
-…
