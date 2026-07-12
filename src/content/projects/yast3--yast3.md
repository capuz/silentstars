---
repo: "yast3/yast3"
name: "yast3"
description: "Save YaST ♥️"
readmeQualityOk: true
url: "https://github.com/yast3/yast3"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 0
openIssues: 9
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-10T06:57:38Z"
lastCommitAt: "2026-07-12T06:16:58Z"
lastReleaseAt: "2026-07-02T08:07:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 49
maintainers: ["guoyunhe"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b6931852733a38f662efb276e102e8b3e21d4d7b51206364443eef35f263f98/yast3/yast3"
discussionCount: 2
---

# YaST3

Save YaST ♥️ with Python 3 & Qt6 Widgets.

## Modules

| Name         | Core | Qt6 | GTK4 | TUI |
|--------------|:----:|:---:|:----:|:---:|
| Cron         | 🚧   | 🚧  | 🚧   | ❌  |
| Git          | ✅   | ✅  | 🚧   | ❌  |
| Hostname     | ✅   | ✅  | 🚧   | ❌  |
| Hosts        | ✅   | ✅  | 🚧   | ❌  |
| Packages     | ❌   | ❌  | ❌   | ❌  |
| Proxy        | ✅   | ✅  | ✅   | ❌  |
| Repositories | ✅   | ✅  | ✅   | ❌  |
| Services     | ✅   | ✅  | ✅   | ✅  |
| SSH Client   | 🚧   | 🚧  | 🚧   | ❌  |

**Planned:** SSH Server (system)

## Requirements

- Python 3.12+
- Qt6 bindings for Python via PySide6
- GTK4 bindings for Python via PyGObject

## Run

```bash
sudo zypper install python3-pyside6 python3-gobject gtk4-devel python3-Babel python3-crontab python3-configobj python3-python-dotenv python3-pytest
python3 -m yast3
```

## Install on Linux

Install the app for the current user and register the desktop launcher:

```bash
make install
```

This follows the usual `prefix`-based Makefile pattern and installs under
`$HOME/.local` by default. Install it system-wide instead:

```bash
sudo make prefix=/usr/local install
```

After installation, you can start the app from the…
