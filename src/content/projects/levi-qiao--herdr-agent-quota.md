---
repo: "levi-qiao/herdr-agent-quota"
name: "herdr-agent-quota"
description: "Credential-scoped AI quota, context, and cache in Herdr for Claude, Codex, Grok, Agy, OpenCode, Pi, omp, Devin and Muse."
readmeQualityOk: true
url: "https://github.com/levi-qiao/herdr-agent-quota"
homepage: "https://herdr.dev/plugins/"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent-usage", "ai-agents", "claude-code", "codex", "grok", "herdr", "herdr-plugin", "provider-usage", "quota-monitor", "rate-limit"]
stars: 113
forks: 25
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-08-15T03:56:49Z"
lastCommitAt: "2026-09-14T09:13:21Z"
lastReleaseAt: "2026-09-10T03:59:09Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["levi-qiao", "bnivanov", "moltra"]
openGraphImageUrl: "https://opengraph.githubassets.com/521b221021c093fa0999765bdc11f332191e41b83146193673c62b68f3d1a0e0/levi-qiao/herdr-agent-quota"
---

# herdr-agent-quota

Model, context, prompt-cache usage, and subscription quota in Herdr's Agent sidebar.

[简体中文](https://github.com/levi-qiao/herdr-agent-quota/blob/HEAD/README.zh-CN.md)

<table>
<tr><th>gauges (default)</th><th>narrow</th></tr>
<tr>
<td valign="top"><img src="docs/screenshots/sidebar-gauges.png" alt="Gauges sidebar" width="276"></td>
<td valign="top"><img src="docs/screenshots/sidebar-gauges-narrow.png" alt="Gauges sidebar on a narrow width" width="244"></td>
</tr>
</table>

The plugin preserves Herdr's native machine/workspace/tab row, custom styles,
and worktree grouping. The branded provider/model line is the agent identity;
the native `agent` row is omitted so `grok` does not sit above `Grok/grok-4.6`.
Optional quota ordering and low-quota notifications are disabled by default.
Empty fields collapse; percentages can show remaining or used quota.
The default layout is `gauges`: a meter beside each quota number. Bars fill
to the printed number, and `cx`, `5h`, `7d`, and `30d` all follow
`quota-percent`. Labels are three characters so those periods align; a
provider-named window too long for that column keeps a plain row instead of
a truncated bar. Cache shares…
