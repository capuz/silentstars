---
repo: "mlm-games/Miniter"
name: "Miniter"
description: "Basic non-linear video editor for clip concatination and trimming (web will be slower, but does export)"
readmeQualityOk: true
url: "https://github.com/mlm-games/Miniter"
homepage: "https://mlm-games.github.io/Miniter/"
language: "Rust"
languages: ["Rust", "Kotlin"]
languagePcts: [51, 49]
topics: ["video-editing", "video-editing-software", "video-editor"]
stars: 86
forks: 6
openIssues: 22
closedIssues: 6
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2026-02-25T13:52:53Z"
lastCommitAt: "2026-09-14T09:12:55Z"
lastReleaseAt: "2026-06-06T17:25:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 82
undervaluedScore: 29
maintainers: ["mlm-games", "github-actions[bot]", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/bcd2de8ba16d40b68da10df68f30e704a7a059e2a566604079ef3c1e543ac9a5/mlm-games/Miniter"
fundingLinks: ["GITHUB:https://github.com/mlm-games"]
---

Will keep it unarchived to let issues be opened, but it is (mostly, since i can't follow through) in maintenance mode.

## Old readme, has been updated to use a rust backend sincd 0.7, but might also plan on a rust-based UI too (though importing would be a lot harder)

Miniter is a basic Compose Multiplatform Video Editor mainly for Android, and Linux.

Is limited by ffmpeg-based android libs, hence planning to instead focus on a rust based editor directly for linux (and android later since it is easier to have a single codebase in it, basic tasks are covered here for now), so this is basically a prototype that works well for simple tasks, like trimming, and combining multiple tracks (on android), while transitions and text overlays work better on desktop. 

> Android save workaround: After saving your project, if the videos aren't loaded on opening an old project, just reimport the videos (that were intially present) in the tracks, and delete them (to just load the video into cache), to re-load the videos in the project.
