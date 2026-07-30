---
repo: "zth/resgraph"
name: "resgraph"
description: "Build implementation-first GraphQL servers in ReScript"
readmeQualityOk: true
url: "https://github.com/zth/resgraph"
language: "OCaml"
languages: ["OCaml", "ReScript"]
languagePcts: [70, 21]
stars: 62
forks: 3
openIssues: 4
closedIssues: 15
watchers: 1
contributors: 2
recentReleases: 2
createdAt: "2023-04-04T10:51:32Z"
lastCommitAt: "2026-07-30T06:07:08Z"
lastReleaseAt: "2026-05-25T15:42:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 36
maintainers: ["zth"]
openGraphImageUrl: "https://opengraph.githubassets.com/ba86690113d2b23b3e30a2983313a011e126717da3e2b00208fa6dbb3a394e64/zth/resgraph"
---

# ResGraph

Build implementation-first GraphQL servers in ReScript, with first class Relay integration.

- [Check out the docs on getting started](https://zth.github.io/resgraph/docs/getting-started).
- [Use this template to get started quickly](https://github.com/zth/resgraph-template).
- [Install the dedicated VSCode extension](https://marketplace.visualstudio.com/items?itemName=GabrielNordeborn.vscode-resgraph)

## What it looks like

This ReScript code:

```rescript
@gql.type
type query

/** A timestamp. */
@gql.scalar
type timestamp = float

/** A thing with a name. */
@gql.interface
type hasName = {@gql.field name: string}

@gql.type
type user = {
  ...hasName,
  @gql.field /** When this user was created. */ createdAt: timestamp,
  @gql.field @deprecated("Use 'name' instead") fullName: string,
}

/** Format for text. */
@gql.enum
type textFormat = Uppercase | Lowercase | Capitalized

/** The user's initials, e.g 'Alice Smith' becomes 'AS'. */
@gql.field
let initials = (user: user, ~format=Uppercase) => {
  let initials = getInitials(user.name)

  switch format {
  | Uppercase | Capitalized => initials->String.toUpperCase
  | Lowercase => initials->String.toLowerCase
  }
}…
