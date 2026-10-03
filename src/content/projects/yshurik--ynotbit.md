---
repo: "yshurik/ynotbit"
name: "ynotbit"
description: "ynotbit — why not bit? A compact encrypted desktop Bitmessage client based on notbit."
readmeQualityOk: true
url: "https://github.com/yshurik/ynotbit"
language: "C++"
languages: ["C++"]
languagePcts: [88]
stars: 7
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-09-13T09:10:36Z"
lastCommitAt: "2026-10-03T22:04:56Z"
lastReleaseAt: "2026-10-01T16:15:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 61
maintainers: ["yshurik"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e885553931847a987708532b6fa15cbcf1a1545d78504b01008fb256f831dfd/yshurik/ynotbit"
---

# ynotbit — why not bit?

A compact desktop Bitmessage client based on [notbit](https://github.com/bpeel/notbit),
by [yshurik](https://github.com/yshurik). **Current release: 0.5.1.**

ynotbit keeps identity keys in a password-protected vault and correspondence in a
separate encrypted mailbox document. Its keyless relay continues collecting
network objects while the vault is locked. Unlocking inspects retained objects
and saves matching letters to the mailbox.

| Chans | Contacts | Writing to a contact |
|---|---|---|
|  |  |  |

## Download

[**v0.5.1 release**](https://github.com/yshurik/ynotbit/releases/tag/v0.5.1) — prebuilt,
CI-tested downloads for Linux (x86_64), macOS (Apple Silicon), and Windows (x86_64).
See [Current boundaries](#current-boundaries) below for what each build does and doesn't
guarantee.

## Using the app

1. Create or open a `.bmvault` file. Create an identity, import `keys.dat`, or join
   a chan using its shared phrase and expected address.
2. Create or open a `.bmmail` document in Documents or another writable folder.
3. Choose **Write a letter**, select the sender, and pick a recipient: type a
   contact's name or a BM-address, or use the contacts…
