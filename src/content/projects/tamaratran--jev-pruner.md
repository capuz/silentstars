---
repo: "tamaratran/jev-pruner"
name: "jev-pruner"
description: "Claude Code plugin: trim long Bash output with TypeSafe Jev before the model sees it"
readmeQualityOk: true
url: "https://github.com/tamaratran/jev-pruner"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [51, 30]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-18T03:00:58Z"
lastCommitAt: "2026-09-19T01:17:06Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 42
maintainers: ["devin-ai-integration[bot]", "tamaratran"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b80ccbacf9cf6275bb727c2d83b1b37fd1545acf674061d14b55cc6575b26a0/tamaratran/jev-pruner"
---

# jev-pruner

A Claude Code plugin that uses TypeSafe's Jev to trim noisy Bash output **after
the command runs, but before its result is sent back to the main LLM**. This
reduces the output carried into later turns without generating a summary.

Using Codex? See [Codex installation and usage](#codex).

```text
Claude requests a Bash command → Command runs → Jev prunes stdout → Claude receives the result
```

1. A `tool.call` hook wraps the Bash tool's `next()` result.
2. Stdout of **10,000 estimated tokens or fewer** passes through untouched,
   without reading history, writing an archive, or calling Jev. The gate uses
   `estimateTokens` on raw stdout, not a character count or an exact model tokenizer.
   `minTokens` can raise this threshold but cannot lower it. If Claude already saved
   the output to a file, the hook reads and counts that full output instead of its
   short preview. Errors, JSON/XML/YAML/diff/binary output,
   whole-document commands (`cat`, `jq`, `git diff`, `git show`, `base64`, and
   `openssl`) are left untouched.
3. Output is split into chunks of `chunkLines` lines, capped at 200 chunks;
   lines longer than 2,000 characters are split first.
4. Jev…
