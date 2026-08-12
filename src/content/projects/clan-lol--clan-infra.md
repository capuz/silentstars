---
repo: "clan-lol/clan-infra"
name: "clan-infra"
description: "Server infrastructure for the clan project [read-only mirror]"
readmeQualityOk: true
url: "https://github.com/clan-lol/clan-infra"
homepage: "https://git.clan.lol/clan/clan-infra"
language: "Nix"
languages: ["Nix"]
languagePcts: [95]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2023-07-11T11:58:41Z"
lastCommitAt: "2026-08-12T05:09:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 80
maintainers: ["Qubasa", "Enzime"]
openGraphImageUrl: "https://opengraph.githubassets.com/d90912c0ac79860e0c17399b19edfc8140a079488b379de4eaf1bd2b01738cf3/clan-lol/clan-infra"
---

# clan-infra

This repository contains nixos modules and terraform code that powers
[clan.lol](https://clan.lol/). The website and git are currently hosted on
[Hetzner](https://www.hetzner.com/). The Jitsi server is hosted on
[Vultr](https://www.vultr.com/).

## Adding a New Admin User

To add a new admin user, follow these steps:

1. **User generates an age key:**

   The new user runs:

   ```
   $ clan secrets key generate
   ```

   This creates an age key pair, which is used for secret management.

2. **User provides credentials to an existing admin:**

   The user shares **both** of the following with a current admin:

   - Their **SSH public key**
   - Their **age public key** (found in `~/.config/sops/age/keys.txt` or
     `~/Library/Application Support/sops/age/keys.txt` on macOS)

3. **Admin adds the user:**

   The admin runs:

   ```
   $ clan secrets users add <username> <age-key>
   $ clan secrets groups add-user admins <username>
   ```

   Replace `<username>` and `<age-key>` with the actual values.

4. **Admin updates configuration:**

   Add the new user to the [`modules/admins.nix`](https://github.com/clan-lol/clan-infra/blob/HEAD/modules/admins.nix) file.…
