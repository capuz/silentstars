---
repo: "Nanamiiiii/dotfiles"
name: "dotfiles"
description: "Nix is awesome :)"
readmeQualityOk: true
url: "https://github.com/Nanamiiiii/dotfiles"
language: "Nix"
languages: ["Nix", "Lua"]
languagePcts: [43, 22]
topics: ["dotfiles", "linux", "macos", "neovim", "nix", "nix-darwin", "nix-flakes", "nixos", "niri"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-04-30T04:09:41Z"
lastCommitAt: "2026-07-17T05:57:55Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 70
maintainers: ["Nanamiiiii", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/865d9b361eb6488aed2aa48b31e1157575ff618efd8fd67dcf78baeb095947bd/Nanamiiiii/dotfiles"
---

# dotfiles
Myuu's dotfiles using Nix Flakes.

## NixOS
Defined as follows in `.#nixosConfigurations`:
```nix
# NixOS
hoge = nixosSystem (nixosSystemArgs {
  profile = "hoge";
  username = "user";
  system = "x86_64-linux";
  desktop = true;
});

# WSL
fuga = nixosSystem (nixWslArgs {
  profile = "fuga";
  username = "user";
  system = "x86_64-linux";
  desktop = true;
});
```
- `profile` is used for retriving per-profile definitions from `profiles/` and `home-manager/profiles/`.
- For WSL, `nixWslArgs` is passed to `nixosSystem`.
- `desktop` indicates whether the target profile is deployed to the desktop or headless system.
    - Some GUI applications are not installed when `desktop = false`.

### Eval
```
make nixos-eval-<profile>
```

### Build
```
make nixos-build-<profile>
```

### Deploy
```
make nixos-<profile>
```

## macOS
Defined as follows in `.#darwinConfigurations`:
```nix
hoge = darwinSystem (darwinSystemArgs {
  profile = "hoge";
  username = "myuu";
  system = "aarch64-darwin";
});
```
- `profile` is used for retriving per-profile definitions from `profiles/` and `home-manager/profiles/`.

### Eval
```
make nix-darwin-eval-<profile>
```

### Build
```
make…
