---
repo: "AnikLabs/zcode-ru-localization"
name: "zcode-ru-localization"
description: "Russian localization for ZCode Desktop — an unofficial ru-RU localization for any version. Unofficial Russian localization for ZCode Desktop."
originalDescription: "Русификатор ZCode Desktop — неофициальная ru-RU локализация для любой версии. Unofficial Russian localization for ZCode Desktop."
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/AnikLabs/zcode-ru-localization"
language: "JavaScript"
languages: ["JavaScript", "C#", "PowerShell"]
languagePcts: [38, 35, 27]
topics: ["ai-agent", "electron", "i18n", "localization", "ru-ru", "russian", "russian-localization", "translation", "zcode", "zcode-desktop"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-08-28T19:08:28Z"
lastCommitAt: "2026-11-03T19:05:02Z"
lastReleaseAt: "2026-11-03T19:05:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 71
undervaluedScore: 29
maintainers: ["AnikBeris"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7684e232bdc5da661d317a3e888780388753bf66ac4beeea7281ac32c8e3f1f/AnikLabs/zcode-ru-localization"
---

# ZCode Desktop Russian Localization

Unofficial Russian (ru-RU) localization for ZCode Desktop, a GUI client for an
AI coding agent. The official app ships with English and Chinese only; this
project adds a full Russian UI: settings, menus, dialogs, tray, About window
(~4,900 strings).

Works with **any version** of the app: the installer extracts `app.asar`,
locates the needed files by code signatures, and applies patches. Untranslated
strings from newer versions simply show in English — nothing breaks.

## Installation (automatic)

1. Fully quit ZCode (including the tray icon).
2. Download the archive from the [Releases](https://github.com/AnikLabs/zcode-ru-localization/blob/HEAD/../../releases) page (file
   `zcode-ru-localization-vX.X.X.zip`), unpack it, and run
   **`РусификаторZCode.exe`**.
3. Pick your ZCode folder → click "Install Russian language".
4. Start ZCode — the UI is now in Russian.

A GUI-free alternative is PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File install-ru.ps1 [-InstallDir "C:\path\to\ZCode"]
```

Requirements: [Node.js](https://nodejs.org) in PATH.

## Rollback

Click "Rollback" in the program, or manually: delete `resources\app`…
