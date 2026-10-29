---
repo: "daemonless/fjord"
name: "fjord"
description: "App store and stack manager for FreeBSD: run daemonless OCI apps as jails on podman or AppJail from one static binary"
readmeQualityOk: true
url: "https://github.com/daemonless/fjord"
homepage: "https://fjord.daemonless.io"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [62, 23]
topics: ["app-store", "appjail", "compose", "containers", "freebsd", "golang", "homelab", "jails", "oci", "podman"]
stars: 13
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-09-13T16:37:33Z"
lastCommitAt: "2026-10-29T10:36:23Z"
lastReleaseAt: "2026-10-06T09:22:24Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["ahze", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/18ec1c75f21a8b4ce9a538896944389d5fd937a0d4e5cde264c0455d08f2e676/daemonless/fjord"
---

# fjord

A web UI for running compose stacks on FreeBSD (and Linux) — app store,
stack lifecycle, storage, updates, and host diagnostics, in one static Go
binary with an embedded UI.

Born of the [daemonless.io](https://daemonless.io) effort to make native
FreeBSD OCI containers a first-class experience, but engine-neutral by
design: the same compose runs on **podman** or **AppJail**, and the catalog
format carries nothing vendor-specific.

> **fjord is root on its host.** Whoever signs in can run anything there.
> It speaks plain HTTP, so the password crosses your network unencrypted:
> keep it on a trusted LAN, or put a reverse proxy with HTTPS in front.
> Never forward port 3567 to the internet.

## What's new in 0.3

- **Updates you can see into and undo.** The Update panel lists what each
  service would get, in plain words ("New build of the same version —
  3 packages changed"), and lets you tick which ones to update, version bumps
  included. After an update fjord watches the new container and marks the
  update failed if it crash-loops; **Roll back** returns to the previous image.
  A version with no build for this host is refused before it is pulled.
- **Networks that…
