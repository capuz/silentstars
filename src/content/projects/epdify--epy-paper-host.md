---
repo: "EPDify/epy-paper-host"
name: "epy-paper-host"
description: "A web-based file manager and single-page application (SPA) server packed in a tiny Waveshare ESP32-S3 1.54-inch e-Paper AIoT development board. It's a portable, ultra-low-power, E-Paper Pocket Computer."
readmeQualityOk: true
url: "https://github.com/EPDify/epy-paper-host"
language: "C++"
languages: ["C++", "JavaScript"]
languagePcts: [46, 30]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-08T14:37:13Z"
lastCommitAt: "2026-11-01T10:43:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 19
maintainers: ["Zeyin"]
openGraphImageUrl: "https://opengraph.githubassets.com/c133fcf3f34459d5d6b7a91f47754a9cef1054da7bade4237d101ebea6bb8d28/EPDify/epy-paper-host"
---

# EPY Paper Host

A web-based file manager and single-page application (SPA) server packed in a tiny **Waveshare ESP32-S3 1.54-inch e-Paper AIoT development board**. It's a portable, ultra-low-power, E-Paper Pocket Computer.

 

## 1. Prerequisites (Arduino CLI & esptool)

This project uses `arduino-cli` to handle dependencies, compiling, and flashing, and `esptool` v5.x for reliable firmware uploads.

### Arduino CLI

**On macOS (Using Homebrew)**
```bash
brew update
brew install arduino-cli
```

**On Windows (Manual Installation)**

1. **Download:** Get the latest release from the [Arduino CLI Releases page](https://github.com/arduino/arduino-cli/releases).
2. **Install/Extract:** 
   - If using the **MSI**, run it and follow the prompts.
   - If using the **Zip**, extract `arduino-cli.exe` to a permanent folder (e.g., `C:\Arduino-CLI`).
3. **Add to PATH:**
   - Search Windows for "Edit the system environment variables".
   - Click **Environment Variables** > Select **Path** in 'System variables' > **Edit**.
   - Click **New** and add the folder path where `arduino-cli.exe` is located.
4. **Verify:** Open a new PowerShell window and run `arduino-cli version`.
5. **Initialize:**…
