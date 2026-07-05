---
repo: "vinceAmstoutz/symfony-security-auditor"
name: "symfony-security-auditor"
description: "AI-powered multi-agent security auditor for Symfony applications — provider-agnostic via symfony/ai."
readmeQualityOk: true
url: "https://github.com/vinceAmstoutz/symfony-security-auditor"
language: "PHP"
languages: ["PHP"]
languagePcts: [99]
topics: ["ai", "audit", "llms", "php", "security", "static-analysis", "symfony", "symfony-bundle", "multi-agent", "owasp"]
stars: 72
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-20T11:59:57Z"
lastCommitAt: "2026-07-05T20:59:59Z"
lastReleaseAt: "2026-05-27T17:27:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 39
maintainers: ["vinceAmstoutz", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a9255e08c0e19849e3cca0f1731e53ed557ca3df7c63a7959647a8c00b21355/vinceAmstoutz/symfony-security-auditor"
discussionCount: 0
---

# Symfony Security Auditor

AI-powered, multi-agent security auditor for Symfony applications. An
adversarial **Attacker ⚔ Reviewer** loop catches the application-level flaws
SAST tools miss. Provider-agnostic via
[`symfony/ai`](https://symfony.com/doc/current/ai/index.html).

## Why this auditor?

Traditional PHP static analysis tools (PHPStan, Psalm) catch type errors. Static
SAST tools (Psalm Security, Progpilot) follow taint flows but cannot reason
about business logic, missing authorization, or multi-file attack chains.
Dependency scanners (Dependabot, Renovate, Snyk) only flag known CVEs in
third-party packages. This auditor runs alongside them, **targeting the
application-level logic flaws they cannot see**.

Side-by-side comparison with PHPStan, Psalm, Progpilot, Dependabot, and Snyk:
[FAQ](https://github.com/vinceAmstoutz/symfony-security-auditor/blob/HEAD/docs/faq.md#comparisons).

## What it does

An adversarial **Attacker** agent hunts for vulnerabilities; a skeptical
**Reviewer** agent culls false positives over up to three iterations — then
emits a validated report in console, JSON, SARIF, HTML, or Markdown.

🔀 **Pipeline**: Ingestion → Mapping → Audit (Attacker ⚔…
