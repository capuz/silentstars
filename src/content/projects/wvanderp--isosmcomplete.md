---
repo: "wvanderp/isOsmComplete"
name: "isOsmComplete"
description: "This site tracks how complete OpenStreetMap really is. It compares the number of features in the OpenStreetMap to the number of features in the official data sources."
readmeQualityOk: true
url: "https://github.com/wvanderp/isOsmComplete"
homepage: "https://wvanderp.github.io/isOsmComplete/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [93]
topics: ["hacktoberfest", "opensteetmap"]
stars: 5
forks: 2
openIssues: 7
closedIssues: 8
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2022-06-02T20:52:49Z"
lastCommitAt: "2026-07-23T06:16:28Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 82
maintainers: ["github-actions[bot]", "wvanderp", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecf7d87a300b1646246da30f74566d811741fd85d7f600acf9c6ae05d04e0dee/wvanderp/isOsmComplete"
---

# isOsmComplete

How complete is OSM, really? That's the question this website sets out to answer. We compare the number of features in OpenStreetMap to the number of features in official data sources, and the results are... well, let's say we're not quite there yet.

You can find the website at <https://wvanderp.github.io/isOsmComplete/>

## How to contribute

We are always looking for new data sources to compare to OSM. Please let us know by opening an issue or a pull request if you know of any.

If you want to add a new data source, you can add a new entry in one of the files in the `collect` folder.

Be aware that any changes to the `data` folder will be overwritten by the GitHub action that runs every day. You can run the collect script locally with `npm run collect` to test your changes.

## How to run locally

Install the dependencies with `npm install`.

Run `npm run app` to start the Vite development server. This will serve the website on <http://localhost:1234>.

You can use `npm run build` to build the website for production. This will create a `gitBuild` folder with the website.

The data can be collected with `npm run collect`. This will update all the data files in…
