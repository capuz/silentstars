---
repo: "Dicklesworthstone/frankenfs"
name: "frankenfs"
description: "Memory-safe FUSE reimplementation of ext4 and btrfs in Rust with block-level MVCC and RaptorQ self-healing. 19-crate workspace, zero unsafe code."
url: "https://github.com/Dicklesworthstone/frankenfs"
language: "Rust"
languages: ["Rust"]
languagePcts: [88]
topics: ["btrfs", "ext4", "filesystem", "fuse", "linux", "memory-safe", "mvcc", "raptorq", "rust", "self-healing"]
stars: 21
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-10T03:32:15Z"
lastCommitAt: "2026-06-29T07:22:01Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["Dicklesworthstone"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1154130483/a240c5dc-2498-4c0c-9971-0bba065d9a54"
---

</div>

  <br>
  <code>&nbsp;╔═╗┬─┐┌─┐┌┐┌┬┌─┌─┐┌┐┌╔═╗╔═╗&nbsp;</code><br>
  <code>&nbsp;╠╣ ├┬┘├─┤│││├┴┐├┤ │││╠╣ ╚═╗&nbsp;</code><br>
  <code>&nbsp;╚  ┴└─┴ ┴┘└┘┴ ┴└─┘┘└┘╚  ╚═╝&nbsp;</code><br>
  <br>
  <strong>Memory-safe ext4 + btrfs in Rust, from userspace</strong><br>
  <em>Block-level MVCC &middot; RaptorQ self-healing &middot; Adaptive conflict arbitration &middot; Zero unsafe code</em>
</p>

</p>

---

## TL;DR

**The problem.** ext4 and btrfs are production kernel filesystems. That makes their behavior worth preserving, but it also makes experimentation with concurrency control, repair policy, and deterministic test harnesses difficult. ext4 serializes write commits through JBD2, while btrfs relies on kernel COW machinery and `scrub` plus redundancy for repair workflows.

**The approach.** FrankenFS extracts ext4 and btrfs behavior from ~205K lines of Linux kernel C (v6.19), re-implements that behavior in Rust with `#![forbid(unsafe_code)]`, and adds experimental layers for block-level MVCC, RaptorQ repair symbols, and explicit-opt-in FUSE writeback-cache barriers.

It runs as a normal Linux process via FUSE. The current `ParityReport::current()` printout is 97/97 rows in…
