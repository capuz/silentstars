---
repo: "hanxiao/omni-macos"
name: "omni-macos"
description: "Native macOS semantic search over your local files - text, images, audio, video in one vector space, on-device on Apple silicon."
readmeQualityOk: true
url: "https://github.com/hanxiao/omni-macos"
homepage: "https://hanxiao.io/omni"
language: "Swift"
languages: ["Swift"]
languagePcts: [95]
stars: 205
forks: 17
openIssues: 5
closedIssues: 2
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-06-01T04:38:20Z"
lastCommitAt: "2026-08-09T04:45:42Z"
lastReleaseAt: "2026-06-06T06:08:27Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 75
undervaluedScore: 29
maintainers: ["hanxiao"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1255682362/371e8a95-a17d-4bae-a187-d7e3cb3508f1"
---

</p>

<h1 align="center">Omni</h1>

</p>

Omni indexes your files and lets you search them by meaning instead of filename. A
text query finds matching documents, code, PDFs, images, audio, and video together,
because everything is embedded into one shared vector space. The model runs in-process
on Apple GPUs via a native MLX-Swift port of `jina-embeddings-v5-omni`, in two sizes -
[Nano](https://huggingface.co/jinaai/jina-embeddings-v5-omni-nano-mlx) (~1.9 GB) and
[Small](https://huggingface.co/jinaai/jina-embeddings-v5-omni-small-mlx) (~3.1 GB). No
Python, no server, no cloud: the model downloads once, then indexing and search run with
no network at all. Airgap the Mac and Omni keeps working.

  </a>
  <br>
</p>

## Install

Download the latest DMG from [**hanxiao.io/omni**](https://hanxiao.io/omni) (or from
[GitHub Releases](https://github.com/hanxiao/omni-macos/releases)), open it, and drag
**Omni** onto **Applications**. Builds are notarized, so they open without a Gatekeeper prompt.

On first launch Omni downloads the model once (Nano ~1.9 GB or Small ~3.1 GB). That is the
only time it touches the network: after that, both indexing and search run on-device with
nothing leaving…
