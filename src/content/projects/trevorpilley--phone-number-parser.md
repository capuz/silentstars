---
repo: "TrevorPilley/phone-number-parser"
name: "phone-number-parser"
description: "A .NET library for parsing phone numbers, providing validity of phone numbers including national destination codes (aka area codes) and subscriber numbers (aka line numbers) based upon published numbering plans for each country."
url: "https://github.com/TrevorPilley/phone-number-parser"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["parsing-phone-numbers", "phone-number", "phonenumbers", "phonenumber", "phone-number-parser", "e123", "e164", "e164-format", "rfc3966"]
stars: 37
forks: 1
openIssues: 13
closedIssues: 185
watchers: 3
contributors: 1
recentReleases: 0
createdAt: "2020-12-20T10:49:03Z"
lastCommitAt: "2026-06-29T07:22:16Z"
lastReleaseAt: "2021-02-05T11:37:58Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "under_pressure"]
healthScore: 96
undervaluedScore: 53
maintainers: ["dependabot[bot]", "TrevorPilley"]
openGraphImageUrl: "https://opengraph.githubassets.com/6a6e205f8889f257259ec3a17174c3d261fade195ac1873d527936bb01abe539/TrevorPilley/phone-number-parser"
---

# Phone Number Parser

  [](https://codecov.io/gh/TrevorPilley/phone-number-parser)

A library for parsing phone numbers, providing validity of phone numbers including national destination codes (aka area codes) and subscriber numbers (aka line numbers) based upon published numbering plans for each country. Additional attributes such as the kind of phone number (Mobile, Geographic or Non-Geographic) are also included, and all parsing is performed locally within the library using embedded in-memory data files.

## Limitations

The library **does not**:

- Yet support all countries (additional countries are added incrementally through future releases).
- Provide certainty that a phone number is assigned and in use.
- Include the original carrier for mobile phone numbers due to number portability in most countries.
- Support extension numbers, although they are ignored if specified when parsing a value in RFC3966 format `tel:+44-114-272-644;ext=1234` or the older German style `0234/123456-10` format.
- Support alphabetic mnemonic system/alphabetic phone-words (e.g. 123-PHONEME).

## Install

Install via nuget:

```bash
dotnet add package PhoneNumberParser
```

Add the namespace:…
