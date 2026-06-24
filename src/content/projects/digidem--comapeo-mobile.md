---
repo: "digidem/comapeo-mobile"
name: "comapeo-mobile"
description: "The next version of Mapeo mobile"
url: "https://github.com/digidem/comapeo-mobile"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
stars: 16
forks: 5
openIssues: 81
closedIssues: 752
watchers: 4
contributors: 17
recentReleases: 2
createdAt: "2022-11-29T21:59:48Z"
lastCommitAt: "2026-06-24T23:37:32Z"
lastReleaseAt: "2026-06-10T17:41:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 72
maintainers: ["cimigree", "ErikSin", "digidem-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/c90892457004db2446ea7d27dbcb8e89ef1bc897bec43328632bb030862f372f/digidem/comapeo-mobile"
---

# CoMapeo Mobile

The next version of Mapeo Mobile

## Getting started

1. Clone repository

   ```sh
   git clone https://github.com/digidem/comapeo-mobile.git
   ```

2. Set up the development environment
   1. Install [Node](https://nodejs.org), ideally through a proper node version manager such as [nvm](https://github.com/nvm-sh/nvm), [fnm](https://github.com/Schniz/fnm), [asdf](https://asdf-vm.com/), or [mise](https://mise.jdx.dev/)
      - This project uses **Node v24.13.0+** with **npm v11.6.2** (LTS)

   2. Follow the React Native instructions for setting up the development environment: https://reactnative.dev/docs/environment-setup
      - Note that **Java 17** is the minimum version required for this project.

      - When setting up the Android-specific tooling, you will also need to install the [Android NDK](https://developer.android.com/ndk/). This can be installed using Android Studio by going to the `SDK Tools` tab in the `SDK Manager`. This project uses **NDK 26.1.10909125**.

   3. Copy the [`.env.template`](./.env.template) file to a file called `.env`. Replace any placeholder `<replace_me>` values with the relevant ones:

      `MAPBOX_ACCESS_TOKEN`: a [Mapbox…
