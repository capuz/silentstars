---
repo: "lzlhero/dlm3u8"
name: "dlm3u8"
description: "A command-line m3u8 downloader for Windows, macOS, and Linux. "
readmeQualityOk: true
url: "https://github.com/lzlhero/dlm3u8"
language: "JavaScript"
languages: ["JavaScript", "Batchfile", "Shell"]
languagePcts: [42, 23, 22]
topics: ["m3u8-downloader", "aria2", "aria2c", "ffmpeg", "linux", "macos", "nodejs", "javascript", "bash-script", "batch-script"]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-10-24T03:00:20Z"
lastCommitAt: "2026-10-31T15:58:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["lzlhero"]
openGraphImageUrl: "https://opengraph.githubassets.com/bfb29e9fa58928c24f5be60650977d86a54b39d8cd5d81f1574b4a9ac79c0227/lzlhero/dlm3u8"
---

# dlm3u8 - A command-line m3u8 downloader

## Introduction
**dlm3u8** is a command-line m3u8 downloader for Windows, macOS, and Linux. It relies on **aria2**, **Node.js**, and **FFmpeg**.

## Features
* **Concurrent Download**: Uses aria2 for fast, resumable video segment downloads.
* **Batch Download**: Supports downloading multiple m3u8 URLs from an input list file.
* **Ad Removal**: Automatically detects and removes advertisement segments from videos.

## Installation
First, [aria2](https://aria2.github.io/), [Node.js](https://nodejs.org), and [FFmpeg](https://www.ffmpeg.org/) must be installed and available in the `PATH`.

Then, download the [dlm3u8 zip package](https://github.com/lzlhero/dlm3u8/archive/refs/heads/master.zip) and extract it to a folder on your computer. Add the dlm3u8 folder to the `PATH`.

For macOS and Linux, make sure the following files are executable:
```
chmod +x dlm3u8
chmod +x m3u8tomp4
chmod +x rmhead
chmod +x sget
```

## Usage
**`dlm3u8`** is the downloader command.

**See usage information:**
```
dlm3u8
```

**Download a single m3u8 file:**
```
dlm3u8 m3u8-url [output.mp4]
```
**Note**: If no output file is specified, the program uses `output.mp4`…
