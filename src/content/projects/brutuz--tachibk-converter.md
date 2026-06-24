---
repo: "BrutuZ/tachibk-converter"
name: "tachibk-converter"
description: "Simple Python script to convert Tachibk files to JSON"
url: "https://github.com/BrutuZ/tachibk-converter"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 24
forks: 12
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2024-05-14T06:35:32Z"
lastCommitAt: "2026-06-24T23:38:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 44
maintainers: ["renovate[bot]", "BrutuZ"]
openGraphImageUrl: "https://opengraph.githubassets.com/09f46de465cfc8ccb73977625624f5f193ef125042fae70b7cd70f20b4abb21e/BrutuZ/tachibk-converter"
---

# TACHIBK ↔ JSON Converter

## Requirements

- [Python](https://python.org) 3.10+
- [ProtoC](https://github.com/protocolbuffers/protobuf/releases/latest)

## Installation

### [UV](https://github.com/astral-sh/uv)
---
1. Run `uv tool install tachibk-converter --from git+https://github.com/BrutuZ/tachibk-converter`
2. Run `tachibk_converter [parameters]`
---
_(Optional) Run without installing:_
1. Run `uvx --from git+https://github.com/BrutuZ/tachibk-converter tachibk_converter [parameters]`
---

### [Pipx](https://pipx.pypa.io/)

1. Run `pipx install git+https://github.com/BrutuZ/tachibk-converter.git`
2. Run `tachibk_converter [parameters]`

### PIP

1. Clone the repo `git clone https://github.com/BrutuZ/tachibk-converter.git`
2. Navigate to the created folder: `cd tachibk-converter`
3. Create a Virtual Environment: `python -m venv .`
4. Activate the venv:
    - Linux: `source bin/activate`
    - Windows: `Scripts\activate.bat`
5. Install dependencies: `pip install -r requirements.txt`
6. Run `python tachibk_converter.py`
  
### [Nix](https://nixos.org)

1. Run `nix develop`, the shell will be created with all the depencencies

## Usage

```
tachibk_converter [-h] [--input…
