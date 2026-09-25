---
repo: "snyk/user-docs"
name: "user-docs"
description: "Gitbook documentation repo."
readmeQualityOk: true
url: "https://github.com/snyk/user-docs"
homepage: "https://docs.snyk.io/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
topics: ["docs"]
stars: 57
forks: 228
openIssues: 0
closedIssues: 0
watchers: 31
contributors: 297
recentReleases: 0
createdAt: "2021-07-06T15:48:44Z"
lastCommitAt: "2026-09-25T09:03:09Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 55
maintainers: ["VeronicaSnyk", "esabou-snyk", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/383521950/cb89fa69-d80a-4ecd-9768-1438933c389b"
---

# User Documentation

This repository is home to the [Snyk user documentation](https://docs.snyk.io) source files. 

## Contributing

### Internal contributor guidelines

If you are an internal Snyk contributor with write access to this repository, draft your content here in GitHub and then submit it to the Docs team with the `/ship-it` Slack workflow. `/ship-it` is the single intake point for all documentation and release-notification requests: it creates the Jira ticket for you and sends you a confirmation DM with tracking links.

Before you run `/ship-it`, complete these steps so the submission does not fail partway through:

- Confirm you have write access to this repository.
- Connect Atlassian to Slack, which is required for Jira ticket creation.
- Draft your content in GitHub and open a pull request. Use a branch rather than a fork, to allow GitBook previews.
- Follow the `snyk-docs-writing-rules` skill while drafting.
- Sign your commits.
- Update `SUMMARY.md` if you are adding new pages.

Then run `/ship-it` from anywhere in Slack, or from the Ship It app in your sidebar. Have your pull request URL ready and complete all the fields in one sitting, because the multi-step…
