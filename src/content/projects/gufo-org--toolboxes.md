---
repo: "gufo-org/toolboxes"
name: "toolboxes"
description: "Gufo OCI Images for AMD Strix Halo"
readmeQualityOk: true
url: "https://github.com/gufo-org/toolboxes"
language: "Nix"
languages: ["Nix", "Shell"]
languagePcts: [44, 41]
stars: 24
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-27T10:07:29Z"
lastCommitAt: "2026-11-06T12:17:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 39
maintainers: ["fedeizzo", "github-actions[bot]", "gufo-release-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/783d38ba366fd5c2aeec93eee58f6767561fc1014907826973fc378c4eedbae0/gufo-org/toolboxes"
---

# Gufo OCI Images for AMD Strix Halo

Reproducible Docker and Podman images for local LLM inference, development,
and serving on AMD Ryzen AI Max (Strix Halo).
Images are built directly from pinned Nix flake derivations for `gfx1151` and
XDNA2.

Toolbx and Distrobox are not supported. The containers run as the dedicated
`gufo` user (UID/GID `1000:1000`) and contain no sudo or PAM stack.

## Images

| Image | Reference | Purpose |
| :--- | :--- | :--- |
| `gufo-runtime` | `ghcr.io/gufo-org/toolboxes/gufo-runtime:edge` | Gufo inference, serving, benchmarks, and diagnostics |
| `gufo-dev` | `ghcr.io/gufo-org/toolboxes/gufo-dev:edge` | C++/HIP development, profiling, and kernel tuning |

Stable releases publish immutable `X.Y.Z` tags plus the floating `X.Y` and
`latest` aliases. The rolling `edge` channel follows the Gufo revision pinned
by the daily dependency update and also publishes an immutable
`sha-<full-gufo-revision>` tag. Rolling updates never advance `latest`.

The stable release workflow also calls Gufo's reusable Windows build for the
exact release tag. It attaches `gufo-vX.Y.Z-windows-x86_64.zip` and a SHA-256
checksum to the [Gufo…
