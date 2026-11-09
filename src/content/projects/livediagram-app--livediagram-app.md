---
repo: "livediagram-app/livediagram.app"
name: "livediagram.app"
description: "liveworkspace.app mono repository containing all of its Apps"
readmeQualityOk: true
url: "https://github.com/livediagram-app/livediagram.app"
homepage: "https://www.liveworkspace.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["collaborate", "diagram", "whiteboard", "workspace"]
stars: 9
forks: 2
openIssues: 4
closedIssues: 59
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-29T07:46:57Z"
lastCommitAt: "2026-11-09T00:53:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 57
maintainers: ["tommcclean", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/897876cd44c94d02bc5297fa2abdd7b27eaf457184794fe89db4a4e087f75fd7/livediagram-app/livediagram.app"
discussionCount: 4
---

# liveworkspace

The monorepo for liveworkspace and its products, livediagram, liveplanner, livedocuments and
livedesign, plus what they share.

```
packages/        shared by every product (@liveworkspace/*)
liveworkspace/   the platform: the liveworkspace.app site, its services (accounts, index, drive, export,
                 media, community, telemetry, status), the migrate tool, and its specs (liveworkspace/docs/specs)
livediagram/     livediagram.app
liveplanner/     liveplanner.app
livedocuments/   livedocuments.app: articles, slides and infographics
livedesign/      livedesign.app: logos, wireframes and photos
livehuddle/      livehuddle.app: meetings and workshops, forked from livediagram in-tree
docs/            how this repo is laid out, CI and deploys, and the move from the historical livediagram.app
```

Read [docs/structure.md](https://github.com/livediagram-app/livediagram.app/blob/HEAD/docs/structure.md) first: it covers what's shared, what each product keeps, and
the order the sharing was done in.

Every product and the platform keeps its specs and blueprints in its own `docs/specs/`
(liveworkspace's are…
