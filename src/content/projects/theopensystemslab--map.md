---
repo: "theopensystemslab/map"
name: "map"
description: "Web components for tasks related to addresses and planning permission in the UK"
readmeQualityOk: true
url: "https://github.com/theopensystemslab/map"
homepage: "https://oslmap.netlify.app"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
stars: 17
forks: 1
openIssues: 9
closedIssues: 26
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2021-07-14T09:55:40Z"
lastCommitAt: "2026-10-01T10:23:56Z"
lastReleaseAt: "2021-11-19T16:29:21Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 53
maintainers: ["dependabot[bot]", "DafyddLlyr", "ianjon3s"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a2a6aa33ae9a5b4f1e99add3cd579c882c6ca462eb64333cb6cb2655fa37c4e/theopensystemslab/map"
discussionCount: 1
---

# Place components

A library of [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) for tasks related to addresses and planning permission in the UK built with [Lit](https://lit.dev/), [Vite](https://vitejs.dev/), and [Ordnance Survey APIs](https://docs.os.uk/os-apis).

**_Web map_**

`<my-map />` is an [OpenLayers](https://openlayers.org/)-powered map to support drawing and modifying red-line boundaries. Other supported modes include: highlighting an OS Feature that intersects with a given address point; clicking to select and merge multiple OS Features into a single boundary; and displaying static point or polygon data. Events are dispatched with the calculated area and geojson representation when you change your drawing.

**_Postcode search_**

`<postcode-search />` is a [GOV.UK-styled](https://frontend.design-system.service.gov.uk/) input that validates UK postcodes using these [utility methods](https://www.npmjs.com/package/postcode). When a postcode is validated, an event is dispatched containing the sanitized string.

**_Address autocomplete_**

`<address-autocomplete />` fetches addresses in a given UK postcode using the [OS Places…
