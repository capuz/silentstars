---
repo: "joshuaKnauber/scripting_nodes"
name: "scripting_nodes"
description: "Visual Scripting addon for blender with nodes"
readmeQualityOk: true
url: "https://github.com/joshuaKnauber/scripting_nodes"
homepage: "https://scriptingnodes.com"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 34
forks: 9
openIssues: 0
closedIssues: 14
watchers: 6
contributors: 5
recentReleases: 0
createdAt: "2020-04-27T11:14:13Z"
lastCommitAt: "2026-10-09T18:56:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 85
undervaluedScore: 54
maintainers: ["joshuaKnauber", "CoreyCorza"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ce01c7b21f604d0585d93a653f264788ba925d1b0e08297b488c4df27d32fba/joshuaKnauber/scripting_nodes"
discussionCount: 0
---

# Scripting Nodes (Serpens)

Build Blender add-ons visually. Node trees compile to a regular Python add-on that is
reloaded live while you edit, and can be exported as an installable extension.

Requires Blender 5.0+. Licensed GPL-3.0-or-later.

## Development

```bash
python -m venv venv && source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp config.template.yaml config.yaml               # set BLENDER_EXECUTABLE
```

| Command | What it does |
| --- | --- |
| `python scripts/dev.py` | Build + install the extension, launch Blender (`r` restart, `q` quit) |
| `python scripts/test.py` | Run the headless test suite in Blender (`-k name` to filter, `-v` verbose) |
| `python scripts/screenshot.py <scenario> out.png` | Open the GUI on a scenario from `tests/visual/scenarios/` and save a screenshot |
| `python scripts/build.py` | Production build into `builds/` |
| `uvx ruff check . && uvx ruff format .` | Lint and format |

Tests and screenshots run Blender with a throwaway user profile, so they never touch your
own preferences, extensions or generated add-ons.

## Layout

```
addon/scripting_nodes/      the extension (blender_manifest.toml,…
