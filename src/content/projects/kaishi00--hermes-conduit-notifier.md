---
repo: "kaishi00/hermes-conduit-notifier"
name: "hermes-conduit-notifier"
description: "Hermes plugin for Hermes Conduit push notifications"
readmeQualityOk: true
url: "https://github.com/kaishi00/hermes-conduit-notifier"
language: "Python"
languages: ["Python"]
languagePcts: [93]
stars: 100
forks: 32
openIssues: 4
closedIssues: 126
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-07-18T16:20:32Z"
lastCommitAt: "2026-11-16T04:24:48Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 35
maintainers: ["kaishi00", "claude", "sixgodgit"]
openGraphImageUrl: "https://opengraph.githubassets.com/af898aaf8fe8d4d729f8778e4742f2cba3cd7a59694e503108bbfd387fb387a0/kaishi00/hermes-conduit-notifier"
fundingLinks: ["GITHUB:https://github.com/kaishi00", "KO_FI:https://ko-fi.com/agrias"]
---

# Hermes Conduit Notifier

Hermes Conduit Notifier is the open-source Hermes plugin that connects a Hermes host to the [Hermes Conduit](https://github.com/kaishi00/hermes-conduit) iPhone, iPad and Apple Watch app. It started as the notification sender and now carries most of what Conduit needs from the host:

- **Notifications and calls**: approval, input, reply, failure and background-task notifications, Hermes calling you (CallKit on the phone and Watch), and Lock Screen progress while a turn runs, all delivered through the Conduit push relay in [`relay/`](https://github.com/kaishi00/hermes-conduit-notifier/blob/HEAD/relay/), end-to-end encrypted where APNs allows.
- **Live voice**: single-use Gemini Live tokens, temporary Qwen Live credentials, GPT-Live sessions on the host's ChatGPT subscription or API key, Grok Live relayed with the host's xAI sign-in, Local Live and Classic voice through your own speech server, voice web lookups, memory and personality for voice, and saved call transcripts.
- **Apple Watch**: short-lived grants that let a Watch call run lookups and Hermes jobs, answer what Hermes waits on in a call from Hermes, and stream GPT-Live, Grok and Local Live audio,…
