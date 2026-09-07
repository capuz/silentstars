---
repo: "zig-nostr/notary"
name: "notary"
description: "A native signer for Nostr. Your key stays on your machine."
readmeQualityOk: true
url: "https://github.com/zig-nostr/notary"
homepage: "https://zignostr.com/notary"
language: "Zig"
languages: ["Zig"]
languagePcts: [98]
topics: ["bunker", "cryptography", "desktop", "key-management", "macos", "native-sdk", "nip46", "nostr", "nostr-protocol", "nostr-signer"]
stars: 10
forks: 1
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-11T02:44:48Z"
lastCommitAt: "2026-09-07T08:34:51Z"
lastReleaseAt: "2026-08-25T20:39:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 51
maintainers: ["sepehr-safari"]
openGraphImageUrl: "https://opengraph.githubassets.com/d1f0db0e5281a368cbc9b9748c6e82f1602931060f6ec8ef0f11c722238f5f8d/zig-nostr/notary"
---

# Notary

**A native remote signer for [Nostr](https://nostr.com).** Not a web app in a
window: Zig throughout, drawn by the toolkit itself, with no Electron and no
WebView anywhere. Notary keeps your secret key on a machine you control and
signs for your apps over
[NIP-46](https://github.com/nostr-protocol/nips/blob/master/46.md). The key
never leaves the signer unless you ask for it, and nothing signs on your behalf
until you have said so: a request shows which client is asking and what it would
sign, and your answer stands for that one request, for a day, or always for that
client and that kind.

Built on [`zig-nostr/nostr`](https://github.com/zig-nostr/nostr), and the signer
behind [Plaza](https://github.com/zig-nostr/plaza), the native client in the same
ecosystem. Nothing here is tied to it: the `bunker://` URL works in any NIP-46
client, and Notary neither knows nor cares which one is asking.

> **Status: early / work in progress.** The signer works end-to-end over public
> relays, including those that require NIP-42 authentication. Downloads are
> ad-hoc signed (not notarized). See [Install](#install).

## What it does

| | | |
| --- | --- | --- |
|  |  |  |

<sub>Real…
