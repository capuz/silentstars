---
repo: "Xon/XenForo2-StandardLib"
name: "XenForo2-StandardLib"
description: "A number of helper utilities designed to ease add-on development"
url: "https://github.com/Xon/XenForo2-StandardLib"
language: "PHP"
languages: ["PHP", "JavaScript"]
languagePcts: [70, 21]
stars: 7
forks: 4
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2020-07-23T23:33:25Z"
lastCommitAt: "2026-06-29T07:18:48Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 94
undervaluedScore: 66
maintainers: ["Xon", "aakifn"]
openGraphImageUrl: "https://opengraph.githubassets.com/11b328863ad84b4445610354e3fb785cf9365fab82d55ba850745db4b3b1d823/Xon/XenForo2-StandardLib"
---

# XenForo2-StandardLib

A number of helper utilities designed to ease add-on development

During use, Add the `requires` section to `addon.json` to document the dependency

```json
{
    "require": {
        "SV/StandardLib": [2001230000,"Standard Library by Xon v1.23.0+"],
        "XF": ["2.2.0", "XenForo 2.2.0+"],
        "php": ["7.2.0", "PHP 7.2.0+"]
    }
}
```
Note; `SV/StandardLib` should use a `version_id` and not a `version_string` to support sites which do not have the add-on installed yet.

## Improve add-on requirement version checks

Instead of matching on version_id, the `addon.json`'s `require` section can match on addon version strings.
Uses [version_compare](https://www.php.net/manual/en/function.version-compare.php) under the hood after some very [i]basic[/i] standardization.

php version strings support dotted versions, '1.2.3' and also each part may also support special character strings:
> any string not found in this list < dev < alpha = a < beta = b < RC | Release Candidate = rc < # < patch level | pl = p.

## Finder extension traits

### RlikeOperatorTrait
`RLIKE` operator support.

### EarlyJoinFinderTrait
MySQL implements 'early row lookup' which results…
