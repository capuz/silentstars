---
repo: "Stijnman/grok-custom-skills"
name: "grok-custom-skills"
description: "A curated, safety-conscious collection of reusable Grok-compatible agent skills for workflow automation, research, integrations, and quality assurance."
readmeQualityOk: true
url: "https://github.com/Stijnman/grok-custom-skills"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [71, 27]
topics: ["agent-skills", "ai-agents", "grok", "prompt-engineering", "workflow-automation"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-19T00:21:05Z"
lastCommitAt: "2026-08-26T04:17:06Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 57
maintainers: ["Stijnman", "mistral-vibe"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc5c2ff027411fbe49ea1fd319a1ab6356a215d1a9aa6fc481aa21be808b62be/Stijnman/grok-custom-skills"
---

# Grok Custom Skills

  <strong>A curated, safety-conscious collection of reusable agent skills for Grok-compatible workflows.</strong>
</p>

</p>

`grok-custom-skills` is a modular library of **89 skill packages** for common agent tasks: workflow orchestration, product discovery, research, skill operations, privacy, quality assurance, memory, media, messaging, and integrations.

> **Design principle:** Skills should make agent behavior more useful, auditable, and safe. They are guidance packages, not permission to bypass controls, disclose private data, or automate high-impact actions without human approval.

---

## Quick start

Clone the repository and copy either the full collection or individual packages into your Grok skills directory.

```bash
git clone https://github.com/Stijnman/grok-custom-skills.git
cd grok-custom-skills

# Install the collection
mkdir -p ~/.grok/skills
cp -a .grok/skills/. ~/.grok/skills/

# Or install one skill
cp -a .grok/skills/drive-github-skill-audit ~/.grok/skills/
```

After installation, restart or refresh the host environment if it does not discover new skills automatically.

## Explore the collection

The complete, generated catalog is…
