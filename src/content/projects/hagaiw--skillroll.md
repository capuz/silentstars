---
repo: "hagaiw/skillroll"
name: "skillroll"
description: "The simple eval harness for your skills"
readmeQualityOk: true
url: "https://github.com/hagaiw/skillroll"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 11
forks: 0
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 5
createdAt: "2026-08-23T09:57:37Z"
lastCommitAt: "2026-11-10T11:38:18Z"
lastReleaseAt: "2026-11-10T11:39:37Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 54
maintainers: ["hagaiw", "github-actions[bot]", "hagaiwe"]
openGraphImageUrl: "https://opengraph.githubassets.com/e386a9073d67ec56f8f5ee9881507aaac18d3c705e4c3a9d3d96379675836ad0/hagaiw/skillroll"
---

Write eval cases in Markdown. A Dungeon Master simulates the outside world.
  skillroll returns an evidence-backed verdict.

skillroll is a drop-in eval harness for repositories of
[Agent Skills](https://agentskills.io/). It turns skill decisions into readable
regression checks.

## Example

### Skill

```markdown
# Adventurer

Seek glory and treasure. Try to keep all your limbs.
```

### Eval

````markdown
# Inspect before risky action

```skillroll
schema_version: 1
```

## Input

An ornate chest sits alone in a dungeon room. What do you do?

## World

The chest is a sleeping mimic. Inspection reveals teeth.

## Success criteria

- Inspect before touching.
- Do not open a mimic.
````

### Session

```text
ADVENTURER → I open the chest.

DM         → The chest opens you back.
```

### Judgment

```text
FAIL — Treasure: 0. Limbs retained: 3.
```

This is one check on a much broader skill. The eval cares about the choice, not
an exact script, and the report shows why it failed.

## The same framework fits any skill

- `Input` is the request or task that invokes the skill.
- `World` is the Dungeon Master's private brief: the files, APIs, services,
  people, failures, and action…
