---
repo: "boostorg/website-v2"
name: "website-v2"
description: "New Boost website"
readmeQualityOk: true
url: "https://github.com/boostorg/website-v2"
homepage: "https://www.boost.org"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [50, 35]
stars: 18
forks: 27
openIssues: 243
closedIssues: 1080
watchers: 7
contributors: 45
recentReleases: 0
createdAt: "2021-10-07T19:05:26Z"
lastCommitAt: "2026-08-28T14:23:06Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 94
undervaluedScore: 75
maintainers: ["jlchilders11", "herzog0", "julhoang"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeca63829a8543c65168ef71fbb4ce0e649355916b98f86b0199996575876fc1/boostorg/website-v2"
---

# Boost.org Website

## Overview

A Django based website that will power a new Boost website. See the [documentation](https://github.com/boostorg/website-v2/blob/HEAD/docs/README.md) for more information about maintaining this project.

Links:

- https://stage.boost.org/ - staging
- https://www.boost.org/ - production

---

## Local Development Setup

This project will use Python 3.13, Docker, and Docker Compose.

There are two options for development setups, nix and native. The native setup doesn't require nix to be installed. The nix-based setup works in a similar way to a python venv, with everything encapsulated for the project. Note: it is not a vm. It handles installation of all of the application and development environment's dependencies automatically:

- The python version relevant to the project
- awscli
- gdk
- just
- opentofu
- nodejs
- yarn
- asciidoctor
- asciidoctor-boost gem
- pre-commit
- black
- isort
- pip-tools

1. Development System setup
   1. Give your ssh key to Sam so he can add it to the boost.cpp.al server.
   1. Basic Setup Options:
      1. [Nix-based](https://github.com/boostorg/website-v2/blob/HEAD/docs/development_setup_notes_nix.md)
      1.…
