---
repo: "pickae/medialibrarian"
name: "medialibrarian"
description: "21 commands for building and keeping a media library: transcoding video, audio, images and comics, ingesting films, music and books, cleaning names, and a census of what is in it"
readmeQualityOk: true
url: "https://github.com/pickae/medialibrarian"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 18
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-04T10:28:01Z"
lastCommitAt: "2026-11-19T11:05:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["pickae"]
openGraphImageUrl: "https://opengraph.githubassets.com/a050ba4f6d09ef8c03646a9aa055e044c5dfe8015fc3158044a380503062447d/pickae/medialibrarian"
discussionCount: 0
---

# Media management commands

Command-line tools for ingesting, transcoding and tidying up personal media
libraries — audiobooks, music, movies, comics and image galleries. Every one that
renames files follows the same "never clobber, never lose a file" rules,
described under [File safety](https://github.com/pickae/medialibrarian/blob/HEAD/docs/file-safety.md). What they print, and the `-v` and
`-q` that set how much, is described under
[What a run prints](https://github.com/pickae/medialibrarian/blob/HEAD/docs/output.md).

Each is an installed command. From a checkout, `pip install .` puts all twenty-one
on your PATH; `pip install -e .` does the same and keeps them running the
checkout, which is what you want while editing it. Under a plain `pip install .`
the per-machine files — the `data/` tables, the `logs/` logs — live under
`~/.local/share/medialib` (or `$XDG_DATA_HOME/medialib` if it is set); the
environment variable `CLI_SCRIPT_DIR` points them somewhere else.
