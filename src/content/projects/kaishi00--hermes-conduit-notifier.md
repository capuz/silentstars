---
repo: "kaishi00/hermes-conduit-notifier"
name: "hermes-conduit-notifier"
description: "Hermes plugin for Hermes Conduit push notifications"
readmeQualityOk: true
url: "https://github.com/kaishi00/hermes-conduit-notifier"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 88
forks: 25
openIssues: 18
closedIssues: 65
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-18T16:20:32Z"
lastCommitAt: "2026-11-07T09:29:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 33
maintainers: ["kaishi00", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/46840577f114a5cf8a92432bd1f25a6d4907741118c6f54e05e96fe5ac5dc136/kaishi00/hermes-conduit-notifier"
---

# Hermes Conduit Notifier

Hermes Conduit Notifier is the open-source Hermes plugin that connects a Hermes host to the [Hermes Conduit](https://github.com/kaishi00/hermes-conduit) iPhone, iPad and Apple Watch app. It started as the notification sender and now carries most of what Conduit needs from the host:

- **Notifications and calls**: approval, input, reply, failure and background-task notifications, Hermes calling you (CallKit on the phone and Watch), and Lock Screen progress while a turn runs, all delivered through the Conduit push relay in [`relay/`](https://github.com/kaishi00/hermes-conduit-notifier/blob/HEAD/relay/), end-to-end encrypted where APNs allows.
- **Live voice**: single-use Gemini Live tokens, temporary Qwen Live credentials, GPT-Live sessions on the host's ChatGPT subscription or API key, Grok Live relayed with the host's xAI sign-in, Local Live and Classic voice through your own speech server, voice web lookups, memory and personality for voice, and saved call transcripts.
- **Apple Watch**: short-lived grants that let a Watch call run lookups and Hermes jobs, answer what Hermes waits on in a call from Hermes, and stream GPT-Live, Grok and Local Live audio,…
