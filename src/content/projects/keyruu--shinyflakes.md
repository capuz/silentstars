---
repo: "Keyruu/shinyflakes"
name: "shinyflakes"
description: "✨❄️ my nix* configurations (NixOS, NeoVim, Quadlet)"
readmeQualityOk: true
url: "https://github.com/Keyruu/shinyflakes"
language: "Nix"
languages: ["Nix"]
languagePcts: [90]
topics: ["nix-flake", "nixos", "podman", "opentofu"]
stars: 33
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-12T08:48:28Z"
lastCommitAt: "2026-10-05T10:46:56Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 58
maintainers: ["Keyruu"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bae277c430e32c183c79f198d0e13213895123047456bde875bfd762a16dca3/Keyruu/shinyflakes"
---

# ✨ shinyflakes ❄️

My personal NixOS setup. Everything from servers to desktops to laptops, all
defined in one git repo. Because if it's not in git, did it even happen?

## Why NixOS?

I use NixOS to manage my homelab and it's been pretty awesome having my whole
infrastructure version-controlled. No more "it worked on my machine" moments -
my machines ARE the configuration.

The real killer here is using
[Quadlet](https://docs.podman.io/en/latest/markdown/podman-systemd.unit.5.html)
(via [quadlet-nix](https://github.com/SEIAROTg/quadlet-nix)) for container
management.

### Why not NixOS services?

Because versioning is just horrendous. I can't really control versions of
specific services if I don't want to have 100 flake inputs. Also with container
images I always get the newest version as soon as its out.

### Why not docker-compose?

Because I want proper systemd integration, individual container metrics, and the
ability to manage each container separately - not just restart the whole
docker-compose when one thing breaks. Plus, Nix lets me do cool stuff like
ensuring directories exist before mounting them, templating configs with
secrets, and using actual Nix references between…
