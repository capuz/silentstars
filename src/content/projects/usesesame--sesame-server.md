---
repo: "usesesame/sesame-server"
name: "sesame-server"
description: "Go account service, portals and admin console for Sesame, self-hostable on SQLite or Postgres. It is built so it cannot read vaults, and the only vault data it stores is encrypted Sync snapshots when Sync is on."
readmeQualityOk: true
url: "https://github.com/usesesame/sesame-server"
homepage: "https://usesesame.app"
language: "Go"
languages: ["Go"]
languagePcts: [64]
topics: ["agpl", "docker", "go", "golang", "open-source", "password-manager", "postgresql", "privacy", "rest-api", "security"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-17T13:06:42Z"
lastCommitAt: "2026-11-15T11:23:25Z"
lastReleaseAt: "2026-10-18T20:01:18Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 53
maintainers: ["d0mkaaa", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6ae9be4a6e590cfcef45fab821083da456f1f4cf3a3bfc7ac895141269d833d0/usesesame/sesame-server"
---

# Sesame server

This repository holds the server side of Sesame. The servers here never receive a vault password, an encryption key, a TOTP seed, a recovery kit or an unencrypted vault. When someone turns on Sync, the server stores their vault encrypted, together with the signed version history and device list that their devices use to check it.

It contains two separate servers that share no data:

- The hosted service at usesesame.app, with website accounts, beta invitations, download and release information, support requests and desktop linking. It is a Go API with an account portal in `web/account` and an administration portal in `web/admin`, and it runs on PostgreSQL. [DEPLOYMENT.md](https://github.com/usesesame/sesame-server/blob/HEAD/DEPLOYMENT.md) covers production.
- The self-hosted server, `sesame-server`, which you run yourself to pair your desktops and optionally sync encrypted vaults. It is one program with SQLite and a browser console in `web/console`. To run one, follow [SELF-HOSTING.md](https://github.com/usesesame/sesame-server/blob/HEAD/SELF-HOSTING.md).

## Run the hosted service locally

You need Node and Docker with the Compose plugin, and Go for the tests.…
