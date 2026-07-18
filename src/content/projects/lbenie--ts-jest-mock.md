---
repo: "lbenie/ts-jest-mock"
name: "ts-jest-mock"
description: "A type definition and helper for jest mocks in TypeScript"
readmeQualityOk: true
url: "https://github.com/lbenie/ts-jest-mock"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [56, 44]
topics: ["typescript", "jest", "testing"]
stars: 13
forks: 2
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2021-03-18T16:36:27Z"
lastCommitAt: "2026-07-18T05:47:16Z"
lastReleaseAt: "2021-12-24T12:10:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 92
undervaluedScore: 59
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/53d73eee03179fafb3c26cba6302608d3f4d6c940b12c25a1507a6174e1dddfb/lbenie/ts-jest-mock"
fundingLinks: ["GITHUB:https://github.com/lbenie"]
---

# ts-jest-mock

A way to get jest type definition infered automagically.

## Pre-requisites

This library takes for granted that you have your tests setup with `jest`.

## Usage

Directly in a test

```ts
import { createMock } from 'ts-jest-mock'
import { someFn } from 'module_a'

jest.mock('module_a')

describe('something', () => {
  it('some test', () => {
    const someFnMock = createMock(someFn)

    someFnMock.mockReturnValue('') <-- Type inference yay :)
  })
})
```

Or with a beforeEach pattern

```ts
import { createMock } from 'ts-jest-mock'
import { someFn } from 'module_a'

jest.mock('module_a')

const someFnMock = createMock(someFn)

describe('something', () => {
  beforeEach(() => {
    someFnMock.mockReturnValue('') <-- Type inference yay :)
  })

  it('some test', () => {
    expect(someFnMock).toBe('')
  })
})
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://lbenie.xyz/"><img src="https://avatars.githubusercontent.com/u/7316046?v=4?s=100" width="100px;" alt="Lucien Bénié"/><br /><sub><b>Lucien…
