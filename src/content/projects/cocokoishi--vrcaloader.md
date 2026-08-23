---
repo: "cocokoishi/VRCALoader"
name: "VRCALoader"
description: "Simple tool for Unity to load your downloaded VRCA file(Assetbundle)"
readmeQualityOk: true
url: "https://github.com/cocokoishi/VRCALoader"
language: "C#"
languages: ["C#"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-03-31T03:01:03Z"
lastCommitAt: "2026-08-23T04:10:00Z"
lastReleaseAt: "2026-08-23T04:10:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 82
undervaluedScore: 59
maintainers: ["cocokoishi"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1b1d3b8cc81170855fd567cd7c22aca3226180cb2c4ff6f2a0c57340c00b140/cocokoishi/VRCALoader"
---

Load VRCA/VRCW AssetBundle files directly into the Unity Editor for avatar inspection and recovery.

> **Warning:** This tool is intended for recovering your own avatars and worlds only. Do not use it on content you do not own or have explicit permission to access.

### 1. Installation & Usage
Install via unitypackage from our latest releases. Open it via **Tools > VRCALoader**. Select a `.vrca` or `.vrcw` file in a slot, click **Load**, then double-click any asset or click **Spawn** to instantiate it into the scene.

### 2. How It Works
The tool calls `AssetBundle.LoadFromFileAsync`, `LoadAllAssetsAsync`, and `Object.Instantiate` to load a bundle straight into memory and place its contents in the current scene — no original project files required.

### 3. Use Cases

* **3.1 Recovering a local build** — If you lost your project files but still have the cached VRCA, find it under `C:\Users\<YourUsername>\AppData\LocalLow\VRChat\VRChat\Avatars` and load it with this tool. You can inspect blendshape values, shader parameters, and more. The loaded data lives in memory only and cannot be re-uploaded; use it as a reference to manually recreate your work.…
