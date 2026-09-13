---
repo: "okolovmark/nixodoo-copier-template"
name: "nixodoo-copier-template"
description: "Copier template: reproducible Odoo dev environments on Nix flakes — Odoo 16-19, any Python/PostgreSQL; systemd user services, uv-locked python env, pinnable addon repos"
readmeQualityOk: true
url: "https://github.com/okolovmark/nixodoo-copier-template"
language: "Jinja"
languages: ["Jinja", "Python"]
languagePcts: [69, 20]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-08T07:53:19Z"
lastCommitAt: "2026-09-13T08:30:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 54
maintainers: ["okolovmark"]
openGraphImageUrl: "https://opengraph.githubassets.com/9946eecd710c9d612459452f36844ea1cf5800f05f82f4a9047bb0b7ae53133c/okolovmark/nixodoo-copier-template"
---

# nixodoo-copier-template

[Copier](https://copier.readthedocs.io) template that generates a complete,
reproducible **Odoo development environment on Nix flakes**: native processes,
systemd user services, a project-local PostgreSQL cluster, and a python env
locked with uv/uv2nix.

## What you get

- **Odoo 16.0 / 17.0 / 18.0 / 19.0**, **Python 3.10–3.13**, **PostgreSQL 13–17** — picked at
  generation time; every Odoo version runtime-verified end-to-end (clone → lock → build → `-i base`)
- Nix flake with three installable toolchains (`dev-server`, `test-server`, `prod-server`):
  wrapped `odoo`, `psql`/`pg_dump`/... bound to the project cluster, `ruff`, `uv`, `ccze`;
  `setup-dev` leaves a `./.venv` over the base interpreter for editors that build their
  own debug adapter (Zed), with a `dev-python` symlink pinning the debuggee to the project env
- Pinnable source management: `repos.yaml` (odoo) + `addons.yaml` (OCA/custom addon repos,
  branch- or commit-pinned) with an addons symlink farm builder
- Generated configs: `.env`, `odoo.conf` (random master password), nginx reverse proxy,
  systemd user units incl. daily log rotation
- Python deps imported straight from Odoo's own…
