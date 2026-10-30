---
repo: "sports-alliance/sports-lib"
name: "sports-lib"
description: "Enable Timeline notes access to include your notes in the recommendation."
readmeQualityOk: true
url: "https://github.com/sports-alliance/sports-lib"
homepage: "https://sports-alliance.github.io/sports-lib/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["tcx", "gpx", "garmin", "strava", "fit", "activity-tracking", "fitness", "javascript", "quantified-self", "routes"]
stars: 178
forks: 24
openIssues: 10
closedIssues: 49
watchers: 8
contributors: 9
recentReleases: 9
createdAt: "2018-05-07T17:52:19Z"
lastCommitAt: "2026-10-30T10:23:03Z"
lastReleaseAt: "2026-08-30T10:19:24Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "release_machine"]
healthScore: 95
undervaluedScore: 48
maintainers: ["jimmykane"]
openGraphImageUrl: "https://opengraph.githubassets.com/a12548e394b1130d130801c8d90f136c0bb738a1b4d643ffa74adf74517c0c70/sports-alliance/sports-lib"
---

# Sports Lib

Sports Lib normalizes GPX, TCX, FIT, and service-specific JSON into shared activity and route models.
It also exposes provider-neutral Health and sleep scalar data classes with canonical units, display formatting, aliases,
and JSON round-trip behavior.

**Regression-tested against 195,562 real-world source files.** Coverage includes activity and route imports
and file-type validation. This work has driven
compatibility fixes for vendor quirks, incomplete recordings and malformed data. Importers use evidence in the file
to recover valid observations while preserving zeros, pauses and sport boundaries. See our
[validation guide](https://sports-alliance.github.io/sports-lib/documents/Validation_and_compatibility.html)
for supported recovery examples, activity and route coverage, methodology and known limitations.

Power calculations distinguish missing readings from recorded zero watts and expose observed coverage alongside
partial work. Device summaries retain priority. See [power coverage and migration](https://github.com/sports-alliance/sports-lib/blob/HEAD/docs/guides/exporting.md#missing-power).

## Documentation

The hosted documentation contains the supported API…
