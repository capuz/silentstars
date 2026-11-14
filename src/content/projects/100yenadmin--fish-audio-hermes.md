---
repo: "100yenadmin/fish-audio-hermes"
name: "fish-audio-hermes"
description: "Your Hermes agent speaks and listens with Fish Audio: expressive voices in 80+ languages, voice design, live dictation."
readmeQualityOk: true
url: "https://github.com/100yenadmin/fish-audio-hermes"
homepage: "https://fish.audio"
language: "Python"
languages: ["Python", "JavaScript", "TypeScript"]
languagePcts: [55, 23, 22]
topics: ["fish-audio", "hermes-agent", "hermes-plugin", "speech-to-text", "stt", "text-to-speech", "tts", "voice-cloning", "ai-agent", "hermes"]
stars: 69
forks: 2
openIssues: 8
closedIssues: 41
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-05T05:15:59Z"
lastCommitAt: "2026-11-14T10:44:38Z"
lastReleaseAt: "2026-10-05T19:03:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 37
maintainers: ["100yenadmin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1405168737/a29ddbd1-c672-48fe-8928-46c883fafa66"
---

# Fish Audio for Hermes

**Your Hermes agent speaks and listens with Fish Audio: expressive voices in 80+ languages, voice design, live dictation.**

The official [Fish Audio](https://fish.audio) plugin for [Hermes Agent](https://github.com/NousResearch/hermes-agent),
maintained by Electric Sheep. It works in the Hermes CLI, every messaging app Hermes supports and the Desktop app.

```bash
hermes plugins install 100yenadmin/fish-audio-hermes --enable --yes-deps
hermes fish login        # paste your key from https://fish.audio/app/api-keys
```

You need a Fish Audio API key (new accounts can start on Fish's free `s2.1-pro-free` model, free through 30 November
2026). `--yes-deps` installs the plugin's Python dependencies. Then run `/fish setup` in any chat to see what is left.
This line installs the latest release from this repository; `main` only ever holds a tagged, tested release.

The catalog name works too:

```bash
hermes plugins install fish-audio --enable --yes-deps
```

It installs the release pinned in the Hermes plugin catalog. On Hermes 0.23.0 it currently installs an older version,
because Hermes falls back to the catalog copy it shipped with…
