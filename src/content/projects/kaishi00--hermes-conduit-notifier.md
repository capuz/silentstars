---
repo: "kaishi00/hermes-conduit-notifier"
name: "hermes-conduit-notifier"
description: "Hermes plugin for Hermes Conduit push notifications"
readmeQualityOk: true
url: "https://github.com/kaishi00/hermes-conduit-notifier"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 97
forks: 27
openIssues: 7
closedIssues: 98
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-07-18T16:20:32Z"
lastCommitAt: "2026-11-12T11:44:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 34
maintainers: ["kaishi00", "claude", "malaiwah"]
openGraphImageUrl: "https://opengraph.githubassets.com/fccdb80384f83aa949c37f5e5c6461bdf72e4ffdea7e564841e44eb0f511509a/kaishi00/hermes-conduit-notifier"
---

# Hermes Conduit Notifier

Hermes Conduit Notifier is the open-source Hermes plugin that connects a Hermes host to the [Hermes Conduit](https://github.com/kaishi00/hermes-conduit) iPhone, iPad and Apple Watch app. It started as the notification sender and now carries most of what Conduit needs from the host:

- **Notifications and calls**: approval, input, reply, failure and background-task notifications, Hermes calling you (CallKit on the phone and Watch), and Lock Screen progress while a turn runs, all delivered through the Conduit push relay in [`relay/`](https://github.com/kaishi00/hermes-conduit-notifier/blob/HEAD/relay/), end-to-end encrypted where APNs allows.
- **Live voice**: single-use Gemini Live tokens, temporary Qwen Live credentials, GPT-Live sessions on the host's ChatGPT subscription or API key, Grok Live relayed with the host's xAI sign-in, Local Live and Classic voice through your own speech server, voice web lookups, memory and personality for voice, and saved call transcripts.
- **Apple Watch**: short-lived grants that let a Watch call run lookups and Hermes jobs, answer what Hermes waits on in a call from Hermes, and stream GPT-Live, Grok and Local Live audio,…
