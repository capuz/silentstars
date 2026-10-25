---
repo: "unicbm/demotracer"
name: "demotracer"
description: "CS2 DemoTracer public AGPL playback plugin and native runtimes. Desktop downloads and issue reporting; current GUI source is maintained privately."
readmeQualityOk: true
url: "https://github.com/unicbm/demotracer"
language: "C#"
languages: ["C#", "C++"]
languagePcts: [64, 29]
topics: ["counter-strike-2", "counterstrikesharp-plugin", "cs2", "converter", "demo", "esports", "replay", "source2"]
stars: 65
forks: 4
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-14T14:36:48Z"
lastCommitAt: "2026-10-25T08:41:02Z"
lastReleaseAt: "2026-06-28T16:04:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 32
maintainers: ["unicbm", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d7a6a344c26326ad5b7096410073692f030325636b7cb83e72184dff9727d88/unicbm/demotracer"
fundingLinks: ["KO_FI:https://ko-fi.com/un1"]
---

Analyze Counter-Strike 2 demos, export selected rounds, and replay them through bots on a local server.

  · <a href="docs/COMMANDS.md">Playback commands</a>
  · <a href="docs/DEVELOPMENT.md">Development</a>

## Get Started

1. Download the Windows x64 installer (`demotracer-gui-vVERSION.exe`) from the
   [latest release](https://github.com/unicbm/demotracer/releases/latest).
   The app requires Windows 10/11 and Microsoft Edge WebView2.
2. Analyze a demo, or import up to eight at once. Split recordings are merged
   automatically. Select rounds and export them to the local replay library.
3. For playback, prepare a local Windows x64 CS2 server with **Metamod 2.0 build 1483+
   (plugin API 18)** and official **CounterStrikeSharp 1.0.378+**. See the
   [server requirements](https://github.com/unicbm/demotracer/blob/HEAD/server/README.md#shared-hook-runtime) for exact pins.
4. In **Settings → CS2**, select the CS2 folder and install the matched playback
   bundle (`demotracer-css-vVERSION.zip`). Metamod and CounterStrikeSharp are
   installed separately. Keep GUI and Playback versions matched and the bundle's DLLs together.
5. Open a converted match and copy its playback command to…
