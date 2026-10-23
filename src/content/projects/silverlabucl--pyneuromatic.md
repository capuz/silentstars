---
repo: "SilverLabUCL/pyNeuroMatic"
name: "pyNeuroMatic"
description: "Python tools for acquiring, analysing and simulating electrophysiological data"
readmeQualityOk: true
url: "https://github.com/SilverLabUCL/pyNeuroMatic"
homepage: "http://www.neuromatic.thinkrandom.com/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-analysis", "electrophysiology", "neuroscience"]
stars: 15
forks: 0
openIssues: 9
closedIssues: 190
watchers: 6
contributors: 8
recentReleases: 0
createdAt: "2019-09-22T21:02:50Z"
lastCommitAt: "2026-10-23T12:04:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 95
undervaluedScore: 63
maintainers: ["jasonsethrothman"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d55789f1fafa07c3d2d2ecdc335fb305b185a09b4be9726556f392d6b2e532c/SilverLabUCL/pyNeuroMatic"
discussionCount: 1
---

pyNeuroMatic
==============

Python implementation of [NeuroMatic](https://github.com/SilverLabUCL/NeuroMatic).

pyNeuroMatic is a collection of Python tools for acquiring, analysing and simulating electrophysiological data.

**Note:** This is currently a work in progress. Core data structures are functional, with analysis tools and GUI implementation in development.

Requirements
------------

- **Python**: 3.9 or higher (3.11 recommended)
- **Core dependencies**: numpy, h5py, colorama
- **GUI dependencies** (optional): PyQt6

Installation
------------

### Recommended: Virtual Environment

We strongly recommend using a virtual environment:

```bash
# Create virtual environment
python3 -m venv pyneuromatic_env

# Activate it
source pyneuromatic_env/bin/activate  # On macOS/Linux
# or
pyneuromatic_env\Scripts\activate     # On Windows
```

### Option 1: Install from PyPI (when available)

```bash
# Core functionality only
pip install pyneuromatic

# With GUI support
pip install pyneuromatic[gui]

# For development
pip install pyneuromatic[dev]
```

### Option 2: Install from Source

Clone the repository:

```bash
git clone https://github.com/SilverLabUCL/pyNeuroMatic.git
cd…
