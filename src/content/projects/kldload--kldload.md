---
repo: "kldload/kldload"
name: "kldload"
description: "4 distros, one USB, ZFS on root. Debian, Fedora, RHEL and Arch. Offline install, boot environments, WireGuard, eBPF. Free."
readmeQualityOk: true
url: "https://github.com/kldload/kldload"
homepage: "https://kldload.com"
language: "Shell"
languages: ["Shell", "HTML"]
languagePcts: [54, 23]
topics: ["arch-linux", "centos", "debian", "ebpf", "fedora", "golden-image", "infrastructure", "installer", "linux", "offline-install"]
stars: 38
forks: 6
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-03-21T00:57:19Z"
lastCommitAt: "2026-08-21T04:11:44Z"
lastReleaseAt: "2026-06-16T12:36:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 49
maintainers: ["kldload"]
openGraphImageUrl: "https://opengraph.githubassets.com/f14d998213d05ca5f1de24db2235de0ee7e95450081b38c44105a085d8be940b/kldload/kldload"
---

<h1>
  &nbsp;kldload
</h1>

<em>BYOL0 — bring your own layer zero</em>

**A build tool that assembles a Linux distribution onto ZFS root from the
vendor's own package repositories — and the artifact OS that falls out of it.**

*Boot environments, air-gapped installs, and a snapshot before every package transaction.*

**The family:** **kldload** — the substrate &middot; [zxplore](https://github.com/zxplore/zxplore) — the ZFS console &middot; [wgxplore](https://github.com/wgxplore/wgxplore) — the WireGuard console &middot; [vmxplore](https://github.com/vmxplore/vmxplore) — the VM console

</div>

There are two ways to use this.

**1 — As a build tool, against your own Linux.** It replaces the
"download the .iso" step. `dnf --installroot`, `debootstrap` or `pacstrap`
against the vendor's own CDN, then ZFS and NVIDIA compiled against the kernel
that install just laid down, signed and MOK-enrolled so they load with Secure
Boot left on. Nothing forked, nothing patched. The build stops wherever you
decide — a plain install you finish by hand, or a fully baked image that gets
*deployed* rather than installed.

**2 — As the finished article.** The ISO is what that build leaves behind: ZFS…
