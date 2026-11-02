---
repo: "Integration-Automation/WebRunner"
name: "WebRunner"
description: "A framework for Web automation"
readmeQualityOk: true
url: "https://github.com/Integration-Automation/WebRunner"
homepage: "https://integration-automation.github.io/WebRunner/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["automation", "python", "selenium", "selenium-webdriver", "testing", "web-testing", "selenium-python", "selenium4", "keyword-driven-testing", "report-generator"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2021-12-23T06:26:42Z"
lastCommitAt: "2026-11-02T11:37:14Z"
lastReleaseAt: "2026-04-27T07:35:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 84
maintainers: ["JE-Chen", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f292a7ed5f15325cb7d3ceba5d4a5d0e5eaddebc0ecf92d348229d9b4ec299fb/Integration-Automation/WebRunner"
---

# WebRunner

An existing `ManagedBrowserSession` can permanently retire input and network access with
`freeze_readonly() -> ManagedReadOnlySession` (`readonly_contract_version = 1`). The view retains
the original page, policy and opaque context identity; it launches or restores nothing. It supports
fresh DOM observations, bounded text/value/link reads, visibility, read timeout and explicit close.
The old owner also refuses actions, uploads, downloads and timeout mutation. Active operations and
foreign threads cannot freeze; failed retirement issues no reader and remains unconfirmed.
Closing either handle invalidates the view. Navigation, context replacement and unexpected UI
invalidate its evidence authority; cached capabilities and context IDs do not grant access.
Reads concern the retained live DOM after network retirement, not a new server response.
See `examples/managed_readonly_review.py`. AutoControl's retained-helper completion/skill provider
is still pending under progress.md #22; this SDK support does not complete that integration or
native/browser/device/24-hour acceptance. Existing readback/transfer contracts remain version 1.

AutoControlGUI 2fff8c88 adds host-reviewed…
