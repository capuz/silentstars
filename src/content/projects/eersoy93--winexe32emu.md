---
repo: "eersoy93/winexe32emu"
name: "winexe32emu"
description: "A 32-bit Windows EXE emulator"
readmeQualityOk: true
url: "https://github.com/eersoy93/winexe32emu"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 8
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2025-12-10T19:22:49Z"
lastCommitAt: "2026-11-08T10:40:58Z"
lastReleaseAt: "2026-11-06T12:08:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 41
maintainers: ["eersoy93", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/6becc657b1d42e294cc155c5ae7657e516ec1b9dc4dec9d80e8d004fba267327/eersoy93/winexe32emu"
---

# winexe32emu

32-bit Windows EXE emulator in Python. Written with GitHub Copilot and Claude AI.

## Installation

```bash
pip install -r requirements.txt
```

## Usage

Put EXE files in the c_drive/ folder (the emulated `C:\`) or compile the examples with `./create_c_drive_environment.sh`; the demo EXEs are placed in `c_drive/Windows/Demos/`, which the program sees as `C:\Windows\Demos`. After that, run:

```bash
python3 winexe32emu.py gdi_demo.exe
```

A bare EXE name is searched in `C:\` first and then in `C:\Windows\Demos`; a Windows path inside the emulated drive (e.g. `"C:\Windows\Demos\gdi_demo.exe"`) works too.

Use `-h` parameter for command-line help. For programs using a legacy ANSI code page (e.g. Turkish text), add `--codepage cp1254` (default: `utf-8`).

Use `-v` to see every API call and other debug output, or `-q` to see only the program output, warnings and errors.

With the GUI, the EXE name is optional: the Start menu on the fake desktop lists the EXE files in `C:\`, and the demos in `C:\Windows\Demos` under its own *Demos* submenu. Each selected program starts next to the ones already running.

Like on Windows, only console (`SUBSYSTEM_CONSOLE`) programs start…
