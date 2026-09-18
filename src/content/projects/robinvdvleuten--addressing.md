---
repo: "robinvdvleuten/addressing"
name: "addressing"
description: "Addressing library powered by CLDR and Google's address data"
readmeQualityOk: true
url: "https://github.com/robinvdvleuten/addressing"
homepage: "https://rubygems.org/gems/addressing"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [100]
stars: 11
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2022-02-04T14:23:04Z"
lastCommitAt: "2026-09-18T08:26:37Z"
lastReleaseAt: "2026-09-18T08:26:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 62
maintainers: ["robinvdvleuten", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9452bd2cbd9733d3a1c071336b5b65b43a2c093cb1aa09660fc8d54cae7b3b96/robinvdvleuten/addressing"
---

# Addressing

A Ruby addressing library, powered by CLDR and Google's address data.

- Countries, with translations for over 250 locales. Powered by [CLDR](http://cldr.unicode.org) v46.
- Address formats for over 200 countries.
- Subdivisions (administrative areas, localities, dependent localities) for 62 countries.
- Both latin and local subdivision names, when relevant (e.g: Okinawa / 沖縄県).
- Formatting, both in HTML and plain text.

Address formats and subdivisions were initially generated from [Google's Address Data Service](https://chromium-i18n.appspot.com/ssl-address), and are now owned and maintained by the library itself.

## Installation

Add this line to your application’s Gemfile:

```rb
gem "addressing"
```

## Getting Started

The [Address](https://github.com/robinvdvleuten/addressing/blob/HEAD/lib/addressing/address.rb) class represents a postal adddress, with attributes for the following fields:

- Country code
- Administrative area
- Locality (City)
- Dependent Locality
- Postal code
- Sorting code
- Address line 1
- Address line 2
- Address line 3
- Organization
- Given name (First name)
- Additional name (Middle name / Patronymic)
- Family name (Last name)…
