---
repo: "Bd-Mutant7/SSRF_Vulnerable_Lab"
name: "SSRF_Vulnerable_Lab"
description: "This Lab contain the sample codes which are vulnerable to Server-Side Request Forgery attack"
readmeQualityOk: true
url: "https://github.com/Bd-Mutant7/SSRF_Vulnerable_Lab"
homepage: "https://www.mannulinux.org"
language: "PHP"
languages: ["PHP"]
languagePcts: [81]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-03-13T15:53:06Z"
lastCommitAt: "2026-08-15T04:04:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 49
maintainers: ["Bd-Mutant7"]
openGraphImageUrl: "https://opengraph.githubassets.com/43c9ad7485a66a7e2e76e14d2554deef650d87dfbd257fa08d0069ab381b78a7/Bd-Mutant7/SSRF_Vulnerable_Lab"
---

# Server-Side Request Forgery (SSRF) vulnerable Lab
This repository contain PHP codes which are vulnerable to Server-Side Request Forgery (SSRF) attack.

I would like to say Thank You to @albinowax, AKReddy, Vivek Sir (For being great personalities who always supported me), Andrew Sir - @vanderaj (for his encouraging words) and those researchers who contirubuted in DNS rebinding attack based research 

Vulnerable codes are meant to demonstrate SSRF for below mentioned 5 scenarios:

<b> 1. Application code that fetches and display the content of the specified file</b>

In programming languages, there are functions which can fetch the contents of locally saved file. These functions may be capable of fetching the content from remote URLs as well local files (e.g file_get_contents in PHP).

This functionality can be abused if application is not prepending any string to the user supplied data to fetch the content from a file i.e application is not prepeding and directory name or path to the user supplied data. 

In this case, these data fetching function can process the schemes like "http://" or "file://". When user specifies the remote URL in place of file name like…
