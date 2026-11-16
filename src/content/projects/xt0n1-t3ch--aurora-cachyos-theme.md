---
repo: "xt0n1-t3ch/Aurora-CachyOS-Theme"
name: "Aurora-CachyOS-Theme"
description: "A macOS Tahoe-inspired desktop for CachyOS and KDE Plasma 6: menu bar, Dock, Quick Menu, Control Center, a Finder-style file manager and glass window buttons, with the shortcuts you know from Windows. One command installs it, one undoes it."
readmeQualityOk: true
url: "https://github.com/xt0n1-t3ch/Aurora-CachyOS-Theme"
language: "C++"
languages: ["C++", "QML"]
languagePcts: [35, 29]
topics: ["arch-linux", "aur", "cachyos", "kde", "kde-plasma", "kde-theme", "kwin", "linux", "linux-customization", "linux-desktop"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 8
createdAt: "2026-11-05T07:43:58Z"
lastCommitAt: "2026-11-16T11:55:53Z"
lastReleaseAt: "2026-11-12T03:37:01Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["xt0n1-t3ch"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1446693405/e1a64ce1-bf73-495b-b199-d48b85e3bd66"
---

Aurora is a macOS Tahoe-inspired theme for KDE Plasma 6 on CachyOS. It is not a copy of Tahoe: it takes its look and its ideas and fits them to Plasma. You get a menu bar at the top, a Dock at the bottom, Quick Menu, the Control Center, notification banners, a Finder-style file manager and glass window buttons.

I moved from Windows 11 to CachyOS and wanted Tahoe's look without relearning my habits. So the Windows key opens Quick Menu, Win+E opens File Explorer, the window buttons are in Windows order (minimize, maximize, close) and menus show shortcuts as `Ctrl+C`.

One command installs it and one removes it. The installer saves every setting before it changes it, and `aurora uninstall` puts them back.

Nothing in KWin is patched and no file that belongs to a package is edited. Some parts are Plasma's own code rebuilt with a small patch, some are plugins that load ahead of the stock ones, some are Plasma widgets, and the rest are settings. When a system update brings a new Plasma, KWin or Qt, the parts built for the old version are skipped at login and Plasma uses its own until you rebuild them.

| Part | What it does | Source |
| --- | --- | --- |
| File Explorer | A…
