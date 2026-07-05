---
repo: "mit-dormcon/website"
name: "website"
description: "New Dormcon website based on Docusaurus"
readmeQualityOk: true
url: "https://github.com/mit-dormcon/website"
homepage: "https://dormcon.mit.edu/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["docusaurus", "react"]
stars: 6
forks: 2
openIssues: 3
closedIssues: 7
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2021-04-03T20:28:23Z"
lastCommitAt: "2026-07-05T21:00:08Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 92
undervaluedScore: 82
maintainers: ["dtemkin1", "dependabot[bot]", "camilaepierce"]
openGraphImageUrl: "https://opengraph.githubassets.com/d624acc9d3718a201b2bc22511a7e793aafa6bab92beb7b5cb1082016ea96ce7/mit-dormcon/website"
---

# New DormCon Website

[Cameron Kleiman](https://github.com/camtheman256), DormCon Tech Chair Spring
2021

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern
static website generator based on React using [Infima](https://infima.dev) for
UI. Visit docusaurus.io for complete documentation of how the site works.

This site uses TypeScript for static checking to ensure proper formatting and
increase site reliability. Website builds will run `tsc` to manually check that
types are correct, and you can run `yarn run typecheck` to check the types
before committing your code.

## Folder structure

- `.github/workflows` - Automated build and deploy scripts the site. Pushing to
  main automatically deploys the site (and changes go live!) to GitHub Pages.
- `components` - React components for displaying dynamic data, like the list of
  officers or list of meetings
- `data` - TS files containing data such as a list of meetings, voting members,
  and officers, as well as types to enforce proper data formatting.
- `docs` - Markdown files that are automatically rendered into pages under
  `/about/<page-id>`. These pages are rendered by the Docs plugin and can have a…
