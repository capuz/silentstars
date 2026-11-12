---
repo: "gnacho/nextsync"
name: "nextsync"
description: "NextSync rewritten in Rust (gtk-rs/libadwaita): GNOME desktop companion for keeping a complete local mirror of Nextcloud accounts, wrapping nextcloudcmd"
readmeQualityOk: true
url: "https://github.com/gnacho/nextsync"
homepage: "https://nextsync.cloudless.club/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 0
closedIssues: 232
watchers: 1
contributors: 1
recentReleases: 6
createdAt: "2026-08-12T23:14:48Z"
lastCommitAt: "2026-11-12T11:43:14Z"
lastReleaseAt: "2026-08-14T19:36:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 100
undervaluedScore: 64
maintainers: ["gnacho"]
openGraphImageUrl: "https://opengraph.githubassets.com/a799b8bde73e2b84a6a18efb5eb25e765f77b4cc83ac40341ff6f69f2a96bf3b/gnacho/nextsync"
fundingLinks: ["GITHUB:https://github.com/gnacho"]
---

·
    ·
    ·

## What it is

You keep your files on your disk. When your computer and your server need to agree on what changed, NextSync reconciles both sides with its own sync engine, written in Rust and running in the same process as the app: accounts, per-folder configuration, live progress, conflict resolution, and a tray icon that reflects what is actually going on.

Nothing else needs to be installed. The engine speaks WebDAV to Nextcloud and OpenCloud directly, keeps its own journal, uploads in chunks (chunked v2 on Nextcloud, TUS on OpenCloud) and resumes interrupted transfers. If you ever need the old behaviour, Settings still has a switch to delegate a folder to the official command line client instead.

## Why it exists

NextSync started as [nextsync-py](https://github.com/gnacho/nextsync-py), a small Python and GTK app that wrapped the official Nextcloud command line engine in a proper desktop experience. It worked well enough to run every day, but everything paid the Python tax: an interpreter to ship, a startup to wait for, and dynamic typing that turned GObject lifetime mistakes into runtime surprises instead of compiler errors.

The rewrite in Rust happened for…
