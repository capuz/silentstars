---
repo: "imdomestic/nix-config"
name: "nix-config"
description: "My nix stuff"
readmeQualityOk: true
url: "https://github.com/imdomestic/nix-config"
language: "Nix"
languages: ["Nix"]
languagePcts: [89]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2025-01-12T17:56:28Z"
lastCommitAt: "2026-09-06T08:03:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 72
maintainers: ["HCHogan", "zty20040403"]
openGraphImageUrl: "https://opengraph.githubassets.com/33c7d102afa53e93e2c170475665c86ad2a4ff3687d1c831d353be66f83a0956/imdomestic/nix-config"
---

# nix-config

One flake, four evaluators: NixOS, nix-darwin, standalone Home Manager, and
system-manager. Every machine is a single entry in a shared host registry; the
builders in `lib/` turn that entry into whichever configuration kinds it asks
for.

**System and home are separate closures everywhere.** Home Manager is never a
NixOS or nix-darwin module — not even on machines this repo also owns the OS of.
A host's users become standalone `homeConfigurations`, so `just switch` /
`just darwin` rebuild the machine and nothing else, and a user changing their own
config runs `just home` without a system rebuild or root. The two sides meet only
at `config.my.host` and at `nixos/modules/users.nix`, which creates the accounts.

New here and only responsible for your own account? Read
[`docs/home-quickstart.md`](https://github.com/imdomestic/nix-config/blob/HEAD/docs/home-quickstart.md) instead of this file.

## Host registry

`nixos/hosts/default.nix` maps a name to `nixos/hosts/<name>/default.nix`, which
returns **metadata, not a module**:

```nix
{inputs}: {
  system = "x86_64-linux";
  kind = "nixos";                 # nixos | darwin | home
  roles = ["desktop" "gui"];
  ip =…
