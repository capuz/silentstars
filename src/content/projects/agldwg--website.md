---
repo: "AGLDWG/website"
name: "website"
description: "The AGLDWG website"
readmeQualityOk: true
url: "https://github.com/AGLDWG/website"
language: "CSS"
languages: ["CSS", "HTML"]
languagePcts: [45, 32]
stars: 8
forks: 4
openIssues: 3
closedIssues: 0
watchers: 10
contributors: 8
recentReleases: 0
createdAt: "2017-02-02T08:07:41Z"
lastCommitAt: "2026-07-29T06:14:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "community_watch"]
healthScore: 67
undervaluedScore: 34
maintainers: ["nicholascar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/bf233eacf0892bb922d90c58855898bd38fd48c26069c98cf333a141532cea5d/AGLDWG/website"
---

# AGLDWG website
This codebase contains the content of the website of the Australian Government Linked Data Working Group (AGLDWG) which is hosted online at <http://www.linked.data.gov.au>.

#### Site publication
The website is a [Jekyll](https://jekyllrb.com/) website, that is, it is a collection of static HTML files that are wrapped with a template in a pre-publication step. The resultant HTML pages are served up by [GitHub Pages](https://pages.github.com/) directly from this repository. The web address of the website, <http://www.linked.data.gov.au>, is pointed at the GitHub Pages-delivered version of this webisite; no other web server is used.

##### Jekyll Commands
##### Launch new site (one-time)
```
jekyll new . --force
```

##### Serve locally
```
bundle exec jekyll serve
```

##### Update Jekyll

_make sure rbenv is installed..._
```
rbenv install 3.4.1
rbenv global 3.4.1
gem install jekyll
gem update --system 3.6.3
bundle install
bundle add webrick
``` 

## License
The contents of this repository are licensed for use under Creative Commons 4.0 International. See the [LICENSE deed](https://github.com/AGLDWG/website/blob/HEAD/LICENSE) in this repository for details.

##…
