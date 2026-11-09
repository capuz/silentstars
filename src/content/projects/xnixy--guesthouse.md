---
repo: "xnixy/guesthouse"
name: "guesthouse"
description: "GPU virtual machines on Linux"
readmeQualityOk: true
url: "https://github.com/xnixy/guesthouse"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
stars: 38
forks: 0
openIssues: 15
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-11-05T19:57:47Z"
lastCommitAt: "2026-11-09T00:53:48Z"
lastReleaseAt: "2026-11-08T20:18:53Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 85
undervaluedScore: 36
maintainers: ["xnixy"]
openGraphImageUrl: "https://opengraph.githubassets.com/487c3049c92afa8103db94dc1021ff4a07d880bbd06a3a99b42df97b70f51a11/xnixy/guesthouse"
discussionCount: 0
---

# Guesthouse

**Windows and Linux VMs on KVM that use the same GPU my desktop is using, with NVIDIA's real driver inside.**

That's Godot's full Forward+ renderer on Vulkan, in Windows, in a VM on Fedora. Nothing is passed through. The host never gives up the card, so my GNOME desktop keeps running on it the whole time.

> **Status:** early. Version 0.2.2 is out, and everything's here, the Windows GPU part included. All of it has only run on my PC, on one RTX 5090. What works, what doesn't and what's next is in the [roadmap](https://github.com/xnixy/guesthouse/issues/2), which I keep up to date.

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/xnixy/guesthouse/main/install.sh | sh
```

It needs x86_64 Linux. For a GPU in a VM you need an NVIDIA card with the open kernel modules, and the RTX 5090 and a 40 series card have run this. The 40, 20 and 16 series get experimental support. On anything else it installs with plain VMs only, and says why. [What the installer does](#what-the-installer-does) has the details.

## Why I'm building this

If you want a proper GPU in a Windows VM on Linux, you normally get two options. You pass the whole card through with VFIO and the…
