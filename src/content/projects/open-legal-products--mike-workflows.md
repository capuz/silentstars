---
repo: "open-legal-products/mike-workflows"
name: "mike-workflows"
description: "OSS legal workflows in the form of portable SKILL.md files"
readmeQualityOk: true
url: "https://github.com/open-legal-products/mike-workflows"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 61
forks: 27
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-07-07T18:20:12Z"
lastCommitAt: "2026-10-11T10:14:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 29
maintainers: ["willchen96", "mazurwieslaw2022-cmd", "czocher2-boop"]
openGraphImageUrl: "https://opengraph.githubassets.com/f130821ae75f98c7ebd9e86038bdd39d3dfcff184cce784a8c36fccf67d5179b/open-legal-products/mike-workflows"
---

# Mike Legal Workflows

Public workflow definitions for Mike. We are open sourcing the workflows
available in Mike so that people can contribute improvements and use them with
the agent harness of their choice. The workflows follow the
[`SKILL.md` Agent Skills specification](https://agentskills.io/specification)
used by popular agent harnesses, making them straightforward to adapt and reuse.

The repository has two top-level workflow collections:

- `assistant-workflows/` contains assistant workflows.
- `tabular-review-workflows/` contains tabular review workflows.

System and add-on workflows use the same simple folder structure. Their
availability is declared in `SKILL.md` rather than encoded through
additional directory nesting.

## Structure

```text
mike-legal-workflows/
  assistant-workflows/
    <workflow-id>/
      SKILL.md
    <pack-id>-pack/
      pack.yaml
      <workflow-id>/
        SKILL.md

  tabular-review-workflows/
    <workflow-id>/
      SKILL.md
      table-columns.yaml
    <pack-id>-pack/
      pack.yaml
      <workflow-id>/
        SKILL.md
        table-columns.yaml

  workflow-schema/
    workflow-metadata.schema.yaml
    table-columns.schema.yaml…
