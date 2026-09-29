---
repo: "shelken/nix-config"
name: "nix-config"
description: "❄️ My nix-config configuration"
originalDescription: "❄️ 我的 nix-config 配置"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/shelken/nix-config"
language: "Nix"
languages: ["Nix", "TypeScript", "Shell"]
languagePcts: [38, 32, 20]
stars: 5
forks: 0
openIssues: 4
closedIssues: 30
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2023-08-05T20:20:04Z"
lastCommitAt: "2026-09-29T08:11:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 79
maintainers: ["shelken"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba89f510a767ca2934d0db2e05dc4ba1556543430bc08ff39e9633f957ce30b4/shelken/nix-config"
---

<h3 align="center">
</h3>

<h6 align="center">
  ·
  ·
  ·
</h6>

</p>

</p>

&nbsp;

# darwin

## Initialization

```bash
# 0. If secrets are used, add the new machine to secrets.nix
ssh-keygen -t ed25519 -C "shelken@[host]"
cat ~/.ssh/id_ed25519.pub
## Put the public key on GitHub

# 1. install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
## Add the brew command to PATH
eval "$(/opt/homebrew/bin/brew shellenv)"

# 2. install nix
## macOS uses Determinate Nix; NixOS uses system NixOS configuration management.
## note: To clarify here, Linux currently uses nixos source, Mac uses determinate management. This configuration is reflected separately in the `nix.nix` file
curl --proto '=https' --tlsv1.2 -sSf -L https://install.determinate.systems/nix \
  | sh -s -- install --determinate

# 3. clone repo
git clone https://github.com/shelken/nix-config.git ~/nix-config && cd ~/nix-config

# 4. Select the machine configuration defined in flake.nix
# Darwin: mio / sakamoto / yuuko / ling
# NixOS: pve155 / pve156 / arm-test-1 / work-test
echo "PROFILE=mio" >> .env

# 5. First application: at this point, you cannot assume that…
