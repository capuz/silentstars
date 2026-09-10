---
repo: "butttons/pi-kit"
name: "pi-kit"
description: "Personal pi coding agent extensions and skills"
readmeQualityOk: true
url: "https://github.com/butttons/pi-kit"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["coding-agent", "pi-coding-agent", "pi-package", "pi-skills", "pi-extensions", "pi-themes"]
stars: 35
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-18T18:10:28Z"
lastCommitAt: "2026-09-10T08:19:41Z"
lastReleaseAt: "2026-02-26T12:44:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 70
undervaluedScore: 29
maintainers: ["butttons"]
openGraphImageUrl: "https://opengraph.githubassets.com/888d2690ff996601e59e63cf63e0a6eaf3b07b746d4d3c3e3ca4abbb75979f75/butttons/pi-kit"
---

# pi-kit

Personal [pi](https://pi.dev) extensions, skills, and themes.

Universal, harness-agnostic skills (git workflows, obi, playwright-cli, dora, exe-dev, ...) live in [agents.dotfiles](https://github.com/butttons/agents.dotfiles) and are loaded directly by every harness. pi-kit keeps only what is pi-specific.

## Install

Install everything:

```bash
pi install git:github.com/butttons/pi-kit
```

Cherry-pick specific resources by editing `~/.pi/agent/settings.json` (or `.pi/settings.json` for project-level):

```json
{
  "packages": [
    {
      "source": "git:github.com/butttons/pi-kit",
      "extensions": [
        "extensions/safe-delete.ts",
        "extensions/context-usage.ts",
        "extensions/plan-mode"
      ],
      "skills": ["skills/pi-costs"],
      "themes": []
    }
  ]
}
```

- Omit a key to load all of that type.
- Use `[]` to load none of that type.
- Use `!pattern` to exclude specific items.

After install, run `pi config` to enable/disable individual resources from the TUI.

## Extensions

### Safety and Guardrails

| Extension       | Description…
