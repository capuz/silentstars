---
repo: "prasanthsasikumar/openclicky"
name: "openclicky"
description: "Open-source macOS voice companion (an open Clicky): talk to it about what's on screen, it points at things, dictates, and hands real work to a Codex agent. Bring your own key or use an invite. MIT."
readmeQualityOk: true
url: "https://github.com/prasanthsasikumar/openclicky"
homepage: "https://github.com/prasanthsasikumar/openclicky/releases/latest"
language: "Swift"
languages: ["Swift", "TypeScript"]
languagePcts: [68, 23]
topics: ["ai-agent", "codex", "macos", "open-source", "openai-realtime", "swift", "voice-assistant"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-09-03T05:57:49Z"
lastCommitAt: "2026-09-27T09:27:48Z"
lastReleaseAt: "2026-09-08T08:11:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 79
undervaluedScore: 57
maintainers: ["prasanthsasikumar"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a8494f10aaa608cc027c7e6ee2220d78fc9df4e12e4896dbe88c6c952cfecb0/prasanthsasikumar/openclicky"
discussionCount: 0
---

# OpenClicky

**An open-source voice companion for your Mac.** It lives in the notch, sees what is on your screen,
answers out loud, flies a little cursor to the thing you asked about, types what you dictate, and hands
real work to a Codex agent. MIT licensed. Bring your own OpenAI key, or self-host the whole thing.

[**Download OpenClicky for macOS**](https://github.com/prasanthsasikumar/openclicky/releases/latest)
(Apple Silicon, macOS 14.2+, notarized) · [How it works](https://github.com/prasanthsasikumar/openclicky/blob/HEAD/docs/architecture.md) · [Contributing](https://github.com/prasanthsasikumar/openclicky/blob/HEAD/CONTRIBUTING.md)

### Try it in three steps

1. Open the dmg, drag OpenClicky to Applications, launch it, and grant Accessibility, Screen Recording,
   and Microphone when asked (it needs all three to see, point, and listen).
2. Hover the notch → Settings → Account → "Use my own API key": add your OpenAI key as `openaiApiKey`
   in the `shell.json` that opens. Your key travels with each request and is never stored anywhere.
   (Hosted accounts without a key are invite-only for now.)
3. Hold **⌃ control + ⌥ option** and ask about anything on screen. Tap **⌃…
