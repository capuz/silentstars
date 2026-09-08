---
repo: "pt1987/claude-code-psadt-skill"
name: "claude-code-psadt-skill"
description: "Claude Code skill for the full PSADT v4.x → Intune Win32 packaging lifecycle: guided build, packaging, testing, and optional direct Graph upload."
readmeQualityOk: true
url: "https://github.com/pt1987/claude-code-psadt-skill"
language: "PowerShell"
languages: ["PowerShell"]
languagePcts: [92]
topics: ["claude-code", "claude-skill", "intune", "powershell", "psadt", "win32"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-04T07:21:54Z"
lastCommitAt: "2026-09-08T08:16:19Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 52
maintainers: ["pt1987"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb21eab4419e6300060008f5bf1e11d634a193e23f7d5f12fdce9d4590d62401/pt1987/claude-code-psadt-skill"
---

<h1 align="center">PSADT v4 → Intune Deployment Skill</h1>

  <em>A Claude Code skill that drives the full lifecycle of a PowerShell App Deployment Toolkit (PSADT) v4.x Intune Win32 package — from first conversation to a tested, upload-ready <code>.intunewin</code>.</em>
</p>

</p>

---

## What is this?

A **Claude Code skill** (not a plugin): a reusable instruction package that teaches the agent how to build,
package, test, troubleshoot and deploy a **PSADT v4.x Intune Win32 app**. You describe the application; the
skill runs the workflow — intake, web research, scaffolding, all three deployment types
(Install / Uninstall / Repair), pre-flight checks, the SYSTEM test, packaging, the dossier, and the
optional Graph upload.

A skill is a folder with a `SKILL.md` (YAML frontmatter + Markdown instructions), here bundled with
`scripts/` and `references/`. It loads progressively: the agent sees only the name and description until a
task makes it relevant, then the full body loads on demand.

## Quick start

```powershell
npx psadt-deploy-skill
```

That installs the skill into `~/.claude/skills/psadt-deploy` and runs the setup doctor, which provisions
everything it can and names the…
