---
repo: "rokokol/huix"
name: "huix"
description: "Big ass NixOS config"
readmeQualityOk: true
url: "https://github.com/rokokol/huix"
language: "Nix"
languages: ["Nix"]
languagePcts: [57]
topics: ["nix", "nixos-configuration", "ddlc", "dotfiles", "home-manager", "hyprland", "nix-flake", "nixos", "ricing", "wayland"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-01-21T10:55:11Z"
lastCommitAt: "2026-11-09T11:58:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 54
maintainers: ["rokokol"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e0b55ecb0bb93997f67cfeac45e8572883fc9c0b51ecf40e519170e7cc4c4b7/rokokol/huix"
---

# huix

**Мой NixOS-флейк — десктоп с NVIDIA/CUDA и ноут на Hyprland плюс домашний сервер без экрана** （´ω｀♡%）

Короче, это мой NixOS для рабочего ПК, ноутбука и домашнего сервера: Hyprland, nixvim и куча приложений для повседневных дел. Часть программ я держу отдельно от конфига, а для всего остального стараюсь собрать удобную среду под себя

## Команды

```sh
sudo nixos-rebuild switch --flake .#nixos-pc   # или .#nixos-laptop
rebuild                                        # алиас на то же для текущего хоста
rebuilds                                       # то же, но пакеты с зеркала Яндекса — если проблемы с сетью
```

Станция своего чекаута не держит: её собирает ПК и заливает по Tailscale SSH

```sh
nixos-rebuild switch --flake .#nixos-station --target-host rokokol@nixos-station --sudo --ask-sudo-password
nix build .#station-boot-test -L      # станция в виртуалках рядом с роутером и ПК, только по запросу
nix build .#station-install-test -L   # её установочный образ в виртуалках: отказы и полная установка
```

Первый раз станция ставится с флешки: образ без секретов собирает `nix build .#station-installer`, секреты в копию добавляет `nix run .#make-station-iso -- write…
