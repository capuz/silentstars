---
repo: "elana-voss/SillyTavern-Extension-NPCNames"
name: "SillyTavern-Extension-NPCNames"
description: "Curated NPC name suggester for SillyTavern. Tool-callable, tagged database of 4342 first + 1950 last names"
readmeQualityOk: true
url: "https://github.com/elana-voss/SillyTavern-Extension-NPCNames"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-17T08:33:06Z"
lastCommitAt: "2026-11-21T11:37:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 47
maintainers: ["elana-voss"]
openGraphImageUrl: "https://opengraph.githubassets.com/65f9f8511e82b6dac2403176ddf29aba89f8fc3ddc7adf738a7623c23e9686a8/elana-voss/SillyTavern-Extension-NPCNames"
---

# SillyTavern NPC Name Suggester

A SillyTavern extension that picks NPC names from a curated database, so the AI stops inventing yet another Elara or Marcus.

- Whenever a new character enters the story, the AI asks the extension for a name. You do not type anything special.
- The name fits the character: the AI can ask for a gender, culture, era or vibe.
- Names do not repeat: one already used in the chat stays away while other names fit.
- It needs an AI backend that supports tool calling; most modern Chat Completion APIs do.

## Install

In SillyTavern, open Extensions, click Install Extension, paste this URL, and confirm:

```
https://github.com/elana-voss/SillyTavern-Extension-NPCNames
```

## Setup

Three settings must be on after install.

### Step 1: Enable function calling

In the Chat Completion Presets panel, tick **Enable function calling**.

### Step 2: Set Prompt Post-Processing to `None` or a "with tools" option

In the API panel, set Prompt Post-Processing to `None` or to one of the "with tools" options. The others will not let the AI call any tools.
