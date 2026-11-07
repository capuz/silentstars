---
repo: "medford-transcripts/medford-transcripts.github.io"
name: "medford-transcripts.github.io"
description: "This is the code to generate transcripts of videos related to medford local politics, plus its outputs for thousands of hours of video."
readmeQualityOk: true
url: "https://github.com/medford-transcripts/medford-transcripts.github.io"
homepage: "https://medford-transcripts.github.io/"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-10-24T19:33:00Z"
lastCommitAt: "2026-11-07T16:11:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 74
maintainers: ["jdeast"]
openGraphImageUrl: "https://opengraph.githubassets.com/50cae6e2406dc7cb820bee7d2c985a1f9905dfc4b28b26e32feb00f54d544be9/medford-transcripts/medford-transcripts.github.io"
---

This website posts AI-generated transcripts of youtube videos relevant to Medford, MA local politics, including but not limited to city council meetings, school committee meetings, subcommittee meetings, campaign videos, and local news reports.

The intent is to make it easier for the public to make informed decisions, advocate for their interests, and generally engage with these meetings and be an informed electorate.

The code to generate all open source (https://github.com/medford-transcripts/medford-transcripts.github.io). It uses yt_dlp to download the audio, then uses the AI-driven whisperX (https://arxiv.org/abs/2303.00747) to transcribe it and add speaker IDs. 

I've modified WhisperX to return the speaker embeddings, and use those embeddings to match speakers between videos. Generic IDs are propagated along with the YouTube ID for consistent naming, but are replaced with user input names should the speaker_ids.json file be edited manually.

The transcriptions contain many errors (particularly in the speaker identifications), and manual corrections to the SRT files are occasionally made. Corrections will be gladly accepted, and any controversial corrections will be flagged…
