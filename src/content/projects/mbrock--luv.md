---
repo: "mbrock/luv"
name: "luv"
description: "A Common Lisp Vulkan atelier"
readmeQualityOk: true
url: "https://github.com/mbrock/luv"
language: "Common Lisp"
languages: ["Common Lisp"]
languagePcts: [97]
stars: 24
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-08-06T09:01:46Z"
lastCommitAt: "2026-10-23T09:32:23Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 36
maintainers: ["mbrock", "ampagent"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e9bed7fb2a0de9c643d929181554069b08cb726b9160e332e0fd71c82ffebdd/mbrock/luv"
---

# luv

Luv is a graphics workshop written in Common Lisp. It draws with the GPU
through its own small Vulkan and Metal 4 backends, has its own shader language,
and runs inside a Lisp image that stays alive while you work on it: you can
redefine a function, a class, or a shader and see the next frame change,
without restarting anything.

It isn't a general-purpose engine. It's a place to build graphics machinery
that is small enough to read, poke at, and change while it runs, and three
programs have grown up in it:

- **Luvcraft**, a block world in the spirit of Minecraft, with terminals you
  can build out of blocks and type into.
- **Luft**, a second, more mathematical take on the block world, with carved,
  bevelled terrain instead of textured cubes.
- **Luvland**, a Wayland compositor: other programs open their windows in it.

## Try it with Nix

Run any of them straight from GitHub, without cloning:

```sh
nix run --accept-flake-config github:mbrock/luv            # Luvcraft
nix run --accept-flake-config github:mbrock/luv#luft       # Luft
nix run --accept-flake-config github:mbrock/luv#luvland    # Luvland (Linux)
nix run --accept-flake-config github:mbrock/luv#luv-shaderc --…
