---
repo: "xmtp/libxmtp"
name: "libxmtp"
description: "shared library bindings & reference implementation of XMTP (X-tensible Message Transport Protocol)"
readmeQualityOk: true
url: "https://github.com/xmtp/libxmtp"
language: "Rust"
languages: ["Rust"]
languagePcts: [61]
stars: 127
forks: 111
openIssues: 108
closedIssues: 1012
watchers: 10
contributors: 70
recentReleases: 0
createdAt: "2023-02-03T18:33:07Z"
lastCommitAt: "2026-11-03T19:05:11Z"
lastReleaseAt: "2024-02-03T02:52:18Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 98
undervaluedScore: 51
maintainers: ["neekolas", "mehmetkr-31", "furkan3152"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac0ffdadfe6c72e4adf868e7a950fa3cf9c67e9eef911c496e4a831bd242790f/xmtp/libxmtp"
discussionCount: 2
---

# XMTP

**Build secure messaging into your app.**

XMTP is an open protocol for end-to-end encrypted direct messages and group conversations. Use it to add chat to your mobile or web app, connect people with agents from other apps, or connect agents to agents.

This repository contains the shared Rust implementation, a ready to deploy messaging backend, and SDKs for browsers, Node.js, Android, iOS, and agents. The SDKs handle message encryption, identity, group state, and local storage so you can focus on your app.

[Documentation](https://xmtp.org/) · [SDK source](https://github.com/xmtp/libxmtp/tree/main/sdks) · [Example apps](https://github.com/xmtp/libxmtp/tree/main/apps) · [Contributing](https://github.com/xmtp/libxmtp/blob/main/CONTRIBUTING.md)

## Why use XMTP

- **Security built on MLS.** Messaging Layer Security provides end-to-end encryption, forward secrecy, and post-compromise security. XMTP provides protection against harvest now, decrypt later (HNDL) attacks, where messages are stored today for a future quantum computer to try to decrypt. SQLCipher is officially supported for encrypting native client databases at rest. See the [security…
