---
repo: "bitranox/pve-bindsnap"
name: "pve-bindsnap"
description: "Re-enable Proxmox snapshots for LXC containers with bind/device mounts"
readmeQualityOk: true
url: "https://github.com/bitranox/pve-bindsnap"
language: "Perl"
languages: ["Perl"]
languagePcts: [89]
topics: ["bind-mount", "lxc", "perl", "proxmox", "proxmox-ve", "snapshot", "containers", "pve", "claude-code-plugin", "claude-code-skills"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-07T11:47:13Z"
lastCommitAt: "2026-11-17T14:14:54Z"
lastReleaseAt: "2026-11-17T14:37:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 59
undervaluedScore: 31
maintainers: ["bitranox"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f3608713015534d365d74ff7aaa941c3d9ee1fb0b70847c369da9439f6bdfb5/bitranox/pve-bindsnap"
---

# pve-bindsnap

Snapshot **and clone** Proxmox LXC containers that have bind-/device-mounts (`mpN`
entries pointing at host paths). Proxmox greys snapshots out and refuses the clone; this
overlay enables both again, delegating to Proxmox's genuine snapshot and clone code
rather than forking it.

> Release 1.4.2. It passes the unit tests and has been exercised on Proxmox VE 9.1 and 9.2
> (pve-container 6.0.18 to 6.1.16, see [compatible versions](https://github.com/bitranox/pve-bindsnap/blob/HEAD/docs/compatible-versions.md))
> across the full install lifecycle and matrix: create /
> rollback / delete (including a data-level rollback), the `BINDSNAP-FORCE-RUNNING`,
> `BINDSNAP-UNSUPPORTED` and `BINDSNAP-EXCLUDE` paths, each both per-snapshot and as a
> standing CT-Notes directive, plus the known-bad hard block, and it runs in the author's own
> production cluster.
> `pct clone` of a bind-mount container is covered too (the binds are carried to the clone,
> `BINDSNAP-EXCLUDE` drops them), gated by its own checksum so an untested build falls back
> to stock. On a pve-container build it doesn't recognise it refuses by default until you
> opt in. It's a small,
> commented overlay: read…
