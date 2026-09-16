---
repo: "everglow01/Windows-Face-Hello"
name: "Windows-Face-Hello"
description: "Face unlock for Windows using an ordinary RGB webcam — a C++ Credential Provider + LocalSystem service with InsightFace recognition and MediaPipe liveness, for cameras Windows Hello doesn't support."
readmeQualityOk: true
url: "https://github.com/everglow01/Windows-Face-Hello"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["anti-spoofing", "arcface", "authentication", "biometrics", "cpp", "credential-provider", "face-recognition", "face-unlock", "insightface", "liveness-detection"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 5
createdAt: "2026-06-04T09:04:43Z"
lastCommitAt: "2026-09-16T08:48:43Z"
lastReleaseAt: "2026-07-09T02:09:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 60
maintainers: ["everglow01"]
openGraphImageUrl: "https://opengraph.githubassets.com/3254b397ac4ceb1d33f6f6fa9b57b1e21a879f2975f427ad5a2c435432654d81/everglow01/Windows-Face-Hello"
---

*Bringing Windows Hello-style face unlock to laptops, desktop front cameras, and USB cameras that Windows Hello doesn't support.*

*Inspired by a Surface Pro 4 the author once owned~*

<br>

**[🇨🇳 中文](https://github.com/everglow01/Windows-Face-Hello/blob/HEAD/README_zh.md)**　｜　**[📐 Design & Decisions](https://github.com/everglow01/Windows-Face-Hello/blob/HEAD/DESIGN.md)**

</div>

---

## ⚠️ Safety Notice (read before use)

- This project is only meant for **Windows 10 / 11**; using it on any other OS is not recommended.
- It touches system-affecting operations like modifying Windows services. The author has added plenty of safeguards and validated it on real hardware, but there's still a chance of serious system problems like **being unable to sign in, a service crash, or a BSOD**. The odds are very small, but be aware.
- This project uses vision algorithms like OpenCV to do single-RGB-camera face unlock — i.e. **Windows Hello-like** — but the actual security is far below the real Windows Hello. A single RGB camera can't sense spatial information the way infrared / depth cameras can, and may well be bypassed by a high-quality video or photo. **Do not use this on a work…
