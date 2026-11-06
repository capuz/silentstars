---
repo: "template-tools/template-sync"
name: "template-sync"
description: "Keep repository in sync with its template "
readmeQualityOk: true
url: "https://github.com/template-tools/template-sync"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["npm", "template", "scaffolding", "github", "pull-requests", "boilerplate", "travis", "npmignore", "gitignore", "bitbucket"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 217
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2016-09-27T22:41:47Z"
lastCommitAt: "2026-11-06T12:18:29Z"
lastReleaseAt: "2016-12-18T19:14:32Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 70
maintainers: ["arlac77", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc9a56a37746da7f36a56e1b6e22b39352ccd860df9dcd9ace58008768b78a78/template-tools/template-sync"
---

## template-sync

Keep repository in sync with its template.

Generates pull requests to bring a repository back in sync with its template.

So by making changes to the template and applying template-sync the target project will be updated accoring to the template.

Works with github and bitbucket.

This is the engine for cli operation please see [template-tools/template-sync-cli](https://github.com/template-tools/template-sync-cli)

Merges contents from template branch into destination branch handling some special cases for:

*   Licenses - rewriting license years
*   line set files like .npmignore and .gitignore - by merging both sets together
*   package.json - merge (.\*)\[Dd]ependencies, engines and scripts
*   rollup.conf.\*js - copy / rewrite + detect dev dependencies
*   [\*.yaml - merge](https://github.com/template-tools/template-sync/blob/HEAD/doc/yaml/README.md)
*   [.travis.yml - merge with hints](https://github.com/template-tools/template-sync/blob/HEAD/doc/travis/README.md)
*   [\*.toml - merge](https://github.com/template-tools/template-sync/blob/HEAD/doc/toml/README.md)
*   [\*.ini -…
