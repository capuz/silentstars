---
repo: "jcabi/jcabi-maven-skin"
name: "jcabi-maven-skin"
description: "Good looking skin for Apache Maven projects, especially Maven plugins"
readmeQualityOk: true
url: "https://github.com/jcabi/jcabi-maven-skin"
homepage: "http://skin.jcabi.com/"
language: "SCSS"
languages: ["SCSS", "Groovy"]
languagePcts: [57, 34]
topics: ["java", "maven-skin", "maven", "static-site", "static-site-generator"]
stars: 8
forks: 13
openIssues: 3
closedIssues: 29
watchers: 3
contributors: 35
recentReleases: 0
createdAt: "2013-09-04T13:27:59Z"
lastCommitAt: "2026-08-26T04:13:57Z"
lastReleaseAt: "2021-09-04T06:18:48Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 94
undervaluedScore: 88
maintainers: ["renovate[bot]", "yegor256", "rultor"]
openGraphImageUrl: "https://opengraph.githubassets.com/510841667051185589049d865c58a82ddd1110348131e6c439344c7d4194c676/jcabi/jcabi-maven-skin"
---

# Good Looking Maven Skin

More details are here: [skin.jcabi.com](http://skin.jcabi.com/index.html).

Use it in your [site.xml], as explained in [skinning]:

```xml
<site>
  [...]
  <skin>
    <groupId>com.jcabi</groupId>
    <artifactId>jcabi-maven-skin</artifactId>
    <version>2.0.2</version>
  </skin>
  [...]
</site>
```

## How to contribute?

Fork the repository, make changes, submit a pull request.
We promise to review your changes same day and apply to
the `master` branch, if they look correct.

Please run Maven build before submitting a pull request:

```bash
mvn clean install -Pqulice
```

Make sure you have Maven 3.2+, Java7+ and
[fontcustom](http://fontcustom.com/) gem installed.

[skinning]: http://maven.apache.org/plugins/maven-site-plugin/examples/sitedescriptor.html#Skinning
[site.xml]: https://maven.apache.org/doxia/doxia-sitetools/doxia-site-model/site.html
