---
repo: "vulcan-forge/sourccey-desktop"
name: "sourccey-desktop"
description: "Sourccey Desktop and Kiosk application"
readmeQualityOk: true
url: "https://github.com/vulcan-forge/sourccey-desktop"
language: "TypeScript"
languages: ["TypeScript", "Rust"]
languagePcts: [50, 35]
stars: 7
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-11-02T18:52:34Z"
lastCommitAt: "2026-07-06T07:04:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 44
maintainers: ["nicholas-maselli"]
openGraphImageUrl: "https://opengraph.githubassets.com/70e83600af69756ad2cbf6ea91e4cfe4554971a0b13359a5f117c4438a012db1/vulcan-forge/sourccey-desktop"
---

# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# Commands

Get the desktop app

```
bun tauri dev
```

Get the web app

```
bun dev
```

## Raspberry Pi Autostart Setup

To make the Sourccey app launch automatically on boot on your Raspberry Pi:

1. **Pull the latest code:**
   ```sh
   git pull origin your-feature-branch
   ```

2. **Run the setup script:**
   ```sh
   ./pi-setup/install-autostart.sh
   ```

3. **Reboot to test:**
   ```sh
   sudo reboot
   ```

The app will launch automatically in full-screen mode after each boot!

**Note:**
- You may need to adjust the username, project path, or binary name in `pi-setup/sourccey-app.service` if your setup is different.
- The setup script will install dependencies and build the Tauri app before enabling autostart.
