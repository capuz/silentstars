---
repo: "sql-bi/SQLBI-Whiteboard"
name: "SQLBI-Whiteboard"
description: "A free, open-source, native Windows 11 whiteboard for teaching DAX, SQL, and data modeling - pen ink, live application capture, and syntax-highlighted code"
readmeQualityOk: true
url: "https://github.com/sql-bi/SQLBI-Whiteboard"
homepage: "https://whiteboard.sqlbi.com"
language: "C#"
languages: ["C#", "HTML"]
languagePcts: [69, 22]
topics: ["csharp", "dax", "dotnet", "ink", "power-bi", "sql-server", "teaching", "whiteboard", "windows-11", "wpf"]
stars: 9
forks: 0
openIssues: 1
closedIssues: 5
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-08-15T08:32:04Z"
lastCommitAt: "2026-08-29T17:26:37Z"
lastReleaseAt: "2026-08-18T11:24:48Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 60
maintainers: ["marcosqlbi", "Alberto-Ferrari"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1334923118/925af78b-76de-4a46-842f-d682e121fd94"
discussionCount: 2
---

# SQLBI Whiteboard

A native Windows 11 whiteboard built with C# and WPF. WPF's dedicated dynamic ink renderer owns the live pen stroke, while a retained viewport renders an unbounded world-coordinate document beneath it.

How the project is developed and shipped is documented separately:
[CONTRIBUTING.md](https://github.com/sql-bi/SQLBI-Whiteboard/blob/HEAD/CONTRIBUTING.md) for the working agreement,
[docs/release-management.md](https://github.com/sql-bi/SQLBI-Whiteboard/blob/HEAD/docs/release-management.md) for the process, and
[docs/decisions.md](https://github.com/sql-bi/SQLBI-Whiteboard/blob/HEAD/docs/decisions.md) for the choices behind it.

## Included in the application

- Low-latency, pressure-aware WPF wet ink, including rear-eraser detection on any pen that reports it
- A normal cursor for physical mouse input, and a pen-hover indicator that shows what a tap would do: the laser with its halo and speed trail, a dashed square around what the eraser would clear, and a high-contrast dot for everything else. All of them disappear on contact
- Touch panning and two-finger pinch zoom
- Optional finger drawing (default when no pen is detected): one finger uses the current tool,…
