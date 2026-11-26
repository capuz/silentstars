---
repo: "bitranox/pve-bindsnap"
name: "pve-bindsnap"
description: "Re-enable Proxmox snapshots for LXC containers with bind/device mounts"
readmeQualityOk: true
url: "https://github.com/bitranox/pve-bindsnap"
language: "Perl"
languages: ["Perl"]
languagePcts: [93]
topics: ["bind-mount", "lxc", "perl", "proxmox", "proxmox-ve", "snapshot", "containers", "pve", "claude-code-plugin", "claude-code-skills"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 6
createdAt: "2026-06-07T11:47:13Z"
lastCommitAt: "2026-11-26T15:24:40Z"
lastReleaseAt: "2026-11-18T17:45:01Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 74
undervaluedScore: 53
maintainers: ["bitranox", "sasha-id"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc2b37816195b61187ca43e55f2c6e15090a5024b98cc57078eff814d4c85fa7/bitranox/pve-bindsnap"
---

# pve-bindsnap

Snapshot **and clone** Proxmox LXC containers that have bind-/device-mounts (`mpN`
entries pointing at host paths). Proxmox greys snapshots out and refuses the clone; this
overlay enables both again, delegating to Proxmox's genuine snapshot and clone code
rather than forking it.

> Release 1.12.0. It passes the unit tests and has been exercised on Proxmox VE 9.1, 9.2 and 9.3
> (every pve-container build listed in [compatible versions](https://github.com/bitranox/pve-bindsnap/blob/HEAD/docs/compatible-versions.md))
> across the full install lifecycle and matrix: create /
> rollback / delete (including a data-level rollback), the `BINDSNAP-FORCE-RUNNING`,
> `BINDSNAP-UNSUPPORTED` and `BINDSNAP-EXCLUDE` paths, each both per-snapshot and as a
> standing CT-Notes directive, plus the known-bad hard block, and it runs in the author's own
> production cluster.
> `pct clone` of a bind-mount container is covered too (for `root@pam` the binds are carried
> to the clone, `BINDSNAP-EXCLUDE` drops them), gated by its own checksum so an untested build falls back
> to stock. On a pve-container build it doesn't recognise it refuses by default until you
> opt in.
