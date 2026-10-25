---
repo: "Alergeek-Ventures/firmowid"
name: "firmowid"
description: "Open-source system for Polish businesses: KSeF e-invoicing, automatic bank transaction matching, and time tracking."
readmeQualityOk: true
url: "https://github.com/Alergeek-Ventures/firmowid"
homepage: "https://firmowid.pl/"
language: "Elixir"
languages: ["Elixir", "JavaScript"]
languagePcts: [68, 26]
topics: ["elixir", "invoicing", "ksef", "open-banking", "phoenix-liveview", "poland", "self-hosted", "time-tracking"]
stars: 25
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2026-09-15T07:16:16Z"
lastCommitAt: "2026-10-25T09:00:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 39
maintainers: ["kosciak9", "kguzek"]
openGraphImageUrl: "https://opengraph.githubassets.com/2538693fba58fabd5e4a92f20470fc1fbb6021260c39c57224e7ab4eb9b3af72/Alergeek-Ventures/firmowid"
discussionCount: 0
---

# Firmowid

> **Note for English speakers:** This product is designed for the Polish market, so the README is in Polish. For environment variable configuration, see `env.template` file which contains documentation in English.

## Jeśli masz już zainstalowane środowisko

### 1. Baza Danych

- wejdź do folderu `local` i odpal `docker compose up` lub (`docker compose up -d` jeśli chcesz dalej używać tego terminala)
  (`podman compose up` dla odważnych)

### 2. Konfiguracja zmiennych środowiskowych

- zainstaluj Infisical CLI zgodnie z [instrukcją dla swojego systemu](https://infisical.com/docs/cli/overview)
- zaloguj się jednorazowo: `infisical login --domain="https://infisical.alergeek.me"`
- upewnij się, że istnieje lokalny plik nadpisań: `touch .env.worktree`
- wspólne wartości dla środowiska deweloperskiego są pobierane z Infisical (`dev`), a `.env.worktree` służy tylko do lokalnych/worktree-specific nadpisań

### 3. W głównym folderze `firmowid`

- zainstaluj zależności `mix setup`
- włącz serwer: `mix phx.server`
- wejdź na [`localhost:4000`](http://localhost:4000)

## Development Guide

Po uruchomieniu serwera, zaloguj się na `kira@bytecraft.collective` / `kolejka123456` i…
