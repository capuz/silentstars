---
repo: "erodozer/open-vt"
name: "open-vt"
description: "Open-Source 2D Vtuber software made for Linux"
readmeQualityOk: true
url: "https://github.com/erodozer/open-vt"
homepage: "https://erodozer.itch.io/openvt"
language: "GDScript"
languages: ["GDScript"]
languagePcts: [99]
topics: ["godot", "vtuber-software", "live2d", "vtubing"]
stars: 143
forks: 4
openIssues: 9
closedIssues: 22
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2025-01-12T03:29:16Z"
lastCommitAt: "2026-08-04T05:49:18Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 26
maintainers: ["erodozer"]
openGraphImageUrl: "https://opengraph.githubassets.com/969845bc7786186e69682e1d7ccb6b19c3927234019e92f38785c48a18caaca0/erodozer/open-vt"
discussionCount: 3
---

</p>

### Supported Trackers

- OpenSeeFace (Separate executable required)
- VTubeStudio (TCP over Wi-fi)

### Differences from Alternatives

- native Linux support
- open source development allowing for community driven feature delivery 
- transparent window support to simplify alpha based capture in OBS
- adjustable filtering settings, allowing for sharper scaling of pixel art models
- multi-window popout controls

### VTube Studio Compatibility

OpenVT strives to be largely compatible with [VTubeStudio](https://denchisoft.com/).
Assets can be used between the two, sharing the same files without need to make adjustments.  Any OpenVT specific settings are kept separately to avoid possible collisions with namespacing.  Where possible, VTubeStudio will still be respected as the standard.

Feature parity with VTS is a goal, excluding more complex features such as plugin compatibility, and VNet.

## How is it Built?

The majority of the vtuber ecosystem is built in Unity largely due to familiarity of the software for 3D applications and the available, well documented, first-party support Live2D by Cubism.
By contrast, OpenVT is built in Godot, leveraging much of the same open-source…
