---
repo: "zig-nostr/plaza"
name: "plaza"
description: "A fast, local-first Nostr client, built natively in Zig. The flagship app of the zig-nostr ecosystem."
readmeQualityOk: true
url: "https://github.com/zig-nostr/plaza"
homepage: "https://zignostr.com/plaza"
language: "Zig"
languages: ["Zig"]
languagePcts: [97]
topics: ["native-sdk", "nostr", "nostr-client", "zig"]
stars: 8
forks: 2
openIssues: 48
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-18T09:11:14Z"
lastCommitAt: "2026-09-07T08:35:31Z"
lastReleaseAt: "2026-08-09T16:16:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 83
undervaluedScore: 55
maintainers: ["sepehr-safari"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ec8ab3418ba1e315f9e8cae9d5c01c53527e30da4e18dc645c6c7fb1513ce14/zig-nostr/plaza"
---

# Plaza

**A fast, local-first Nostr client, built natively in Zig.**

Plaza is the flagship app of the [zig-nostr](https://github.com/zig-nostr)
ecosystem, a native Nostr client where you read without an account and post in
four clicks, and the feed renders from disk. It's built on the
[`nostr`](https://github.com/zig-nostr/nostr) protocol library, and can sign
through [Notary](https://github.com/zig-nostr/notary) so your key never enters a
client.

> **Status: active development (`v0.13.0`).** Plaza installs and runs today. It
> opens straight into a feed, signed in as nobody: nine accounts to start from,
> already populated, with a strip along the top offering a key when you want
> one. Create an identity in Notary, bring an existing key there, or connect an
> external signer over NIP-46. **Your key never enters Plaza.** There is no
> field in it that can hold one. Plaza ships Notary, starts it as its own child
> process, and asks it for signatures over a channel nothing else on the machine
> can reach, so the process decoding images and parsing relay JSON holds no
> secret and cannot be made to. The feed
> carries real names, avatars and pictures, rendered from a local store…
