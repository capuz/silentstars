---
repo: "pschmitt/nixos-config"
name: "nixos-config"
description: "pschmitt's nixos configuration"
readmeQualityOk: true
url: "https://github.com/pschmitt/nixos-config"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [65, 24]
topics: ["nixos", "nixos-config", "nixos-configuration"]
stars: 9
forks: 1
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-08-02T06:20:47Z"
lastCommitAt: "2026-08-03T06:45:21Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 59
maintainers: ["pschmitt", "gh-brkn-lol", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ba92a2975bd65898c0b8c83c155519f5630b85425cd6e4245a7931c1c884afc/pschmitt/nixos-config"
fundingLinks: ["GITHUB:https://github.com/pschmitt", "CUSTOM:https://www.paypal.com/paypalme/pppschmitt"]
---

# pschmitt's nixos book of horrors

Description: tdb.

## Home Manager on `fnuc`

`fnuc` is a standalone Home Manager target for a headless Fedora host.

Apply it with:

```shell
NIX_CONFIG='experimental-features = nix-command flakes' \
nix run github:nix-community/home-manager -- switch --flake '.#fnuc'
```

To verify that the configuration evaluates:

```shell
nix --extra-experimental-features 'nix-command flakes' \
  eval '.#homeConfigurations.fnuc.activationPackage.drvPath'
```

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
git clone…
