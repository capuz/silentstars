---
repo: "toyxyz/toyxyz_RGBMocap"
name: "toyxyz_RGBMocap"
description: "Native Windows video motion capture with ExMR, FlowHMR and GVHMR, contact correction, humanoid retargeting, and FBX/VMD export."
readmeQualityOk: true
url: "https://github.com/toyxyz/toyxyz_RGBMocap"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-10-26T22:26:28Z"
lastCommitAt: "2026-10-27T12:39:03Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 18
maintainers: ["toyxyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e012dbcbf19b9ec9cdf15d886315e8a994e4ab60fb70c62f37e25fb911ee82b/toyxyz/toyxyz_RGBMocap"
---

# RGB MoCap

A native Windows app that turns video into editable human animation. Review and
export motion with AI processing running locally.

## Sample videos

### Motion capture

https://github.com/user-attachments/assets/b948dd8c-43b9-493a-9d7f-2fae0317695e

[Download original sample](https://github.com/toyxyz/toyxyz_RGBMocap/blob/HEAD/docs/samples/motion-capture.mp4)

### Character retargeting

https://github.com/user-attachments/assets/1759f1bf-a0d0-409f-84d8-dde9409cfe6f

[Download original sample](https://github.com/toyxyz/toyxyz_RGBMocap/blob/HEAD/docs/samples/character-retargeting.mp4)

## Install and run

1. Install [Git for Windows](https://git-scm.com/download/win). Open **Command Prompt**
   in a writable folder where you want to install RGB MoCap, then clone the repository:

   ```cmd
   git clone https://github.com/toyxyz/toyxyz_RGBMocap.git
   cd toyxyz_RGBMocap
   ```

2. Download and install the required runtimes, Blender and FFmpeg:

   ```cmd
   install.cmd
   ```

3. Start the app:

   ```cmd
   RGBMoCap.cmd
   ```

   Keep the console open while the app runs. Prepare the AI model files separately
   using **Model Manager**; some require account registration…
