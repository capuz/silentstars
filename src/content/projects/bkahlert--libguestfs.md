---
repo: "bkahlert/libguestfs"
name: "libguestfs"
description: "Containerized libguestfs including virt-customize, guestfish, etc."
readmeQualityOk: true
url: "https://github.com/bkahlert/libguestfs"
language: "Shell"
languages: ["Shell"]
languagePcts: [91]
topics: ["docker", "libguestfs", "guestfish", "virt-customize", "virt-builder", "shellscript"]
stars: 27
forks: 4
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2020-12-28T05:33:11Z"
lastCommitAt: "2026-10-21T21:15:29Z"
lastReleaseAt: "2026-10-21T20:47:49Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 45
maintainers: ["bkahlert", "github-actions[bot]", "tbeadle"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d6dc58da3fc6db1febe35666fd62f1d114baf911b90a8f0b81b4ed8109abf4/bkahlert/libguestfs"
fundingLinks: ["CUSTOM:paypal.me/bkahlert"]
---

# bkahlert/libguestfs [](https://github.com/bkahlert/libguestfs/actions/workflows/build.yml) [](https://github.com/bkahlert/libguestfs/blob/master/LICENSE) [](https://www.buymeacoffee.com/bkahlert)

## About

**Containerized libguestfs including virt-customize, guestfish, etc.**

The image uses Ubuntu 26.04 LTS and its packaged libguestfs, guestfs-tools,
QEMU, and Linux kernel. All platforms configured in
[`docker-bake.hcl`](https://github.com/bkahlert/libguestfs/blob/HEAD/docker-bake.hcl) remain supported.
Ubuntu 26.10 is not used because it no longer packages libguestfs for ARMv7.

* Runs as non-root user
* Multi-platform image
* Helper scripts
    * [`guestfish` *Manipulate a virtual machine / image using the guest filesystem shell*
      ](https://github.com/bkahlert/libguestfs/blob/HEAD/../../raw/master/docs/guestfish.svg)
    * [`virt-builder` *Build virtual machine images quickly*  
      ](https://github.com/bkahlert/libguestfs/blob/HEAD/../../raw/master/docs/virt-builder.svg)
    * [`virt-customize` *Customize a virtual machine / image*  
      ](https://github.com/bkahlert/libguestfs/blob/HEAD/../../raw/master/docs/virt-customize.svg)
    * [`pi` *Boot a virtual machine…
