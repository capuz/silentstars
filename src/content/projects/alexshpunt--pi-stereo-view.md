---
repo: "alexshpunt/pi-stereo-view"
name: "pi-stereo-view"
description: "Keep Pi conversation separate from tool output and agent activity."
readmeQualityOk: true
url: "https://github.com/alexshpunt/pi-stereo-view"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["coding-agent", "conversation", "developer-tools", "pi", "pi-agent", "pi-coding-agent", "pi-extension", "pi-package", "session-management", "split-pane"]
stars: 18
forks: 2
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-09T06:39:33Z"
lastCommitAt: "2026-11-23T13:28:19Z"
lastReleaseAt: "2026-10-26T13:13:01Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 53
maintainers: ["alexshpunt-clanker[bot]", "alexshpunt", "okuuva"]
openGraphImageUrl: "https://opengraph.githubassets.com/39c7ac487136e8980174c19eee947b521e1429433e9e5609a805c981dda458fe/alexshpunt/pi-stereo-view"
discussionCount: 0
---

pi-stereo-view

You come back to a chat and can't remember what you were talking about?

**Split tool output from the agent's replies with pi-stereo-view.**

The chat becomes two zones: your conversation with the agent, and the agent's work where it calls tools.

| Zone | What's in it |
| --- | --- |
| **Conversation** | Your messages, the LLM's replies, summaries and system information, including welcome, loaded resources, warnings, errors and status notices at any time. |
| **Activity** | Thinking, tool calls and results, related tool output, and shell execution. |

Unrecognized content stays in Conversation unless its metadata links it to a known tool call.

Late output linked to a tool call appears directly below that call in Activity, even if other work has happened since. Combined history keeps its original order.
