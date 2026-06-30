---
repo: "christopher-besch/homepage"
name: "homepage"
description: "My Personal Homepage."
url: "https://github.com/christopher-besch/homepage"
homepage: "https://chris-besch.com"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [62, 35]
stars: 6
forks: 0
openIssues: 7
closedIssues: 106
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-12-01T14:01:13Z"
lastCommitAt: "2026-06-30T06:50:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 73
maintainers: ["christopher-besch"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae2b21f62f63062d181f67fdec1142f7c09043fad70d00fe884b31b46fb22465/christopher-besch/homepage"
---

# My Homepage

- [Production Deployment](https://chris-besch.com)
- [Debug Build](https://dev.chris-besch.com)

This homepage is under Christopher Besch's copyright!
Even though it's source code is public it is not under an open-source license!
If you intend to use any of the code or content from it, you have to ask the copyright holder for permission.

Some files, however, already are Open-Source and are accompanied with an Open-Source license.
You may use those under the conditions layed out in the respective license.
The license closest to the source copyrighted material applies.

# Structure
See my [React without a Framework](https://chris-besch.com/articles/no_framework_homepage) article for an overview.
The website doesn't have any client-side (i.e., in-brower) JavaScript except for some [umami](https://umami.is) analytics.

- `articles/`: One directory per article. One markdown file in that directory.
- `build/`: Where the TypeScript compiler places the commpiled JavaScript files. This code is build-code and to be run in Node.js and not on the browser. It runs React to create the static website.
- `cache/`: Where the downloaded full-res images
- `deploy/`: The final output…
