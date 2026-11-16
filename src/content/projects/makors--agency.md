---
repo: "makors/agency"
name: "agency"
description: "give your agents the computer you already have"
readmeQualityOk: true
url: "https://github.com/makors/agency"
homepage: "https://agency.makors.xyz"
language: "Python"
languages: ["Python", "Nix"]
languagePcts: [32, 21]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-11-14T00:45:36Z"
lastCommitAt: "2026-11-16T04:28:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["makors", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/83e4c1c1ccc6900fac06a2e4788702cde09870f145fab804f4bd6d95589ba69c/makors/agency"
---

give your agents the computer you already have

## Install

You need an x86-64 laptop or PC with UEFI and TPM 2.0, a USB stick, and an SSH key on your GitHub account.

1. Write the installer to the stick. On a Mac or Linux:

   ```sh
   curl -fsSL https://agency.makors.xyz/flash | sh
   ```

   On Windows, download the ISO from [agency.makors.xyz](https://agency.makors.xyz) and write it with balenaEtcher, or Rufus in DD mode.
2. In the laptop's BIOS, turn Secure Boot off and TPM on.
3. Boot from the stick and answer the setup screen.

Then log in with the name you gave it, here `agency`:

```sh
ssh agent@agency.local   # on the same network
ssh agent@agency         # over Tailscale
```

[docs/install.md](https://github.com/makors/agency/blob/HEAD/docs/install.md) has the details, including a stick that installs without asking anything.

No spare computer? Try it in a virtual machine, on Linux with Nix:

```sh
nix --extra-experimental-features 'nix-command flakes' run github:makors/agency#vm
```

That, and running agency on a machine that already has NixOS, is in [docs/existing-nixos.md](https://github.com/makors/agency/blob/HEAD/docs/existing-nixos.md).

## Use

Start any agent…
