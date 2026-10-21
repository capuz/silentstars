---
repo: "pschmitt/nixos-config"
name: "nixos-config"
description: "pschmitt's nixos configuration"
readmeQualityOk: true
url: "https://github.com/pschmitt/nixos-config"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [59, 22]
topics: ["nixos", "nixos-config", "nixos-configuration"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-08-02T06:20:47Z"
lastCommitAt: "2026-10-21T20:00:31Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 59
maintainers: ["pschmitt", "renovate[bot]", "pschmitt-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/4eada1880d3502cee6ed30e4614abb56d3df5574b0cba2a6cebe9cfa129a36c0/pschmitt/nixos-config"
fundingLinks: ["GITHUB:https://github.com/pschmitt", "CUSTOM:https://www.paypal.com/paypalme/pppschmitt"]
---

# pschmitt's nixos book of horrors

Description: tdb.

## NixOS on `fnuc`

`fnuc` is a full NixOS host. Deploy it with the repository helper:

```shell
just deploy fnuc
```

When running directly on `fnuc`, use `just deploy` without a target argument.

## Nix-on-Droid on `zf10`

`zf10` is a minimal phone profile wired through `nixOnDroidConfigurations`. It
keeps Home Manager as the main layer and reuses the portable CLI/devel modules
instead of trying to mirror the full desktop stack from day one.

### First switch on the phone

1. Install Nix-on-Droid from F-Droid and let the bootstrap finish.
2. Activate the profile straight from GitHub:

```shell
nix-on-droid switch --flake 'github:pschmitt/nixos-config#zf10'
```

Because `default` points to the same config, this also works:

```shell
nix-on-droid switch --flake 'github:pschmitt/nixos-config'
```

### Working from a local checkout on Android

```shell
git clone https://github.com/pschmitt/nixos-config.git ~/devel/private/pschmitt/nixos-config.git
cd ~/devel/private/pschmitt/nixos-config.git
nix-on-droid switch --flake '.#zf10'
```

The Home Manager profile lives in…
