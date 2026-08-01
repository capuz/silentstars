---
repo: "xsrazy/TikTok-Batch-Downloader"
name: "TikTok-Batch-Downloader"
description: "A simple Node.js CLI tool to download multiple TikTok videos without watermarks, complete with metadata export and automatic error handling."
readmeQualityOk: true
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
lastCommitAt: "2026-08-01T06:16:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 52
maintainers: ["xsrazy"]
openGraphImageUrl: "https://opengraph.githubassets.com/c035c44533973908c207b12bac09a4a230fbe210a8daedb739eed4fa420e573e/xsrazy/TikTok-Batch-Downloader"
---

# 🎬 TikTok Batch Downloader (No Watermark)

🌐 Available in other languages: [Bahasa Indonesia](https://github.com/xsrazy/TikTok-Batch-Downloader/blob/HEAD/README.id.md)








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

| Field…
