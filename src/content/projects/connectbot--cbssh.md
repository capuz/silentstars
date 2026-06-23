---
repo: "connectbot/cbssh"
name: "cbssh"
description: "ConnectBot SSH Client Library: written in Kotlin with Kaitai Struct and KStateMachine"
url: "https://github.com/connectbot/cbssh"
homepage: "https://connectbot.org/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [95]
topics: ["ssh", "ssh-client", "ssh-library", "cryptography", "kaitai-struct", "kstatemachine", "security"]
stars: 6
forks: 3
openIssues: 1
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-11-28T07:07:35Z"
lastCommitAt: "2026-06-23T06:43:15Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 95
undervaluedScore: 87
maintainers: ["kruton", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c6cb97f037ad78306f237cf31a3aceec45dae4212c04bd051a9a7deb7a10c08c/connectbot/cbssh"
fundingLinks: ["GITHUB:https://github.com/kruton", "BUY_ME_A_COFFEE:https://buymeacoffee.com/kruton"]
---

# ConnectBot SSH Client Library

This is ConnectBot SSH library built with Kotlin. Internally it uses coroutines,
protocol definition files, and a state machine to run the SSH protocol. It
currently connects to SSH servers, authenticates, and provide interactive shell
sessions.

The protocol parsing uses declarative Kaitai Struct specifications
that auto-generate code from `.ksy` definitions. The internal state machine is
defined in KStateMachine for clear separation of protocol states from the code
that runs in reaction to state changes.

## Features

- **SSH Client**: Connect, authenticate, open shell sessions, read/write data
- **Protocol Parsing**: Complete SSH wire protocol coverage (RFCs 4250-4256,
  4419, 5656, 8308, 8709, 8731, 9142)
- **Channel I/O**: Interactive shells with PTY, stdout/stderr streams, flow
  control
- **SFTP**: File transfer with full read/write/stat/directory operations
  ([draft-ietf-secsh-filexfer](https://datatracker.ietf.org/doc/html/draft-ietf-secsh-filexfer))
- **Port Forwarding**: Local, remote, and dynamic (SOCKS5) port forwarding
- **Agent Forwarding**: Forward SSH agent requests with session binding support
- **Transport**: Pluggable transport…
