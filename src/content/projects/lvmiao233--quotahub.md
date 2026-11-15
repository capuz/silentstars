---
repo: "lvmiao233/QuotaHub"
name: "QuotaHub"
description: "Coding plan quota hub — OpenCode Go, Ollama Cloud, and more."
originalDescription: "Coding plan quota hub — OpenCode Go, Ollama Cloud, and more."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/lvmiao233/QuotaHub"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 47]
stars: 23
forks: 8
openIssues: 2
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2026-06-25T17:41:34Z"
lastCommitAt: "2026-11-15T11:22:58Z"
lastReleaseAt: "2026-11-15T11:25:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 60
undervaluedScore: 21
maintainers: ["lvmiao233"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0c34d5117ed474e0d81bf8bb889f2c240fc1fd89c269173d9aaf488a4313ccd/lvmiao233/QuotaHub"
---

# QuotaHub

Viewing quotas across multiple OpenCode Go, Ollama, and Mistral accounts is inconvenient, so I built a small tool that fetches and displays account quotas from each platform.

## Acknowledgements

Thanks to the members of the [LinuxDo](https://linux.do) community for their discussion and sharing;

The OpenCode Go quota query feature was implemented with reference to [opencode-cc](https://github.com/Kiowx/opencode-cc) ([@Kiowx](https://github.com/Kiowx)).

## Getting and Deploying

| Method | Who it suits | Description |
|------|--------|------|
| [GitHub Release](https://github.com/lvmiao233/QuotaHub/releases) | Most users | Provides Docker images, UV runtime packages, and source packages; the Release page has detailed instructions |
| Docker | Environments that already use Docker | See below |
| UV runtime package | Has [uv](https://docs.astral.sh/uv/) installed | After extracting, run `scripts/start.sh` (Linux/macOS) or `scripts\start.bat` (Windows) |
| Source package / Git clone | Need to change code or build it yourself | Requires uv; pnpm is also needed if you change the frontend |

## Docker Deployment

**Using the Release image (recommended):**

```bash
docker…
