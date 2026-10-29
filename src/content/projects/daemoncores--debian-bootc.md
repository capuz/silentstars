---
repo: "DaemonCores/debian-bootc"
name: "debian-bootc"
description: "Production-ready Debian 13 Trixie bootc/OSTree image — the first fully integrated bootable container image for Debian with Secure Boot, CI-tested, auto-maintained."
readmeQualityOk: true
url: "https://github.com/DaemonCores/debian-bootc"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [44, 39]
topics: ["atomic", "bootable", "bootc", "bootupd", "composefs", "container", "debian", "grub", "immutable", "linux"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 36
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-06-21T11:12:51Z"
lastCommitAt: "2026-10-29T21:23:04Z"
lastReleaseAt: "2026-10-20T17:36:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["Pikatsuto"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba4f107276fafb5a32a43e87a8ea3e4f234cded8646854b9a85acd448eee7a34/DaemonCores/debian-bootc"
discussionCount: 0
---

# debian-bootc

  

---

> **Notice for existing installations.** Until now the images were signed keyless, which a host cannot require, so installed systems accept whatever the registry serves. Images now carry a signature policy: hosts require this repository's cosign signature for `ghcr.io/daemoncores/debian-bootc`. Hosts installed before this change have no such policy; they pick it up with the first update to an image built after the signing key exists, and that update is the last one they accept without verification. If you installed from this repository and want to be sure, reinstall from a fresh ISO or check `/etc/containers/policy.json` after updating. If the signing key is ever regenerated, hosts that pinned the old public key refuse new images until they are reinstalled or their `/etc/pki/containers/image-signing.pub` is replaced.

`debian-bootc` builds Debian 13 as a bootc/OSTree operating-system image. It packages the bootc stack that is not provided by Debian, assembles OCI images, boots them under QEMU for runtime validation, and generates installer artifacts.

The repository is under active development. The amd64 path is the current installation target; arm64…
