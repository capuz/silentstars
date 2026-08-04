---
repo: "cyberrumor/ammo"
name: "ammo"
description: "Almost Manual Mod Organizer - The Definitive CLI Mod Manager for Linux"
readmeQualityOk: true
url: "https://github.com/cyberrumor/ammo"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["skyrim", "skyrim-modding", "skyrim-se", "bethesda-games", "mod-manager", "sims4", "oblivion-remaster", "starfield-modding"]
stars: 62
forks: 6
openIssues: 8
closedIssues: 82
watchers: 6
contributors: 7
recentReleases: 0
createdAt: "2023-01-20T04:54:02Z"
lastCommitAt: "2026-08-04T06:11:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 73
undervaluedScore: 31
maintainers: ["cyberrumor"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/github-production-repository-image-32fea6/591174884/a243d081-587e-445e-91c2-f79c4c0a8719?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260804%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260804T061321Z&X-Amz-Expires=300&X-Amz-Signature=c598dbc4689fe078d6bc2ba6f5534ab74a6ef5e7faab03fc5f5091b9a5403a18&X-Amz-SignedHeaders=host&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoiaHR0cHM6Ly9yZXBvc2l0b3J5LWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vIiwia2V5Ijoia2V5MSIsImV4cCI6MTc4NTgyNDMwMSwibmJmIjoxNzg1ODI0MDAxLCJwYXRoIjoicmVwb3NpdG9yeS1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIn0.YF6FXGKmeaJAgJ7irp8LIexmewVIL9lLBnqNVbFYD30"
---

# Almost Manual Mod Organizer

Ammo is a CLI mod manager for Linux.

Under the hood, Ammo works by installing symlinks in your game directory which
point at your mod files. This is highly compatible and has zero runtime
overhead.

## Supported Games

- Enderal
- Enderal Special Edition
- Fallout 4
- Fallout New Vegas
- Oblivion
- Oblivion Remastered
- Sims 4
- Skyrim
- Skyrim Special Edition
- Skyrim VR
- Starfield

## Features

- install mods from ~/Downloads
- activate/deactivate mods/plugins
- reorder mods/plugins
- rename mods/downloads
- delete mods/plugins/downloads
- autosort plugins by mod order
- supports FOMOD configuration
- file conflict detection

## Dependencies

- Python 3.12
- Steam from [Flatpak](https://flathub.org/apps/com.valvesoftware.Steam) or official repos.
- [p7z](https://github.com/p7zip-project/p7zip) from official repos.
- [pipx](https://github.com/pypa/pipx) from official repos.

## Install / Update

```
pipx install git+https://github.com/cyberrumor/ammo --force
```

## Usage

```
usage: ammo [-h] [--downloads PATH] [--conf PATH] [--mods PATH] [--tools PATH] [--title TITLE]

Almost Manual Mod Organizer

options:
  -h, --help        show this help…
