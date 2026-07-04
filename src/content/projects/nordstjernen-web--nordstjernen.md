---
repo: "nordstjernen-web/nordstjernen"
name: "nordstjernen"
description: "Nordstjernen web browser"
readmeQualityOk: true
url: "https://github.com/nordstjernen-web/nordstjernen"
homepage: "https://nordstjernen.org"
language: "C"
languages: ["C"]
languagePcts: [97]
topics: ["browser", "css", "html", "javascript", "web", "nordstjernen", "legendary", "c", "java", "web-browser"]
stars: 131
forks: 5
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 10
createdAt: "2026-05-11T15:56:15Z"
lastCommitAt: "2026-07-04T22:53:26Z"
lastReleaseAt: "2026-06-16T22:14:03Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 90
undervaluedScore: 37
maintainers: ["andreasrosdal", "claude"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1235739753/ed796d2f-a797-4340-adab-3e9189a5a7df"
discussionCount: 0
---

Nordstjernen web browser
========================

Nordstjernen is a web browser, written from scratch in C.
Focused on supporting the HTML and CSS standards.  
Nordstjernen is built in Norway. 

Runs on the platforms [Windows](https://apps.microsoft.com/detail/9nw8t7w5z4pl)  , Mac and Linux, Android, Java, FreeBSD and NetBSD.  

**HTML Standards:** Behaviour is measured against the spec text, section by section, not against another browser — 139 spec rows fully implemented, 29 partial, 3 absent as of June 2026. 

**Security:** each tab's engine runs in its own sandboxed process (seccomp + Landlock on Linux) behind an IPC + shared-memory-framebuffer boundary · no JIT.

**Minimalism:** The whole engine is about 145,000 lines of clean-room C — small enough for one person to read and audit end-to-end. Audio and video add only small single-file decoders (pl_mpeg, minimp3) and SDL2 for audio output, not a media stack; WebM (VP9/VP8 + Opus/Vorbis) is an optional extra over FFmpeg's libav — the system copy on Linux, a minimal LGPL build bundled on macOS/Windows.

Nordstjernen has no JIT so it is much more secure, and can still be fast enough. It ships no telemetry of any kind.

   

##…
