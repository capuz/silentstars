---
repo: "RauliL/selain"
name: "selain"
description: "Modal web browser experiment"
readmeQualityOk: true
url: "https://github.com/RauliL/selain"
language: "C++"
languages: ["C++"]
languagePcts: [94]
topics: ["web-browser", "vi-like", "webkit", "webkit-browser"]
stars: 10
forks: 1
openIssues: 7
closedIssues: 6
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2019-01-13T15:40:33Z"
lastCommitAt: "2026-10-23T12:04:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 89
undervaluedScore: 41
maintainers: ["RauliL"]
openGraphImageUrl: "https://opengraph.githubassets.com/d15691fcba3c649faa443bbed3a560ff53eea8f814696c439a1d70344df3c1a1/RauliL/selain"
---

# selain

Experiment on how to build a browser UI with Vi like keyboard bindings that
uses [WebKit] as it's engine.

## How to compile

Selain requires these two libraries to be installed:

- [GTKmm]
- [WebKitGTK]

You also need [CMake] to compile this application. On Ubuntu, all of these can
be installed with following command:

```bash
$ sudo apt install libgtkmm-4.0-dev libwebkitgtk-6.0-dev cmake build-essential
```

After dependencies have been installed, you can compile the application like
this:

```bash
$ mkdir build
$ cd build
$ cmake ..
$ make
```

After this, you can run the application by executing `selain` binary found in
the `build` directory, or you can alternatively install it to your system with
`sudo make install`.

[WebKit]: https://webkit.org/
[GTKmm]: https://www.gtkmm.org/
[WebKitGTK]: https://webkitgtk.org/
[CMake]: https://cmake.org/
