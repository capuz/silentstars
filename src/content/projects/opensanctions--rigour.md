---
repo: "opensanctions/rigour"
name: "rigour"
description: "Data cleaning and validation functions for names, languages, identifiers, etc."
readmeQualityOk: true
url: "https://github.com/opensanctions/rigour"
homepage: "http://rigour.followthemoney.tech/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [67, 32]
stars: 70
forks: 18
openIssues: 12
closedIssues: 46
watchers: 5
contributors: 14
recentReleases: 5
createdAt: "2023-11-16T13:30:10Z"
lastCommitAt: "2026-10-21T17:31:13Z"
lastReleaseAt: "2026-09-10T14:25:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 58
maintainers: ["pudo", "dependabot[bot]", "leonhandreke"]
openGraphImageUrl: "https://opengraph.githubassets.com/1afc5bf131ca989a74be99620dfdee35f3d89f7feb2f325c65600588a2aca044/opensanctions/rigour"
---

# rigour

Data cleaning and validation functions for processing various types of text emanating and describing the business world. This applies to human and company names, language, territory
and country codes, corporate and tax identifiers, etc.

The underlying idea is that handling these sorts of descriptors is easy on first glance, but reveals a dizzying set of complexity when carried into production. This is why `rigour` consolidates implementations that have already met some edge cases and are well-tested.

## Installing `rigour`

You can grab the latest release from PyPI:

```bash
pip install -U rigour
```

## Usage & documentation 

See: https://rigour.followthemoney.tech/

## Acknowledgements

The address formatting database contained in `rigour/data/addresses/formats.yml` is derived from `worldwide.yml` in the [OpenCageData address-formatting repository](https://github.com/OpenCageData/address-formatting). It is used to format addresses according to customs in the country that is been encoded.

`rigour` consolidates and includes a set of older Python libraries into a single codebase: `languagecodes`, `pantomime`, `fingerprints`. The development of these libraries was…
