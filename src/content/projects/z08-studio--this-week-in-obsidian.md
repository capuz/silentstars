---
repo: "z08-studio/this-week-in-obsidian"
name: "this-week-in-obsidian"
description: "Weekly obsidian newsletter every Tuesday"
readmeQualityOk: true
url: "https://github.com/z08-studio/this-week-in-obsidian"
homepage: "https://thisweekinobsidian.substack.com"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [58, 42]
topics: ["newsletter", "obsidian", "obsidian-community", "obsidian-md", "obsidian-plugin", "obsidian-plugins"]
stars: 15
forks: 1
openIssues: 3
closedIssues: 19
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-12-15T12:36:47Z"
lastCommitAt: "2026-10-27T09:16:55Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 84
undervaluedScore: 40
maintainers: ["boundless-forest"]
openGraphImageUrl: "https://opengraph.githubassets.com/28562d81d93a7f403d0053ac5f3cfd2381eee22d60f8eca94b274f76f869d717/z08-studio/this-week-in-obsidian"
---

# This Week in Obsidian

**This Week in Obsidian** is a weekly newsletter published every Tuesday, dedicated to tracking the progress and community around [Obsidian](https://obsidian.md/).

It covers official announcements, plugins, tools, community discussions, workflows, and other resources that may be useful to Obsidian users.

[Subscribe on Substack](https://thisweekinobsidian.substack.com) to receive the latest issue in your inbox.

## Drafts and archives

Create a draft with its intended Tuesday publication date. The script fills in the next issue number and rejects dates that already have a draft or archive:

```sh
bash scripts/newsletter.sh new 2026-10-20
```

Running `bash scripts/newsletter.sh new` without a date creates a draft for the next Tuesday, including when run on a Tuesday.

After publishing, archive the matching draft with `bash scripts/newsletter.sh archive <filename>`. The date in the filename should match the actual publication date on Substack.

## Suggest content

Have something useful to share with Obsidian users?

[Submit an issue](https://github.com/boundless-forest/this-week-in-obsidian/issues/new?template=content-suggestion.yml) to suggest a plugin,…
