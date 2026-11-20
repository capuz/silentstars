---
repo: "mitsuhiko/tvpipe"
name: "tvpipe"
description: "Airplay/Chrome Cast anything"
readmeQualityOk: true
url: "https://github.com/mitsuhiko/tvpipe"
homepage: "https://mitsuhiko.github.io/tvpipe"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 151
forks: 5
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-11-18T13:11:31Z"
lastCommitAt: "2026-11-20T12:24:10Z"
lastReleaseAt: "2026-11-19T02:32:26Z"
status: "newborn"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 27
maintainers: ["mitsuhiko"]
openGraphImageUrl: "https://opengraph.githubassets.com/86281b178ad9dc75ee681a7ff0a13046fd1b4639ff2060fa865e00866778a77b/mitsuhiko/tvpipe"
---

# tvpipe

`tvpipe` is a command line tool for low-latency mirroring of video and audio
to **AirPlay** and **Google Cast** receivers (Apple TV, smart TVs,
Chromecast / Google TV) and browser tabs. It uses the real-time mirroring
protocols of both ecosystems, not URL playback, so the picture on the TV is a
fraction of a second behind the source.

**Website and manual: <https://tvpipe.party/>**

```sh
tvpipe discover                                        # find receivers
tvpipe pair "Living Room"                              # Apple TV only, once
tvpipe play --to "Living Room" movie.mp4               # a file or URL
tvpipe play --to "Living Room" --to Kitchen movie.mp4  # two TVs, one encode
tvpipe screen --to Kitchen                             # the screen, with sound
tvpipe screen --to Kitchen --window Keynote            # one window
tvpipe share --to Kitchen --open                       # a browser tab or the screen
tvpipe share https://status.example.com --to Kitchen   # a web page
tvpipe game play drawbluff                             # a party game: TV, phones, a window here
```

## Installing

```sh
curl -fsSL https://tvpipe.party/install.sh | sh     # macOS, Linux
```
