---
repo: "ollej/rusty-slider"
name: "rusty-slider"
description: "A small tool to display markdown files as a slideshow written in Rust."
readmeQualityOk: true
url: "https://github.com/ollej/rusty-slider"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["macroquad", "markdown", "presentation", "rust", "slideshow"]
stars: 70
forks: 6
openIssues: 2
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-04-06T19:39:35Z"
lastCommitAt: "2026-11-12T11:40:01Z"
lastReleaseAt: "2021-07-10T12:16:37Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 85
undervaluedScore: 26
maintainers: ["ollej"]
openGraphImageUrl: "https://opengraph.githubassets.com/e61c326eb016f05fb2a76dc79e14fa7713e1043aab2983a37f8706bcf06cac10/ollej/rusty-slider"
---

# Rusty Slider

A small tool to display markdown files as a slideshow.

## Demo

Try out Rusty Slider online:

* [Example slideshows](https://ollej.github.io/rusty-slider/demo/example-slideshows.html).

## Download

Rusty Slider is available for multiple platforms, such as Windows, 
Linux, MacOS, and the web. Download the latest binary build from github:

[https://github.com/ollej/rusty-slider/releases/](https://github.com/ollej/rusty-slider/releases/)

## Usage

The file `assets/rusty-slider.md` will be read and split into slides on
horizontal lines: `---`

At the moment, the markdown supported is headers, paragraphs, code blocks,
blockquotes, simple lists and images. Emphasis and strong are supported if the
theme has italic and bold fonts.

Heading level 1 can be used as title page, as it will render in the
middle of the slide and can have a larger font size set by the theme
option `font_size_header_title`.

You may use html comments (``) in the markdown for anything you
don't want to be shown.

### Images

Images can be added to the slideshow by using the image markdown It needs to
be placed on its own at the start of a line, anything else in the same
paragraph will be ignored.…
