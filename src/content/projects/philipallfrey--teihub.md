---
repo: "philipallfrey/teihub"
name: "teihub"
description: "Automated listing of repos in GitHub with XML files containing teiHeader. Find a project using TEI today!"
url: "https://github.com/philipallfrey/teihub"
homepage: "https://teihub.netlify.app"
language: "JavaScript"
languages: ["JavaScript", "Nunjucks"]
languagePcts: [73, 27]
topics: ["tei", "digital-humanities"]
stars: 17
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2020-06-07T06:42:41Z"
lastCommitAt: "2026-06-28T02:00:51Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 81
undervaluedScore: 71
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cb3c9aed87ea1ffc4689c794d3d5a587bc0811b8ffeefef120dc6f488f62c13/philipallfrey/teihub"
---

# TEIhub

## Backstory

When I first started encoding documents according to the [Text Encoding Initiative](https://tei-c.org/release/doc/tei-p5-doc/en/html/) guidelines, I had trouble finding TEI files from existing projects to use as an example of best practice.

Then I realised that (a) many projects made their TEI XML files publicly available on GitHub, (b) GitHub allows you to search the contents of all public files, and (c) all TEI files will contain the <code>&lt;teiHeader&gt;</code> tag.

So I tried [this search](https://github.com/search?l=XML&o=desc&p=1&q=teiheader&s=indexed&type=Code), but there were both too many and too few results. Too many, because GitHub returns each matching file, and if there are hundreds of files from the same repository which is not relevant, then the results are hard to browse. Too few, because GitHub records that there are approximately 1.6 million results, but only shows the first 1000.

I figured I would need to query GitHub programmatically, and put the idea aside, until a conversation on Twitter prompted me to implement it.

## Implementation
The pipeline I have set up does four main things
- At regular intervals…
