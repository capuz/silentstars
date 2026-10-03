---
repo: "rdevz-ph/FPS-Meter-Android"
name: "FPS-Meter-Android"
description: "A high-performance, lightweight FPS monitoring tool for Android. This application provides a real-time frame rate overlay inspired by the Samsung Perf Z aesthetic, offering a professional monitoring experience for mobile gaming and performance testing."
readmeQualityOk: true
url: "https://github.com/rdevz-ph/FPS-Meter-Android"
homepage: "https://rdevz-ph.github.io/FPS-Meter-Android/"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [100]
topics: ["shizuku-android", "kotlin", "fps-monitor-overlay", "game-helper"]
stars: 27
forks: 1
openIssues: 0
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-04-18T07:41:05Z"
lastCommitAt: "2026-10-03T09:21:38Z"
lastReleaseAt: "2026-09-09T15:13:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 51
maintainers: ["rdevz-ph", "CH-Hu-Bill"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aca9b5f6f1a4b850cacbce336b9679eb9af18b4b5d905c27e87baf95addb892/rdevz-ph/FPS-Meter-Android"
fundingLinks: ["KO_FI:https://ko-fi.com/romelbrosas", "BUY_ME_A_COFFEE:https://buymeacoffee.com/rdevzph"]
discussionCount: 1
---

# FPS Meter Android

    A high-performance, lightweight FPS monitoring tool for Android. This application provides a real-time frame rate overlay inspired by the Samsung Perf Z aesthetic, offering a professional monitoring experience for mobile gaming and performance testing.
    <br><br>
    <strong>Official Website & Showcase:</strong> <a href="https://rdevz-ph.github.io/FPS-Meter-Android/">https://rdevz-ph.github.io/FPS-Meter-Android/</a>
  </p>

</div>

## How It Works

> [!NOTE]
> Here is a high-level overview of how the application operates:
> - **FPS Measurement Providers**:
>   - **Choreographer (Default)**: Uses Android's `Choreographer` API to receive frame callbacks, measuring elapsed time to calculate real-time frames per second (FPS). Frame time (MS) is derived directly from this rate.
>   - **SurfaceFlinger (Game FPS via Shizuku)**: Connects to Android's compositor via privileged Shizuku shell commands to measure real game frame presentation buffers from active `SurfaceView` buffer queues.
> - **Automatic Graphics API Detection**: Automatically detects whether the foreground game is rendering with **Vulkan** or **OpenGL ES** (tested on games such as Genshin Impact…
