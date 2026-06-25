---
repo: "SSL-A-Team/firmware"
name: "firmware"
description: "Contains all robot level firmware and firmware-level robot models"
url: "https://github.com/SSL-A-Team/firmware"
language: "Rust"
languages: ["Rust", "C"]
languagePcts: [52, 41]
stars: 6
forks: 0
openIssues: 16
closedIssues: 54
watchers: 9
contributors: 11
recentReleases: 0
createdAt: "2021-09-24T01:59:35Z"
lastCommitAt: "2026-06-25T02:07:22Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["guyfleeman", "nickwitten"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd039ed006472d496b71b41d566a44e99777060330d65ab1523a8d47f508b7a5/SSL-A-Team/firmware"
---

# Firmware ![example workflow](https://github.com/SSL-A-Team/firmware/actions/workflows/CI.yml/badge.svg)

This is the unified firmware repository for the A-Team.

## Setup

Follow the [first time setup guide](SETUP.md).

If you are not a member of the A-Team, you will not have access to the private repository that store our Wifi credentials.
Please set `export NO_ATEAM_WIFI_CREDENTIALS=true` in your shell, so the build system will load dummy credentials. You can
set them in `ateam-credentials/src/public_credentials/wifi.rs`.

## Building Firmware

Begin by entering the Nix environment `nix develop`. If you use a shell other than bash, you can try `nix develop -c $SHELL` 
to stay in your preferred shell.

WSL users should launch VS Code from the nix environment in the Ubuntu shell.

A top level Makefile is provided for all targets. Targets in the form `<module>--<binary>--<action>`.

The primary command `make control-board--control--run` will build all robot firmware, flash hardware, and run the image.

### List of Modules

| Module                  | Description                                                                           |…
