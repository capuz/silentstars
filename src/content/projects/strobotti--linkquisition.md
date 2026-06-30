---
repo: "Strobotti/linkquisition"
name: "linkquisition"
description: "Linux desktop browser chooser written in GO"
url: "https://github.com/Strobotti/linkquisition"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["desktop", "gnome", "linux"]
stars: 29
forks: 2
openIssues: 3
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-02-14T14:37:52Z"
lastCommitAt: "2026-06-30T06:49:48Z"
lastReleaseAt: "2024-02-21T19:15:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 84
undervaluedScore: 33
maintainers: ["Strobotti"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/757458358/c8734de1-9498-497e-9bec-c0fdc0511398"
---

# Linkquisition

Linkquisition is a fast, configurable browser-picker for Linux (and experimentally macOS) written in Go.

...as nobody expects the Linkquisition!

## What is it?

Motivation behind this project is:

1. I needed a fast browser-picker for Linux desktop that is configurable to automatically choose a browser based on
   different rules
2. I have written a lot of server-side code in Go and wanted to see how easy it is to write a desktop app in Go

## Features

- Fast
- Configurable
    - Automatically chooses a browser based on different rules
        - domain (e.g. `example.com`)
        - site (e.g. `www.example.com`)
        - regular expression (e.g. `.*\.example\.com`)
    - Hide a browser from the list
    - Manually add a browser to the list (for example, to open a URL in a different profile)
    - Remember the choice for given site
- keyboard-shortcuts
    - `Enter` to open the URL in the default browser
    - `Ctrl+C` to just copy the URL to clipboard and close the window
    - Number keys (1-9) to select a browser

## Installation

### Linux

You can download the latest `.deb` package from
the [releases…
