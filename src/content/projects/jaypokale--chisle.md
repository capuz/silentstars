---
repo: "JayPokale/Chisle"
name: "Chisle"
description: "Cut your AI coding agent's token bill on three axes: terse prose, YAGNI-first code, and tool-output compression. Claude Code, Pi, Cursor, Codex, Gemini + 4 more. Zero deps, published benchmarks including the runs it loses."
readmeQualityOk: true
url: "https://github.com/JayPokale/Chisle"
homepage: "https://chisle.jaypokale.me"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [76]
topics: ["anthropic", "claude-code", "codex", "cursor", "developer-tools", "gemini-cli", "github-copilot", "token-optimization", "caveman", "ponytail"]
stars: 470
forks: 30
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 13
recentReleases: 10
createdAt: "2026-06-30T05:36:44Z"
lastCommitAt: "2026-09-19T08:14:33Z"
lastReleaseAt: "2026-09-13T05:48:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["JayPokale", "zaphod72", "lextiz"]
openGraphImageUrl: "https://opengraph.githubassets.com/b994f5111804d38deb0147c10d902f0175f4e0b75916748d16142d6b80ac5d8c/JayPokale/Chisle"
discussionCount: 1
---

</p>

<h1 align="center">Chisle</h1>

  <em>Your AI talks less, builds less, reads less, and says more. Like a senior dev who bills by the syllable.</em>
</p>

  <em>The only tool in this class that publishes the runs where it lost.</em>
</p>

</p>

  <strong>44% of a bare model's output tokens on coding prompts &middot; 11 agents &middot; zero dependencies &middot; one command</strong>
</p>

</p>

---

"Add debounce to a search input that currently fires an API call on every keystroke." Same model, same prompt, one difference: the injected ruleset. Both answers below are the **verbatim committed output** from [`benchmarks/results/raw/`](https://github.com/JayPokale/Chisle/blob/HEAD/benchmarks/results/raw/):

<table>
<tr><th align="left" width="50%">bare agent: 142 lines, 1506 tokens</th><th align="left" width="50%">Chisle: 35 lines, 602 tokens</th></tr>
<tr valign="top"><td>

Opens with *"Let me show you the most common approaches"*, then ships a reusable generic `useDebounce<T>` hook in its own file…

```typescript
// useDebounce.ts
export function useDebounce<T>(
  value: T, delay: number
): T {
  const [debouncedValue, setDebouncedValue]
    = useState<T>(value);…
