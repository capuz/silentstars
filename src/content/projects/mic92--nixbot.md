---
repo: "Mic92/nixbot"
name: "nixbot"
description: "Standalone Nix CI service for NixOS"
url: "https://github.com/Mic92/nixbot"
homepage: "https://buildbot.thalheim.io"
language: "Python"
languages: ["Python"]
languagePcts: [88]
stars: 27
forks: 4
openIssues: 6
closedIssues: 7
watchers: 3
contributors: 24
recentReleases: 0
createdAt: "2026-06-08T10:23:52Z"
lastCommitAt: "2026-06-30T06:50:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 40
maintainers: ["Mic92", "winterqt", "zowoq"]
openGraphImageUrl: "https://opengraph.githubassets.com/d6df3541d4174c7259214b84125e07984c6ea5bae76ec793bc3aaaa6bed63479/Mic92/nixbot"
---

# Nixbot

Nixbot is a continuous integration (CI) service for the Nix ecosystem, shipped
as a single NixOS service. It is a rewrite of
[buildbot-nix](https://github.com/nix-community/buildbot-nix), its spiritual
ancestor.

What started as a set of Buildbot plugins now runs standalone. One server
handles forge webhooks, nix-eval-jobs evaluation, builds through the local nix
daemon (offloaded via remote builders), commit statuses, and its own web
frontend.

Chat with us on Matrix:
[#nixbot:thalheim.io](https://matrix.to/#/#nixbot:thalheim.io)

## Features

- Fast, Parallel evaluation using
  [nix-eval-jobs](https://github.com/nix-community/nix-eval-jobs)
- Gitea/Github integration:
  - Login with GitHub to control builds
  - CI status notification in pull requests and on the default branch
- All builds share the same nix store for speed
- Tested with large flakes (50k flake outputs per evaluation)
- The last attribute of a build is protected from garbage collection
- Build matrix based on `.#checks` attributes
- No arbitrary code runs outside of the Nix sandbox
- _experimental_
  [hercules-ci effect](https://docs.hercules-ci.com/hercules-ci-effects/) to run
  impure CI steps i.e.…
