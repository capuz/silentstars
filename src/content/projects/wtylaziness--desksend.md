---
repo: "wtyLaziness/desksend"
name: "desksend"
description: "Windows keyboard and mouse sharing with bidirectional cross-screen file transfer, supporting multi-machine drag-and-drop, transfer progress, and configuration-preserving updates. Integrates Deskflow and LocalSend."
originalDescription: "Windows 键鼠共享与双向跨屏文件传输，支持多机拖拽、传输进度和保留配置更新。整合 Deskflow 与 LocalSend。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/wtyLaziness/desksend"
homepage: "https://github.com/wtyLaziness/desksend-releases/releases/latest"
language: "C++"
languages: ["C++"]
languagePcts: [75]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-11-10T13:45:50Z"
lastCommitAt: "2026-11-17T14:45:11Z"
lastReleaseAt: "2026-11-17T03:56:53Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 60
maintainers: ["wtyLaziness"]
openGraphImageUrl: "https://opengraph.githubassets.com/839d72cf7e27181f4ed6740ee748d7b5e5e8936252641fe435354880adc015a9/wtyLaziness/desksend"
---

DeskSend integrates the keyboard and mouse sharing of [Deskflow](https://github.com/deskflow/deskflow) and the LAN file transfer of [LocalSend](https://github.com/localsend/localsend) in a single portable package. After running DeskSend on both machines, you can use the host's keyboard and mouse to operate the secondary machine, and drag files or folders across the screen edge to send them, without separately installing or starting LocalSend.

## What it can do

| Capability | How to use |
| --- | --- |
| Cross-screen keyboard and mouse sharing | Arrange the host and secondary screens to match their actual positions; moving the mouse past an edge switches control to the other computer. |
| Bidirectional file dragging | Supports host → secondary and secondary → host; both use the mouse shared by the host to drag, and source files are kept. |
| Multi-machine delivery | After multiple secondary machines connect to the same host, you can drag a file from secondary A across the host screen and drop it on secondary B; the file is sent directly from the source computer to the final receiving computer. |
| Drag and transfer feedback | After entering the target screen, a drop-to-receive…
