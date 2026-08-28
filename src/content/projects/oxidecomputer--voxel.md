---
repo: "oxidecomputer/voxel"
name: "voxel"
description: "Virtual OXide Emulation Lab"
readmeQualityOk: true
url: "https://github.com/oxidecomputer/voxel"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 4
closedIssues: 6
watchers: 2
contributors: 123
recentReleases: 0
createdAt: "2026-05-27T23:09:39Z"
lastCommitAt: "2026-08-25T02:22:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 46
maintainers: ["sion42x", "zeeshanlakhani", "andrewjstone"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e6b83b56fd3ab0798e7e8c41507560d24e2440cefa384f508b28f6a49e0e5d5/oxidecomputer/voxel"
---

# voxel

**V**irtual **OX**ide **E**mulation **L**ab. A tool for standing up emulated Oxide
rack deployments on a single Helios host.

Voxel emulates an Oxide rack's control plane;
[omicron] software on [falcon]-managed propolis VMs, with
SoftNPU switches and FRR routers. Pick a platform version and a topology
(sled count, multi-rack, BGP/static) and launch. It succeeds the `a4x2`
testbed topology, reworked around a first-class CLI and on-the-fly config
generation.

## Layout

- **`voxel/`**: CLI and launcher
- **`voxel-config/`**: the `VoxelConfig` model (`voxel.toml`) and all per-topology
  config generation (sled-agent, RSS, FRR, MGS/SP-sim).
- **`voxel-init/`**: the in-guest bring-up agent baked into the images (gimlet/router
  roles).
- **`voxel-image/`**: image build machinery (`voxel image create`) and the install
  scripts that bake a control-plane image from an omicron commit.

See [`docs/parameters.md`](https://github.com/oxidecomputer/voxel/blob/HEAD/docs/parameters.md) for the `voxel.toml` reference, there are a LOT of tuning knobs.

## Building

```sh
cargo build
```

`voxel` links omicron's own RSS config types (the `rack-init-config` crate in
omicron, pinned to a…
