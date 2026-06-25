---
repo: "Chipmunk91/Math_learn"
name: "Math_learn"
description: "With power of AI, math becomes easier than before."
url: "https://github.com/Chipmunk91/Math_learn"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-25T02:50:30Z"
lastCommitAt: "2026-06-25T01:33:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 48
maintainers: ["claude", "Chipmunk91"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ce825e1e8fcc3f8a9c982487b27df9af57a03c9e6161c85b2d66122d42e216c/Chipmunk91/Math_learn"
---

# Math Learn — interactive playground

An interactive, animated, chapter-based playground for learning math. Each
chapter is a self-contained [marimo](https://marimo.io) notebook: change a
slider, watch the field / phase portrait / solution respond instantly.

The first subject is **differential equations**, under
[`differential_equations/`](differential_equations/).

## Quickstart

```bash
uv sync                       # create the env and install deps + delib
uv run pytest                 # run the library tests
uv run marimo edit differential_equations/chapters/ch01_first_order_odes.py
```

Dragging the `a`, `K`, and `y₀` sliders in chapter 1 reshapes the slope field
and moves the solution curve in real time; the time animation plays with native
play/pause.

## AI tutor (in-page, bring-your-own-key)

Every published chapter has a built-in Socratic tutor — tap the **💬** icon to
open a chat that already knows the chapter (its equation, parameters, and
exercises). Highlight a passage before opening it and the tutor scopes its help
to that selection; otherwise it answers about the whole chapter.

It's **bring-your-own-key**: each visitor pastes their own Anthropic API key,
which…
