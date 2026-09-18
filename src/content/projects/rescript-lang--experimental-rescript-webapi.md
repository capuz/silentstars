---
repo: "rescript-lang/experimental-rescript-webapi"
name: "experimental-rescript-webapi"
description: "Experimental successor to rescript-webapi"
readmeQualityOk: true
url: "https://github.com/rescript-lang/experimental-rescript-webapi"
homepage: "https://rescript-lang.github.io/experimental-rescript-webapi/"
language: "ReScript"
languages: ["ReScript"]
languagePcts: [89]
stars: 40
forks: 11
openIssues: 6
closedIssues: 15
watchers: 6
contributors: 23
recentReleases: 0
createdAt: "2024-10-22T14:02:26Z"
lastCommitAt: "2026-09-18T14:02:58Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 90
undervaluedScore: 57
maintainers: ["jderochervlk", "dependabot[bot]", "tsnobip"]
openGraphImageUrl: "https://opengraph.githubassets.com/381e6621054998ae0b6ce510b90f9910b7fce37b43947c1ae4abb4bb5c1ec99c/rescript-lang/experimental-rescript-webapi"
discussionCount: 1
---

# experimental-rescript-webapi

Experimental successor to [rescript-webapi](https://github.com/TheSpyder/rescript-webapi)

## Getting started

Install the package using your favorite package manager:

```shell
npm i @rescript/webapi@alpha
```

and add `@rescript/webapi` to your `rescript.json`:

```json
{
  "dependencies": [
    "@rescript/webapi"
  ]
}
```

## Usage

```rescript
let location = WebAPI.DOM.window->WebAPI.Window.location
let href = location.href
location->WebAPI.Location.reload
```

## Documentation

More information can be found on https://rescript-lang.github.io/experimental-rescript-webapi/
