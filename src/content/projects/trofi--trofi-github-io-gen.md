---
repo: "trofi/trofi.github.io.gen"
name: "trofi.github.io.gen"
description: "source for blog generator"
readmeQualityOk: true
url: "https://github.com/trofi/trofi.github.io.gen"
language: "HTML"
languages: ["HTML"]
languagePcts: [98]
stars: 7
forks: 4
openIssues: 1
closedIssues: 2
watchers: 3
contributors: 9
recentReleases: 0
createdAt: "2013-11-25T20:29:28Z"
lastCommitAt: "2026-10-29T21:23:57Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 84
undervaluedScore: 48
maintainers: ["trofi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba4f107276fafb5a32a43e87a8ea3e4f234cded8646854b9a85acd448eee7a34/trofi/trofi.github.io.gen"
---

Hello!

This is the source of <https://trofi.github.io/> blog.

# Navigating

- [`posts/`](https://github.com/trofi/trofi.github.io.gen/blob/HEAD/posts): posts source code in `.rst` or `.markdown` format.
- [`posts.data/`](https://github.com/trofi/trofi.github.io.gen/blob/HEAD/posts.data): post-specific images, example binaries and similar.
- [`src/`](https://github.com/trofi/trofi.github.io.gen/blob/HEAD/src): source code for the site generator itself.
- [`run_watcher.sh`](https://github.com/trofi/trofi.github.io.gen/blob/HEAD/run_watcher.sh): main script to generate site and run a preview web server locally.
- [`trofi.github.io`](https://github.com/trofi/trofi.github.io/): repository in
  [GitHub pages](https://pages.github.com/) format with auto-generated content.

# Trying it out

Just clone this repo and run a [`run_watcher.sh`](https://github.com/trofi/trofi.github.io.gen/blob/HEAD/run_watcher.sh) and see what happens:

```
# optional, start a `nix` developmen shell to pull in all dependencies:
$ nix develop --no-write-lock-file

$ git clone https://github.com/trofi/trofi.github.io.gen
$ cd trofi.github.io.gen/
$ nix develop --no-write-lock-file
$ ./run_watcher.sh
...
[1 of…
