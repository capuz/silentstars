---
repo: "mbrock/luv"
name: "luv"
description: "A Common Lisp Vulkan atelier"
readmeQualityOk: true
url: "https://github.com/mbrock/luv"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [98]
stars: 18
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-06T09:01:46Z"
lastCommitAt: "2026-08-27T14:27:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["mbrock", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ce4a60ad33eec856ce9f6c26f83f07e697150b50a63ef14ecb812af9344ad74/mbrock/luv"
---

# luv

Luv is an experimental Common Lisp GPU workshop: a small WebGPU-shaped
hardware layer with hand-built Vulkan and native Metal 4 backends, an SDL3
canvas host, Lisp-defined mathematical shaders, and a McCLIM backend for live
tools on GPU surfaces. The aim is not a general-purpose engine; it is graphics
machinery small enough to inspect and redefine while it is running.

The repository contains two game experiments. **Luvcraft** is the original
procedural block world that grew the renderer, simulation, persistence, and
in-world tools. **Luft** is the current second-generation experiment: canonical
cubical topology, packed integer manifold-sheet meshes, and a playable McCLIM
atelier for developing the world from inside it.

## Run the current experiment

Development happens in a durable SBCL image supervised by
[Swash](https://github.com/lessrest/swash):

```sh
./scripts/install-dev-profile       # first setup, or after dependency changes
./sly play luft                     # start the image and open the Luft atelier
./sly status                        # identify the image, target, and canvas health
./sly screenshot build/frame.png    # capture the next rendered frame
./sly…
