---
repo: "kuzmak161-creator/abc-pascal-tui"
name: "abc-pascal-tui"
description: "abc-pascal-tui is an IDE for Pascal based on the PascalABC.NET compiler, utilizing a Python-based TUI (Text User Interface)."
readmeQualityOk: true
url: "https://github.com/kuzmak161-creator/abc-pascal-tui"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [99]
topics: ["pascal-ide-termux-tui-python-linux"]
stars: 7
forks: 2
openIssues: 2
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 2
createdAt: "2026-05-17T08:54:52Z"
lastCommitAt: "2026-09-06T08:04:59Z"
lastReleaseAt: "2026-06-11T22:24:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 71
undervaluedScore: 40
maintainers: ["kuzmak161-creator"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5de7ab38018df9c8361769e362ced5ef57a9e2ff813260d0041359b89eb9e09/kuzmak161-creator/abc-pascal-tui"
---

---

## DESCRIPTION
abc-pascal-tui is an IDE for Pascal based on the PascalABC.NET compiler, utilizing a Python-based TUI (Text User Interface).

## REQUIREMENTS
Before installing the IDE, ensure you have Python, Mono, Git, and the Textual library installed. DotNet is not required yet (it is needed for running binaries that do not work correctly under Mono).

</p>

</p>

# Instructions for Termux

```bash
pkg install mono -y
```

```bash
pkg install python -y
```

```bash
pkg install git -y
```

```bash
pip install textual
```

(It is advisable to install DotNet, but it is not required.)

```bash
pkg install dotnet-runtime-8.0
```

```bash
git clone https://github.com/kuzmak161-creator/abc-pascal-tui
```

```bash
cd abc-pascal-tui
```

Installation

After cloning, run the installer from the root of the repository:

```bash
bash install.sh
```

The script will ask you to select a language (English / Русский / Українська), then:

· Copy all project files (including the tui script) to /usr/local/share/abc-pascal-tui (or $PREFIX/share/abc-pascal-tui in Termux if $PREFIX is set).
· Create the pascal-tui command in /usr/local/bin (or $PREFIX/bin) that runs the installed tui script.
·…
