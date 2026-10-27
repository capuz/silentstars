---
repo: "SpaceCadet0/Mangosteen-Windows"
name: "Mangosteen-Windows"
description: "Zero-click file converter and toolbox for Windows: hold Shift, Ctrl or Alt and right-click a file. Images, PDF, documents, video and audio, offline."
readmeQualityOk: true
url: "https://github.com/SpaceCadet0/Mangosteen-Windows"
language: "C#"
languages: ["C#"]
languagePcts: [95]
topics: ["dotnet", "ffmpeg", "file-converter", "image-converter", "offline", "pdf-tools", "tray-app", "video-converter", "windows", "wpf"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-20T13:23:51Z"
lastCommitAt: "2026-10-27T09:17:06Z"
lastReleaseAt: "2026-10-24T20:16:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 55
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/091f244b8d13bab299597672373d87361c1189f99610ece0517f6b233c482d62/SpaceCadet0/Mangosteen-Windows"
---

*English* · [Русский](https://github.com/SpaceCadet0/Mangosteen-Windows/blob/HEAD/README.ru.md)

  Hold Shift, Ctrl or Alt, right-click a file, pick a segment — done.

```
0.0 % CPU at rest · ≈13 MB private memory · 249 MB download, one exe · no admin rights, nothing asked at launch
```

after start. Memory is the private working set that Task Manager shows (74 MB working set in all). The exe is 402 MB
unpacked, as it carries .NET, FFmpeg and the background-removal model; FFmpeg runs as a separate process only while a
video or audio job does, and the model is loaded only while you remove a background.</sub>

---

The Windows sibling of [Mangosteen](https://github.com/SpaceCadet0/Mangosteen) for macOS. It lives in the notification
area and waits for a right-click. Hold a modifier key, right-click a file in File Explorer or on the desktop, and a
round wheel opens at the cursor. Pick a segment and the result appears next to the original. No windows to open, no
save dialogs, no uploads, no limits. The two apps share no code; each has its own releases.

| Hold and right-click | Wheel | What it does |
|:---:|:---:|---|
| `Shift` | **Convert** | Turns the file into another format |
|…
