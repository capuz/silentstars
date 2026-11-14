---
repo: "robert-mcdermott/arietta-voice"
name: "arietta-voice"
description: "A local-first framework for building customizable AI powered voice assistants on Apple Silicon Macs with local speech, knowledge & tools."
readmeQualityOk: true
url: "https://github.com/robert-mcdermott/arietta-voice"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["alexa", "stt", "tts", "voice-agent", "voice-ai", "voice-assistant", "gemma4", "mlx", "kokoro", "moonshine"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-04-21T05:52:12Z"
lastCommitAt: "2026-11-14T10:51:44Z"
lastReleaseAt: "2026-11-14T10:36:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 50
maintainers: ["robert-mcdermott"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1a4bf8413e3ef1d8c065e8a60f837b624055c8920cc7deeee6b5c61cdc32279/robert-mcdermott/arietta-voice"
---

# Arietta Voice

Arietta Voice is a local-first framework for building a wake-word-driven voice
assistant on Apple Silicon Macs. It combines local speech-to-text,
text-to-speech, turn detection, tool routing, markdown knowledge retrieval, and
a web admin console into a customizable assistant runtime. It's like your own private,
custom, locally host Alexa/Echo, but better.

The project is meant to become *your* assistant, not a finished general-purpose
assistant out of the box. As shipped, it is mostly a working runtime and admin
surface; it becomes useful when you provide the assistant persona in `SOUL.md`,
add knowledge articles for your environment, configure the wake word, and add
tools for the things you want it to do.

The default assistant persona is named `Bridget`, and the default wake word is
also `Bridget`. Both are easy to change in your private
`config/arietta_voice.local.toml` after running `uv run arietta-voice config-init`.

For a detailed customization walkthrough, see [docs/getting-started.md](https://github.com/robert-mcdermott/arietta-voice/blob/HEAD/docs/getting-started.md).

For planned improvements, see…
