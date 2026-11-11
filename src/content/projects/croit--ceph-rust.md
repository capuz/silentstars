---
repo: "croit/ceph-rust"
name: "ceph-rust"
description: "Ceph, rewritten from scratch in Rust: wire-compatible daemons and client libraries for a huge leap in performance and stability. OSD with its own NVMe store, CephFS2, librustyrados, librustyrbd and librustycephfs, RDMA and GPUDirect. Runs alongside classic Ceph in existing clusters. By croit."
readmeQualityOk: true
url: "https://github.com/croit/ceph-rust"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 40
forks: 6
openIssues: 0
closedIssues: 1
watchers: 3
contributors: 2
recentReleases: 1
createdAt: "2026-11-06T11:37:11Z"
lastCommitAt: "2026-11-11T19:46:12Z"
lastReleaseAt: "2026-11-10T07:27:30Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 17
maintainers: ["MartinVerges"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb2115267b71531aa3eecebece9a93da8ff81a00be3d13bd89e3265885accb20/croit/ceph-rust"
---

# croit ceph-rust

**Ceph, rewritten in Rust for NVMe, fast networks and GPUs.**

croit ceph-rust is croit's ground-up Rust implementation of Ceph services and
client libraries. Every component speaks the Ceph wire protocol and drops into
an existing Ceph cluster: no forklift migration, no new tooling — your
monitors, managers, `ceph` CLI and applications keep working. Replace one
drive, one server or one client at a time.

More: [product page](https://www.croit.io/solutions/flashstore-osd) ·
[blog post: rebuilding Ceph in Rust](https://www.croit.io/blog/rebuilding-ceph-in-rust-flashstore-osd)

- **Built for flash.** FlashStore, our object store, is designed for NVMe from
  the first line: thread-per-core, lock-free hot paths, zero-copy data paths,
  acknowledged only when the data is durable on power-loss-protected NVMe.
- **Drop-in compatible.** The FlashStore OSD and librustyrados are
  wire-compatible with Ceph v21.2.0 (Umbrella) and v20.2.4 (Tentacle);
  librustyrbd exposes the v21.2.0 librbd C API and is tested against v21.2.0
  and v20.2.4 clusters. The OSD runs side by side with classic OSDs in the same
  pools and placement groups.
- **Fast networks and GPUs.** Kernel TCP…
