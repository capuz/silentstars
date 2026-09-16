---
repo: "iterorganization/Waveform-Editor"
name: "Waveform-Editor"
description: "Tool for creating and managing waveforms to prepare fusion pulses"
readmeQualityOk: true
url: "https://github.com/iterorganization/Waveform-Editor"
homepage: "https://waveform-editor.readthedocs.io/en/latest/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["fusion", "imas", "time-series-data", "pulse-schedule"]
stars: 6
forks: 6
openIssues: 8
closedIssues: 15
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2024-12-19T10:22:44Z"
lastCommitAt: "2026-09-16T08:47:15Z"
lastReleaseAt: "2025-10-02T07:25:31Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 90
undervaluedScore: 85
maintainers: ["SBlokhuizen", "ioan-alexandra", "DaanVanVugt"]
openGraphImageUrl: "https://opengraph.githubassets.com/69c66a011c4bc253a36fdc8a813969a2a94756ea6afe17bad490f19436064021/iterorganization/Waveform-Editor"
---

# Waveform Editor

The Waveform Editor is a Python tool for creating and managing 1D time-dependent data
called waveforms. It utilizes a human-readable, text-based file format where waveforms
are described using descriptive tendencies, such as sine waves or linear ramps. The
Waveform Editor includes a GUI for interactive creation, editing, and organization of
waveforms.

## Development Status 

This project is currently under active development. While a functional prototype and
core features are already implemented, additional features, usability improvements, and
integrations are in progress. The following features are planned for the coming months:
- UI usability enhancements
- Integration of Plasma Shape Editor: construct waveforms directly from equilibrium
  solver output 

## Install

To install the waveform editor, run the following:

```bash
# On SDCC, ensure you have loaded the IMAS-Python module:
# module load IMAS-Python
python -m venv venv
source ./venv/bin/activate
pip install waveform-editor
```

More detailed instructions for installing can be found on [Read the
Docs](https://waveform-editor.readthedocs.io/en/latest/installing.html).

## Usage

The GUI can be…
