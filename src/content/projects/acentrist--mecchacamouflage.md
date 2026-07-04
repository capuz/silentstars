---
repo: "acentrist/MecchaCamouflage"
name: "MecchaCamouflage"
description: "Auto Paint Tool for Meccha Chameleon."
readmeQualityOk: true
url: "https://github.com/acentrist/MecchaCamouflage"
homepage: "https://youtu.be/dC_jkDdKiUo"
language: "C++"
languages: ["C++"]
languagePcts: [75]
topics: ["game", "meccha-chameleon", "mod", "meccha", "hide-and-seek", "meccha-chameleon-mod", "meccha-chameleon-modding", "camouflage"]
stars: 97
forks: 21
openIssues: 8
closedIssues: 61
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-06-20T13:29:17Z"
lastCommitAt: "2026-07-04T22:20:34Z"
lastReleaseAt: "2026-07-03T21:40:39Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 97
undervaluedScore: 40
maintainers: ["acentrist", "SilentJMA"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1275272453/fdcfd970-366d-4801-8dab-d404e5e5c7ca"
discussionCount: 4
---

</p>

<h1>
  Meccha Camouflage
</h1>

A standalone Windows desktop tool for MECCHA CHAMELEON camouflage experiments.

## Download

Download the latest `meccha-camouflage.exe` from GitHub Releases:

- https://github.com/acentrist/MecchaCamouflage/releases/latest

## Usage

1. Start MECCHA CHAMELEON.
2. Start `meccha-camouflage.exe`.
3. Confirm the target process and bridge state in the app.
4. Press the saved paint hotkey.

Logs are written under:

```text
%LOCALAPPDATA%\MecchaCamouflage\versions\<version>\logs\
```

## Development

```bash
git clone https://github.com/acentrist/MecchaCamouflage.git
cd MecchaCamouflage
make run
```

Game update work, mesh profile regeneration, and research-tool setup are
documented in [docs/research-tools.md](docs/research-tools.md).

## License

This project is licensed under [GPL-3.0-or-later](LICENSE.txt).

The official project repository is:

- https://github.com/acentrist/MecchaCamouflage

Modified builds must preserve the license notice and must not imply they are
official releases. See [BRANDING.md](BRANDING.md).
