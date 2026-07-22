---
repo: "firstintent/ccteam"
name: "ccteam"
description: "ccteam turns the coding agents you already run (Claude Code, Codex, Grok, Kimi…) into one team — any session can spawn, dispatch, and collect work from any vendor on any machine, while you steer it all from Telegram, Lark, or a browser tab. 把你在用的编程 agent 编成一支团队,跨厂商跨机器派活,Telegram/飞书/网页统一指挥。"
readmeQualityOk: true
url: "https://github.com/firstintent/ccteam"
language: "Rust"
languages: ["Rust"]
languagePcts: [86]
topics: ["agent", "claude-code", "codex", "skill"]
stars: 83
forks: 12
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-05-04T16:03:21Z"
lastCommitAt: "2026-07-22T06:10:58Z"
lastReleaseAt: "2026-07-19T23:29:32Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 34
maintainers: ["firstintent"]
openGraphImageUrl: "https://opengraph.githubassets.com/77888e540894dc90d549ce520af11b39a1d712f2191f6d9ca5b7f3fefbd9acf8/firstintent/ccteam"
---

<h1>ccteam</h1>
  <p><b>ccteam turns the coding agents you already run (Claude Code, Codex, Grok, Kimi…) into one team —<br/>any session can spawn, dispatch, and collect work from any vendor on any machine,<br/>while you steer it all from Telegram, Lark, or a browser tab.</b></p>
  <p>
  </p>
</div>

</p>

Claude Code plans deepest, Codex grinds long jobs without wobbling, Grok answers fastest, Kimi does bulk work on a tiny bill. Alone, each is one terminal with one context and no colleagues. ccteam bridges them with what a team needs underneath — identity, routing, delivery guarantees, guardrails, a cost ledger — and leaves how the team organizes itself to prompts you version.

## Usage

**1 · Remote control from Telegram / Lark**

Paste a bot token once (Settings → IM) and the chat becomes a full console — completion notifications, HITL `[approve] [deny]` buttons and shipped files land in the same thread. Dispatch at midnight, close the laptop; the result is waiting at breakfast:

```text
/cd demo                        # pick a project; your next message talks to it
/new codex                      # more sessions: /new [vendor] [role]
@s2 run the test suite          # address…
