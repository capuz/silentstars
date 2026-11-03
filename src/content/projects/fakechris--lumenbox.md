---
repo: "fakechris/lumenbox"
name: "lumenbox"
description: "A multi-agent orchestrator with a remote Docker box and Linux computer-use — one X11 desktop per agent, watchable and takeable-over."
readmeQualityOk: true
url: "https://github.com/fakechris/lumenbox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-21T07:50:27Z"
lastCommitAt: "2026-11-03T12:47:53Z"
lastReleaseAt: "2026-10-03T06:11:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 62
maintainers: ["fakechris"]
openGraphImageUrl: "https://opengraph.githubassets.com/9cb3c8f08fd6c4aa8cb8fbf3a34b1c9c77c4571cc058c3e3fdbcdd58417e409b/fakechris/lumenbox"
---

Your own team of AI agents, with a real computer to work on — on your Mac, in your chat apps.

---

LumenBox gives you a small team of agents — each with a name, a memory, its own desktop and a
shell — living in one Linux "box" you can watch and take over at any moment. You talk to them
in the app or from Feishu and DingTalk; they read documents, browse, write code, run it, and
keep a task board of what they owe you.

## What it believes · 设计理念

LumenBox is built around four questions: on which machine an agent works, who should do a piece
of work, whether it may, and why anyone should believe it when it says "done". Each has one place
where it is answered.

LumenBox 围绕四个问题设计：agent 在哪台机器上做事，一件事该谁做，它能不能做，它说"做完了"时凭什么信。每个问题只在一处回答。

- **Write the record before the capability.** What an agent actually did is kept as data, not as
  its summary of itself; a capability without a record gets claimed, never proven.
  **先写记录，再写能力。** agent 真正做了什么存成数据，不是它对自己的总结；没有记录的能力只会被宣称，不会被证明。
- **Unknown is never success.** Desktop actions carry evidence of their effect, and an action
  whose outcome is unknown is not counted as done and not retried on its own.
  **未知永远不算成功。**…
