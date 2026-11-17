---
repo: "SioGabx/SioForgeCAD"
name: "SioForgeCAD"
description: "SioForgeCAD is a powerful collection of custom AutoCAD commands designed to boost your productivity and streamline daily drafting tasks. It includes tools for geometry manipulation, block management, visual formatting, terrain modeling, hatch operations, and much more."
readmeQualityOk: true
url: "https://github.com/SioGabx/SioForgeCAD"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["autocad", "autocad-addins", "autocadplugin"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2023-11-19T19:56:14Z"
lastCommitAt: "2026-11-17T14:32:43Z"
lastReleaseAt: "2026-04-10T13:08:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 67
maintainers: ["SioGabx"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b9fd9192c32a8a2e506ff5fbd6a179969551fd523d5179055c26599210184d7/SioGabx/SioForgeCAD"
discussionCount: 0
---

# SioForgeCAD

**SioForgeCAD** is a powerful collection of custom AutoCAD commands designed to boost your productivity and streamline daily drafting tasks. It includes tools for geometry manipulation, block management, visual formatting, terrain modeling, hatch operations, and much more.

## 🛠️ Installation

1. Build the project as a `.dll`.
2. If you load this DLL from a network drive, add this to `"C:\Program Files\Autodesk\AutoCAD XXXX\acad.exe.config"` : `<runtime><loadFromRemoteSources enabled="true"/></runtime>`
3. Load the extension into AutoCAD using the `NETLOAD` command.
4. Select the compiled `.dll` file.
5. Once loaded, use the command prefix `SIOFORGECAD` followed by one of the available commands listed below.

ONLY FOR AUTOCAD < 2025

---

## 🧭 Command Reference

| Command | Description |
|---|---|
| `SIOFORGECAD` | Display the SioForgeCAD main menu and execute the selected option. |
| `CCI` | Compute an intermediate point between two elevation points. |
| `CCP` | Compute slope value between two elevation points. |
| `CCD` | Calculate a point from a known elevation point using a slope. |
| `CCA` | Add or subtract an elevation value to/from a point. |
| `CCDIF` |…
