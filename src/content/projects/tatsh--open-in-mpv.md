---
repo: "Tatsh/open-in-mpv"
name: "open-in-mpv"
description: "Host-side of the extension to open any link or page URL in mpv via the browser context menu."
readmeQualityOk: true
url: "https://github.com/Tatsh/open-in-mpv"
homepage: "https://tatsh.github.io/open-in-mpv/"
language: "Python"
languages: ["Python"]
languagePcts: [61]
topics: ["mpv", "audio", "browser-extension", "multimedia", "video"]
stars: 21
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2019-07-14T05:43:39Z"
lastCommitAt: "2026-10-26T18:06:53Z"
lastReleaseAt: "2026-04-28T03:46:31Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 99
undervaluedScore: 68
maintainers: ["dependabot[bot]", "pre-commit-ci[bot]", "Tatsh"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/196798789/0c0caee7-829f-4826-9145-e20abba33aad"
fundingLinks: ["GITHUB:https://github.com/Tatsh", "KO_FI:https://ko-fi.com/tatsh2", "LIBERAPAY:https://liberapay.com/tatsh2", "PATREON:https://patreon.com/tatsh2"]
---

# open-in-mpv

This browser extension displays a context menu item _Open in mpv_ for links. When clicked it will
pass the URL of the link to mpv (which must be `PATH`).

If you have yt-dlp installed and in `PATH`, then mpv will try to use it to resolve URLs it cannot
handle. This means you can right-click on any YouTube video page or link, choose `Open in mpv` and
view the video with mpv.

## Installation

First, [install the extension](https://github.com/Tatsh/open-in-mpv/releases). Quit your browser.

There are many ways to perform the next step. Below is the most basic, assuming you have Pip
installed.

Gentoo users can simply install `media-video/open-in-mpv` from
[my overlay](https://github.com/Tatsh/tatsh-overlay).

```shell
pip install --user open-in-mpv
open-in-mpv-install --user --force
```

The above commands will install the native host JSON file to supported Chromium-based browsers
whose paths are known for your OS. `--force` is used on first install to create the necessary paths
if they do not exist.

See `open-in-mpv-install --help` for more options. Linux users can pass the `--system` option to
install the native host part of the extension system-wide.

##…
