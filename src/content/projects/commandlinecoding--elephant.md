---
repo: "CommandLineCoding/Elephant"
name: "Elephant"
description: "Elephant – a privacy-first, open-source messenger."
readmeQualityOk: true
url: "https://github.com/CommandLineCoding/Elephant"
homepage: "https://elephant.commandlinecoding.in/api/health"
language: "Dart"
languages: ["Dart", "HTML"]
languagePcts: [61, 21]
topics: ["chi", "dart", "flutter", "github-actions", "golang", "podman-compose", "postgresql", "argon2", "cryptography", "pgx"]
stars: 9
forks: 5
openIssues: 28
closedIssues: 60
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-25T15:48:12Z"
lastCommitAt: "2026-11-07T13:55:02Z"
lastReleaseAt: "2026-10-09T17:50:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 62
maintainers: ["mrsumanbiswas", "ChandruWritesCode", "Golden-Eagle07"]
openGraphImageUrl: "https://opengraph.githubassets.com/a6775e0888e69f0589aa25328e712a9e20bd686b1203eaef4aaab6fe377447a5/CommandLineCoding/Elephant"
discussionCount: 1
---

---

# Elephant
Elephant is a privacy-first, open-source messaging application built with Go and Flutter. It offers end-to-end encrypted direct messages based on the Signal Protocol, group chats, and real-time delivery over WebSocket. It also supports password and Google/GitHub sign-in, and keeps an encrypted on-device message store.

## Features

- **End-to-end encrypted direct messages:** The Signal Protocol (X3DH + Double Ratchet, via `libsignal_protocol_dart`) runs on the device. The server only stores public prekey bundles and opaque ciphertext.
- **Contact verification:** Users can mark a contact's identity key as verified. The verification resets automatically if that contact's identity key changes.
- **Group chats:** Groups have admin/member roles, renaming, member management, unread tracking, and typing indicators and read receipts. *Group messages are not yet end-to-end encrypted.*
- **Real-time messaging:** Chat, typing indicators, read receipts and online presence are delivered over a single WebSocket.
- **Message features:** Users can reply/quote messages and edit their own messages within 15 minutes. Paginated history is available for direct and group chats.
-…
