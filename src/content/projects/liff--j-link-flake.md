---
repo: "liff/j-link-flake"
name: "j-link-flake"
description: "Nix flake for SEGGER J-Link"
readmeQualityOk: true
url: "https://github.com/liff/j-link-flake"
language: "Nix"
languages: ["Nix"]
languagePcts: [100]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-05-05T19:24:08Z"
lastCommitAt: "2026-09-15T08:54:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 45
maintainers: ["github-actions[bot]", "liff"]
openGraphImageUrl: "https://opengraph.githubassets.com/286f6e4d70bc6f4f52e1c36507afe899f407117857a8782fd2b94989ddde2c3c/liff/j-link-flake"
---

A Nix [flake](https://nixos.wiki/wiki/Flakes) for
[SEGGER J-Link](https://www.segger.com/downloads/jlink/).

The package version is automatically updated daily.

# Usage

In addition to the `j-link` package and app, this Flake provides a
NixOS module that installs the package and sets up the USB device 
permissions.

```nix
{
  inputs.j-link.url = "github:liff/j-link-flake";

  outputs = { self, nixpkgs, j-link }: {
    # replace 'joes-desktop' with your hostname here.
    nixosConfigurations.joes-desktop = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      modules = [
        # …
        j-link.nixosModule
      ];
    };
  };
}
```

# Note on unfree packages

Due to limitations of flakes, this flake enables `config.allowUnfree`
on its import of nixpkgs, meaining that packages can be built without
otherwise enabling unfree software.
