---
repo: "jotaijs/jotai-eager"
name: "jotai-eager"
description: "Jōtai utilities that help with asynchronous atoms"
readmeQualityOk: true
url: "https://github.com/jotaijs/jotai-eager"
homepage: "https://jotai.org/docs/third-party/eager"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["async", "jotai"]
stars: 34
forks: 1
openIssues: 3
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-07-02T14:44:28Z"
lastCommitAt: "2026-10-26T09:17:13Z"
lastReleaseAt: "2026-06-01T08:55:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 68
undervaluedScore: 42
maintainers: ["iwoplaza"]
openGraphImageUrl: "https://opengraph.githubassets.com/3fb541987b6343073d59d2ae10cdfeb7b47fbd566c07b00167f8165daff737f9/jotaijs/jotai-eager"
---

# 👻⏰ Jōtai Eager

> Formerly known as `jotai-derive`

- [Overview](#overview)
- [Recipes](#recipes)
  - [Avoiding request waterfalls](#avoiding-request-waterfalls)
- [Caveats](#caveats)
- [Advanced usage](#advanced-usage)
- [Motivation](#motivation)

## Overview

```sh
npm install jotai-eager
```

The **jōtai eager** library lets you build asynchronous data graphs without unnecessary
suspensions. Eager atoms are a direct replacement for vanilla atoms with a custom async read function, with a few differences:

- The read function has to be synchronous, because eager atoms handle asynchronicity transparently.
- Eager atoms have to be pure (even more so than vanilla atoms). That's because their read function can be executed multiple times on dependency change.

Let's say we have an atom that fetches names of pets from an API, and a filter atom:

```ts
const petsAtom = atom<Promise<string[]>>(...);
const filterAtom = atom('cat');
```

To create an atom of filtered pets using vanilla atoms, we would do the following:

```ts
const filteredPetsAtom = atom(async (get) => {
  const filter = get(filterAtom);
  const pets = await get(petsAtom);
  return pets.filter((name) =>…
