---
repo: "alexjuda/dotfiles"
name: "dotfiles"
description: "My configs. Neovim, terminal, ansible, etc"
readmeQualityOk: true
url: "https://github.com/alexjuda/dotfiles"
language: "Lua"
languages: ["Lua", "Python"]
languagePcts: [55, 37]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2021-04-19T08:30:43Z"
lastCommitAt: "2026-10-29T12:25:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 70
maintainers: ["alexjuda"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ec1982f5ca308d2104498e6a910a9b9f456918f39a507ce827fc6a64f90f057/alexjuda/dotfiles"
---

# My dotfiles

A single repo with all my configs. System tools, shell, code editor, keyboard remaps.

Workstation configuration is deployed with [Ansible](https://www.ansible.com/). See [linux/ansible/Makefile](https://github.com/alexjuda/dotfiles/blob/HEAD/linux/ansible/Makefile).

Tool configs are kept in [config dir](https://github.com/alexjuda/dotfiles/blob/HEAD/config). Every dir is symlinked under `~/.config/` by
Ansible. My [neovim config](https://github.com/alexjuda/dotfiles/blob/HEAD/config/nvim/) is the most involved one.
