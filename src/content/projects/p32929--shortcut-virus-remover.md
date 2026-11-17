---
repo: "p32929/Shortcut-Virus-Remover"
name: "Shortcut-Virus-Remover"
description: "Windows batch script that unhides your files and deletes fake .lnk shortcuts left by the USB shortcut virus"
readmeQualityOk: true
url: "https://github.com/p32929/Shortcut-Virus-Remover"
language: "Batchfile"
languages: ["Batchfile"]
languagePcts: [100]
topics: ["windows", "batch-script", "batchfile", "cmd", "file-recovery", "malware-removal", "shortcut-virus", "usb-virus", "utility"]
stars: 5
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2016-09-29T16:51:49Z"
lastCommitAt: "2026-11-17T14:36:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "fork_magnet"]
healthScore: 76
undervaluedScore: 66
maintainers: ["p32929"]
openGraphImageUrl: "https://opengraph.githubassets.com/98d748d32a6f5053ae2f4c880cdc20be62bebf6783b98de84efd84a92d6b2fae/p32929/Shortcut-Virus-Remover"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/p32929"]
---

# Shortcut-Virus-Remover

Plugged in your pen drive and your files are gone, with only shortcuts left? This tiny Windows script brings your files back and deletes the fake shortcuts the "shortcut virus" left behind. Your files are usually still there, just hidden.

## What it actually does

Two commands, nothing hidden:

```bat
attrib -s -h -a /s /d D:\*.*   :: clears the system/hidden/archive flags the virus set on your files
del /a /q /s D:\*.lnk          :: deletes every .lnk shortcut on that drive
```

So it **recovers files the virus hid** and **removes the shortcut files**. It does not find or remove the virus itself, so scan your computer with an antivirus too. Run it on the infected removable drive, not on your system drive.

## How to use

1. Download `Shortcut Virus Remover 1.0.bat` from this repo.
2. Double-click it.
3. Type the drive letter of the infected drive (for example `D`) and press Enter.
4. Wait. A drive with many files takes a while.

> **Careful:** it deletes *every* `.lnk` shortcut on that drive. If you keep real shortcuts there, move them off first.

## License

MIT License — Copyright (c) 2020 Fayaz Bin Salam.

## Contributing

Contributions are very…
