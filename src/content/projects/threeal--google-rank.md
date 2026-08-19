---
repo: "threeal/google-rank"
name: "google-rank"
description: "Retrieve the Google search ranking of your website for specific keywords"
readmeQualityOk: true
url: "https://github.com/threeal/google-rank"
homepage: "https://www.npmjs.com/package/google-rank"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["cli", "google", "google-search", "search-ranking", "seo", "seotools", "tools"]
stars: 29
forks: 2
openIssues: 7
closedIssues: 80
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-07-11T15:15:43Z"
lastCommitAt: "2026-08-19T04:06:51Z"
lastReleaseAt: "2023-11-10T08:30:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 60
maintainers: ["dependabot[bot]", "threeal"]
openGraphImageUrl: "https://opengraph.githubassets.com/043da802c873e9417611511d0db72ccbb2826a2ff0e10f81f6b33731f27b70dc/threeal/google-rank"
discussionCount: 1
---

# Google Rank

Google Rank is a tool designed to provide valuable insights into website visibility on [Google](https://www.google.com/) search results. By tracking and monitoring your website's ranking for specific keywords, you can optimize your online presence and effectively reach a wider audience.

Whether you're an SEO specialist, a digital marketer, or a website owner, Google Rank empowers you to enhance your website's performance in search engine rankings. With this tool, you can stay informed about your website's visibility, make data-driven decisions, and improve your overall online presence.

## Installation

To install the `google-rank` tool globally, run the following command:

```
$ npm install --global google-rank
```

## Usage

To retrieve the rank of a website for a specific keyword, run the `google-rank` tool followed by the website URL and the search keyword:

```
$ google-rank wikipedia.org --keywords krakatoa

Ranks for wikipedia.org website:
page 1  rank 1  krakatoa
```

Multiple keywords can also be specified:

```
$ google-rank wikipedia.org --keywords krakatoa facebook 'social media'

Ranks for wikipedia.org website:
page 1  rank 1  krakatoa
page 2  rank 2…
