---
repo: "wimpysworld/tailor"
name: "tailor"
description: "Ready-to-wear project templates for GitHub repositories 👔"
readmeQualityOk: true
url: "https://github.com/wimpysworld/tailor"
homepage: "https://tailor.wimpys.world/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["community-health-files", "github-actions", "github-api", "github-automation", "github-community-health", "github-config", "github-label-management", "github-repository-management", "github-security", "github-settings"]
stars: 36
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 5
createdAt: "2026-03-04T15:39:42Z"
lastCommitAt: "2026-11-07T22:51:28Z"
lastReleaseAt: "2026-10-22T16:52:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 49
maintainers: ["flexiondotorg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a57d38f7d53a731e737660d577319f4b391a9e491b30c2253953e1d8dd2f1752/wimpysworld/tailor"
fundingLinks: ["GITHUB:https://github.com/flexiondotorg"]
---

Tailor

Tailor is a local terminal CLI that keeps GitHub repositories consistent with community health files, security policies, dev tooling, and repository settings.

Use it for solo projects or small teams that manage several repositories. Its embedded template files are called *swatches*.

## Install

### bin

```bash
bin install github.com/wimpysworld/tailor
bin update tailor
```

Requires [`bin`](https://github.com/marcosnils/bin). Tailor releases publish bare executables, no archive extraction needed.

### Homebrew

```bash
brew install wimpysworld/tap/tailor
```

### Nix

```bash
nix run github:wimpysworld/nix-packages#tailor -- --version
nix profile install github:wimpysworld/nix-packages#tailor
```

To use tailor in a flake configuration, add `nix-packages` as an input:

```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    wimpysworld-nix-packages = {
      url = "github:wimpysworld/nix-packages";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };
}
```

Then reference tailor in your packages:

```nix
environment.systemPackages = [
  inputs.wimpysworld-nix-packages.packages.${system}.tailor
];
```

Available for `x86_64-linux`,…
