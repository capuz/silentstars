---
repo: "kleister/kleister-api"
name: "kleister-api"
description: "Server to manage mod packs for Minecraft"
readmeQualityOk: true
url: "https://github.com/kleister/kleister-api"
homepage: "https://kleister.eu"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [54, 30]
topics: ["api", "golang", "server", "kleister", "minecraft", "go"]
stars: 12
forks: 4
openIssues: 1
closedIssues: 80
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2016-03-02T14:12:10Z"
lastCommitAt: "2026-08-30T00:44:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 77
maintainers: ["renovate[bot]", "tboerger"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7f5e058bea2d0f024e59233adacafc872d6a06a7268b7e602f6b975dc556b2b/kleister/kleister-api"
---

# Kleister: API server

> [!CAUTION]
> This project is in active development and does not provide any stable release
> yet, you can expect breaking changes until our first real release!

Kleister is a web UI to manage mod packs for the Minecraft, initially focused on
the Technic Launcher and MCUpdater. Even if there is an upstream version
available the Technic Launcher at [TechnicPack/TechnicSolder][solder] I prefered
to implement it in Go for the API and VueJS for the UI including some further
features like uploading the mods I want to manage and even generating docker
images directly out of the managed packs. Hosting Minecraft servers based on
docker images works pretty cool.

## Install

You can download prebuilt binaries from the [GitHub releases][releases] or from
our [download site][downloads]. Besides that we also prepared repositories for
DEB and RPM packages which can be found at [Cloudsmith][pkgrepo]. If you prefer
to use containers you could use our images published on [GHCR][ghcr],
[Docker Hub][dockerhub] or [Quay][quay]. You are a Mac user? Just take a look
at our [homebrew formula][homebrew]. If you need further guidance how to
install this take a look at our…
