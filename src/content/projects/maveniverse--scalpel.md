---
repo: "maveniverse/scalpel"
name: "scalpel"
description: "Maven extension that detects which modules in a multi-module reactor are affected by a git changeset. Analyzes POM changes semantically — tracking property indirection, managed dependencies, plugins, and resource filtering — to avoid unnecessary rebuilds."
readmeQualityOk: true
url: "https://github.com/maveniverse/scalpel"
language: "Java"
languages: ["Java"]
languagePcts: [91]
topics: ["build-optimization", "change-detection", "ci-cd", "git", "incremental-build", "java", "jgit", "maven", "maven-extension", "maven-plugin"]
stars: 17
forks: 4
openIssues: 27
closedIssues: 37
watchers: 1
contributors: 9
recentReleases: 4
createdAt: "2026-03-26T13:08:45Z"
lastCommitAt: "2026-08-28T12:23:50Z"
lastReleaseAt: "2026-06-26T11:46:25Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 49
maintainers: ["gnodet", "paoloantinori", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/021a2eee564b225d70b7f463fc0c09d2c433e759bcef50621328aa97d35862a5/maveniverse/scalpel"
---

# Maveniverse Scalpel

Requirements:
* Java: 8+
* Maven: 3.9.x+

Scalpel is a Maven core extension that detects which modules in a multi-module reactor are affected by
a git changeset. It can trim the reactor to only build affected modules, skip tests on unaffected modules,
or produce a JSON report of affected modules for consumption by CI scripts.

If Scalpel's behaviour surprises you (it built everything, or it skipped a module you expected
to be built), see the [Troubleshooting Guide](https://github.com/maveniverse/scalpel/blob/HEAD/docs/troubleshooting.md).

## How It Works

Scalpel hooks into Maven's lifecycle via `AbstractMavenLifecycleParticipant.afterProjectsRead()` and performs
the following steps:

1. **Check disable conditions** — skip if disabled by property, branch match, or `-pl` selection.
2. **Fetch base branch** (if configured) — in CI with shallow clones, fetch the base branch ref.
3. **Find the merge base** between the current HEAD and the configured base branch using JGit.
4. **Detect changed files** by diffing the merge base against HEAD, optionally including
   uncommitted and untracked files.
5. **Apply path filters** — check disable triggers, exclude paths,…
