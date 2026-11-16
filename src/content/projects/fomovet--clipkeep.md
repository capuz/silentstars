---
repo: "Fomovet/clipkeep"
name: "clipkeep"
description: "A Windows clipboard history tool: a single exe with unlimited entries, search, grouping, editing, and encrypted LAN transfer. Rust + Tauri 2 + Vue 3."
originalDescription: "Windows 剪贴板历史工具：单个 exe，不限条数，搜索、分组、编辑，局域网加密互传。Rust + Tauri 2 + Vue 3。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fomovet/clipkeep"
homepage: "https://github.com/Fomovet/clipkeep"
language: "Rust"
languages: ["Rust", "Vue"]
languagePcts: [66, 24]
topics: ["clipboard", "clipboard-manager", "rust", "tauri", "vue", "windows"]
stars: 74
forks: 8
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 6
createdAt: "2026-10-17T06:10:08Z"
lastCommitAt: "2026-11-16T11:37:04Z"
lastReleaseAt: "2026-11-16T10:19:06Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 37
maintainers: ["Fomovet", "Chitose11"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ae0e4249f758015440ea8cf84dcf7d0d23a89aa59268376a35daec2e1620092/Fomovet/clipkeep"
---

# clipkeep

Windows / macOS clipboard history tool

The built-in Win+V on Windows only stores 25 entries, unpinned items are cleared on restart, and there is no way to search them. clipkeep also opens with Win+V, but it keeps records indefinitely, supports search and grouping, and can send text to another computer on the LAN.

## Download and install

Download from [Releases](https://github.com/Fomovet/clipkeep/releases/latest). The installer and the single-file version have the same features. The differences are:

|  | Installer (recommended) | Single-file version |
|---|---|---|
| File | `clipkeep_x.y.z_x64-setup.exe` | `clipkeep_x.y.z_x64.exe` |
| Installation | Installs to the current user's directory, no administrator rights needed | Put it in any directory and run it directly |
| Auto-start on boot | Enabled automatically after the first run | Enable manually in settings |
| Upgrade | Run the new installer to overwrite | Replace the exe file |
| Uninstall | Uninstall in System "Settings → Apps" | Turn off auto-start in settings first, then delete the exe |

- System requirements: Windows 10 / 11 (64-bit), depends on the WebView2 runtime (usually already included in the…
