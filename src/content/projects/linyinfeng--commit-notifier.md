---
repo: "linyinfeng/commit-notifier"
name: "commit-notifier"
description: "A simple bot tracking git commits/PRs/issues/branches"
readmeQualityOk: true
url: "https://github.com/linyinfeng/commit-notifier"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 16
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-09-23T06:09:22Z"
lastCommitAt: "2026-10-22T08:50:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 83
undervaluedScore: 44
maintainers: ["littlenano", "linyinfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c9e2bbc78c6a6db7d36ee6c76bfb9bc93340c4c98c86ccfbb3ead191d6ab3d5/linyinfeng/commit-notifier"
---

# commit-notifier

A simple telegram bot monitoring commit status.

## Self-hosting (non-NixOS)

1. Build the project with `cargo build`.

2. Specify Telegram bot token and GitHub token through environment variables

   GitHub token are used to check PR merge state and get merge commit, so no permission are required.

   ```console
   $ export TELOXIDE_TOKEN="{YOUR_TELEGRAM_BOT_TOKEN}"
   $ export GITHUB_TOKEN="{YOUR_GITHUB_TOKEN}"
   ```

3. Start `commit-notifier`.

   ```console
   $ commit-notifier" \
     --working-dir /var/lib/commit-notifier \
     --cron "0 */5 * * * *" \
     --admin-chat-id="{YOUR_ADMIN_CHAT_ID}"
   ```

   Automatic check will be triggered based on the cron expression. In the example, `0 */5 * * * *` means "at every 5th minute". cron documentation: <https://docs.rs/cron/latest/cron>.

## Self-hosting (NixOS)

This repository is a Nix flake.

### Outputs

1. Main package: `packages.${system}.commit-notifier`.
2. Overlay: `overlays.default` (contains `commit-notifier`).
3. NixOS module: `nixosModules.commit-notifier`.

### NixOS module example

My instance:…
