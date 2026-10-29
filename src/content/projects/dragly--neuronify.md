---
repo: "dragly/neuronify"
name: "neuronify"
description: "Visual neuron simulator using the integrate-and-fire method."
readmeQualityOk: true
url: "https://github.com/dragly/neuronify"
homepage: "https://dragly.org/neuronify"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 13
forks: 19
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2014-09-14T21:59:59Z"
lastCommitAt: "2026-10-29T14:06:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 82
undervaluedScore: 72
maintainers: ["dragly"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d977f7bfd6207ca899c1a11947850c6a4e95e73be06bcdf0ba1e628edeceb40/dragly/neuronify"
---

# Neuronify 2.0

Neuronify is an educational neural network app.
It gives a low entry point to simulation-based neuroscience.
Without prior computational experiene, Neuronify makes it possible to work on neural simulations.

The original version of Neuronify is described in
[this paper published in eNeuro](https://doi.org/10.1523/ENEURO.0022-17.2017).
This repository contains the source code for Neuronify 2,
which is based on the same ideas and concepts as Neuronify 1,
but with new features and the ability to embed simulations into websites and online books.

Neuronify 1 was originally written in C++, while Neuronify 2 is written in Rust.

To run Neuronify in the browser,
install [trunk](https://trunkrs.dev) and run `trunk serve --port <port>` in the `neuronify` folder.
Adding `?file=examples/leaky.nfy` to the URL shows that file
the way it would look embedded on a web page, with the editor hidden.
It can be any legacy `.nfy` file or `.neuronify` save file the page can fetch.
