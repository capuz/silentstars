---
repo: "camunda-community-hub/camunda-7-to-8-migration-example"
name: "camunda-7-to-8-migration-example"
description: "Example to showcase migrating a solution from Camunda 7 to Camunda 8"
url: "https://github.com/camunda-community-hub/camunda-7-to-8-migration-example"
language: "Java"
languages: ["Java"]
languagePcts: [100]
stars: 7
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 7
recentReleases: 0
createdAt: "2025-07-09T08:04:30Z"
lastCommitAt: "2026-06-27T00:37:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 76
undervaluedScore: 60
maintainers: ["renovate[bot]", "venetrius"]
openGraphImageUrl: "https://opengraph.githubassets.com/ceeb763399c0ee739fdc5f936a60f2d2b51b34595c6ecb1177782ae9570264aa/camunda-community-hub/camunda-7-to-8-migration-example"
---

# Camunda 7 to 8 Migration Example

This project provides a comprehensive end-to-end migration example for migrating a Camunda 7 solution to Camunda 8. The migration follows these steps:

1. Existing Camunda 7 solution
2. [Diagram Converter](https://github.com/camunda/camunda-7-to-8-migration-tooling/tree/main/diagram-converter): Convert the BPMN model
3. [Code Conversion with Open Rewrite recipes](https://github.com/camunda/camunda-7-to-8-migration-tooling/tree/main/code-conversion/recipes)
4. AI-assisted testcase migration based on [testing patterns](https://github.com/camunda/camunda-7-to-8-migration-tooling/tree/main/code-conversion/patterns/40-test-assertions/10-assertions) (no Open Rewrite recipes yet)
5. [Data Migrator - Runtime Model](https://github.com/camunda/camunda-7-to-8-migration-tooling/tree/main/data-migrator)
6. Done

It is deliberately simple enough to demonstrate the end-to-end migration process. While we acknowledge that most real-world projects are more complex to migrate, we use this as a baseline to discuss the approach and showcase migration tooling.

The [Migration…
