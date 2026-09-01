---
repo: "mecha-org/mecha-make"
name: "mecha-make"
description: "Linux image build system for Mecha devices"
readmeQualityOk: true
url: "https://github.com/mecha-org/mecha-make"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 46
forks: 9
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2024-07-05T09:50:34Z"
lastCommitAt: "2026-09-01T08:47:24Z"
lastReleaseAt: "2025-09-11T04:17:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 45
maintainers: ["dhruveshb-mecha", "mufeedali"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e7ade859b2b8fb0b07b3dce0fa9bfa53d00b37a350dee36608935c56696f3d4/mecha-org/mecha-make"
---

# Mechanix OS Build System

Build system for creating Fedora-based images for Mecha Comet devices using `mkosi`.

## Repository Layout

- `mkosi.conf` – Base mkosi configuration.
- `mkosi.conf.d/` – Package groups and additional configuration.
- `mkosi.profiles/` – Build profiles such as `comet`, `release`, and `qemu`.
- `mkosi.skeleton/` – Files copied into the image before the package manager runs.
  Note: with incremental builds, skeleton changes need a full rebuild (`-ff`).
- `mkosi.extra.comet/` – Comet-only files copied in after the OS is installed
  (USB gadget service, dnsmasq config). Applied on every build.
- `mkosi.version` – Image version.
- `build.sh` – Rootless, containerized build wrapper (see below).

## Prerequisites

Install the required tools:

```sh
sudo apt update
sudo apt install -y mkosi qemu-system-x86 ovmf debootstrap
```

## View Configuration

Show the current mkosi configuration:

```sh
mkosi summary
```

## Development Credentials

The root account is disabled.

A regular user named `mecha` is created during the build.

To set a password for development:

```sh
echo "MECHA_USER_PASSWORD=YOUR_PASSWORD" > mkosi.env
chmod 600 mkosi.env
```

Do not commit…
