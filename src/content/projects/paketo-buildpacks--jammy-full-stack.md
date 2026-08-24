---
repo: "paketo-buildpacks/jammy-full-stack"
name: "jammy-full-stack"
description: "Full stack for Ubuntu 2022.04: Jammy Jellyfish"
readmeQualityOk: true
url: "https://github.com/paketo-buildpacks/jammy-full-stack"
language: "Shell"
languages: ["Shell", "Go"]
languagePcts: [53, 43]
stars: 9
forks: 8
openIssues: 10
closedIssues: 8
watchers: 2
contributors: 13
recentReleases: 0
createdAt: "2022-05-10T20:50:03Z"
lastCommitAt: "2026-08-24T04:20:54Z"
lastReleaseAt: "2022-08-19T05:46:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 82
undervaluedScore: 49
maintainers: ["paketo-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa8a0f2a018e0ba3647eac6d183d1af009d2cd117e66a75044d98e57ad0c8c75/paketo-buildpacks/jammy-full-stack"
---

# Paketo Jammy Full Stack

## What is a stack?
See Paketo's [stacks documentation](https://paketo.io/docs/concepts/stacks/).

## What is this stack for?
Ideal for:
- PHP/Node.js/Python/Ruby/etc. apps *with* many native extensions

## What's in the build and run images of this stack?
This stack's build and run images are based on Ubuntu Jammy Jellyfish and contain many common libraries and utilities.

- To see the **list of all packages installed** in the build or run image for a given release,
see the `jammy-full-stack-{version}-build-receipt.cyclonedx.json` and
`jammy-full-stack-{version}-run-receipt.cyclonedx.json` attached to each
[release](https://github.com/paketo-buildpacks/jammy-full-stack/releases). For a quick overview
of the packages you can expect to find, see the [stack descriptor file](https://github.com/paketo-buildpacks/jammy-full-stack/blob/HEAD/stack/stack.toml).

- To generate a package receipt based on existing `build.oci` and `run.oci` archives, use [`scripts/receipts.sh`](https://github.com/paketo-buildpacks/jammy-full-stack/blob/HEAD/scripts/receipts.sh).

## How can I contribute?
Contribute changes to this stack via a Pull Request. Depending on the proposed…
