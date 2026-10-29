---
repo: "jenkinsci/git-forensics-plugin"
name: "git-forensics-plugin"
description: "Jenkins plug-in that mines and analyzes data from a Git repository"
readmeQualityOk: true
url: "https://github.com/jenkinsci/git-forensics-plugin"
homepage: "https://plugins.jenkins.io/git-forensics/"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["git", "forensics", "jenkins", "code-forensics", "hacktoberfest"]
stars: 43
forks: 32
openIssues: 10
closedIssues: 25
watchers: 2
contributors: 726
recentReleases: 0
createdAt: "2019-05-15T22:25:52Z"
lastCommitAt: "2026-10-29T14:07:09Z"
lastReleaseAt: "2021-01-31T16:34:42Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 63
maintainers: ["uhafner", "renovate[bot]", "DrFaust92"]
openGraphImageUrl: "https://opengraph.githubassets.com/8f75d5f6842475888bf9eb9dcbff6c8874451ec994ac6b3b072f1031055a08c9/jenkinsci/git-forensics-plugin"
fundingLinks: ["CUSTOM:https://crowdfunding.linuxfoundation.org/initiatives/jenkins", "CUSTOM:https://www.jenkins.io/donate/#why-donate"]
---

# Git Forensics Jenkins Plugin

This Git Forensics Jenkins plugin mines and analyzes data from a Git repository. It implements all extension points of
[Jenkins' Forensics API Plugin](https://github.com/jenkinsci/forensics-api-plugin) and provides the following services:

- **Blames**: Provides an API for `git blame` to show in which Git revisions the lines of a file 
  have been modified by what authors. This information can be used to discover the original commit 
  that is the origin for a piece of problematic code. 
- **File statistics**: Incrementally collects global commit statistics for all repository files in the style of Code as a Crime Scene
  \[Adam Tornhill, November 2013\]. This includes:
  - commits count
  - different authors count
  - creation time
  - last modification time
  - lines of code (from the commit details)
  - code churn (changed lines since created)
- **Commit tracking**: Tracks all new commits that are part of a build. 
- **Commit statistics**: Collects commit statistics for all new commits in a build or in a series of builds (e.g. for
  all commits of a pull request). This includes:
  - commits count
  - changed files count
  - added and deleted lines…
