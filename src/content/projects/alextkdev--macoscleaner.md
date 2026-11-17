---
repo: "AlexTkDev/MacOSCleaner"
name: "MacOSCleaner"
description: "Free CleanMyMac alternative for Apple Silicon (macOS 26+). Native SwiftUI cleaner, uninstaller, Privacy Inspector (TCC, network, browser extensions), disk analyzer, duplicates, Xcode/Docker/AI cache cleanup. Review before delete, Trash by default, no telemetry. Source-available (GPLv3 + Commons Clause)."
readmeQualityOk: true
url: "https://github.com/AlexTkDev/MacOSCleaner"
homepage: "https://alextkdev.github.io/MacOSCleaner/"
language: "Swift"
languages: ["Swift"]
languagePcts: [98]
topics: ["cache-cleaner", "cleanup-tool", "docker-clean", "macos-application", "swift", "swiftui", "system-cleaning", "system-cleanup", "uninstaller-tools", "utilities"]
stars: 137
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 2
recentReleases: 2
createdAt: "2026-05-17T13:50:38Z"
lastCommitAt: "2026-11-17T12:19:49Z"
lastReleaseAt: "2026-10-01T13:12:46Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 88
undervaluedScore: 31
maintainers: ["AlexTkDev"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1241521746/8e96b75a-e92e-42a8-a36e-62b22ed3f97f"
fundingLinks: ["KO_FI:https://ko-fi.com/alextkdev", "CUSTOM:https://github.com/AlexTkDev/MacOSCleaner/blob/release/DONATE.md"]
discussionCount: 8
---

Free, native, privacy-first cleaner and application uninstaller for macOS.<br>
    Built with Swift 6 and SwiftUI. Review everything before cleaning. Uninstalls and duplicates go to Trash.

    &nbsp;

    

---

## 🛡️ Safety and Architecture

| Principle | Technical Implementation |
| :--- | :--- |
| **No Telemetry** | No background daemons, analytics SDKs, or remote loggers. All scanning runs locally without network access. |
| **Safe Deletion** | Cleanup, App Uninstaller, Disk Space Analyzer, Duplicate Finder, and Startup Services move files to macOS Trash via `trashItem(at:)` by default for recoverable deletion. Permanent removal (`removeItem(at:)`) is strictly opt-in. |
| **Protected Paths** | Hardcoded blocklists protect SIP paths, `/System`, `/Library`, `/usr`, `~/.ssh`, user documents, credential files (`.env`, `.npmrc`, `.yarnrc`, `.pypirc`), IDE settings (`.vscode`, `.idea`, `.zed`), and Finder sidebar favorites (`FavoriteItems.sfl3` / `.sfl4`). |
| **Non-Destructive Scanning** | Scanning never terminates running applications or modifies files. Cleanup and uninstallation enforce a 3-second soft quit timeout before forced termination. |
| **Open Core** | Swift 6 codebase…
