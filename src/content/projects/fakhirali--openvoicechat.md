---
repo: "fakhirali/OpenVoiceChat"
name: "OpenVoiceChat"
description: "Have a natural voice conversation with an LLM"
readmeQualityOk: true
url: "https://github.com/fakhirali/OpenVoiceChat"
homepage: "https://www.fakhirali.pk/OpenVoiceChat/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["voice-assistant"]
stars: 265
forks: 46
openIssues: 13
closedIssues: 11
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2023-09-08T13:02:56Z"
lastCommitAt: "2026-11-02T11:37:50Z"
lastReleaseAt: "2024-11-06T20:11:43Z"
status: "thriving"
tags: []
healthScore: 74
undervaluedScore: 21
maintainers: ["fakhirali"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/688952235/0e02c9ce-87f3-4ba3-8b61-fa8eba05a48c"
discussionCount: 0
---

# OpenVoiceChat

A tiny async voice-conversation engine and a Daily.co agent service.

It listens to meeting audio, detects speech with Silero VAD, transcribes with
Deepgram, streams an OpenAI-compatible LLM response, and speaks with ElevenLabs.
One process joins the meeting as an agent; a second records the meeting to WAV.

There is no web platform, local microphone demo, WebRTC demo, tool calling, or
local model runtime in this repository.

## Architecture

```
Daily audio ──► Conversation.input ──► Silero VAD / endpointing
                                            │ utterance PCM16
                                            ▼
                                   Deepgram REST (STT)
                                            │ text
                                            ▼
                              OpenAI-compatible LLM (stream)
                                            │ sentences
                                            ▼
                                  ElevenLabs REST (TTS)
                                            │ 16 kHz PCM16 chunks
                                            ▼
Daily audio ◄── Conversation.output ◄────────┘
```

`agent/worker.py` runs…
