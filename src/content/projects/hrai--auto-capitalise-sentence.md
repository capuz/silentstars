---
repo: "hrai/auto-capitalise-sentence"
name: "auto-capitalise-sentence"
description: "Firefox/Google Chrome/Microsoft Edge (chromium) add-on to automatically capitalise the first letter of a sentence while typing."
readmeQualityOk: true
url: "https://github.com/hrai/auto-capitalise-sentence"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [92]
topics: ["mozilla-firefox", "mozilla-firefox-addon", "javascript", "case-converter", "microsoft-edge", "microsoft-edge-extension", "chromium-extension", "chromium", "add-on", "browser-extension"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 57
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2019-06-28T23:35:19Z"
lastCommitAt: "2026-09-07T08:35:00Z"
lastReleaseAt: "2020-11-23T10:34:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 96
undervaluedScore: 83
maintainers: ["dependabot[bot]", "hrai", "hangjit-domain"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf24e066b57b7b1e11a673f0dc65c1812e88558b8b439a09b84d56c653431a0f/hrai/auto-capitalise-sentence"
fundingLinks: ["GITHUB:https://github.com/hrai"]
---

# What is this extension?

Firefox/Microsoft Edge Chromium add-on to automatically capitalise words while typing.

## Features

- Capitalise the first letter of a sentence.
- Capitalise the word `I`.
- Capitalise common [names](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/name-constants.js#L1)
- Capitalise common [locations/places](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/location-constants.js#L1)
- Capitalise common [abbreviations/acronyms](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/acronym-constants.js#L1)
- Capitalise constants such as [days](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/constants.js#L6), [months](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/constants.js#L16)
- Add apostrophe to common [English words](https://github.com/hrai/auto-capitalise-sentence/blob/HEAD/src/constants.js#L27)
- Capitalise custom words
- Optional Sentence Case mode (preserve internal word casing while capitalising sentence starts and standalone "I")
- Per-field debounced processing to reduce performance impact (configurable delay)

### Processing Modes

**Word Case Mode (Default):**
- Immediate…
