---
repo: "brycewang-stanford/stata-code"
name: "stata-code"
description: "Agent-native Stata bridge for empirical research — run DiD/IV/RDD and publication-ready tables from Claude Code, Jupyter, or VS Code on one token-economy result schema, with StatsPAI cross-validation. | 面向实证研究的智能体 Stata 桥接器——在 Claude Code、Jupyter、VS Code 中用一套省 token 的结果格式跑 DiD/IV/RDD 与出版级表格，并支持 StatsPAI 跨栈交叉验证。"
url: "https://github.com/brycewang-stanford/stata-code"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["ai-agents", "anthropic", "claude", "data-analysis", "data-science", "econometrics", "jupyter", "llm", "mcp", "mcp-server"]
stars: 10
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-04-29T21:49:07Z"
lastCommitAt: "2026-06-25T06:40:34Z"
lastReleaseAt: "2026-05-08T23:44:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 45
maintainers: ["brycewang-stanford", "Rostopher"]
openGraphImageUrl: "https://opengraph.githubassets.com/a41a5174fa8ac9c3664bd34986320bf4ee6f49d5e9cde83bb28e9c874fa70750/brycewang-stanford/stata-code"
---

</p>

</p>

# stata-code

<table>
  <tr>
    <td align="center">
    </td>
    <td width="48"></td>
    <td align="center">
    </td>
  </tr>
</table>

<sub><strong>Stanford REAP × CoPaper.AI</strong> · an academic–industrial AI toolkit for empirical research</sub>

</div>

</p>

> Agent-native Stata bridge — **one Python core, multiple frontends**.

`stata-code` lets you drive Stata from modern environments: an LLM agent (Claude Code, Cursor, Claude Desktop), a Jupyter notebook, or a VS Code editor session. All frontends share one Python core and return a stable, structured, **agent-friendly** result schema.

**For empirical economists.** Drive Stata in plain language: run **DiD, IV, RDD, and publication-ready `esttab` tables in one conversation** — then cross-check each estimate across Stata and Python so you only trust results that *agree* (the Cunningham cross-package robustness check).

**Try it in 60 seconds** with [Claude Code](https://github.com/anthropics/claude-code) — no global install needed:

```bash
claude mcp add stata-code --scope user -- uvx --from "stata-code[mcp]" stata-code-mcp
```

Then just ask:

> *"Using `data/cfps_panel.dta`, run a two-way fixed-effects…
