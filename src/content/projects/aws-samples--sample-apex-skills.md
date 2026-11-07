---
repo: "aws-samples/sample-apex-skills"
name: "sample-apex-skills"
description: "Curated agentic AI skills for AWS platform engineering, delivered through any coding agent"
readmeQualityOk: true
url: "https://github.com/aws-samples/sample-apex-skills"
homepage: "https://aws-samples.github.io/sample-apex-skills/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [46, 43]
topics: ["ai-agents", "aws", "claude-code", "eks", "kiro", "kubernetes", "platform-engineering", "skills"]
stars: 93
forks: 20
openIssues: 38
closedIssues: 81
watchers: 1
contributors: 16
recentReleases: 1
createdAt: "2026-03-23T08:30:59Z"
lastCommitAt: "2026-11-07T09:30:58Z"
lastReleaseAt: "2026-10-21T11:26:16Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 39
maintainers: ["utkarpun", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d03178a5222a43ed89931fdc47395e8a09de5594085603b20c75eea07aa9f66e/aws-samples/sample-apex-skills"
---

# APEX Skills - Agentic Platform Engineering eXperience

> Curated platform-engineering skills that compress onboarding from months to weeks. Domain knowledge authored by senior AWS SSAs, TAMs, and ProServe, delivered through agentic AI tools (Claude Code, Kiro CLI etc).

**APEX** uses agentic AI (frontier models and agent harness like Claude Code) combined with curated "skills" to give engineers SSA-grade platform engineering output.

Agent Skills are organized folders of instructions, scripts, and resources that frontier LLM models can discover and load dynamically to perform specialized tasks. By codifying expert platform engineering knowledge as Agent Skills, we amplify best practices and scale them across teams while reducing toil. They follow the Agent Skills [Agent Skills open standard](https://agentskills.io/) open standard and are compatible with any supported agent harness.

---

## What's in This Repo

| Directory | Purpose |
|-----------|---------|
| `skills/` | **What** the agent knows — reusable domain knowledge |
| `skills/apex/` | The APEX router skill and its runbooks: phased procedures that combine skills (the SA's playbook) |
| `rules/` | **How** the agent…
