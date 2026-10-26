---
repo: "AriPerkkio/extend-to-be-announced"
name: "extend-to-be-announced"
description: "Custom Jest/Vitest matcher for validating ARIA Live Regions"
readmeQualityOk: true
url: "https://github.com/AriPerkkio/extend-to-be-announced"
homepage: "https://www.npmjs.com/package/extend-to-be-announced"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["a11y", "accessibility", "aria-live", "jest", "vitest"]
stars: 18
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-02-17T17:41:15Z"
lastCommitAt: "2026-10-26T09:17:13Z"
lastReleaseAt: "2024-05-12T13:14:28Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 75
undervaluedScore: 36
maintainers: ["renovate[bot]", "AriPerkkio"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fb541987b6343073d59d2ae10cdfeb7b47fbd566c07b00167f8165daff737f9/AriPerkkio/extend-to-be-announced"
---

# extend-to-be-announced

[Motivation](#Motivation) | [Installation](#installation) | [Usage](#usage) | [Support](#support)

> Utility for asserting [ARIA live regions](https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region).

`extend-to-be-announced` is a matcher extender for [Jest](https://jestjs.io/) and [Vitest](https://vitest.dev/). It makes validating ARIA live regions extremely easy. Internally it is utilizing [`aria-live-capture`](https://github.com/AriPerkkio/aria-live-capture) for announcement detection.

For Storybook integration see [`storybook-addon-aria-live`](https://github.com/AriPerkkio/storybook-addon-aria-live).

```js
test("live region is announced", () => {
  const region = document.createElement("div");
  region.setAttribute("role", "status");

  document.body.appendChild(region);
  region.textContent = "Loading";

  expect("Loading").toBeAnnounced("polite");
});
```

## Motivation

Validating ARIA live regions with [`@testing-library`](https://testing-library.com/) and [`jest-dom`](https://github.com/testing-library/jest-dom) requires developers to consider implementation details.
Current solutions are prone to false positives.

In test below it is not clearly…
