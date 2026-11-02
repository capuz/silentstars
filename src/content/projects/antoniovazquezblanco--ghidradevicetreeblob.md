---
repo: "antoniovazquezblanco/GhidraDeviceTreeBlob"
name: "GhidraDeviceTreeBlob"
description: "Import Device Tree Information onto your Ghidra memory map"
readmeQualityOk: true
url: "https://github.com/antoniovazquezblanco/GhidraDeviceTreeBlob"
homepage: "https://github.com/antoniovazquezblanco/GhidraDeviceTreeBlob"
language: "Java"
languages: ["Java"]
languagePcts: [95]
topics: ["bootloaders", "driver", "ghidra", "ghidra-extension", "ghidra-loader", "ghidra-plugin", "kernel", "reverse-engineering", "device-tree", "devicetree"]
stars: 38
forks: 2
openIssues: 0
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-12-01T07:54:16Z"
lastCommitAt: "2026-11-02T17:56:52Z"
lastReleaseAt: "2025-06-05T22:19:15Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 59
maintainers: ["antoniovazquezblanco", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f2fff560881013f06855789564fbbebb7ad724b97246561271fb32a049f4fee/antoniovazquezblanco/GhidraDeviceTreeBlob"
---

# Ghidra Device Tree Blob

Import Device Tree Information onto your Ghidra memory map. This is usefull when reversing firmware from propietary devices that do not publish SVD files.

If you have SVD files for your device, I recommend you try [GhidraSVD](https://github.com/antoniovazquezblanco/GhidraSVD).

## Installing

This extension is available for installation via the [Ghidra Extension Manager](https://github.com/antoniovazquezblanco/GhidraExtensionManager).

You may also install this extension by going to the [releases page](https://github.com/antoniovazquezblanco/GhidraDeviceTreeBlob/releases) and downloading the latest version for your Ghidra distribution. In order to install from the release, in Ghidra main window go to `File` > `Install extensions...`. In the new window press the `+` icon to import the downloaded zip.

## Usage

In a CodeBrowser window press `File` > `Import DTB...`.

A file dialog will allow you to select your device tree file and import it. Memory map will automatically be updated.

## Development

For development instructions checkout [doc/Develop.md](https://github.com/antoniovazquezblanco/GhidraDeviceTreeBlob/blob/HEAD/doc/Develop.md).
