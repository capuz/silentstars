---
repo: "DiamTek/Java-Version-Manager-Windows"
name: "Java-Version-Manager-Windows"
description: "A lightweight, native Java Version Manager and superior SDKMAN! alternative for Windows. Easily install, manage, and switch between multiple JDKs and the entire JVM Ecosystem (Maven, Gradle, Kotlin) directly from your CMD or PowerShell terminal."
readmeQualityOk: true
url: "https://github.com/DiamTek/Java-Version-Manager-Windows"
homepage: "https://diamtek.github.io/Java-Version-Manager-Windows/"
language: "Batchfile"
languages: ["Batchfile"]
languagePcts: [100]
topics: ["batch", "developer-tools", "java", "java-version-manager", "jdk", "jenv", "nvm", "powershell", "sdkman", "version-manager"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 3
createdAt: "2026-03-17T17:17:28Z"
lastCommitAt: "2026-09-09T08:19:18Z"
lastReleaseAt: "2026-08-20T19:10:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 57
maintainers: ["TheHawk09"]
openGraphImageUrl: "https://opengraph.githubassets.com/5128ac86ca9973547d2d43a773399539b12816aae9e6ddb30c2494ed9a5b5ac0/DiamTek/Java-Version-Manager-Windows"
---

# Java Version Manager (JVM)

A lightweight, high-performance, color-coded Windows command-line utility designed to dynamically discover, download, and switch Java Development Kits (JDKs) and the entire JVM Ecosystem (Maven, Gradle, Kotlin, Scala, Groovy) with native SDKMAN! parity.

## 📥 Installation

Open Windows PowerShell (no Administrator privileges required) and paste the following one-liner:
```powershell
Invoke-WebRequest -Uri "https://raw.githubusercontent.com/DiamTek/Java-Version-Manager-Windows/main/install.ps1" -OutFile "$env:TEMP\install.ps1"; & "$env:TEMP\install.ps1"
```
*This instantly downloads the core engine, provisions `%LOCALAPPDATA%\DiamTek\JVM`, registers the Windows uninstaller, and updates your PowerShell Profile so the `jvm` command is available everywhere.*

### Or via your favorite Package Manager:
```powershell
winget install DiamTek.JVM
scoop install jvm
choco install jvm-windows
```
*Or grab the standalone `jvm-windows-1.0.0-x64.msi` or `jvm-windows-1.0.0-arm64.msi` installer from [Releases](https://github.com/DiamTek/Java-Version-Manager-Windows/releases).*

## 🗑️ Uninstallation

Easily remove JVM and all associated configurations:
- **Windows…
