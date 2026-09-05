---
repo: "nikok6/herdr-mirror"
name: "herdr-mirror"
description: "Unify your local and remote sessions in one window: mirror remote herdr servers into your local sidebar and drive them over SSH"
readmeQualityOk: true
url: "https://github.com/nikok6/herdr-mirror"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["herdr-plugin"]
stars: 217
forks: 57
openIssues: 7
closedIssues: 22
watchers: 0
contributors: 21
recentReleases: 10
createdAt: "2026-07-04T03:18:49Z"
lastCommitAt: "2026-09-05T07:48:37Z"
lastReleaseAt: "2026-07-20T05:36:42Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 88
undervaluedScore: 32
maintainers: ["nikok6", "dfaroughy", "diegopzz"]
openGraphImageUrl: "https://opengraph.githubassets.com/c02719f4a30985fdc7d8f34d836bc812d202e1f51de876d08cb467badd66f8e7/nikok6/herdr-mirror"
---

# herdr-mirror

A [herdr](https://herdr.dev) plugin that mirrors a remote herdr server's
workspaces and agents into your local sidebar. One window shows the agents on
every machine — blocked, working, done — with live pane content you can watch
and drive.

</p>

> 🐾 Check out my other plugin: [herdr-pet](https://github.com/nikok6/herdr-pet), a tiny
> desk pet on your panes that types, waits, and celebrates with your agent.

Each remote workspace becomes a real local workspace named `<host>: <name>`.
Its panes stream the remote terminal live; its agents report their real state.
Mirroring is one-way (the remote needs no plugin — just herdr), but you can
type into any mirror pane to drive the remote session, and create remote
workspaces/tabs/panes from your side.

A remote can be another machine over **ssh**, or a **container** on this one
(see [Devcontainer](#devcontainer)) — same mirrors either way.

> **How it works.** One Rust binary (`herdr-mirror`) with subcommand modes: a
> `daemon` (control plane — reconciles remote workspaces into local mirrors
> and pushes agent status) and one `pane` process per mirror pane (data plane
> — streams the remote terminal).

## Requirements

-…
