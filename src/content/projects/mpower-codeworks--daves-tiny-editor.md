---
repo: "mpower-codeworks/Daves-Tiny-Editor"
name: "Daves-Tiny-Editor"
description: "The idea is to make a working text editor in the sub 1kb category. It uses Crinkler compression at build time."
readmeQualityOk: true
url: "https://github.com/mpower-codeworks/Daves-Tiny-Editor"
language: "Assembly"
languages: ["Assembly"]
languagePcts: [100]
topics: ["assembly", "crinkler", "edit", "editor", "richedit", "text", "text-editor", "tiny", "x86", "x86-assembly"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-05-01T22:44:41Z"
lastCommitAt: "2026-08-09T04:47:35Z"
lastReleaseAt: "2026-08-09T03:56:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 51
maintainers: ["mpower-codeworks"]
openGraphImageUrl: "https://opengraph.githubassets.com/8289a4e9d2c478f49031ca540409248a2d6c9341cfa5342e2049ff5b2bde3540/mpower-codeworks/Daves-Tiny-Editor"
discussionCount: 1
---

# Dave's Tiny Editor (DTE) v3.3.1
### A working Windows text editor in 794 bytes.<br>
<table border="0">
  <tr>
    <td>
           alt="DTE executable properties showing 794 bytes"
           width="300">
    </td>
    <td rowspan="2">
           alt="D.T. Mascot"
           width="300">
    </td>
  </tr>
  <tr>
    <td>
           alt="DTE executable virus scan clean"
           width="300">
    </td>
  </tr>
</table>

### DTE 3.0 has arrived, and it's breaking barriers!

A working Windows text editor in 794 bytes, DTE 3.0 is a complete rewrite from blank
and documents the major changes along the way. Thirty-one historical versions from the
372-byte init to 908-byte full functionality and then worked down again to 794-byte
working version, are included.

Fewer imports, persistent file handle, static class window, no
includes, file I/O via RICHEDIT20W, and by special appearance:

### A fake file dirty marker!

There is no flag to set, a * is simply appended to the title on file
change and removed on save.

To use DTE, drag and drop a file onto dte.exe.

Version 3.0 is the main distribution. 2.0 is a more standard,
optimized tiny exe. 1.0 is smaller, more experimental.

(Old) New!…
