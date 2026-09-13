---
repo: "chrono-meta/forge-harness"
name: "forge-harness"
description: "Stop re-explaining your rules to your agent. Put them in the project."
readmeQualityOk: true
url: "https://github.com/chrono-meta/forge-harness"
homepage: "https://chrono-meta.github.io/forge-harness/"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
topics: ["ai-agent", "developer-tools", "knowledge-management", "plugin", "codex", "harness", "claude-code", "multi-agent", "sidecar", "meta-harness"]
stars: 14
forks: 1
openIssues: 2
closedIssues: 5
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-05-26T09:14:09Z"
lastCommitAt: "2026-09-13T08:28:49Z"
lastReleaseAt: "2026-09-06T14:43:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["chrono-meta"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1250062394/972b46de-c5b2-48ca-8498-0e1f59f9d40a"
---

</p>

</p>

  <b>English</b> · <a href="README.ko.md">한국어</a> · <a href="README.zh.md">中文</a> · <a href="README.ja.md">日本語</a>
</p>

  <b>Stop re-explaining your rules to your agent. Put them in the project.</b>
</p>

  <b>Quality gates that catch you, not just your agent.</b>
</p>

</p>
  <sub>A real run, not a mock: an agent “tidied up” a skill spec (<code>SKILL.md</code>) and dropped its <b>Done When</b> section. The guard names the missing section; put it back and the cleanup ships unchanged.<br>Regenerate: <code>brew install vhs &amp;&amp; vhs docs/demo/gate-block.tape</code></sub>
</p>

---

## Pick one. They install differently and buy you different things.

### ① Just the gate — you do not need Claude Code

```bash
npx --package @chrono-meta/fh-gate fh-gate          # nothing to install
brew tap chrono-meta/forge-harness && brew install forge-harness   # or this
```

**In GitHub Actions** — the same gate as a step, with the verdict kept typed:

```yaml
- uses: chrono-meta/forge-harness@v3.1.2
  with:
    files: ${{ steps.changed.outputs.files }}
  env:
    ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

Listed on the [GitHub Actions…
