---
repo: "PhoshMobi/phosh"
name: "phosh"
description: "Read-only mirror of https://gitlab.gnome.org/World/Phosh/phosh"
readmeQualityOk: true
url: "https://github.com/PhoshMobi/phosh"
homepage: "https://phosh.mobi"
language: "C"
languages: ["C"]
languagePcts: [95]
topics: ["wayland", "phosh", "gtk", "gnome", "mobile"]
stars: 156
forks: 10
openIssues: 0
closedIssues: 0
watchers: 9
contributors: 140
recentReleases: 0
createdAt: "2018-09-30T18:10:07Z"
lastCommitAt: "2026-11-04T08:03:18Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 41
maintainers: ["agx", "cynosure279", "dos1"]
openGraphImageUrl: "https://opengraph.githubassets.com/6c0169f51f70725671e601fe64d211384bfa5dc3fe428a398f5cd28f095eaa78/PhoshMobi/phosh"
fundingLinks: ["GITHUB:https://github.com/PhoshMobi", "LIBERAPAY:https://liberapay.com/phoshmobi", "CUSTOM:https://ev.phosh.mobi/donate/"]
---

# Phosh

A pure Wayland shell for mobile devices like smart phones or small
tablets which

* use touch input
* are running battery powered most of the time
* have limited screen space
* have a limited number of buttons
* might be docked to a keyboard, screen and other input devices

Typical devices are the Librem 5 and PinePhone or devices formerly
running proprietary operating systems like the OnePlus 6/6T.

The companion Wayland compositor is [phoc][].

## License

phosh is licensed under the GPL-3.0-or-later licence.

## Getting the source

```sh
git clone https://gitlab.gnome.org/World/Phosh/phosh
cd phosh
```

The [main][] branch has the current development version.

## Dependencies

On a Debian based system run

```sh
sudo apt -y install build-essential
sudo apt -y build-dep .
```

For an explicit list of dependencies check the `Build-Depends` entry in the
[debian/control][] file.

## Building

We use the meson (and thereby Ninja) build system for phosh.  The quickest
way to get going is to do the following:

```sh
meson setup _build
meson compile -C _build
```

## Testing

To run the tests run

```sh
xvfb-run meson test --no-suite screenshots -C _build
```

For details see…
