---
repo: "unredacted/freesocks-control-plane"
name: "freesocks-control-plane"
description: "The control plane that makes FreeSocks work"
readmeQualityOk: true
url: "https://github.com/unredacted/freesocks-control-plane"
homepage: "https://freesocks.org"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [83]
topics: ["outline", "outline-vpn", "shadowsocks", "censorship-circumvention", "censorship-resistance", "censorship-resistant", "proxy", "vpn", "xray", "vless"]
stars: 271
forks: 36
openIssues: 0
closedIssues: 7
watchers: 5
contributors: 4
recentReleases: 2
createdAt: "2024-06-09T09:10:00Z"
lastCommitAt: "2026-10-18T08:15:58Z"
lastReleaseAt: "2026-08-27T20:57:58Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 100
undervaluedScore: 45
maintainers: ["lunarthegrey"]
openGraphImageUrl: "https://opengraph.githubassets.com/3c370dfe1298e5900bd0bd69b54e229c61b73267ed6f45d9677e6f92d2ccda4e/unredacted/freesocks-control-plane"
fundingLinks: ["GITHUB:https://github.com/unredacted", "PATREON:https://patreon.com/unredacted_org", "OPEN_COLLECTIVE:https://opencollective.com/unredacted", "LIBERAPAY:https://liberapay.com/unredacted", "CUSTOM:https://unredacted.org/donate/"]
---

# FreeSocks Control Plane

[FreeSocks](https://freesocks.org) gives free proxy access to people in countries where the
Internet is heavily censored. This repository is the software that runs the service: the
website, accounts, key handout, payments and the admin console. The proxy servers themselves
live elsewhere; this app creates and manages the keys people use to connect to them.

Anyone can run their own copy. It is built to be self-hosted from start to finish, with no
outside services required.

## What people can do

- **Get an account without giving anything away.** No email, phone number or password. A
  visitor solves a short puzzle that runs in their browser and gets a random 32-digit
  account number. They can add a passkey later for quicker sign-in, but the number is the
  only way to recover the account, so the site makes them save it before moving on.
- **Get a connection key.** One click creates a key that works with common proxy apps. The
  site recommends apps for each platform and shows a QR code.
- **Choose how they connect.** Pick a server location, or let the service choose the least
  busy one. Pick a mode suited to getting past blocking, or one suited to…
