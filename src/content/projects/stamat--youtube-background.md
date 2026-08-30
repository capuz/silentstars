---
repo: "stamat/youtube-background"
name: "youtube-background"
description: "ESM / jQuery plugin for creating video backgrounds from YouTube, Vimeo or video file links."
readmeQualityOk: true
url: "https://github.com/stamat/youtube-background"
homepage: "https://stamat.github.io/youtube-background/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [84]
topics: ["jquery", "jquery-plugin", "youtube", "background", "embed", "youtube-embed", "youtube-embed-player", "javascript", "video-background", "es6"]
stars: 189
forks: 51
openIssues: 0
closedIssues: 59
watchers: 7
contributors: 5
recentReleases: 0
createdAt: "2019-08-08T18:45:21Z"
lastCommitAt: "2026-08-30T00:12:22Z"
lastReleaseAt: "2021-11-13T17:01:36Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 97
undervaluedScore: 43
maintainers: ["stamat"]
openGraphImageUrl: "https://opengraph.githubassets.com/788ff794b0817259f724098c678c2374e0ce6952615cd926222ec4a5c3660a27/stamat/youtube-background"
---

# 📺 youtube-background

> Create video backgrounds from a YouTube, Vimeo or video file links.

> [!IMPORTANT]
> Future development will be moved to
> [stamat/video-backgrounds](https://github.com/stamat/video-backgrounds). Support will
> still be provided for this repo.

[DEMO HERE ➡️](http://stamat.github.io/youtube-background/)

This project started as a simple 100 liner jQuery plugin for YouTube video backgrounds. The idea behind it was to have a straightforward minimal way to add a YouTube video as a background for a div, or any other HTML element. It was intended to be used on hero and banner elements mostly. You would add a data attribute `data-vbg` to the element, and the script would take care of the rest, no CSS required.

```html

    <script type="text/javascript">
        const videoBackgrounds = new VideoBackgrounds('[data-vbg]');
    </script>
```

Since it's creation it has evolved to support Vimeo and video files as well. Numerous features were added out of necessity on other projects or by community requests.

After numerous iterations it is now a fully fledged ES module, also available as a standalone script. The jQuery plugin is still here, deprecated, and goes…
