---
repo: "alatiera/gnome-podcasts"
name: "gnome-podcasts"
description: "Main repository is over at the GNOME gitlab instance"
readmeQualityOk: true
url: "https://github.com/alatiera/gnome-podcasts"
homepage: "https://gitlab.gnome.org/World/Podcasts"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["podcast-client", "rust", "podcast", "gtk", "gtk-rs", "rss", "gnome"]
stars: 31
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 114
recentReleases: 0
createdAt: "2017-10-24T03:24:19Z"
lastCommitAt: "2026-09-07T08:34:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 56
maintainers: ["leo030303", "lumingzh", "alvaroburns"]
openGraphImageUrl: "https://opengraph.githubassets.com/64a0a50ff0fe57dd79657bef99daa4b604120352c1351084c6bc5675dfec11d3/alatiera/gnome-podcasts"
---

# GNOME Podcasts

### A Podcast application for GNOME.
Listen to your favorite podcasts, right from your desktop.

## Available on Flathub

## Quick start

GNOME Podcasts can be built and run with [GNOME Builder][builder] >= 41.
You can get Builder from [here][get_builder].

You will also need to install the rust-stable extension from flathub.

```sh
flatpak install --user flathub org.freedesktop.Sdk.Extension.rust-stable//21.08
```

Then from Builder, just clone the repo and hit the run button!

## Broken Feeds

Found a feed that does not work in GNOME Podcasts?
Please [open an issue][new_issue] and choose the `BrokenFeed` template so we will know and fix it!

## Getting in Touch

If you have any questions regarding the use or development of GNOME Podcasts,
want to discuss design or simply hang out, please join us on our [matrix][matrix] channel.

## Building

### Flatpak

Flatpak is the recommended way of building and installing GNOME Podcasts.
Here are the dependencies you will need.

```sh
# Add flathub and the gnome-nightly repo
flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak remote-add --user --if-not-exists…
