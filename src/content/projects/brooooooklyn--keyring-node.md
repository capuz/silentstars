---
repo: "Brooooooklyn/keyring-node"
name: "keyring-node"
description: "https://github.com/hwchen/keyring-rs Node.js binding via https://napi.rs. Including 100% compatible node-keytar alternative."
readmeQualityOk: true
url: "https://github.com/Brooooooklyn/keyring-node"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [64, 21]
stars: 108
forks: 9
openIssues: 3
closedIssues: 11
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-02-25T13:58:53Z"
lastCommitAt: "2026-11-10T11:38:15Z"
lastReleaseAt: "2025-05-04T06:35:43Z"
status: "thriving"
tags: ["funded"]
healthScore: 89
undervaluedScore: 38
maintainers: ["renovate[bot]", "Brooooooklyn", "acoliver"]
openGraphImageUrl: "https://opengraph.githubassets.com/153e808cd8dfcb3b0aec4a54a02b4657626d9d56d11c3e21b240131a1d4d497b/Brooooooklyn/keyring-node"
fundingLinks: ["GITHUB:https://github.com/Brooooooklyn"]
---

# `@napi-rs/keyring`

> https://github.com/hwchen/keyring-rs Node.js binding via https://napi.rs

# Usage

```js
import { Entry } from '@napi-rs/keyring'

const entry = new Entry('my_service', 'my_name')
entry.setPassword('topS3cr3tP4$$w0rd')
const password = entry.getPassword()
console.log('My password is ', password)
entry.deletePassword()
```

# Linux backend selection

On Linux, `Entry` and `AsyncEntry` pick a credential store automatically: the
[Secret Service](https://crates.io/crates/dbus-secret-service-keyring-store) (gnome-keyring, KWallet,
keepassxc, ...) is tried first, and the binding silently falls back to the
[kernel keyutils keyring](https://crates.io/crates/linux-keyutils-keyring-store) when no Secret Service
is available.

You can pin an entry to one specific store by passing the options bag as the last argument (the
option is accepted on every platform but only meaningful on Linux):

```js
new Entry('my_service', 'my_name', { linux: { store: 'secret-service' } }) // require Secret Service
new Entry('my_service', 'my_name', { linux: { store: 'keyutils' } }) // require the kernel keyring
Entry.withTarget('target', 'my_service', 'my_name', { linux: { store:…
