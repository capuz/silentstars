---
repo: "sasdallas/Ion"
name: "Ion"
description: "Hobby operating system"
readmeQualityOk: true
url: "https://github.com/sasdallas/Ion"
language: "C"
languages: ["C"]
languagePcts: [95]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-11T14:44:07Z"
lastCommitAt: "2026-11-27T16:29:31Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 36
maintainers: ["sasdallas"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d0a7bdfc1deb9fe502741881de629ed66326b85735d2ae60a8a414ee111fc7c/sasdallas/Ion"
---

# Ion

Ion is a prototype NT-styled kernel.

## Code Style

Ion is my first attempt at trying out newer coding styles, so you may encounter comments
that don't quite fit the rest of the build. As the system becomes more complete, these comments
will gradually filter into a more unified design.

## AI policy

AI can be used for debugging and minor bugfixes, but no code generation.

## Structuring

- `ionkrnl/` contains the core kernel of Ion
- `hal/` contains the HALs of Ion
- `include/` contains the Ion SDK
- `rtl/` contains the run-time library of Ion
- `third_party/` contains misc. vendor-deps

## Kernel structuring notice

Some of the kernel in Ion is not structured the same way as in NT, such as how Ion's
scheduler is located in `Ps` rather than `Ke`. This was an oversight in earlier development,
but will stick around for the forseseable future.

Otherwise, Ion follows a mostly NT-like pattern, with `Ex` containing the executive exposed to userspace (and other parts of the kernel).

## Sources

Windows NT for most of the overall kernel design.

FreeBSD for the ULE scheduler design.
