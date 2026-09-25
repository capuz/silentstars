---
repo: "SetraTheXX/next-secure-check"
name: "next-secure-check"
description: "Deterministic security checks for Next.js projects. Run with npx or GitHub Actions and review clear terminal, JSON, Markdown, GitHub Summary, or SARIF output."
readmeQualityOk: true
url: "https://github.com/SetraTheXX/next-secure-check"
homepage: "https://www.npmjs.com/package/next-secure-check"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["cli", "devsecops", "github-actions", "nextjs", "security", "security-scanner", "static-analysis", "typescript", "web-security"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 21
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-05-09T21:15:19Z"
lastCommitAt: "2026-09-25T09:02:41Z"
lastReleaseAt: "2026-08-31T16:34:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 61
maintainers: ["SetraTheXX"]
openGraphImageUrl: "https://opengraph.githubassets.com/0f84e12ec68378014a601aff46e74bf5170460330eb34c80fd3f839cbfd5f237/SetraTheXX/next-secure-check"
---

# SecureCheck

</p>

  <strong>AI wrote your Next.js app. Who checks the AI?</strong><br>
  A deterministic security baseline for AI-generated and human-written Next.js code.<br>
  No AI required at runtime.
</p>

</p>

## Quick start

From the root of a Next.js project, run:

```bash
npx --yes next-secure-check@0.6.0 scan . --preset app --summary
```

The CLI requires Node.js `20.9` or newer. The compact summary includes counts and representative findings alongside the tool's score and risk label. Those values are review aids, not a universal measure of application security. Remove `--summary` for the full terminal report.

## How it fits with AI-assisted code review

1. An AI assistant or developer writes code.
2. SecureCheck runs the same deterministic checks locally or in a GitHub Actions workflow you configure.
3. Findings point to a rule, location, and evidence path when the bounded analysis can provide one.
4. A developer or AI agent reviews the finding against the source and rule guidance.
5. The developer decides whether to change the code. Findings are review signals, not proof of exploitability.

## See it in action

</p>

The demo is generated from checked-in…
