---
repo: "ishanpm/ap-sgtpuzzles-web"
name: "ap-sgtpuzzles-web"
description: "Web frontend for Simon Tatham's Portable Puzzle Collection with Archipelago support"
readmeQualityOk: true
url: "https://github.com/ishanpm/ap-sgtpuzzles-web"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [77]
stars: 6
forks: 2
openIssues: 30
closedIssues: 15
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-09-02T23:09:51Z"
lastCommitAt: "2026-08-25T04:09:57Z"
lastReleaseAt: "2025-10-16T03:03:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 42
undervaluedScore: 46
maintainers: ["ishanpm"]
openGraphImageUrl: "https://opengraph.githubassets.com/4fe2bfba808d083d6053e42b895d0bd612d8f1be8345132150ebe5732ed21812/ishanpm/ap-sgtpuzzles-web"
---

# Simon Tatham's Portable Puzzle Collection for Archipelago

It's this:

https://www.chiark.greenend.org.uk/~sgtatham/puzzles/

For this:

https://archipelago.gg/

This is a very rough prototype. As such, there are many features missing, the interface is a bit of a mess, it's relatively untested, and absolutely everything is subject to change. If you'd like to report a bug or suggest a feature, feel free to [create an issue here](https://github.com/ishanpm/ap-sgtpuzzles-web/issues).

## Build

I recommend building on Linux. If you're on Windows, you can install WSL to get a Linux-like environment.

First, install these dependencies:
- Node
- Webpack
- CMake
- Emscripten (emcmake)

Then run:

```sh
npm install
./build.sh
```

...and if the stars are aligned correctly it should generate the web files in `/dist`. Serve with the webserver of your choice; I use `python3 -m http.server`.

If you're not running Linux, you can do what the build script does manually:

- Build the JS bundle using `webpack --config webpack.dev.js`. This will create a `dist/` folder
- Copy the remaining files from `static/` into `dist/`
- Build the `ap-sgtpuzzles/` directory using Emscripten (good luck lol)
-…
