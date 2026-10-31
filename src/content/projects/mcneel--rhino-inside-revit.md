---
repo: "mcneel/rhino.inside-revit"
name: "rhino.inside-revit"
description: "This is the open-source repository for Rhino.Inside®.Revit"
readmeQualityOk: true
url: "https://github.com/mcneel/rhino.inside-revit"
homepage: "https://www.rhino3d.com/inside/revit/"
language: "C#"
languages: ["C#"]
languagePcts: [99]
topics: ["revit", "revit-api", "rhino", "grasshopper"]
stars: 339
forks: 77
openIssues: 101
closedIssues: 396
watchers: 35
contributors: 36
recentReleases: 0
createdAt: "2019-11-04T19:01:18Z"
lastCommitAt: "2026-10-31T15:59:27Z"
status: "thriving"
tags: ["needs_contributors", "legacy_hero"]
healthScore: 95
undervaluedScore: 39
maintainers: ["kike-garbo", "merge-down-robot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/219575320/e0450165-4c99-4d88-b4a1-949a5ee840c6"
---

# Rhino.Inside® Revit

Please see the [Rhino.Inside.Revit Wiki](https://www.rhino3d.com/inside/revit/)
for more information on how to use the project. Sections listed below provide
more information about the codebase for the developers who want to contribute to
this project or the Wiki.

## Overview

The Rhino.Inside® Technology allows Rhino, Grasshopper, and their add-ons to be
embedded within other products.
This repository is the Rhino.Inside® for Autodesk Revit®, named Rhino.Inside.Revit.

## Developer Interface

See Wiki pages below for more information about the architecture of this project.

- [Getting Started](https://www.rhino3d.com/inside/revit/1.0/reference/rir-api-gettingstarted)

## Build Process

The project uses a combination of GitHub Actions for pull request builds and a private build server to produce signed daily builds from the main release and development branches.

### Building from Source

See [Building from Source](https://github.com/mcneel/rhino.inside-revit/blob/HEAD/BUILDSOURCE.md) page for instructions on how to
build the project from source.

## Installer

The installer is generated using [WiX toolset](https://wixtoolset.org/)
(see…
