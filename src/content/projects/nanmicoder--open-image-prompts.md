---
repo: "NanmiCoder/open-image-prompts"
name: "open-image-prompts"
description: "Open, local-first visual prompt archive with traceable prompt-image references and installable Agent Skills."
readmeQualityOk: true
url: "https://github.com/NanmiCoder/open-image-prompts"
homepage: "https://openimages.relakkesyang.org/"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [56, 39]
topics: ["image-skill", "openimages", "imagesprompts", "open-image-prompts"]
stars: 232
forks: 34
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 10
createdAt: "2026-07-23T18:52:10Z"
lastCommitAt: "2026-08-29T10:20:50Z"
lastReleaseAt: "2026-07-28T01:10:13Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 90
undervaluedScore: 31
maintainers: ["NanmiCoder"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b633773a3230321e0c5a3c16714eed69b16e298329676d0cc051a2e2fd46d52/NanmiCoder/open-image-prompts"
---

</p>

  <strong>English</strong> · <a href="./README.zh-CN.md">简体中文</a>
</p>

# Open Image Prompts

An open, local-first visual prompt archive with two installable Agent Skills:

- `img-gen-taste` turns a rough brief into a clear art direction.
- `img-gen-prompts` retrieves traceable prompt-image references and opens a local comparison gallery.

Working through a coding agent? [AGENTS.md](https://github.com/NanmiCoder/open-image-prompts/blob/HEAD/AGENTS.md) is the condensed setup,
port, and Skill contract.

The public dataset contains **17,017 source prompts**, **30,128 images**, **34,022 translations**, **198,138 active v2 prompt labels**, and a closed taxonomy of **185 visual labels**. Labeling models, backfill tools, provider configuration, test runs, error logs, and other labeling-process records are not included. These counts are checked against `data/public-corpus.json` by `npm run verify:docs`.

Dataset assets ship through [GitHub Releases](https://github.com/NanmiCoder/open-image-prompts/releases) instead of Git LFS: the repository clone stays small, and `scripts/fetch_dataset.py` downloads the SQLite archive (~80 MB) plus optional monthly image packs (~4.3 GB total) with…
