---
repo: "DojoCodingLabs/hermit"
name: "hermit"
description: "Hermit: the open-source AI agent that lives on your phone. Does everything. Tells no one."
readmeQualityOk: true
url: "https://github.com/DojoCodingLabs/hermit"
homepage: "https://joinhermit.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [89]
topics: ["ai-agent", "android", "expo", "llama-cpp", "local-llm", "on-device-ai", "open-source", "privacy", "react-native", "typescript"]
stars: 13
forks: 2
openIssues: 98
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2026-11-26T07:29:37Z"
lastCommitAt: "2026-11-26T23:37:30Z"
lastReleaseAt: "2026-11-26T16:42:07Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 78
undervaluedScore: 22
maintainers: ["juancguerrerodev", "dbejarano820", "arianvaldivieso"]
openGraphImageUrl: "https://opengraph.githubassets.com/710bd41993f6d9eda80aefcdf96df7f2e170199f4d0e4b830cec525fdadc194a/DojoCodingLabs/hermit"
discussionCount: 2
---

The model runs on your Android phone. Your memories stay there, encrypted.<br>
  Anything that sends, pays or logs in waits for your fingerprint.

> **9:47 p.m.** Carla writes on WhatsApp: *"¿Nos vemos el jueves a las 7 en el café?"*<br>
> You tell Hermit: *"Tell her yes, Thursday at 7 at the café."*
>
> Hermit reads her message, writes the reply and holds up a sheet: this exact text, to Carla Rojas, at this exact number. Your fingerprint sends it. The model that read her message and wrote yours never left your phone. Neither did her message.

That model is BotPsy-0.8B: 0.8 billion parameters, 4-bit, about 530 MB. With a generic agent setup, it got 21 of 40 everyday tasks right on a phone. We didn't swap it for a bigger model. We rebuilt everything around it.

## Why Hermit

## The model didn't change. The harness did.

Every run used the same BotPsy-0.8B Q4_K_M file. The tasks and the scoring stayed fixed. The only thing that changed was the harness around the model:
