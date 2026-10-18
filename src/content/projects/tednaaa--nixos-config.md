---
repo: "tednaaa/nixos-config"
name: "nixos-config"
description: "🧙‍♂️ I'll create nix files here"
readmeQualityOk: true
url: "https://github.com/tednaaa/nixos-config"
language: "Lua"
languages: ["Lua", "Nix", "Shell"]
languagePcts: [53, 25, 20]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-04-20T11:51:48Z"
lastCommitAt: "2026-10-18T08:17:09Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 88
undervaluedScore: 61
maintainers: ["tednaaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd1643af3f9cc2a5fa25efce67bd1661f5df31f3dc57826de9de88d758789c26/tednaaa/nixos-config"
---

#### Follow steps from NixOS manual for disk formatting

- https://nixos.org/manual/nixos/stable/#sec-installation-manual

#### Then follow my steps ;)

```fish
nixos-generate-config --root /mnt

mkdir -p /mnt/home/{your_user}
cd /mnt/home/{your_user}

git clone .../nixos-config

cp /mnt/etc/nixos/hardware-configuration.nix ./nixos-config/hosts/hardware-configuration.nix

nixos-install --flake ./nixos-config#nixos
```

#### Set password for user and reboot

```fish
passwd {your_user}
reboot
```

#### Give the user edit access

```fish
sudo chown -R $USER:users ~/nixos-config
```

#### Update system

```fish
nix flake update
sudo nixos-rebuild boot --flake ~/nixos-config
```

#### Manually garbage collect

```fish
sudo nix-collect-garbage -d
```

#### Check generations

```fish
sudo nixos-rebuild list-generations
```
