---
repo: "brioche-dev/brioche-packages"
name: "brioche-packages"
description: "Brioche packages, which get auto-published to the Brioche Registry"
url: "https://github.com/brioche-dev/brioche-packages"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["packages"]
stars: 38
forks: 11
openIssues: 19
closedIssues: 31
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2023-12-22T10:25:52Z"
lastCommitAt: "2026-07-02T06:29:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 91
undervaluedScore: 55
maintainers: ["package-update-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/109d14ba1b8cd9d498531cc2cdb180bec266c0901f175c3bccd5bb6ba1fa37bd/brioche-dev/brioche-packages"
discussionCount: 6
---

# Brioche Packages

This repo contains the sources for all published packages for [Brioche](https://brioche.dev). Every directory under `packages/` will get built and published to the registry automatically when the repo is updated.

## Repo structure

- The repo itself is a [Brioche workspace](https://brioche.dev/docs/core-concepts/workspaces), meaning packages within this repo will directly reference other packages within this repo.
    - For development, this means you can make changes to multiple packages at once and publish the changes together.
- Each directory under `packages/` gets built and published to the registry.

## Contributing new packages

To contribute a new package, check out this repo, create a new project under `packages/`, then submit it as a PR!

For example, if you were going to add a new package called "fizzbuzz", you would create the directory `packages/fizzbuzz/`, add the file `project.bri`, then write the build script. You could also test it locally by running `brioche build ./packages/fizzbuzz`.

Every published package must include a `project` export setting its name (and optionally a version number):

```ts
export const project = {
  name:…
