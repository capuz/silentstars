---
repo: "nubjs/package-extensions"
name: "package-extensions"
description: "Undeclared dependencies across the most-downloaded npm packages, as a packageExtensions database for pnpm and Yarn"
readmeQualityOk: true
url: "https://github.com/nubjs/package-extensions"
homepage: "https://dephantom.vercel.app"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["dependency-management", "nodejs", "npm", "package-manager", "phantom-dependencies", "pnpm", "yarn", "packageextensions"]
stars: 5
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-09-05T17:17:55Z"
lastCommitAt: "2026-10-23T12:05:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 73
undervaluedScore: 46
maintainers: ["github-actions[bot]", "colinhacks"]
openGraphImageUrl: "https://opengraph.githubassets.com/4280ed360a82543650d83e226f589de1625f6f6cc2ea5b5ada4558738cf6f0c0/nubjs/package-extensions"
---

# package-extensions

Undeclared dependencies across the 10,000 most-downloaded packages on npm, published as a `packageExtensions` database that pnpm and Yarn read directly.

[Documentation](https://nubjs.com/docs/install/extensions) · [npm package](https://www.npmjs.com/package/@nubjs/extensions)

A package has an undeclared dependency when its published code imports a package its own manifest never lists. Under npm's flat `node_modules` the import finds a copy something else installed. Under Yarn Plug'n'Play, or pnpm with hoisting off, there is nothing to find and the import throws.

```yaml
# .yarnrc.yml — two entries from dist/yarnrc.yml
packageExtensions:
  "@nrwl/devkit@*":
    dependencies:
      tslib: "*"                    # index.js requires it and nothing declares it
  "@formkit/auto-animate@*":
    peerDependencies:
      react: "*"                    # the consumer picked a framework; only wire it up
      vue: "*"
    peerDependenciesMeta:
      react:
        optional: true
      vue:
        optional: true
```

**759 package names.** The scan covers 9,982 of the top 10,000 and finds 627 with an undeclared dependency across 1,113 edges. The Yarn seed contributes…
