---
repo: "cutefishos/video-player"
name: "video-player"
description: "The video player of the Cutefish desktop, built on libmpv"
readmeQualityOk: true
url: "https://github.com/cutefishos/video-player"
homepage: "https://cutefish.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 7
forks: 20
openIssues: 0
closedIssues: 3
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2021-06-27T06:41:14Z"
lastCommitAt: "2026-11-12T11:37:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 98
undervaluedScore: 85
maintainers: ["reionwong"]
openGraphImageUrl: "https://opengraph.githubassets.com/24fbca0f801ff22bca590d12166245d817cde1b0dcc2bfbc454909238456cb9b/cutefishos/video-player"
fundingLinks: ["GITHUB:https://github.com/cutefishos"]
---

# Video Player

The video player of Cutefish Desktop. It plays local files and network
streams through libmpv, with subtitles, folder playlists, resume and seek-bar
previews, behind overlay controls that hide while the video plays.

## Dependencies

Video Player uses cutefish-toolkit, libmpv and ICU.

```sh
sudo apt install cmake pkg-config libmpv-dev libicu-dev libgtest-dev
```

The tests make their sample clips with `ffmpeg`.

## Build and install

```sh
mkdir build
cd build
cmake -DCMAKE_INSTALL_PREFIX=/usr ..
make
sudo make install
```

## Tests

```sh
cmake -DBUILD_TESTING=ON ..
make
dbus-run-session -- ctest --output-on-failure
```

## License

BSD-3-Clause; see [LICENSE](https://github.com/cutefishos/video-player/blob/HEAD/LICENSE).
