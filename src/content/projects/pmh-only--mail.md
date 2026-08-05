---
repo: "pmh-only/mail"
name: "mail"
description: "The next gen webmail client"
readmeQualityOk: true
url: "https://github.com/pmh-only/mail"
homepage: "https://maildemo.pmh.codes"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [51, 46]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2026-04-10T11:53:39Z"
lastCommitAt: "2026-08-05T06:08:24Z"
status: "thriving"
tags: ["funded"]
healthScore: 88
undervaluedScore: 61
maintainers: ["pmh-only", "csnewcs", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e6a10dd5c76ccd23a7e78fd883e7f88ef8dcfe583d88f373ef3c89f15d18645/pmh-only/mail"
fundingLinks: ["GITHUB:https://github.com/pmh-only"]
---

# ✉️ mail

The next webmail client

## Live demo

Try it now: https://maildemo.pmh.codes/

The demo runs with preloaded data and resets automatically, so you can explore the full UI without configuring PostgreSQL, mail servers, or authentication.

## Screenshots

> Click to zoom in

## Focused on

- Single user only
- Password, passkey, GitHub, Discord, and OpenID Connect authentication
- OpenPGP cleartext, detached, and PGP/MIME signing, encryption, verification, and decryption
- Simple and Modern design
- Fast, SSR-first

## Inspired by

- [Proton Mail](https://proton.me/mail)
- [Bulwark](https://bulwarkmail.org/)
- [shadcn/ui](https://v3.shadcn.com/examples/mail)

## How to run

> You need running PostgreSQL instance.

Want to try it first without local setup? Use the live demo: https://maildemo.pmh.codes/

1. Clone this repository
2. Copy `.env.example` to `.env` and replace placeholders
3. Run `pnpm i` to download dependencies
4. Run `pnpm dev` to start

## Environment variables

Copy `.env.example` to `.env` for the web process. `pnpm dev` also loads that file for
the worker. For separate deployments, provide the same database, encryption, AI, and
mail-authentication values…
