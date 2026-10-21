---
repo: "tomsch/claude-desktop-nix"
name: "claude-desktop-nix"
description: "Claude Desktop (official Linux beta) packaged for Nix/NixOS"
readmeQualityOk: true
url: "https://github.com/tomsch/claude-desktop-nix"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [74, 26]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-07-17T09:09:36Z"
lastCommitAt: "2026-10-21T21:15:11Z"
lastReleaseAt: "2026-08-18T01:04:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 47
maintainers: ["github-actions[bot]", "tomsch"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a79beed546e09ff03d59aa5ee7b14a7231fff8c3b3c8daff4c459ee05656e62/tomsch/claude-desktop-nix"
---

# Claude Desktop for NixOS

Nix package for the **official [Claude Desktop](https://claude.com/download) Linux beta** (Chat, Cowork, and Claude Code Desktop), repackaged from Anthropic's apt repository at `downloads.claude.ai`.

Auto-updated every 6 hours via GitHub Actions — the apt package index provides version and SHA256, each bump is build-tested before release. Updates verify the apt repo's GPG signature (pinned Anthropic key) before bumping.

## Installation

### Flake Input (NixOS)

```nix
{
  inputs.claude-desktop-nix.url = "github:tomsch/claude-desktop-nix";

  outputs = { self, nixpkgs, claude-desktop-nix, ... }: {
    nixosConfigurations.myhost = nixpkgs.lib.nixosSystem {
      modules = [{
        environment.systemPackages = [
          claude-desktop-nix.packages.x86_64-linux.default
        ];
      }];
    };
  };
}
```

Unfree is allowed inside this flake's package set — consumers need no extra `allowUnfree` configuration when using `packages.*`. When using `overlays.default` instead, add `"claude-desktop"` to your `allowUnfreePredicate`.

## Notes

- Recent releases link the native Claude binding against PipeWire; the package includes its shared library for…
