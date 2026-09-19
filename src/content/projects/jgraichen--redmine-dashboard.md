---
repo: "jgraichen/redmine_dashboard"
name: "redmine_dashboard"
description: "This redmine plugin adds an issue dashboard that supports drag and drop for issues and support various filters and groups."
readmeQualityOk: true
url: "https://github.com/jgraichen/redmine_dashboard"
language: "Ruby"
languages: ["Ruby", "JavaScript"]
languagePcts: [43, 28]
topics: ["redmine", "redmine-plugin", "ruby", "dashboard", "issue-board", "issue-tracker"]
stars: 455
forks: 108
openIssues: 40
closedIssues: 131
watchers: 52
contributors: 16
recentReleases: 0
createdAt: "2011-08-24T16:46:46Z"
lastCommitAt: "2026-09-19T02:46:03Z"
lastReleaseAt: "2021-07-17T16:35:21Z"
status: "thriving"
tags: ["legacy_hero", "community_hub"]
healthScore: 93
undervaluedScore: 35
maintainers: ["jgraichen", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/fb11c3e02e3f0112cbd48e634bd13489c73eb6ba303504fbf95bcdb54c416de0/jgraichen/redmine_dashboard"
discussionCount: 22
---

# Redmine Dashboard 2

This [Redmine](http://redmine.org) plugin adds an issue dashboard that supports drag and drop for issues and various filters.

**Redmine Dashboard 2** is compatible and tested with Redmine 7.0, 6.1, 6.0, and Ruby 4.0, 3.4, 3.3, and 3.2.

## Features List

- Drag-n-drop of issues
- Configurable columns
- Grouping & Filtering
- Group folding
- Hierarchical parent issue view
- Include subproject issues
- Quick edit of assignee and progress

Rate plugin at [redmine.org](http://www.redmine.org/plugins/redmine-dashboard).

## Questions? Stories?

Please ask your questions, or tell us your stories or experience on [GitHub Discussions](https://github.com/jgraichen/redmine_dashboard/discussions).

## Install

1. Download the [latest release](https://github.com/jgraichen/redmine_dashboard/releases).
2. Extract archive to `<redmine>/plugins`.
   Make **sure** the plugin directory is called `<redmine>/plugins/redmine_dashboard/` ([#11](https://github.com/jgraichen/redmine_dashboard/issues/11)).
3. A database migration is not needed. Restart Redmine.

### Configure Redmine

1. Add the dashboard module to your project (`Settings > Modules`).
2. Configure dashboard…
