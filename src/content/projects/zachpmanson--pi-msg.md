---
repo: "zachpmanson/pi-msg"
name: "pi-msg"
description: "Drive Pi entirely from XMPP."
readmeQualityOk: true
url: "https://github.com/zachpmanson/pi-msg"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 70
forks: 0
openIssues: 20
closedIssues: 49
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-23T07:34:36Z"
lastCommitAt: "2026-10-27T12:39:52Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 93
undervaluedScore: 31
maintainers: ["zachpmanson"]
openGraphImageUrl: "https://opengraph.githubassets.com/1208ca417067827aa6aef6d3e11699277a3e2f3f74f6b0631827390e8e8aa952/zachpmanson/pi-msg"
---

# pi-msg

Drive the [Pi](https://pi.dev) coding agent entirely over XMPP.

`pi-msg` launches `pi --mode rpc`, then bridges Pi's JSONL event stream to XMPP, with command interception for system commands like `/new`.

## Comms

```mermaid
sequenceDiagram
    participant You as You (XMPP client)
    participant Bridge as pi-msg
    participant Pi as pi --mode rpc
    You->>Bridge: "fix the build"
    Bridge->>Pi: prompt
    Pi-->>Bridge: send_message tool call
    Bridge-->>You: explicit XMPP message
    Note over Pi,Bridge: final assistant text stays internal
    You->>Bridge: "/new"
    Bridge->>Pi: {type:"new_session"}
    Note over Pi: fresh session
```

## Supported features

- Sessions resuming across restarts, `/new` to reset
- Pi slash commands work over chat
- XMPP DMs and group chats
- Explicit outbound messages via `send_message`; final assistant text is internal
- Threaded replies via `reply_to`
- Room and 1:1 history via `read_messages`
- MAM supported
- File transfer (XEP-0363/0066)
- Reactions (XEP-0444)
- Presence updates, including active background subagents
- Last Activity (XEP-0012) online-resource idle-time responses ([privacy and…
