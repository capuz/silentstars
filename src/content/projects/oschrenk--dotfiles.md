---
repo: "oschrenk/dotfiles"
name: "dotfiles"
description: "My terminal settings"
readmeQualityOk: true
url: "https://github.com/oschrenk/dotfiles"
language: "Shell"
languages: ["Shell", "Nix"]
languagePcts: [53, 26]
topics: ["dotfiles", "fish", "shell"]
stars: 22
forks: 0
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2009-11-26T17:06:31Z"
lastCommitAt: "2026-11-02T11:36:29Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 55
maintainers: ["oschrenk"]
openGraphImageUrl: "https://opengraph.githubassets.com/a141b6775e465ab19221d33c6b332bd9b50e2b3f21c60914bd7e90eb7854d499/oschrenk/dotfiles"
---

# README

These are my dotfiles.

## Bootstrap

Clone the repo to `/Users/<username>/Projects/ops/dotfiles`, the path that `my.host.dotfiles` in `nix/host.nix` names.
home-manager links the config trees out of that checkout.
Each stage script checks that the Mac is ready for it.
When the Mac is not ready, the script prints what is missing and stops, so you fix that and run it again.

1. Install the Xcode Command Line Tools, which include git: `xcode-select --install`
2. Clone the repo over HTTPS and enter it: `git clone https://github.com/oschrenk/dotfiles.git ~/Projects/ops/dotfiles && cd ~/Projects/ops/dotfiles`
3. Name the Mac and install Nix, Homebrew and 1Password: `./scripts/stage-01-install.sh`
4. Run the first switch after the preparation below: `./scripts/stage-02-switch.sh`
   - In 1Password, sign in and let it sync.
     Then enable Settings > Developer > "Use the SSH agent" and "Integrate with 1Password CLI".
   - In System Settings > Privacy & Security > Full Disk Access, enable Terminal.
     Then quit Terminal and open it again.
   - The first switch downloads and builds everything, which takes about an hour.
   - If the switch stops at `universalaccess` and the…
