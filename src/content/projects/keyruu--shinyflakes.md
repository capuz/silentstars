---
repo: "Keyruu/shinyflakes"
name: "shinyflakes"
description: "✨❄️ my nix* configurations (NixOS, NeoVim, Quadlet)"
url: "https://github.com/Keyruu/shinyflakes"
language: "Nix"
languages: ["Nix"]
languagePcts: [92]
topics: ["nix-flake", "nixos", "podman", "opentofu"]
stars: 29
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-04-12T08:48:28Z"
lastCommitAt: "2026-06-29T07:24:07Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 59
maintainers: ["Keyruu"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fa19b5bfc4bf567670e8c236964625b216a3bc99a5ab4bea9a35ca293a83b0/Keyruu/shinyflakes"
---

# ✨ shinyflakes ❄️

My personal NixOS setup. Everything from servers to desktops to laptops, all
defined in one git repo. Because if it's not in git, did it even happen?

test change

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
secrets, and using actual Nix…
