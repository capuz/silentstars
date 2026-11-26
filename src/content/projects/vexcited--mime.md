---
repo: "vexcited/mime"
name: "mime"
description: "Running Windows programs on macOS and Linux by reimplementing Windows."
readmeQualityOk: true
url: "https://github.com/vexcited/mime"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["direct3d", "directx", "gaming", "linux", "macos", "metal", "vulkan", "wayland", "windows", "wine-alternative"]
stars: 19
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2026-11-07T15:35:35Z"
lastCommitAt: "2026-11-26T15:20:26Z"
lastReleaseAt: "2026-11-12T20:43:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 43
maintainers: ["vexcited"]
openGraphImageUrl: "https://opengraph.githubassets.com/5d3625f94be7338a5ab5462bb07511ba62ac6a4f4da9f8e827c1554fdcaed552/vexcited/mime"
fundingLinks: ["GITHUB:https://github.com/vexcited"]
---

## Installation

Mime is at an early stage. Releases ship a binary for x86_64 Linux, on any other platform build from source, see [CONTRIBUTING.md](https://github.com/vexcited/mime/blob/HEAD/CONTRIBUTING.md).

Mime needs RW access to `/dev/kvm`, add your user to the `kvm` group if it is not world writable.

### NixOS

The flake installs the binary of the last release, nothing is compiled. Add it to your system flake:

```nix
{
  inputs.mime.url = "git+https://code.vexcited.com/mime/mime.git";

  outputs = { nixpkgs, mime, ... }: {
    nixosConfigurations.<hostname> = nixpkgs.lib.nixosSystem {
      modules = [
        mime.nixosModules.default
        { programs.mime.enable = true; }
      ];
    };
  };
}
```

Then rebuild with `sudo nixos-rebuild switch`, the module enables `hardware.graphics` for the Vulkan drivers.

Move to a new release with `nix flake update mime`.

### Other distributions

```sh
# on arch linux, for example
sudo pacman -S --needed wayland libxkbcommon libpipewire curl vulkan-icd-loader

# download the x86_64 binary
curl -L https://github.com/vexcited/mime/releases/latest/download/mime-x86_64-linux.tar.gz | tar -xz
sudo ./mime up
./mime run notepad
```
