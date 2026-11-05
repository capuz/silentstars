---
repo: "timcsy/semorphe"
name: "semorphe"
description: "Same program, three views: code, flowchart, and blocks. Edit any side and it counts, and the other two sync in real time!"
originalDescription: "同一支程式，三種看法——程式碼、流程圖、積木。改哪一邊都算數，並且即時同步！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/timcsy/semorphe"
homepage: "https://semorphe.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["apcs", "arduino", "block-based-programming", "blockly", "cpp", "education", "python", "visual-programming"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-03-04T15:39:42Z"
lastCommitAt: "2026-11-05T14:05:22Z"
lastReleaseAt: "2026-09-03T09:58:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 58
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/dd6de7f1521cb571379e9ccbe97eee111211ed146e58bc5c69aa6aadbc6c18be/timcsy/semorphe"
---

---

Paste in real C++ or Python and it turns into blocks. Drag a block and the code changes along with it.
Switch to the flowchart and it draws the same program.

🔴 **All three sides are entry points, not "one editable plus two read-only"**:

```
You edit the code   →  blocks and flowchart update on the spot
You edit the blocks →  code and flowchart update on the spot
You edit the flow   →  code and blocks update on the spot
```

It's not a "convert" button you press, and it doesn't update only when you save. **The other two sides are already moving while you type.**

  Type a piece of C++ → all three sides appear at once → <b>edit once each in the code, the blocks, and the flowchart</b>, and the other two sides follow on the spot → press Run, and it really runs

## How it differs from other block tools

Most block tools are **one-way**: blocks can become code, but code can't turn back into blocks.
A few achieve two-way (for example, MakeCode), but once you step outside the subset they support, you can't go back.

Semorphe aims at something else:

| | |
|---|---|
| **All three views are editable, and live** | Edit **any** of the code, flowchart, or blocks, and the other two…
