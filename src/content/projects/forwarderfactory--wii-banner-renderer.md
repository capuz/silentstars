---
repo: "ForwarderFactory/wii-banner-renderer"
name: "wii-banner-renderer"
description: "Experimental program that allows for rendering Wii banners into a playable video file."
readmeQualityOk: true
url: "https://github.com/ForwarderFactory/wii-banner-renderer"
language: "C++"
languages: ["C++"]
languagePcts: [82]
stars: 6
forks: 5
openIssues: 5
closedIssues: 20
watchers: 2
contributors: 3
recentReleases: 1
createdAt: "2026-07-07T18:57:50Z"
lastCommitAt: "2026-10-24T08:09:00Z"
lastReleaseAt: "2026-10-23T06:06:25Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 91
undervaluedScore: 65
maintainers: ["jacnils", "oliyy"]
openGraphImageUrl: "https://opengraph.githubassets.com/2d6b17a3f42c04ad556a1b442ed97f8e37950abd943f9f616241a128cf4b099c/ForwarderFactory/wii-banner-renderer"
---

# wii-banner-renderer

[Showcase](https://www.youtube.com/watch?v=_UVSLDDvSd0)
[Web version](https://forwarderfactory.com/banner-renderer/)

This program allows you to render a Wii banner to a video file. 
It is based on the work of the Wii Banner Player team. 

The program is compatible with Windows, macOS and Linux.
Do however note that macOS support is questionable at best, given that Apple no longer supports OpenGL 
and have deprecated the APIs. However, they still seem to be functional.

## Usage

Call the program using the path to a *.wad*, *00000000.app* or *opening.bnr* as a parameter. It should generate a file in your working directory
You can pass in multiple files as well. The output file(s) will bear the name of the input file, with a different file extension, .mp4 and .wav.
Run it with no parameters for a list of parameters.

Some banners use the Wii's shared bitmap fonts. Pass the shared content archive
that contains `wbf1.brfna` and `wbf2.brfna` with
`--font-archive <path>`, or set `WII_FONT_ARCHIVE`. The content filename is not
fixed, so identify it by those files rather than assuming a particular `.app`
number. 

You can also place `00000003.app` and…
