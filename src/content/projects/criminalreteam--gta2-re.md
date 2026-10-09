---
repo: "CriminalRETeam/gta2_re"
name: "gta2_re"
description: "Re-implementation of gta2 10.5 (pc version)"
readmeQualityOk: true
url: "https://github.com/CriminalRETeam/gta2_re"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["cpp", "decompilation", "gta2", "reverse-engineering"]
stars: 110
forks: 24
openIssues: 4
closedIssues: 6
watchers: 5
contributors: 12
recentReleases: 0
createdAt: "2024-09-18T13:25:10Z"
lastCommitAt: "2026-10-09T18:55:51Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 44
maintainers: ["MrSapps", "gtampdotcom", "ImHoppy"]
openGraphImageUrl: "https://opengraph.githubassets.com/7cb91bf5480ae2ebc3de8d40cdc6991f35f5ff39ce1334ed24a11d2b8551da86/CriminalRETeam/gta2_re"
---

## Contributing
Anyone who wishes to contribute is encouraged to join the project's [Discord](https://discord.gg/4mTfhQKNQM), where most of the communication happens.

Also, you can find more info about the project (and how to effectively contribute) on [GTA2 RE Hub](https://valps.github.io/gta2-re-hub/).

When a function won't match, check [docs/matching_quirks.md](https://github.com/CriminalRETeam/gta2_re/blob/HEAD/docs/matching_quirks.md) for the MSVC 6 codegen patterns and verifier gotchas found so far.

## Building

### Prerequisites 
- Python >= 3.7
- `GTA2_ROOT` Environment variable pointing to your GTA2 installation
- Wine (For Linux/Mac)

Clone the repository with the `--recursive` flag:

```
git clone --recursive https://github.com/CriminalRETeam/gta2_re.git
```

Run `gta2_data_setup.py`, which is located at `/Scripts/`.

### Windows 

```
pip install -r requirements.txt
python vc6_setup.py
python build.py
```

### Linux

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 vc6_setup.py
python3 build.py
```

Optionally, you can automatically run the built exe by passing one of the following arguments to `build.py`:

-…
