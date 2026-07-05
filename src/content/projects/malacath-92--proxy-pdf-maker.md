---
repo: "Malacath-92/Proxy-PDF-Maker"
name: "Proxy-PDF-Maker"
description: "App for creating PDF files for at-home printing of TCG proxies"
readmeQualityOk: true
url: "https://github.com/Malacath-92/Proxy-PDF-Maker"
language: "C++"
languages: ["C++"]
languagePcts: [96]
stars: 54
forks: 5
openIssues: 12
closedIssues: 58
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-12-26T12:16:13Z"
lastCommitAt: "2026-07-05T20:59:24Z"
lastReleaseAt: "2025-03-28T20:55:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 49
maintainers: ["Malacath-92"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c114b08d9ea476804c95c0ae43f83608c9aca97cacbbb10c4a68d459b4a4aed/Malacath-92/Proxy-PDF-Maker"
---

# Proxy PDF Maker

    <br>
</p>

Proxy PDF Maker is an app for creating PDF files for at-home printing of TCG Proxies. It handles cropping of bleed edges, alignment on pages, cutting guides, matching backsides, and more. This repo is a complete rewrite of [print-proxy-prep](https://github.com/preshtildeath/print-proxy-prep) app, which was written in Python. This app is instead written in C++ to get better performance, and allow easy distribution of binaries.

# Installation

Go to the [Releases](https://github.com/Malacath-92/Proxy-PDF-Maker/releases) page and grab the latest version for your platform. Unzip this into any folder of your choice and you should be good to go.

## Windows
On Windows you will additionally have to install Visual Studio Redistributable: https://aka.ms/vs/17/release/vc_redist.x64.exe

## Ubunutu
On Linux systems you may have to mark the file as exectuable via the `chmod` command, e.g.
```sh
chmod +x proxy_pdf
```

## macOS
On macOS 15+ you have to trust the binary to run it. This process is a bit more involved and is outlined in the [MAC-OS-INSTALLATION](https://github.com/Malacath-92/Proxy-PDF-Maker/blob/main/MAC-OS-INSTALLATION.md) guide.

#…
