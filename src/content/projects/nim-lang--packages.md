---
repo: "nim-lang/packages"
name: "packages"
description: "List of packages for Nimble"
readmeQualityOk: true
url: "https://github.com/nim-lang/packages"
language: "Nim"
languages: ["Nim"]
languagePcts: [89]
topics: ["packages", "nim", "nimble"]
stars: 496
forks: 769
openIssues: 10
closedIssues: 30
watchers: 34
contributors: 827
recentReleases: 0
createdAt: "2012-12-01T22:33:30Z"
lastCommitAt: "2026-07-08T05:42:54Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 40
maintainers: ["georgelemon", "capocasa", "elcritch"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff16760b17f955a9063faf8f72624172f6af9c9e34c49569523df04ae42fd644/nim-lang/packages"
---

# Nim packages

This is a central listing of all packages for
[Nimble](https://github.com/nim-lang/nimble), a package manager for the
[Nim programming language](http://nim-lang.org).

An overview of all packages is available at https://nimble.directory or https://nimpkgs.org.

NOTE: The packages listed here are not peer-reviewed or otherwise screened. We try to keep the list up-to-date but we cannot guarantee quality or maturity of the packages.

## Adding your own package
To add your own package, fork this repository, edit
[packages.json](https://github.com/nim-lang/packages/blob/HEAD/packages.json) and make a pull request.

[Packages.json](https://github.com/nim-lang/packages/blob/HEAD/packages.json) is a simple array of objects. Each package
object should have the following fields (unless the field is marked as
optional):

  * name   - The name of the package, this should match the name in the package's
             nimble file.
  * url    - The url from which to retrieve the package.
  * method - The method that should be used to retrieve this package. Currently
             "git" and "hg" is supported.
  * tags   - A list of tags describing this package.
  * description - A…
