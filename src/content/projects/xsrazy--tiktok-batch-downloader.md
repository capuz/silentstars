---
repo: "xsrazy/TikTok-Batch-Downloader"
name: "TikTok-Batch-Downloader"
description: "A simple Node.js CLI tool to download multiple TikTok videos without watermarks, complete with metadata export and automatic error handling."
url: "https://github.com/xsrazy/TikTok-Batch-Downloader"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 45
forks: 15
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-06-26T12:21:46Z"
lastCommitAt: "2026-06-28T03:08:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 50
maintainers: ["xsrazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f88a4a318ec5e281e38f531156f49be51b7cd8dc71ce7c4d115ff1f9c45dd47/xsrazy/TikTok-Batch-Downloader"
---

# 🎬 TikTok Batch Downloader (No Watermark)

🌐 Available in other languages: [Bahasa Indonesia](README.id.md)








---

A simple Node.js CLI tool to download multiple TikTok videos without watermarks, complete with metadata export and automatic error handling.



---

## 🚀 Features

- 🎥 Download TikTok videos without watermarks
- ⏳ Batch process using `links.txt`
- 📊 Metadata export (in JSON format)
- 🚫 Automatic error logging
- 📁 Clean folder structure

## 💡 How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/xsrazy/TikTok-Batch-Downloader
   cd TikTok-Batch-Downloader
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add all video links to the `links.txt` file.

4. Run the tool:
   ```bash
   node main.js
   ```

---

## 📁 Output Structure
```
downloads/
├── video_1/
│   ├── video.mp4
│   └── metadata.json
├── video_2/
│   ├── video.mp4
│   └── metadata.json
...
```

### 🔍 Contents of `metadata.json`
Each video will come with a `metadata.json` file containing detailed information:

| Field            | Description                                        |…
