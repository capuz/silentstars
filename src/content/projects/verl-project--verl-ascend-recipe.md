---
repo: "verl-project/verl-ascend-recipe"
name: "verl-ascend-recipe"
description: "verl Ascend specific recipe"
readmeQualityOk: true
url: "https://github.com/verl-project/verl-ascend-recipe"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 28]
stars: 17
forks: 43
openIssues: 21
closedIssues: 6
watchers: 0
contributors: 28
recentReleases: 0
createdAt: "2026-05-11T12:59:45Z"
lastCommitAt: "2026-09-18T08:26:29Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 49
maintainers: ["wucong25", "yyyy2000", "beirong8kmiles"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2695205d79405a1150d537688a6dbab970d09482060da7dba6a097ae54fc7ff/verl-project/verl-ascend-recipe"
---

# verl-ascend-recipe

`verl--ascend-recipe` hosts ascend specified recipes based on [verl](https://github.com/verl-project/verl) contributed by the community.

## Usage

`verl-recipe` can be used as a submodule of `verl`:

```bash
git clone https://github.com/verl-project/verl.git
git clone https://github.com/verl-project/verl-ascend-recipe.git
mkdir -p verl/verl_ascend_recipe && cp -r verl-ascend-recipe/* verl/verl_ascend_recipe
cd verl
```

## Required `verl` version per recipe

Every recipe directory ships a small **`REQUIRED_VERL.txt`** next to its `README.md` (same filename everywhere). That file is the canonical place for:

- upstream git URL (today [`verl-project/verl`](https://github.com/verl-project/verl), historically `volcengine/verl`),
- whether the recipe **tracks `main`** (`pip install -e .` from the same tree) or **pins** a git commit / release tag,
- a copy-pastable `pip install …` line when a pin exists.

Each recipe `README.md` links to its `REQUIRED_VERL.txt` in a short **Required `verl` version** section. The repository root [`README.md`](https://github.com/verl-project/verl-ascend-recipe/blob/HEAD/../README.md) also points here for discoverability.

###…
