---
repo: "GNOME/msitools"
name: "msitools"
description: "Read-only mirror of https://gitlab.gnome.org/GNOME/msitools"
readmeQualityOk: true
url: "https://github.com/GNOME/msitools"
homepage: "https://gitlab.gnome.org/GNOME/msitools"
language: "C"
languages: ["C", "Vala"]
languagePcts: [58, 26]
stars: 69
forks: 18
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 83
recentReleases: 0
createdAt: "2016-01-04T13:47:15Z"
lastCommitAt: "2026-11-04T11:03:55Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 89
undervaluedScore: 50
maintainers: ["elmarco", "jkroepke", "zeroSteiner"]
openGraphImageUrl: "https://opengraph.githubassets.com/d026b46e0ae7032a8bde58fdfc0c26b2717d951cbbdd7e7f3f542fb83ef4e3f7/GNOME/msitools"
---

# msitools

## Introduction

*msitools* is a set of programs to inspect and build Windows Installer
(.MSI) files.  It is based on `libmsi`, a portable library to read and
write .MSI files.  libmsi in turn is a port of (and a subset of)
[Wine](https://www.winehq.org/)'s implementation of the Windows
Installer.

*msitools* plans to be a solution for packaging and deployment of
cross-compiled Windows applications.

## Tools

Provided tools include:

- `msiinfo`, to inspect MSI files

- `msibuild`, a low-level tool to create MSI files

- `msidiff`, compares contents of two MSI files with diff

- `msidump`, dumps raw MSI tables and stream content

- `msiextract`, to inspect and extract the files of an MSI file

- `wixl`, a WiX-like tool, that builds Windows Installer (MSI)
  packages from an XML document, and tries to share the same syntax as
  the [WiX toolset](http://wixtoolset.org/)

- `wixl-heat`, a tool that builds XML fragments from a list of files
  and directories.

## Building

*msitools* is built with [Meson](https://mesonbuild.com/). You will need:

- a C compiler, `pkg-config`, Meson >= 1.4 and Ninja

- a Vala compiler (`valac`)

- `bison` and `perl`

- GLib, GObject and…
