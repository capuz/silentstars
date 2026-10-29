---
repo: "jenkinsci/forensics-api-plugin"
name: "forensics-api-plugin"
description: "Jenkins plug-in that defines an API to mine and analyze data from a  source control repository"
readmeQualityOk: true
url: "https://github.com/jenkinsci/forensics-api-plugin"
homepage: "https://plugins.jenkins.io/forensics-api/"
language: "Java"
languages: ["Java"]
languagePcts: [98]
topics: ["api-plugin", "forensics", "code-forensics", "jenkins", "hacktoberfest"]
stars: 18
forks: 31
openIssues: 8
closedIssues: 35
watchers: 1
contributors: 731
recentReleases: 0
createdAt: "2019-06-12T22:10:38Z"
lastCommitAt: "2026-10-29T14:06:00Z"
lastReleaseAt: "2021-01-12T12:48:17Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 80
maintainers: ["uhafner", "renovate[bot]", "akash-manna-sky"]
openGraphImageUrl: "https://opengraph.githubassets.com/807db7e201833d04fafe676af14c7e708fb7dc956112f2b0a4485d6415494dfd/jenkinsci/forensics-api-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Jenkins Forensics API Plugin

This Forensics API Jenkins plug-in defines an API to mine and analyze data from a source control repository. 
 
This API plugin provides the following services:
- **Blames**: Shows what revision and author last modified a specified set of lines of a file. This information can be 
used to track the original commit that introduced a piece of code. 
- **File statistics**: Incrementally collects global commit statistics for all repository files in the style of Code as a Crime Scene \[Adam Tornhill, November 2013\]. 
This includes:
  - commits count
  - different authors count
  - creation time
  - last modification time
  - lines of code (from the commit details)
  - code churn (changed lines since created)
- **Commit tracking**: Tracks all new commits that are part of a build. Using this information plugins can search for 
 builds that contain a specific commit. 
- **Commit statistics**: Collects commit statistics for all new commits in a build or in a series of builds (e.g. for 
all commits of a pull request). This includes: 
  - commits count
  - changed files count
  - added and deleted lines 
- **Reference build**: Several plugins that report build…
