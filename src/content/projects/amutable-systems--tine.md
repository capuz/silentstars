---
repo: "amutable-systems/tine"
name: "tine"
description: "Build packages, go/Rust projects, and OS images with Buck2"
readmeQualityOk: true
url: "https://github.com/amutable-systems/tine"
homepage: "https://amutable.com/"
language: "Python"
languages: ["Python", "Starlark"]
languagePcts: [78, 21]
topics: ["boot", "buck2", "build", "cargo", "go", "image", "os", "rust"]
stars: 54
forks: 6
openIssues: 0
closedIssues: 7
watchers: 4
contributors: 17
recentReleases: 0
createdAt: "2026-07-30T11:27:27Z"
lastCommitAt: "2026-10-25T08:40:42Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 39
maintainers: ["daandemeyer", "martinpitt", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/086e77fdfec65b4b9012cf9da0db13ade00e377a9aa17f124574b04c8822d9e9/amutable-systems/tine"
discussionCount: 0
---

# tine

tine composes operating-system images out of packages and pinned third-party repositories with
[Buck2](https://buck2.build/). Every build action runs in an unprivileged sandbox without network access.
Filesystem images are stacks of overlay deltas. tine's primary output targets are [unified kernel
images](https://uapi-group.org/specifications/specs/unified_kernel_image/) and dm-verity protected GPT
disks in various formats, and also additional artifacts like
[SBOM](https://en.wikipedia.org/wiki/Software_supply_chain).

## Requirements

The host needs only:

 * Linux with unprivileged user namespaces. On Ubuntu you need to allow them with a
 [sysctl](https://www.freedesktop.org/software/systemd/man/latest/sysctl.d.html):
   `kernel.apparmor_restrict_unprivileged_userns=0`
 * `/usr/bin/python3` ≥ 3.14, or ≥ 3.12 together with `zstd`
 * `git`
 * `/dev/kvm` to run VMs for testing; without it, you can still build everything

tine uses the host's `python` and `git` to bootstrap itself and to read the project's git state, such as
the version an image derives from it; every tool a build itself runs is pinned. The first…
