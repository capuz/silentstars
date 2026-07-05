---
repo: "jaswon/osu-dreamer"
name: "osu-dreamer"
description: "a diffusion-based ML model for generating osu! maps from raw audio"
readmeQualityOk: true
url: "https://github.com/jaswon/osu-dreamer"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["machine-learning", "osu", "osugame", "beatmap-creator", "beatmap-parser", "torch"]
stars: 143
forks: 13
openIssues: 5
closedIssues: 5
watchers: 4
contributors: 2
recentReleases: 0
createdAt: "2022-11-19T18:33:01Z"
lastCommitAt: "2026-07-05T20:17:56Z"
lastReleaseAt: "2022-12-02T16:58:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 37
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c2fdc52035137fb4dda60ceeac18919e6e8ef5ef194b07babd5847a549eb38b1/jaswon/osu-dreamer"
discussionCount: 0
---

# osu!dreamer - an ML model for generating maps from raw audio

osu!dreamer is a generative model for osu! beatmaps based on diffusion

-   [sample generated mapset](https://osu.ppy.sh/beatmapsets/1888586#osu/3889513)
-   [video of a generated map](https://streamable.com/ijp1jj)

## Quick start

[colab notebook (no installation required)](https://colab.research.google.com/drive/1Th6v5OOrY5vcTWvIH3NKZsuj_RMnAEM5#sandboxMode=true)

## Installation for development

### Required dependencies
- FFmpeg
- python 3.9
- [uv](https://docs.astral.sh/uv/getting-started/installation/) 

Clone this repo, then run:

```
uv sync [--group dev]
```

This will install `osu-dreamer`'s dependencies

## Model training

### Generate dataset

first you must generate a dataset, using eg. your `osu!/Songs` directory.
This step only needs to be done once (unless you delete the generated dataset directory).

```
$ uv run python -m osu_dreamer.model generate-data [MAPS_DIR]
```

where `[MAPS_DIR]` is the path to eg. your `osu!/Songs` directory

### Training

after the dataset generation completes, you can start training. Training occurs in two stages:

#### Latent Model

```
$ uv run python -m…
