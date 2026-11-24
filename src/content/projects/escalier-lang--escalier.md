---
repo: "escalier-lang/escalier"
name: "escalier"
description: "Next version of the Escalier compiler written in Go"
readmeQualityOk: true
url: "https://github.com/escalier-lang/escalier"
homepage: "https://escalier-lang.github.io/escalier/"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 12
forks: 2
openIssues: 816
closedIssues: 569
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-02-17T21:27:05Z"
lastCommitAt: "2026-11-24T02:00:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 87
undervaluedScore: 67
maintainers: ["k4b7"]
openGraphImageUrl: "https://opengraph.githubassets.com/a8ee4ee8a17370e7d149efe505eb4f1c02291ef9fb1ffb8a4fdf2e5218aa5ceb/escalier-lang/escalier"
---

# escalier

Next version of the Escalier compiler written in Go

## Development

To update the snapshots run the following command:
`UPDATE_SNAPS=true go test ./...`

### Changesets

The npm packages `@escalier/runtime` and `@escalier/cli` are versioned with
[changesets](https://github.com/changesets/changesets). A PR that changes
either package, or the compiler that `@escalier/cli` ships, should include
a changeset:

1. Run `pnpm changeset`.
2. Pick the packages the PR changes and the kind of version bump each needs.
3. Write a one-line summary for the changelog.
4. Commit the file it creates under `.changeset/`.

`@escalier/cli` and its `@escalier/cli-<platform>-<arch>` binary packages
always share a version, so a changeset for `@escalier/cli` bumps all of
them. `pnpm version-packages` applies the pending changesets to the
`package.json` and `CHANGELOG.md` files.
