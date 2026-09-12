---
repo: "GNOME/orca"
name: "orca"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/orca"
readmeQualityOk: true
url: "https://github.com/GNOME/orca"
homepage: "https://gitlab.gnome.org/GNOME/orca"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 143
forks: 55
openIssues: 0
closedIssues: 0
watchers: 27
contributors: 253
recentReleases: 0
createdAt: "2012-06-02T04:29:44Z"
lastCommitAt: "2026-09-12T08:04:24Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 80
undervaluedScore: 43
maintainers: ["joanmarie", "dmustieles", "zstanecic"]
openGraphImageUrl: "https://opengraph.githubassets.com/0edff4e48776350f96bd8f3af4655717391864df102b527ebe3916ce149b5f02/GNOME/orca"
---

# Orca v51.0

[TOC]

## Attention Application Developers

If you are an application developer trying to make your application work with Orca, please see the
[README for application developers](https://github.com/GNOME/orca/blob/HEAD/docs/application-developers.md).

## Introduction

Orca is a free, open source, flexible, and extensible screen reader
that provides access to the graphical desktop via user-customizable
combinations of speech and/or braille.

Orca works with applications and toolkits that support the assistive
technology service provider interface (AT-SPI), which is the primary
assistive technology infrastructure for Solaris and Linux. While Orca
is part of the GNOME Project, it can be used in any accessible desktop
environment.

See <https://orca.gnome.org> for detailed information on Orca,
including how to run Orca, how to communicate with the Orca user
community, and where to log bugs and feature requests.

## Dependencies

Orca has the following dependencies:

* meson: The build system used by Orca
* Python 3: Python platform
* pygobject-3.0: Python bindings for the GObject library
* gtk+-3.0: GTK+ toolkit
* at-spi2-core 2.58.6 or newer, built with Python support…
