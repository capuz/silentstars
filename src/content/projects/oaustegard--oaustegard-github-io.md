---
repo: "oaustegard/oaustegard.github.io"
name: "oaustegard.github.io"
description: "Purely client-side/static hosted personal site with growing collection of tools and experiments"
readmeQualityOk: true
url: "https://github.com/oaustegard/oaustegard.github.io"
homepage: "https://austegard.com/"
language: "HTML"
languages: ["HTML"]
languagePcts: [86]
stars: 5
forks: 0
openIssues: 3
closedIssues: 18
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-08-17T22:25:10Z"
lastCommitAt: "2026-11-03T19:05:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 81
maintainers: ["oaustegard", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4933d23081b54444a24b159f5439e0d76b0158ce0a38a0eff07137ca999e62bd/oaustegard/oaustegard.github.io"
discussionCount: 0
---

# oaustegard.github.io
### The source code for austegard.com

A personal site laid out like a survey sheet. The home page is a map of Flatøy, the island in Vestland, Norway where the family place Austegarden is, drawn from Kartverket open data. On it: more than 80 small tools, most of them running in the browser, a blog, and links to elsewhere. Plain HTML, CSS and a little JavaScript on GitHub Pages. No framework, no bundler, no server-side code, and no third-party requests on the home page.

The design system is documented, with live examples, at [/style-guide.html](https://github.com/oaustegard/oaustegard.github.io/blob/HEAD/style-guide.html).

## Structure

```
index.html            home page (data-sheet="full"); district cards, tool total and latest posts are generated
tools.html            tools hub with place-name search (?q=); generated
404.html              not-found page; Jekyll front matter that deploy.yml strips; /bsky/<id> redirect and sitemap lookup
style-guide.html      tokens, type, components and map rules, rendered from styles/style.css
feed.xml              Atom feed; generated

biking/ ai-tools/ web-utilities/ deepzoom/ fun-and-games/ bsky/ etc/ found/…
