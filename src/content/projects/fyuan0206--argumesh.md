---
repo: "Fyuan0206/ArguMesh"
name: "ArguMesh"
description: "A literature research workbench for researchers, graduate students, and paper authors. It puts \"establishing a topic — collecting papers — close reading and excerpting — comparing evidence — forming viewpoints — designing research plans\" into one traceable workflow, reducing repeated moving of information between PDF readers, spreadsheets, note-taking software, and chat-style AI."
originalDescription: "面向科研人员、研究生和论文作者的文献研究工作台。它把“建立课题—收集论文—精读与摘录—比较证据—形成观点—设计研究方案”放进同一个可追溯的工作流，减少在 PDF 阅读器、表格、笔记软件和聊天式 AI 之间反复搬运信息。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Fyuan0206/ArguMesh"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
stars: 17
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2026-08-15T06:34:44Z"
lastCommitAt: "2026-10-23T09:32:30Z"
lastReleaseAt: "2026-10-12T06:36:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 39
maintainers: ["Fyuan0206"]
openGraphImageUrl: "https://opengraph.githubassets.com/92974af8293172461311c8139be36c9f5eb7928b7c7e24a0b8f9d280ab3301a4/Fyuan0206/ArguMesh"
---

ArguMesh (Chinese name: 论脉) is a **local-first, open-source** literature research workbench for researchers, graduate students, and paper authors. From literature to paper writing, every step keeps its evidence traceable.

It reduces repeatedly moving information between PDF readers, spreadsheets, note-taking software, and chat-style AI.

- **Local SQLite**: zero cloud dependency, no account or login required.
- **Optional AI**: bring your own model API; the manual workflow works without any configuration.
- **You confirm the content**: AI suggestions keep their sources, and confirmed and locked evidence is protected.

## 🤝 Acknowledgments

Thanks to [StepFun (阶跃星辰)](https://www.stepfun.com/) for its support during development and evaluation.

## Problems Solved

| Common problem | How ArguMesh handles it |
| --- | --- |
| Papers are scattered across folders, browsers, and note-taking apps, making them hard to manage by topic | Use Project to isolate topics and literature, with search, filtering, and tags; after binding a workspace, **`literature/` folder sync** imports PDFs in bulk without uploading |
| Reading tends to stop at highlights and abstracts, so it can't be reused…
