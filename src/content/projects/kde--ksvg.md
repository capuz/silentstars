---
repo: "KDE/ksvg"
name: "ksvg"
description: "Components for handling SVGs"
readmeQualityOk: true
url: "https://github.com/KDE/ksvg"
homepage: "https://invent.kde.org/frameworks/ksvg"
language: "C++"
languages: ["C++"]
languagePcts: [91]
stars: 9
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 194
recentReleases: 0
createdAt: "2023-05-10T10:01:02Z"
lastCommitAt: "2026-11-07T16:11:09Z"
status: "thriving"
tags: ["funded"]
healthScore: 75
undervaluedScore: 64
maintainers: ["nicolasfella", "kossebau", "Hema2-official"]
openGraphImageUrl: "https://opengraph.githubassets.com/e782adf5b820fcdf799d7b619339c8595d26705ec715b0e15a01fbbc0d956b1d/KDE/ksvg"
fundingLinks: ["GITHUB:https://github.com/KDE", "CUSTOM:https://kde.org/community/donations/"]
---

# KSvg
A library for rendering SVG-based themes with stylesheet re-coloring and on-disk caching.

## Introduction
KSvg provides both C++ classes and QtQuick components to render svgs based on image packs.
Compared to plain QSvg, it caches the rendered images on disk with KImageCache, and can re-color
properly crafted svg shapes that include internal stylesheets.

The default behavior is to re-color with the application palette, making it possible to create UI elements in SVG.

## C++
In C++ there are 3 main classes, usable also in QWidget applications with a QPainter-compatible API:

* ``ImageSet``: Used to tell the other classes where to find the SVG files: by default, SVG "themes"
                will be searched in the application data dir (share/application_name/theme_name)
* ``Svg``: Class to used to render Svg files: it loads a file with ``setImagePath`` using relative paths
            to the theme specified in ``ImageSet``
* ``FrameSvg``: A subclass of Svg used to render 9-patch images, such as Buttons, where you want to stretch
                only the central area but not the edges

## QML
Import QML bindings with ``import org.kde.ksvg 1.0 as KSvg``.

ImageSet is…
