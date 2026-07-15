---
repo: "AppDevNext/ChangeLog"
name: "ChangeLog"
description: "ChangeLog - An Android Library to display a Change Log "
readmeQualityOk: true
url: "https://github.com/AppDevNext/ChangeLog"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [96]
topics: ["hacktoberfest"]
stars: 16
forks: 3
openIssues: 1
closedIssues: 4
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2018-01-01T13:06:40Z"
lastCommitAt: "2026-07-15T05:54:55Z"
lastReleaseAt: "2026-01-25T09:08:16Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 48
maintainers: ["hannesa2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/cfa344a5dae95ad3b3e945814fedf12be2b2806fce54733e0a5f89e13bdca03c/AppDevNext/ChangeLog"
---

# An Android Library to display a Change Log grouped by version(/tags)

This library provides an easy way to display a change log in your app.
Without take care to VersionCode is necessary when you auto generate the VersionCode

## A: Usage of a XML

1. Create the master change log in `res/xml/changelog_master.xml`. Formatted like this:

  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <changelog>
      <release version="1.1" versioncode="11" >
          <change>Totally new and shiny version</change>
      </release>
      <release version="1.0" versioncode="10" >
          <change>Fixed: A bug fix</change>
          <change>Some other changes I can't quite remember</change>
      </release>
      <release version="0.1" versioncode="1">
          <change>First release</change>
      </release>
  </changelog>
  ```

2. Create translations of this `changelog_master.xml` file in files named `changelog.xml` under
language-specific versions of `res/xml/`, e.g. `res/xml-de/changelog.xml`.

## B: Usage git changelog
To generate a git changelog, grouped by tag you can run `getTagGroupedGitlog` from git submodule `buildSrc/src/main/kotlin/info/git/versionHelper` 
This will automatic…
